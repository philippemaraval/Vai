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
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: true,
      broadcasts_om: false,
      has_wifi: false,
      late_opening: false,
      good_for_groups: true
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
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: false,
      broadcasts_om: true,
      has_wifi: true,
      late_opening: true,
      good_for_groups: true
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
    criteria: {
      has_terrace: true,
      allows_cb_no_minimum: true,
      broadcasts_om: true,
      has_wifi: false,
      late_opening: true,
      good_for_groups: false
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
