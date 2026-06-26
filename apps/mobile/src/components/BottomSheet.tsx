import { ChevronDown, ChevronUp, Map } from 'lucide-react';
import { criteriaDefinitions, criteriaLabels } from '../lib/criteria';
import type { Place } from '../lib/types';

type BottomSheetProps = {
  place?: Place;
  note: string;
  state: 'hidden' | 'peek' | 'expanded';
  onNoteChange: (value: string) => void;
  onExpand: () => void;
  onCollapse: () => void;
  onHide: () => void;
};

export function BottomSheet({ place, note, state, onNoteChange, onExpand, onCollapse, onHide }: BottomSheetProps) {
  if (state === 'hidden') {
    return (
      <button className="map-restore-button" onClick={onExpand}>
        <ChevronUp size={18} />
        Fiche lieu
      </button>
    );
  }

  if (!place) {
    return (
      <aside className="bottom-sheet peek">
        <button className="sheet-handle-button" onClick={onExpand} aria-label="Ouvrir la fiche">
          <span className="sheet-handle" />
        </button>
        <strong>Vaï Marseille</strong>
        <span>Touche un marqueur pour ouvrir une fiche lieu.</span>
      </aside>
    );
  }

  const activeCriteria = criteriaDefinitions
    .filter((definition) => place.criteria[definition.key])
    .map((definition) => criteriaLabels[definition.key]);

  return (
    <aside className={`bottom-sheet ${state}`}>
      <button
        className="sheet-handle-button"
        onClick={state === 'expanded' ? onCollapse : onExpand}
        aria-label={state === 'expanded' ? 'Reduire la fiche' : 'Agrandir la fiche'}
      >
        <span className="sheet-handle" />
      </button>
      <div className="sheet-title-row">
        <div>
          <p className="kicker">{place.category} · {place.neighborhood}</p>
          <h2>{place.name}</h2>
        </div>
        <div className="sheet-actions">
          <button className="icon-button" onClick={onHide} aria-label="Voir la carte en grand">
            <Map size={18} />
          </button>
          <button
            className="icon-button"
            onClick={state === 'expanded' ? onCollapse : onExpand}
            aria-label={state === 'expanded' ? 'Reduire' : 'Developper'}
          >
            {state === 'expanded' ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>
        </div>
      </div>
      <p className="social-proof">
        <a href={`https://www.instagram.com/${place.instagram_handle}/`} target="_blank" rel="noreferrer">
          @{place.instagram_handle}
        </a>
        <span> · {place.instagram_followers}</span>
      </p>
      {place.address ? <p className="place-address">{place.address}</p> : null}
      <ul className="criteria-list">
        {activeCriteria.map((criterion) => (
          <li key={criterion}>{criterion}</li>
        ))}
      </ul>
      {state === 'expanded' ? (
        <label className="private-note">
          <span>Note privee</span>
          <textarea
            value={note}
            onChange={(event) => onNoteChange(event.target.value)}
            placeholder="Visible uniquement par toi"
            rows={4}
          />
        </label>
      ) : null}
    </aside>
  );
}
