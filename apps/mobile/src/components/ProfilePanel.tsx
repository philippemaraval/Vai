import { Share2 } from 'lucide-react';
import type { Place } from '../lib/types';

type ProfilePanelProps = {
  savedPlaces: Place[];
};

export function ProfilePanel({ savedPlaces }: ProfilePanelProps) {
  return (
    <section className="profile-panel">
      <div className="profile-card">
        <div className="profile-avatar">PM</div>
        <div>
          <p className="kicker">Profil public</p>
          <h2>@philippe</h2>
          <p>{savedPlaces.length} lieux sauvegardes</p>
        </div>
        <button className="icon-button" aria-label="Partager la to-do list">
          <Share2 size={18} />
        </button>
      </div>
      <div className="todo-list">
        {savedPlaces.map((place) => (
          <article key={place.id} className="todo-item">
            <strong>{place.name}</strong>
            <span>{place.category} · {place.neighborhood}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
