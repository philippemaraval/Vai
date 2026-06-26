import { Send } from 'lucide-react';
import { criteriaDefinitions, type CriteriaKey } from '../lib/criteria';

type SubmissionPanelProps = {
  selectedCriteria: CriteriaKey[];
  onToggleCriteria: (criteria: CriteriaKey) => void;
};

export function SubmissionPanel({ selectedCriteria, onToggleCriteria }: SubmissionPanelProps) {
  const canSubmit = selectedCriteria.length >= 5;

  return (
    <section className="submission-panel">
      <div>
        <p className="kicker">Crowdsourcing</p>
        <h2>Proposer un lieu</h2>
      </div>
      <div className="submission-grid">
        <label>
          Nom du lieu
          <input placeholder="Nom exact" />
        </label>
        <label>
          Instagram
          <input placeholder="@compte" />
        </label>
      </div>
      <div className="submission-criteria">
        <p>{selectedCriteria.length}/5 criteres minimum</p>
        <div className="submission-chip-grid">
          {criteriaDefinitions.map((criterion) => (
            <button
              key={criterion.key}
              className={selectedCriteria.includes(criterion.key) ? 'chip active' : 'chip'}
              onClick={() => onToggleCriteria(criterion.key)}
            >
              {criterion.label}
            </button>
          ))}
        </div>
      </div>
      <button className="primary-button submit-button" disabled={!canSubmit}>
        <Send size={17} />
        Envoyer en moderation
      </button>
    </section>
  );
}
