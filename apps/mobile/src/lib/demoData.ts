import { emptyCriteria, type CriteriaKey } from './criteria';
import type { Neighborhood, Place } from './types';

type PlaceSeed = Omit<Place, 'criteria'> & {
  criteria: CriteriaKey[];
};

function criteria(keys: CriteriaKey[]): Place['criteria'] {
  return keys.reduce<Place['criteria']>(
    (selected, key) => ({
      ...selected,
      [key]: true
    }),
    { ...emptyCriteria }
  );
}

function makePlace(seed: PlaceSeed): Place {
  return {
    ...seed,
    criteria: criteria(seed.criteria)
  };
}

export const demoPlaces: Place[] = [
  makePlace({
    id: '1',
    name: 'La Mercerie',
    instagram_handle: 'lamerceriemarseille',
    instagram_followers: '34k abonnes',
    latitude: 43.29459,
    longitude: 5.37531,
    neighborhood: 'Noailles',
    address: '9 cours Saint-Louis, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations']
  }),
  makePlace({
    id: '2',
    name: 'Le Parpaing Qui Flotte',
    instagram_handle: 'leparpaingquiflotte',
    instagram_followers: '12k abonnes',
    latitude: 43.29503,
    longitude: 5.38347,
    neighborhood: 'Cours Julien',
    address: '12 rue Pastoret, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'broadcasts_om', 'has_wifi', 'late_opening', 'good_for_groups', 'covered_outdoor', 'live_music_or_dj', 'dog_friendly']
  }),
  makePlace({
    id: '3',
    name: 'Cafe de l Abbaye',
    instagram_handle: 'cafedelabbaye',
    instagram_followers: '18k abonnes',
    latitude: 43.29059,
    longitude: 5.36326,
    neighborhood: 'Saint-Victor',
    address: '3 rue d Endoume, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'broadcasts_om', 'late_opening', 'sea_view', 'dog_friendly']
  }),
  makePlace({
    id: '4',
    name: 'La Base Marseille',
    instagram_handle: 'labasemarseille',
    instagram_followers: '9k abonnes',
    latitude: 43.30032,
    longitude: 5.37471,
    neighborhood: 'Belle de Mai',
    address: '3 rue Pierre Roche, Marseille',
    category: 'Tiers-lieu',
    criteria: ['allows_cb_no_minimum', 'has_wifi', 'good_for_groups', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations', 'kid_friendly']
  }),
  makePlace({
    id: '5',
    name: 'Les Bords de Mer',
    instagram_handle: 'lesbordsdemer',
    instagram_followers: '41k abonnes',
    latitude: 43.28563,
    longitude: 5.35265,
    neighborhood: 'Catalans',
    address: '52 corniche Kennedy, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'late_opening', 'quiet_spot', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations', 'covered_outdoor', 'sea_view']
  }),
  makePlace({
    id: '6',
    name: 'Livingston',
    instagram_handle: 'livingstonmarseille',
    instagram_followers: '22k abonnes',
    latitude: 43.29376,
    longitude: 5.37472,
    neighborhood: 'Noailles',
    address: '14 rue Crudere, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '7',
    name: 'Regain',
    instagram_handle: 'regainmarseille',
    instagram_followers: '19k abonnes',
    latitude: 43.29434,
    longitude: 5.37077,
    neighborhood: 'Opera',
    address: '24 rue Saint-Saens, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations']
  }),
  makePlace({
    id: '8',
    name: 'Sepia',
    instagram_handle: 'sepia.marseille',
    instagram_followers: '28k abonnes',
    latitude: 43.28899,
    longitude: 5.3649,
    neighborhood: 'Puget',
    address: '2 rue Vauvenargues, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'takes_reservations', 'sea_view']
  }),
  makePlace({
    id: '9',
    name: 'La Relève',
    instagram_handle: 'larelevemarseille',
    instagram_followers: '16k abonnes',
    latitude: 43.29258,
    longitude: 5.36195,
    neighborhood: 'Saint-Victor',
    address: '41 rue d Endoume, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations', 'dog_friendly']
  }),
  makePlace({
    id: '10',
    name: 'Tuba Club',
    instagram_handle: 'tubaclub',
    instagram_followers: '89k abonnes',
    latitude: 43.21172,
    longitude: 5.34958,
    neighborhood: 'Les Goudes',
    address: '2 boulevard Alexandre Delabre, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'quiet_spot', 'vegetarian_options', 'takes_reservations', 'covered_outdoor', 'sea_view']
  }),
  makePlace({
    id: '11',
    name: 'Friche la Belle de Mai',
    instagram_handle: 'lafrichelabelledemai',
    instagram_followers: '78k abonnes',
    latitude: 43.31047,
    longitude: 5.39118,
    neighborhood: 'Belle de Mai',
    address: '41 rue Jobin, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'has_wifi', 'good_for_groups', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly', 'live_music_or_dj']
  }),
  makePlace({
    id: '12',
    name: 'Coco Velten',
    instagram_handle: 'cocovelten',
    instagram_followers: '31k abonnes',
    latitude: 43.30018,
    longitude: 5.37666,
    neighborhood: 'Belsunce',
    address: '16 rue Bernard du Bois, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'good_for_groups', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly']
  }),
  makePlace({
    id: '13',
    name: 'Les Grandes Tables',
    instagram_handle: 'lesgrandestables',
    instagram_followers: '25k abonnes',
    latitude: 43.31004,
    longitude: 5.39173,
    neighborhood: 'Belle de Mai',
    address: '41 rue Jobin, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly', 'covered_outdoor']
  }),
  makePlace({
    id: '14',
    name: 'Longchamp Palace',
    instagram_handle: 'longchamppalace',
    instagram_followers: '21k abonnes',
    latitude: 43.30273,
    longitude: 5.39262,
    neighborhood: 'Longchamp',
    address: '22 boulevard Longchamp, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'broadcasts_om', 'late_opening', 'good_for_groups', 'live_music_or_dj', 'dog_friendly']
  }),
  makePlace({
    id: '15',
    name: 'La Caravelle',
    instagram_handle: 'lacaravellemarseille',
    instagram_followers: '24k abonnes',
    latitude: 43.29615,
    longitude: 5.3743,
    neighborhood: 'Vieux-Port',
    address: '34 quai du Port, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'broadcasts_om', 'late_opening', 'good_for_groups', 'live_music_or_dj', 'sea_view']
  }),
  makePlace({
    id: '16',
    name: 'Carry Nation',
    instagram_handle: 'carrynationmarseille',
    instagram_followers: '36k abonnes',
    latitude: 43.29291,
    longitude: 5.37797,
    neighborhood: 'Cours Julien',
    address: 'Cours Julien, Marseille',
    category: 'Bar',
    criteria: ['allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'quiet_spot', 'takes_reservations', 'live_music_or_dj']
  }),
  makePlace({
    id: '17',
    name: 'Gaspard',
    instagram_handle: 'gaspardmarseille',
    instagram_followers: '14k abonnes',
    latitude: 43.29402,
    longitude: 5.37783,
    neighborhood: 'Cours Julien',
    address: '5 rue Pastoret, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'covered_outdoor', 'dog_friendly']
  }),
  makePlace({
    id: '18',
    name: 'La Cantinetta',
    instagram_handle: 'lacantinetta_marseille',
    instagram_followers: '17k abonnes',
    latitude: 43.2935,
    longitude: 5.38102,
    neighborhood: 'Cours Julien',
    address: '24 cours Julien, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '19',
    name: 'La Fiancée',
    instagram_handle: 'lafiancee_marseille',
    instagram_followers: '13k abonnes',
    latitude: 43.29686,
    longitude: 5.3764,
    neighborhood: 'Opera',
    address: '8 rue Haxo, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'quiet_spot', 'laptop_friendly', 'vegetarian_options']
  }),
  makePlace({
    id: '20',
    name: 'Deep Coffee Roasters',
    instagram_handle: 'deepcoffeeroasters',
    instagram_followers: '27k abonnes',
    latitude: 43.29485,
    longitude: 5.37865,
    neighborhood: 'Cours Julien',
    address: '15 rue Glandeves, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'dog_friendly']
  }),
  makePlace({
    id: '21',
    name: 'Carlotta With',
    instagram_handle: 'carlottawith',
    instagram_followers: '20k abonnes',
    latitude: 43.29217,
    longitude: 5.36554,
    neighborhood: 'Saint-Victor',
    address: '84 boulevard Vauban, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'good_for_groups', 'vegetarian_options', 'kid_friendly']
  }),
  makePlace({
    id: '22',
    name: 'La Boite a Sardine',
    instagram_handle: 'laboiteasardine',
    instagram_followers: '15k abonnes',
    latitude: 43.3006,
    longitude: 5.38352,
    neighborhood: 'Longchamp',
    address: '2 boulevard de la Liberation, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'takes_reservations', 'dog_friendly']
  }),
  makePlace({
    id: '23',
    name: 'Ourea',
    instagram_handle: 'ourea_marseille',
    instagram_followers: '12k abonnes',
    latitude: 43.29175,
    longitude: 5.37004,
    neighborhood: 'Prefecture',
    address: '72 rue de la Paix Marcel Paul, Marseille',
    category: 'Restaurant',
    criteria: ['allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations']
  }),
  makePlace({
    id: '24',
    name: 'Maison Vauban',
    instagram_handle: 'maisonvauban',
    instagram_followers: '11k abonnes',
    latitude: 43.28829,
    longitude: 5.36672,
    neighborhood: 'Vauban',
    address: '150 boulevard Notre-Dame, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations', 'dog_friendly']
  }),
  makePlace({
    id: '25',
    name: 'Zoumai',
    instagram_handle: 'zoumaimarseille',
    instagram_followers: '18k abonnes',
    latitude: 43.28769,
    longitude: 5.38007,
    neighborhood: 'Castellane',
    address: '7 cours Gouffe, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'late_opening', 'good_for_groups', 'vegetarian_options', 'live_music_or_dj']
  }),
  makePlace({
    id: '26',
    name: 'Limmat',
    instagram_handle: 'limmatmarseille',
    instagram_followers: '10k abonnes',
    latitude: 43.28938,
    longitude: 5.38226,
    neighborhood: 'Castellane',
    address: '41 rue Saint-Sebastien, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '27',
    name: 'Otto',
    instagram_handle: 'ottomarseille',
    instagram_followers: '16k abonnes',
    latitude: 43.29315,
    longitude: 5.38054,
    neighborhood: 'Notre-Dame du Mont',
    address: '150 cours Julien, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '28',
    name: 'Le Bar de la Plaine',
    instagram_handle: 'bardelaplaine',
    instagram_followers: '8k abonnes',
    latitude: 43.29662,
    longitude: 5.3857,
    neighborhood: 'La Plaine',
    address: '57 place Jean Jaures, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'broadcasts_om', 'late_opening', 'good_for_groups', 'covered_outdoor', 'dog_friendly']
  }),
  makePlace({
    id: '29',
    name: 'L Unic',
    instagram_handle: 'lunicmarseille',
    instagram_followers: '7k abonnes',
    latitude: 43.29705,
    longitude: 5.38417,
    neighborhood: 'La Plaine',
    address: '11 rue Vian, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'broadcasts_om', 'late_opening', 'good_for_groups', 'dog_friendly']
  }),
  makePlace({
    id: '30',
    name: 'La Dame Noir',
    instagram_handle: 'ladamenoir',
    instagram_followers: '29k abonnes',
    latitude: 43.29566,
    longitude: 5.36942,
    neighborhood: 'Vieux-Port',
    address: '30 place Notre-Dame du Mont, Marseille',
    category: 'Bar',
    criteria: ['allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'live_music_or_dj']
  }),
  makePlace({
    id: '31',
    name: 'Le Couvent',
    instagram_handle: 'lecouventmarseille',
    instagram_followers: '23k abonnes',
    latitude: 43.2848,
    longitude: 5.35428,
    neighborhood: 'Endoume',
    address: '52 rue Levat, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'has_wifi', 'good_for_groups', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly']
  }),
  makePlace({
    id: '32',
    name: 'La Bonne Mere',
    instagram_handle: 'labonnemeremarseille',
    instagram_followers: '17k abonnes',
    latitude: 43.28431,
    longitude: 5.37121,
    neighborhood: 'Vauban',
    address: '16 rue Fort du Sanctuaire, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'kid_friendly', 'sea_view']
  }),
  makePlace({
    id: '33',
    name: 'Chez Etienne',
    instagram_handle: 'chezetiennemarseille',
    instagram_followers: '12k abonnes',
    latitude: 43.29953,
    longitude: 5.36904,
    neighborhood: 'Le Panier',
    address: '43 rue Lorette, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'takes_reservations']
  }),
  makePlace({
    id: '34',
    name: 'Bar des 13 Coins',
    instagram_handle: 'bar13coins',
    instagram_followers: '9k abonnes',
    latitude: 43.29902,
    longitude: 5.36836,
    neighborhood: 'Le Panier',
    address: '45 rue Sainte-Francoise, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'broadcasts_om', 'late_opening', 'good_for_groups', 'dog_friendly']
  }),
  makePlace({
    id: '35',
    name: 'Maison Geney',
    instagram_handle: 'maisongeney',
    instagram_followers: '15k abonnes',
    latitude: 43.29741,
    longitude: 5.3665,
    neighborhood: 'Le Panier',
    address: '38 rue Caisserie, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'quiet_spot', 'vegetarian_options', 'kid_friendly']
  }),
  makePlace({
    id: '36',
    name: 'Bistrot Plage',
    instagram_handle: 'bistrotplagemarseille',
    instagram_followers: '13k abonnes',
    latitude: 43.26372,
    longitude: 5.37105,
    neighborhood: 'Pointe Rouge',
    address: 'avenue de Montredon, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'covered_outdoor', 'sea_view', 'dog_friendly']
  }),
  makePlace({
    id: '37',
    name: 'Le Petit Nice',
    instagram_handle: 'lepetitnice',
    instagram_followers: '52k abonnes',
    latitude: 43.28049,
    longitude: 5.3505,
    neighborhood: 'Malmousque',
    address: '17 rue des Braves, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations', 'sea_view']
  }),
  makePlace({
    id: '38',
    name: 'L Eau a la Bouche',
    instagram_handle: 'leaualabouche',
    instagram_followers: '10k abonnes',
    latitude: 43.28003,
    longitude: 5.35125,
    neighborhood: 'Malmousque',
    address: '120 corniche Kennedy, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'sea_view', 'dog_friendly']
  }),
  makePlace({
    id: '39',
    name: 'La Cabane des Amis',
    instagram_handle: 'lacabanedesamis',
    instagram_followers: '19k abonnes',
    latitude: 43.24586,
    longitude: 5.36029,
    neighborhood: 'Montredon',
    address: 'Calanque de Samena, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'covered_outdoor', 'sea_view', 'dog_friendly']
  }),
  makePlace({
    id: '40',
    name: 'Le Mole Passedat',
    instagram_handle: 'lemolepassedat',
    instagram_followers: '20k abonnes',
    latitude: 43.29705,
    longitude: 5.36118,
    neighborhood: 'Joliette',
    address: '1 esplanade J4, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'quiet_spot', 'vegetarian_options', 'wheelchair_accessible', 'takes_reservations', 'sea_view']
  }),
  makePlace({
    id: '41',
    name: 'White Rabbit',
    instagram_handle: 'whiterabbitmarseille',
    instagram_followers: '18k abonnes',
    latitude: 43.29614,
    longitude: 5.36251,
    neighborhood: 'Joliette',
    address: '23 quai de la Joliette, Marseille',
    category: 'Bar',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'broadcasts_om', 'late_opening', 'good_for_groups', 'live_music_or_dj']
  }),
  makePlace({
    id: '42',
    name: 'La Meulerie',
    instagram_handle: 'lameulerie',
    instagram_followers: '14k abonnes',
    latitude: 43.30143,
    longitude: 5.36891,
    neighborhood: 'Joliette',
    address: '9 rue Mazenod, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'late_opening', 'good_for_groups', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '43',
    name: 'La Fabulerie',
    instagram_handle: 'lafabulerie',
    instagram_followers: '11k abonnes',
    latitude: 43.29345,
    longitude: 5.37274,
    neighborhood: 'Prefecture',
    address: '10 boulevard Garibaldi, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_wifi', 'good_for_groups', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly']
  }),
  makePlace({
    id: '44',
    name: 'Le Talus',
    instagram_handle: 'letalusmarseille',
    instagram_followers: '28k abonnes',
    latitude: 43.31498,
    longitude: 5.42162,
    neighborhood: 'Saint-Jean-du-Desert',
    address: '603 rue Saint-Pierre, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'has_wifi', 'good_for_groups', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly', 'dog_friendly']
  }),
  makePlace({
    id: '45',
    name: 'La Baleine',
    instagram_handle: 'labaleinemarseille',
    instagram_followers: '26k abonnes',
    latitude: 43.29578,
    longitude: 5.3879,
    neighborhood: 'La Plaine',
    address: '59 cours Julien, Marseille',
    category: 'Tiers-lieu',
    criteria: ['has_terrace', 'has_wifi', 'good_for_groups', 'laptop_friendly', 'vegetarian_options', 'wheelchair_accessible', 'kid_friendly', 'live_music_or_dj']
  }),
  makePlace({
    id: '46',
    name: 'Cafe l Ecomotive',
    instagram_handle: 'ecomotive_marseille',
    instagram_followers: '8k abonnes',
    latitude: 43.30386,
    longitude: 5.38204,
    neighborhood: 'Saint-Charles',
    address: '2 place des Marseillaises, Marseille',
    category: 'Cafe',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'has_wifi', 'quiet_spot', 'laptop_friendly', 'vegetarian_options', 'dog_friendly']
  }),
  makePlace({
    id: '47',
    name: 'Epicerie l Ideal',
    instagram_handle: 'epicerielideal',
    instagram_followers: '23k abonnes',
    latitude: 43.29521,
    longitude: 5.37508,
    neighborhood: 'Noailles',
    address: '11 rue d Aubagne, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'vegetarian_options', 'takes_reservations']
  }),
  makePlace({
    id: '48',
    name: 'La Cantine de Nour',
    instagram_handle: 'lacantinedenour',
    instagram_followers: '6k abonnes',
    latitude: 43.29571,
    longitude: 5.37697,
    neighborhood: 'Noailles',
    address: 'rue d Aubagne, Marseille',
    category: 'Restaurant',
    criteria: ['has_terrace', 'allows_cb_no_minimum', 'good_for_groups', 'vegetarian_options', 'dog_friendly']
  })
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
  },
  {
    id: 'panier',
    name: 'Le Panier',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3653, 43.3015],
          [5.3732, 43.3011],
          [5.372, 43.2968],
          [5.3646, 43.2975],
          [5.3653, 43.3015]
        ]
      ]
    }
  },
  {
    id: 'vieux-port',
    name: 'Vieux-Port',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3654, 43.2978],
          [5.3772, 43.2974],
          [5.3764, 43.2918],
          [5.3648, 43.2925],
          [5.3654, 43.2978]
        ]
      ]
    }
  },
  {
    id: 'belle-de-mai',
    name: 'Belle de Mai',
    polygon: {
      type: 'Polygon',
      coordinates: [
        [
          [5.3823, 43.3151],
          [5.3973, 43.3142],
          [5.397, 43.3058],
          [5.383, 43.3051],
          [5.3823, 43.3151]
        ]
      ]
    }
  }
];
