import type { Neighborhood, Place } from './types';

export const demoPlaces: Place[] = [
  {
    id: '1',
    name: 'La Mercerie',
    instagram_handle: 'lamerceriemarseille',
    instagram_followers: '34k abonnés',
    latitude: 43.29459,
    longitude: 5.37531,
    neighborhood: 'Noailles',
    address: '9 cours Saint-Louis, Marseille',
    category: 'Restaurant',
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: true,
      broadcasts_om: false,
      has_wifi: false,
      late_opening: false,
      good_for_groups: true,
      quiet_spot: false,
      laptop_friendly: false,
      vegetarian_options: true,
      wheelchair_accessible: true,
      takes_reservations: true,
      kid_friendly: false,
      covered_outdoor: false,
      live_music_or_dj: false,
      sea_view: false,
      dog_friendly: false
    }
  },
  {
    id: '2',
    name: 'Le Parpaing Qui Flotte',
    instagram_handle: 'leparpaingquiflotte',
    instagram_followers: '12k abonnés',
    latitude: 43.29503,
    longitude: 5.38347,
    neighborhood: 'Cours Julien',
    address: '12 rue Pastoret, Marseille',
    category: 'Bar',
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: false,
      broadcasts_om: true,
      has_wifi: true,
      late_opening: true,
      good_for_groups: true,
      quiet_spot: false,
      laptop_friendly: false,
      vegetarian_options: true,
      wheelchair_accessible: false,
      takes_reservations: false,
      kid_friendly: false,
      covered_outdoor: true,
      live_music_or_dj: true,
      sea_view: false,
      dog_friendly: true
    }
  },
  {
    id: '3',
    name: 'Café de l Abbaye',
    instagram_handle: 'cafedelabbaye',
    instagram_followers: '18k abonnés',
    latitude: 43.29059,
    longitude: 5.36326,
    neighborhood: 'Saint-Victor',
    address: '3 rue d Endoume, Marseille',
    category: 'Cafe',
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: true,
      broadcasts_om: true,
      has_wifi: false,
      late_opening: true,
      good_for_groups: false,
      quiet_spot: false,
      laptop_friendly: false,
      vegetarian_options: false,
      wheelchair_accessible: false,
      takes_reservations: false,
      kid_friendly: false,
      covered_outdoor: false,
      live_music_or_dj: false,
      sea_view: true,
      dog_friendly: true
    }
  },
  {
    id: '4',
    name: 'La Base Marseille',
    instagram_handle: 'labasemarseille',
    instagram_followers: '9k abonnes',
    latitude: 43.30032,
    longitude: 5.37471,
    neighborhood: 'Belle de Mai',
    address: '3 rue Pierre Roche, Marseille',
    category: 'Tiers-lieu',
    criteria: {
      has_terrace: false,
      allows_cb_no_minimum: true,
      broadcasts_om: false,
      has_wifi: true,
      late_opening: false,
      good_for_groups: true,
      quiet_spot: true,
      laptop_friendly: true,
      vegetarian_options: true,
      wheelchair_accessible: true,
      takes_reservations: true,
      kid_friendly: true,
      covered_outdoor: false,
      live_music_or_dj: true,
      sea_view: false,
      dog_friendly: false
    }
  },
  {
    id: '5',
    name: 'Les Bords de Mer',
    instagram_handle: 'lesbordsdemer',
    instagram_followers: '41k abonnes',
    latitude: 43.28563,
    longitude: 5.35265,
    neighborhood: 'Catalans',
    address: '52 corniche Kennedy, Marseille',
    category: 'Restaurant',
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: true,
      broadcasts_om: false,
      has_wifi: true,
      late_opening: true,
      good_for_groups: false,
      quiet_spot: true,
      laptop_friendly: false,
      vegetarian_options: true,
      wheelchair_accessible: true,
      takes_reservations: true,
      kid_friendly: false,
      covered_outdoor: true,
      live_music_or_dj: false,
      sea_view: true,
      dog_friendly: false
    }
  }
];

export const demoNeighborhoods: Neighborhood[] = [
  {
    id: 'cours-julien',
    name: 'Cours Julien',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3789, 43.2968],
          [5.3885, 43.2962],
          [5.388, 43.2917],
          [5.3792, 43.2913],
          [5.3789, 43.2968]
        ]
      ]
    }
  },
  {
    id: 'noailles',
    name: 'Noailles',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3719, 43.2975],
          [5.3791, 43.2972],
          [5.3784, 43.2924],
          [5.3715, 43.2927],
          [5.3719, 43.2975]
        ]
      ]
    }
  }
];
