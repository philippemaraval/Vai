import { Heart, ListPlus, MapPinned, Search, SlidersHorizontal, UserRound } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { AdminBackOffice } from './components/AdminBackOffice';
import { BottomSheet } from './components/BottomSheet';
import { FilterDrawer } from './components/FilterDrawer';
import { ProfilePanel } from './components/ProfilePanel';
import { SubmissionPanel } from './components/SubmissionPanel';
import { VaiMap } from './components/VaiMap';
import { criteriaLabels, quickCriteriaKeys, type CriteriaKey } from './lib/criteria';
import { demoNeighborhoods, demoPlaces } from './lib/demoData';
import { hasSupabaseConfig, supabase } from './lib/supabase';
import type { Place } from './lib/types';

type AppView = 'map' | 'profile' | 'submit';
type SheetState = 'hidden' | 'peek' | 'expanded';

function criterionMatches(place: Place, filter: CriteriaKey) {
  return place.criteria[filter];
}

export function App() {
  const [selectedPlace, setSelectedPlace] = useState<Place | undefined>();
  const [selectedNeighborhoodId, setSelectedNeighborhoodId] = useState<string | undefined>();
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<CriteriaKey[]>([]);
  const [submissionCriteria, setSubmissionCriteria] = useState<CriteriaKey[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [note, setNote] = useState('');
  const [showAdmin, setShowAdmin] = useState(false);
  const [activeView, setActiveView] = useState<AppView>('map');
  const [sheetState, setSheetState] = useState<SheetState>('hidden');
  const hasActiveQuery = search.trim() !== '' || activeFilters.length > 0;

  const filteredPlaces = useMemo(() => {
    if (!hasActiveQuery) return [];

    return demoPlaces.filter((place) => {
      const exactSearchMatch = search.trim() === '' || place.name.toLowerCase() === search.trim().toLowerCase();
      const filtersMatch = activeFilters.every((filter) => criterionMatches(place, filter));
      return exactSearchMatch && filtersMatch;
    });
  }, [activeFilters, hasActiveQuery, search]);

  useEffect(() => {
    if (!hasActiveQuery) {
      setSelectedPlace(undefined);
      setSheetState('hidden');
    }
  }, [hasActiveQuery]);

  function toggleFilter(filter: CriteriaKey) {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  }

  function toggleSubmissionCriteria(criteria: CriteriaKey) {
    setSubmissionCriteria((current) =>
      current.includes(criteria) ? current.filter((item) => item !== criteria) : [...current, criteria]
    );
  }

  function selectPlace(place: Place) {
    setSelectedPlace(place);
    setSheetState('peek');
    setActiveView('map');
  }

  function selectView(view: AppView) {
    setActiveView(view);
    if (view === 'map' && sheetState === 'hidden' && selectedPlace) {
      setSheetState('peek');
    }
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
    <main className={`app-shell sheet-${sheetState} ${hasActiveQuery ? 'has-results' : 'empty-map'}`}>
      <VaiMap
        places={filteredPlaces}
        neighborhoods={demoNeighborhoods}
        selectedNeighborhoodId={selectedNeighborhoodId}
        onSelectPlace={selectPlace}
        onSelectNeighborhood={setSelectedNeighborhoodId}
      />

      <header className="top-panel">
        <div className="brand-row">
          <button className="brand-button" onClick={() => selectView('map')}>Vaï</button>
          <div className="auth-actions">
            <button className="ghost-button" onClick={() => login('google')}>Google</button>
            <button className="ghost-button" onClick={() => login('apple')}>Apple</button>
            <button className="icon-button" onClick={() => setShowAdmin(true)} aria-label="Back-office">
              <UserRound size={19} />
            </button>
          </div>
        </div>
        <div className="search-row">
          <Search size={18} />
          <input
            className="search-input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Nom exact du lieu"
            aria-label="Recherche par nom exact"
          />
        </div>
        <nav className="quick-filters" aria-label="Filtres rapides">
          {quickCriteriaKeys.map((filter) => (
            <button
              key={filter}
              className={activeFilters.includes(filter) ? 'chip active' : 'chip'}
              onClick={() => toggleFilter(filter)}
            >
              {criteriaLabels[filter]}
            </button>
          ))}
          <button className="chip more" onClick={() => setDrawerOpen(true)}>
            <SlidersHorizontal size={16} />
            Tous les filtres
          </button>
        </nav>
      </header>

      {!hasActiveQuery && activeView === 'map' ? (
        <div className="map-empty-hint">
          <strong>Carte masquee au repos</strong>
          <span>Choisis un filtre ou tape le nom exact d'un lieu.</span>
        </div>
      ) : null}

      <nav className="bottom-nav" aria-label="Navigation principale">
        <button className={activeView === 'map' ? 'active' : ''} onClick={() => selectView('map')}>
          <MapPinned size={19} />
          Carte
        </button>
        <button className={activeView === 'profile' ? 'active' : ''} onClick={() => selectView('profile')}>
          <Heart size={19} />
          To-do
        </button>
        <button className={activeView === 'submit' ? 'active' : ''} onClick={() => selectView('submit')}>
          <ListPlus size={19} />
          Proposer
        </button>
      </nav>

      {activeView === 'profile' ? <ProfilePanel savedPlaces={demoPlaces.slice(0, 3)} /> : null}
      {activeView === 'submit' ? (
        <SubmissionPanel selectedCriteria={submissionCriteria} onToggleCriteria={toggleSubmissionCriteria} />
      ) : null}

      {activeView === 'map' ? (
        <BottomSheet
          place={selectedPlace}
          note={note}
          state={sheetState}
          onNoteChange={setNote}
          onExpand={() => setSheetState('expanded')}
          onCollapse={() => setSheetState('peek')}
          onHide={() => setSheetState('hidden')}
        />
      ) : null}
      <FilterDrawer
        open={drawerOpen}
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
        onClear={() => setActiveFilters([])}
        onClose={() => setDrawerOpen(false)}
      />
    </main>
  );
}
