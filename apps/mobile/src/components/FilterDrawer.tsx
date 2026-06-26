import { X } from 'lucide-react';
import { criteriaDefinitions, type CriteriaKey } from '../lib/criteria';
import type { Neighborhood } from '../lib/types';

type FilterDrawerProps = {
  open: boolean;
  activeFilters: CriteriaKey[];
  neighborhoods: Neighborhood[];
  selectedNeighborhoodId?: string;
  onToggleFilter: (filter: CriteriaKey) => void;
  onSelectNeighborhood: (id?: string) => void;
  onClear: () => void;
  onClose: () => void;
};

const groups = ['Essentiels', 'Ambiance', 'Pratique', 'Accessibilite'] as const;

export function FilterDrawer({
  open,
  activeFilters,
  neighborhoods,
  selectedNeighborhoodId,
  onToggleFilter,
  onSelectNeighborhood,
  onClear,
  onClose
}: FilterDrawerProps) {
  return (
    <div className={`drawer-backdrop ${open ? 'open' : ''}`} aria-hidden={!open}>
      <section className="filter-drawer" aria-label="Tous les filtres">
        <div className="drawer-heading">
          <div>
            <p className="kicker">{activeFilters.length} selection</p>
            <h2>Tous les filtres</h2>
          </div>
          <button className="icon-button drawer-close" onClick={onClose} aria-label="Fermer">
            <X size={20} />
          </button>
        </div>
        <div className="drawer-filter-grid">
          <fieldset className="filter-group">
            <legend>Quartiers</legend>
            {neighborhoods.map((neighborhood) => (
              <button
                key={neighborhood.id}
                className={selectedNeighborhoodId === neighborhood.id ? 'chip active' : 'chip'}
                onClick={() => onSelectNeighborhood(selectedNeighborhoodId === neighborhood.id ? undefined : neighborhood.id)}
              >
                {neighborhood.name}
              </button>
            ))}
          </fieldset>
          {groups.map((group) => (
            <fieldset key={group} className="filter-group">
              <legend>{group}</legend>
              {criteriaDefinitions
                .filter((filter) => filter.group === group)
                .map((filter) => (
                  <label key={filter.key} className="checkbox-row">
                    <input
                      type="checkbox"
                      checked={activeFilters.includes(filter.key)}
                      onChange={() => onToggleFilter(filter.key)}
                    />
                    <span>{filter.label}</span>
                  </label>
                ))}
            </fieldset>
          ))}
        </div>
        <div className="drawer-actions">
          <button className="ghost-button" onClick={onClear}>Reinitialiser</button>
          <button className="primary-button" onClick={onClose}>Voir les lieux</button>
        </div>
      </section>
    </div>
  );
}
