import { useState } from 'react';
import css from './CardTranslator.module.css';

export default function CardTranslator({
  verb,
  translation,
  sentence,
  sentenceTranslation,
}) {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(prev => !prev);
  };

  return (
    <button
      type="button"
      className={`${css.card} ${showTranslation ? css.active : ''}`}
      onClick={toggleTranslation}
      aria-expanded={showTranslation}
    >
      <h2 className={css.verb}>{verb}</h2>

      <p className={css.sentence}>{sentence}</p>

      {showTranslation ? (
        <div className={css.translation}>
          <p className={css.verbTranslation}>{translation}</p>
          <p className={css.sentenceTranslation}>{sentenceTranslation}</p>
        </div>
      ) : (
        <span className={css.hint}>Натисни, щоб побачити переклад</span>
      )}
    </button>
  );
}
