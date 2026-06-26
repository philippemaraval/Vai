import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, '../src/lib/demoData.ts');
const overpassEndpoints = (process.env.OVERPASS_URLS ?? 'https://overpass-api.de/api/interpreter,https://overpass.kumi.systems/api/interpreter,https://overpass.openstreetmap.ru/api/interpreter')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);
const limit = Number(process.env.OSM_PLACE_LIMIT ?? 5000);

const criteriaKeys = [
  'has_terrace',
  'covered_outdoor',
  'broadcasts_om',
  'allows_cb_no_minimum',
  'has_wifi',
  'late_opening',
  'good_for_groups',
  'quiet_spot',
  'laptop_friendly',
  'vegetarian_options',
  'wheelchair_accessible',
  'takes_reservations',
  'kid_friendly',
  'live_music_or_dj',
  'sea_view',
  'dog_friendly'
];

const queries = [
  `node(area.searchArea)["amenity"="restaurant"]["name"];way(area.searchArea)["amenity"="restaurant"]["name"];`,
  `node(area.searchArea)["amenity"~"^(bar|pub|biergarten)$"]["name"];way(area.searchArea)["amenity"~"^(bar|pub|biergarten)$"]["name"];`
];

function ascii(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, '-')
    .replace(/[^\x20-\x7E]/g, '')
    .trim();
}

function quote(value) {
  return JSON.stringify(ascii(value));
}

function category(tags) {
  if (['bar', 'pub', 'biergarten'].includes(tags.amenity)) return 'Bar';
  return 'Restaurant';
}

