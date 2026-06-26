export type PlaceCriteria = {
  has_terrace: boolean;
  allows_cb_no_minimum: boolean;
  broadcasts_om: boolean;
  has_wifi: boolean;
  late_opening: boolean;
  good_for_groups: boolean;
};

export type Place = {
  id: string;
  name: string;
  instagram_handle: string;
  instagram_followers: string;
  latitude: number;
  longitude: number;
  neighborhood?: string;
  criteria: PlaceCriteria;
};

export type Neighborhood = {
  id: string;
  name: string;
  polygon: GeoJSON.Polygon;
};
