import React from 'react';
import PropTypes from 'prop-types';
import CardTranslator from './CardTranslator';

export default function Card({ verbs }) {
  return (
    <div className="cardList">
      {verbs.map(item => (
        <CardTranslator
          key={item.id}
          verb={item.verb}
          translation={item.translation}
          sentence={item.sentence}
          sentenceTranslation={item.sentenceTranslation}
        />
      ))}
    </div>
  );
}

Card.propTypes = {
  verbs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      verb: PropTypes.string.isRequired,
      translation: PropTypes.string.isRequired,
      sentence: PropTypes.string.isRequired,
      sentenceTranslation: PropTypes.string.isRequired,
    })
  ).isRequired,
};
