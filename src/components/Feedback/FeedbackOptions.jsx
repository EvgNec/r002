import React from 'react';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ onAdd }) {
  return (
    <div>
      <button onClick={() => onAdd('good')}>Good</button>
      <button onClick={() => onAdd('neutral')}>Neutral</button>
      <button onClick={() => onAdd('bad')}>Bad</button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
