import { criteriaDefinitions } from '../lib/criteria';
import type { Place } from '../lib/types';

type AdminBackOfficeProps = {
  pendingPlaces: Place[];
};

export function AdminBackOffice({ pendingPlaces }: AdminBackOfficeProps) {
  const selectedPlace = pendingPlaces[0];

  return (
    <main className="admin-shell">
      <aside className="admin-list">
        <h1>Modération</h1>
        {pendingPlaces.map((place) => (
          <button key={place.id} className="admin-list-item">
            <strong>{place.name}</strong>
            <span>{place.instagram_handle ? `@${place.instagram_handle}` : 'Instagram non renseigne'}</span>
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
            <input defaultValue={selectedPlace?.name ?? ''} />
          </label>
          <label>
            Categorie
            <input defaultValue={selectedPlace?.category ?? ''} />
          </label>
          <label>
            Instagram
            <input defaultValue={selectedPlace?.instagram_handle ?? ''} />
          </label>
          <label>
            Adresse
            <input defaultValue={selectedPlace?.address ?? ''} />
          </label>
          <label>
            Latitude
            <input defaultValue={selectedPlace?.latitude ?? ''} />
          </label>
          <label>
            Longitude
            <input defaultValue={selectedPlace?.longitude ?? ''} />
          </label>
        </div>
        <fieldset className="admin-criteria-editor">
          <legend>Criteres</legend>
          {criteriaDefinitions.map((criterion) => (
            <label key={criterion.key} className="checkbox-row">
              <input type="checkbox" defaultChecked={Boolean(selectedPlace?.criteria[criterion.key])} />
              <span>{criterion.label}</span>
            </label>
          ))}
        </fieldset>
        <div className="admin-actions">
          <button className="accept-button">Accepter</button>
          <button className="reject-button">Refuser</button>
        </div>
      </section>
    </main>
  );
}
