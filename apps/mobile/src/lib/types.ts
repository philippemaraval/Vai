export type PlaceCriteria = {
  has_terrace: boolean;
  allows_cb_no_minimum: boolean;
  broadcasts_om: boolean;
  has_wifi: boolean;
  late_opening: boolean;
  good_for_groups: boolean;
  quiet_spot: boolean;
  laptop_friendly: boolean;
  vegetarian_options: boolean;
  wheelchair_accessible: boolean;
  takes_reservations: boolean;
  kid_friendly: boolean;
  covered_outdoor: boolean;
  live_music_or_dj: boolean;
  sea_view: boolean;
  dog_friendly: boolean;
};

export type Place = {
  id: string;
  name: string;
  instagram_handle?: string;
  instagram_followers?: string;
  latitude: number;
  longitude: number;
  neighborhood?: string;
  address?: string;
  category: 'Restaurant' | 'Bar' | 'Tiers-lieu' | 'Cafe';
  criteria: PlaceCriteria;
};

export type Neighborhood = {
  id: string;
  name: string;
  polygon: GeoJSON.Polygon;
};
