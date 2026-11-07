import React from 'react';
import PropTypes from 'prop-types';

export default function Feedback({
  title,
  good,
  neutral,
  bad,
  onAdd,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <span>{title}</span>
      <button onClick={() => onAdd('good')}>Good</button>
      <button onClick={() => onAdd('neutral')}>Neutral</button>
      <button onClick={() => onAdd('bad')}>Bad</button>
      <span>Statistics</span>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}</p>
    </div>
  );
}

Feedback.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
