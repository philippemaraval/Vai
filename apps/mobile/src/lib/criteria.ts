import type { PlaceCriteria } from './types';

export type CriteriaKey = keyof PlaceCriteria;

export type CriteriaDefinition = {
  key: CriteriaKey;
  label: string;
  group: 'Essentiels' | 'Ambiance' | 'Pratique' | 'Accessibilite';
};

export const criteriaDefinitions: CriteriaDefinition[] = [
  { key: 'has_terrace', label: 'Terrasse', group: 'Essentiels' },
  { key: 'covered_outdoor', label: 'Exterieur couvert', group: 'Essentiels' },
  { key: 'broadcasts_om', label: 'Diffusion OM', group: 'Ambiance' },
  { key: 'allows_cb_no_minimum', label: 'CB sans minimum', group: 'Pratique' },
  { key: 'has_wifi', label: 'Wi-Fi', group: 'Pratique' },
  { key: 'late_opening', label: 'Ouvert tard', group: 'Essentiels' },
  { key: 'good_for_groups', label: 'Groupes', group: 'Ambiance' },
  { key: 'quiet_spot', label: 'Calme', group: 'Ambiance' },
  { key: 'laptop_friendly', label: 'Laptop friendly', group: 'Pratique' },
  { key: 'vegetarian_options', label: 'Options vege', group: 'Essentiels' },
  { key: 'wheelchair_accessible', label: 'Accessible PMR', group: 'Accessibilite' },
  { key: 'takes_reservations', label: 'Reservations', group: 'Pratique' },
  { key: 'kid_friendly', label: 'Enfants OK', group: 'Accessibilite' },
  { key: 'live_music_or_dj', label: 'Live ou DJ', group: 'Ambiance' },
  { key: 'sea_view', label: 'Vue mer', group: 'Ambiance' },
  { key: 'dog_friendly', label: 'Chiens OK', group: 'Accessibilite' }
];

export const quickCriteriaKeys: CriteriaKey[] = [
  'has_terrace',
  'broadcasts_om',
  'allows_cb_no_minimum',
  'late_opening',
  'vegetarian_options',
  'sea_view'
];

export const criteriaLabels = criteriaDefinitions.reduce<Record<CriteriaKey, string>>((labels, criterion) => {
  labels[criterion.key] = criterion.label;
  return labels;
}, {} as Record<CriteriaKey, string>);

export const emptyCriteria = criteriaDefinitions.reduce<PlaceCriteria>((criteria, definition) => {
  criteria[definition.key] = false;
  return criteria;
}, {} as PlaceCriteria);
