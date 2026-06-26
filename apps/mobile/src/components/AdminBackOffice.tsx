import type { Place } from '../lib/types';

type AdminBackOfficeProps = {
  pendingPlaces: Place[];
};

export function AdminBackOffice({ pendingPlaces }: AdminBackOfficeProps) {
  return (
    <main className="admin-shell">
      <aside className="admin-list">
        <h1>Modération</h1>
        {pendingPlaces.map((place) => (
          <button key={place.id} className="admin-list-item">
            <strong>{place.name}</strong>
            <span>@{place.instagram_handle}</span>
          </button>
        ))}
      </aside>
      <section className="admin-editor">
        <header>
          <p className="kicker">Mode édition complet</p>
          <h2>Proposition sélectionnée</h2>
        </header>
        <div className="admin-form-grid">
          <label>
            Nom
            <input defaultValue={pendingPlaces[0]?.name ?? ''} />
          </label>
          <label>
            Instagram
            <input defaultValue={pendingPlaces[0]?.instagram_handle ?? ''} />
          </label>
          <label>
            Latitude
            <input defaultValue={pendingPlaces[0]?.latitude ?? ''} />
          </label>
          <label>
            Longitude
            <input defaultValue={pendingPlaces[0]?.longitude ?? ''} />
          </label>
        </div>
        <div className="admin-actions">
          <button className="accept-button">Accepter</button>
          <button className="reject-button">Refuser</button>
        </div>
      </section>
    </main>
  );
}
