import { SlidersHorizontal, UserRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import { AdminBackOffice } from './components/AdminBackOffice';
import { BottomSheet } from './components/BottomSheet';
import { FilterDrawer } from './components/FilterDrawer';
import { VaiMap } from './components/VaiMap';
import { demoNeighborhoods, demoPlaces } from './lib/demoData';
import { hasSupabaseConfig, supabase } from './lib/supabase';
import type { Place } from './lib/types';

const quickFilters = ['Terrasse', 'Diffusion OM', 'CB sans minimum', 'Ouvert tard', 'Groupes', 'Wi-Fi'];

function criterionMatches(place: Place, filter: string) {
  const mapping: Record<string, keyof Place['criteria']> = {
    Terrasse: 'has_terrace',
    'Diffusion OM': 'broadcasts_om',
    'CB sans minimum': 'allows_cb_no_minimum',
    'Ouvert tard': 'late_opening',
    Groupes: 'good_for_groups',
    'Wi-Fi': 'has_wifi'
  };
  return place.criteria[mapping[filter]];
}

export function App() {
  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>(demoPlaces[0]);
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<string | undefined>();
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [note, setNote] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);

  const filteredPlaces = useMemo(() => {
    return demoPlaces.filter((place) => {
      const exactSearchMatch = search.trim() === '' || place.name.toLowerCase() === search.trim().toLowerCase();
      const filtersMatch = activeFilters.every((filter) => criterionMatches(place, filter));
      return exactSearchMatch && filtersMatch;
    });
  }, [activeFilters, search]);

  function toggleFilter(filter: string) {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  }

  async function login(provider: 'google' | 'apple') {
    if (!hasSupabaseConfig()) return;
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    });
  }

  if (showAdmin) {
    return (
      <>
        <button className="mobile-return" onClick={() => setShowAdmin(false)}>Carte</button>
        <AdminBackOffice pendingPlaces={demoPlaces} />
      </>
    );
  }

  return (
    <main className="app-shell">
      <VaiMap
        places={filteredPlaces}
        neighborhoods={demoNeighborhoods}
        selectedNeighborhoodId={selectedNeighborhoodId}
        onSelectPlace={setSelectedPlace}
        onSelectNeighborhood={setSelectedNeighborhoodId}
      />

      <header className="top-panel">
        <div className="brand-row">
          <strong>Vaï</strong>
          <div className="auth-actions">
            <button className="ghost-button" onClick={() => login('google')}>Google</button>
            <button className="ghost-button" onClick={() => login('apple')}>Apple</button>
            <button className="icon-button" onClick={() => setShowAdmin(true)} aria-label="Back-office">
              <UserRound size={19} />
            </button>
          </div>
        </div>
        <input
          className="search-input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Nom exact du lieu"
          aria-label="Recherche par nom exact"
        />
        <nav className="quick-filters" aria-label="Filtres rapides">
          {quickFilters.slice(0, 4).map((filter) => (
            <button
              key={filter}
              className={activeFilters.includes(filter) ? 'chip active' : 'chip'}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button className="chip more" onClick={() => setDrawerOpen(true)}>
            <SlidersHorizontal size={16} />
            Tous les filtres
          </button>
        </nav>
      </header>

      <BottomSheet place={selectedPlace} note={note} onNoteChange={setNote} />
      <FilterDrawer
        open={drawerOpen}
        filters={quickFilters}
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
        onClose={() => setDrawerOpen(false)}
      />
    </main>
  );
}
