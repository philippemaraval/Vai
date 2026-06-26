import L from 'leaflet';
import 'leaflet.markercluster';
import { useEffect, useRef } from 'react';
import type { Neighborhood, Place } from '../lib/types';

const marseilleCenter: L.LatLngTuple = [43.2965, 5.3698];

const placeIcon = L.divIcon({
  className: 'vai-marker',
  html: '<span></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14]
});

type VaiMapProps = {
  places: Place[];
  neighborhoods: Neighborhood[];
  selectedNeighborhoodId?: string;
  onSelectPlace: (place: Place) => void;
  onSelectNeighborhood: (id: string) => void;
};

export function VaiMap({
  places,
  neighborhoods,
  selectedNeighborhoodId,
  onSelectPlace,
  onSelectNeighborhood
}: VaiMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const clusterRef = useRef<L.MarkerClusterGroup | null>(null);
  const neighborhoodLayerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
      attributionControl: false
    }).setView(marseilleCenter, 14);

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.control.attribution({ position: 'bottomleft' }).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true, timeout: 7000 });
    map.on('locationfound', (event) => {
      L.circleMarker(event.latlng, {
        radius: 8,
        color: '#104F75',
        fillColor: '#D4A373',
        fillOpacity: 0.95,
        weight: 3
      }).addTo(map);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (clusterRef.current) {
      clusterRef.current.clearLayers();
      map.removeLayer(clusterRef.current);
    }

    const clusters = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 46,
      iconCreateFunction: (cluster) =>
        L.divIcon({
          html: `<span>${cluster.getChildCount()}</span>`,
          className: 'vai-cluster',
          iconSize: [42, 42]
        })
    });

    places.forEach((place) => {
      const marker = L.marker([place.latitude, place.longitude], { icon: placeIcon });
      marker.bindTooltip(place.name, { direction: 'top', offset: [0, -10] });
      marker.on('click', () => onSelectPlace(place));
      clusters.addLayer(marker);
    });

    clusters.addTo(map);
    clusterRef.current = clusters;
  }, [places, onSelectPlace]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (neighborhoodLayerRef.current) {
      map.removeLayer(neighborhoodLayerRef.current);
      neighborhoodLayerRef.current = null;
    }

    if (!selectedNeighborhoodId) {
      return;
    }

    const layer = L.geoJSON(
      neighborhoods
        .filter((neighborhood) => neighborhood.id === selectedNeighborhoodId)
        .map((neighborhood) => ({
          type: 'Feature',
          properties: { id: neighborhood.id, name: neighborhood.name },
          geometry: neighborhood.polygon
        })) as GeoJSON.Feature[],
      {
        style: {
          color: '#E2725B',
          fillColor: '#E2725B',
          fillOpacity: 0.22,
          weight: 4
        },
        onEachFeature: (feature, layerItem) => {
          layerItem.on('click', () => onSelectNeighborhood(feature.properties.id));
        }
      }
    ).addTo(map);

    const selectedLayer = layer.getLayers().find((item) => {
      const candidate = item as L.Layer & { feature?: GeoJSON.Feature };
      return candidate.feature?.properties?.id === selectedNeighborhoodId;
    });
    if (selectedLayer) {
      map.fitBounds((selectedLayer as L.Polygon).getBounds(), { padding: [24, 180] });
    }

    neighborhoodLayerRef.current = layer;
  }, [neighborhoods, onSelectNeighborhood, selectedNeighborhoodId]);

  return <div ref={containerRef} className="map-canvas" aria-label="Carte des lieux Vaï" />;
}
