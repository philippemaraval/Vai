import { ExternalLink } from 'lucide-react';
import type { Place } from '../lib/types';

type BottomSheetProps = {
  place?: Place;
  note: string;
  onNoteChange: (value: string) => void;
};

const labels: Record<string, string> = {
  has_terrace: 'Terrasse',
  allows_cb_no_minimum: 'CB sans minimum',
  broadcasts_om: 'Diffusion OM',
  has_wifi: 'Wi-Fi',
  late_opening: 'Ouvert tard',
  good_for_groups: 'Groupes'
};

export function BottomSheet({ place, note, onNoteChange }: BottomSheetProps) {
  if (!place) {
    return (
      <aside className="bottom-sheet compact">
        <strong>Vaï Marseille</strong>
        <span>Sélectionne un lieu sur la carte.</span>
      </aside>
    );
  }

  const activeCriteria = Object.entries(place.criteria)
    .filter(([, enabled]) => enabled)
    .map(([key]) => labels[key] ?? key);

  return (
    <aside className="bottom-sheet">
      <div className="sheet-handle" />
      <div className="sheet-title-row">
        <div>
          <p className="kicker">{place.neighborhood}</p>
          <h2>{place.name}</h2>
        </div>
        <a
          className="instagram-link"
          href={`instagram://user?username=${place.instagram_handle}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Ouvrir Instagram"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      <p className="social-proof">@{place.instagram_handle} · {place.instagram_followers}</p>
      <ul className="criteria-list">
        {activeCriteria.map((criterion) => (
          <li key={criterion}>{criterion}</li>
        ))}
      </ul>
      <label className="private-note">
        <span>Note privée</span>
        <textarea
          value={note}
          onChange={(event) => onNoteChange(event.target.value)}
          placeholder="Visible uniquement par toi"
          rows={4}
        />
      </label>
    </aside>
  );
}
