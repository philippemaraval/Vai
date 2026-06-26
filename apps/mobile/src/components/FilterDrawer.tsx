import { X } from 'lucide-react';

type FilterDrawerProps = {
  open: boolean;
  filters: string[];
  activeFilters: string[];
  onToggleFilter: (filter: string) => void;
  onClose: () => void;
};

export function FilterDrawer({ open, filters, activeFilters, onToggleFilter, onClose }: FilterDrawerProps) {
  return (
    <div className={`drawer-backdrop ${open ? 'open' : ''}`} aria-hidden={!open}>
      <section className="filter-drawer" aria-label="Tous les filtres">
        <button className="icon-button drawer-close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>
        <h2>Tous les filtres</h2>
        <div className="drawer-filter-grid">
          {filters.map((filter) => (
            <label key={filter} className="checkbox-row">
              <input
                type="checkbox"
                checked={activeFilters.includes(filter)}
                onChange={() => onToggleFilter(filter)}
              />
              <span>{filter}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