function instagram(tags) {
  const raw = tags['contact:instagram'] ?? tags.instagram ?? tags['social_media:instagram'];
  if (!raw) return undefined;
  return ascii(raw)
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
    .replace(/^instagram\.com\//i, '')
    .replace(/^@/, '')
    .replace(/\/$/, '')
    .split(/[/?#]/)[0];
}

function address(tags) {
  const street = tags['addr:street'];
  const houseNumber = tags['addr:housenumber'];
  if (street && houseNumber) return `${houseNumber} ${street}, Marseille`;
  if (street) return `${street}, Marseille`;
  return 'Marseille';
}

function coordinates(element) {
  const lat = element.lat ?? element.center?.lat;
  const lon = element.lon ?? element.center?.lon;
  if (typeof lat !== 'number' || typeof lon !== 'number') return undefined;
  return { latitude: Number(lat.toFixed(6)), longitude: Number(lon.toFixed(6)) };
}

function includesLateClosing(openingHours) {
  return /2[2-4]:|23|24\/7/i.test(openingHours ?? '');
}

function inferCriteria(tags, cat) {
  const selected = new Set();
  if (['yes', 'terrace', 'outdoor'].includes(tags.outdoor_seating)) selected.add('has_terrace');
  if (tags.covered === 'yes' || tags['covered:outdoor_seating'] === 'yes') selected.add('covered_outdoor');
  if (['wlan', 'yes', 'free'].includes(tags.internet_access)) selected.add('has_wifi');
  if (includesLateClosing(tags.opening_hours)) selected.add('late_opening');
  if (tags.wheelchair === 'yes' || tags.wheelchair === 'limited') selected.add('wheelchair_accessible');
  if (/vegetarian|vegan/i.test(`${tags.cuisine ?? ''} ${tags.diet ?? ''} ${tags['diet:vegetarian'] ?? ''} ${tags['diet:vegan'] ?? ''}`)) {
    selected.add('vegetarian_options');
  }
  if (tags.reservation === 'yes' || tags.reservations === 'yes') selected.add('takes_reservations');
  if (tags.dog === 'yes' || tags.dogs === 'yes') selected.add('dog_friendly');
  if (tags.live_music === 'yes' || tags.music === 'live' || tags.dance === 'yes') selected.add('live_music_or_dj');
  if (tags.kids_area === 'yes' || tags.changing_table === 'yes') selected.add('kid_friendly');
  if (tags.sport === 'soccer' || /football|soccer/i.test(tags.sport_screening ?? '')) selected.add('broadcasts_om');
  return [...selected].filter((key) => criteriaKeys.includes(key));
}

function neighborhood(lat, lon) {
  if (lat > 43.305 && lon > 5.382 && lon < 5.4) return 'Belle de Mai';
  if (lat > 43.296 && lon < 5.373) return 'Le Panier';
  if (lat > 43.292 && lat < 43.298 && lon > 5.378 && lon < 5.389) return 'Cours Julien';
  if (lat > 43.292 && lat < 43.298 && lon > 5.371 && lon < 5.379) return 'Noailles';
  if (lat < 43.286 && lon < 5.36) return 'Malmousque';
  if (lat < 43.27 && lon > 5.35) return 'Littoral Sud';
  if (lat > 43.297 && lon > 5.36 && lon < 5.37) return 'Joliette';
  if (lat > 43.298 && lon > 5.378 && lon < 5.39) return 'Longchamp';
  if (lat < 43.292 && lon > 5.36 && lon < 5.372) return 'Saint-Victor';
  return 'Marseille';
}

function dedupeKey(name, lat, lon) {
  return `${ascii(name).toLowerCase().replace(/[^a-z0-9]/g, '')}:${lat.toFixed(3)}:${lon.toFixed(3)}`;
}

async function fetchOsmQuery(fragment, index) {
  const query = `[out:json][timeout:60];area["boundary"="administrative"]["admin_level"="8"]["name"="Marseille"]->.searchArea;(${fragment});out center tags;`;
  let lastError;

  for (const endpoint of overpassEndpoints) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 70000);
    try {
      const url = `${endpoint}?data=${encodeURIComponent(query)}`;
      const response = await fetch(url, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          accept: 'application/json',
          'user-agent': 'VaiMarseille/0.1 import script'
        }
      });
      clearTimeout(timeout);

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`${endpoint}: ${response.status} ${response.statusText}\n${details.slice(0, 600)}`);
      }

      const json = await response.json();
      console.log(`Fetched batch ${index + 1}/${queries.length}: ${json.elements.length} OSM elements from ${endpoint}`);
      return json.elements;
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
      console.warn(`Batch ${index + 1} failed on ${endpoint}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw lastError;
}

async function fetchOsm() {
  const batches = [];
  for (const [index, fragment] of queries.entries()) {
    batches.push(...(await fetchOsmQuery(fragment, index)));
  }
  return batches;
}

function toSeed(element, index) {
  const tags = element.tags ?? {};
  const coords = coordinates(element);
  const name = ascii(tags.name);
  if (!coords || !name) return undefined;

  const cat = category(tags);
  const handle = instagram(tags);
  return {
    id: `osm-${element.type}-${element.id}`,
    name,
    instagram_handle: handle,
    latitude: coords.latitude,
    longitude: coords.longitude,
    neighborhood: neighborhood(coords.latitude, coords.longitude),
    address: address(tags),
    category: cat,
    criteria: inferCriteria(tags, cat),
    rank: index
  };
}

function score(seed) {
  let value = 0;
  if (seed.criteria.length) value += 10;
  if (seed.instagram_handle) value += 5;
  if (seed.address !== 'Marseille') value += 3;
  if (seed.category === 'Restaurant' || seed.category === 'Bar' || seed.category === 'Cafe') value += 2;
  return value;
}

function renderSeed(seed) {
  const instagram = seed.instagram_handle ? `\n    instagram_handle: ${quote(seed.instagram_handle)},` : '';
  return `  makePlace({
    id: ${quote(seed.id)},
    name: ${quote(seed.name)},${instagram}
    latitude: ${seed.latitude},
    longitude: ${seed.longitude},
    neighborhood: ${quote(seed.neighborhood)},
    address: ${quote(seed.address)},
    category: ${quote(seed.category)},
    criteria: ${JSON.stringify(seed.criteria)}
  })`;
}

function renderFile(seeds) {
  return `import { emptyCriteria, type CriteriaKey } from './criteria';
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
${seeds.map(renderSeed).join(',\n')}
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
`;
}

const osmElements = await fetchOsm();
const deduped = new Map();

osmElements
  .map(toSeed)
  .filter(Boolean)
  .forEach((seed) => {
    const key = dedupeKey(seed.name, seed.latitude, seed.longitude);
    const current = deduped.get(key);
    if (!current || score(seed) > score(current)) {
      deduped.set(key, seed);
    }
  });

const seeds = [...deduped.values()]
  .sort((a, b) => score(b) - score(a) || a.rank - b.rank)
  .slice(0, limit)
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'));

await writeFile(outputPath, renderFile(seeds), 'utf8');
console.log(`Generated ${seeds.length} OSM places in ${outputPath}`);
