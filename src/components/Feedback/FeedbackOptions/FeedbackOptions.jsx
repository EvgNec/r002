import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, FeedbackButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onAdd }) {
  return (
    <ButtonContainer>
      <FeedbackButton
        type="button"
        variant="good"
        onClick={() => onAdd('good')}
      >
        Good
      </FeedbackButton>

      <FeedbackButton
        type="button"
        variant="neutral"
        onClick={() => onAdd('neutral')}
      >
        Neutral
      </FeedbackButton>

      <FeedbackButton type="button" variant="bad" onClick={() => onAdd('bad')}>
        Bad
      </FeedbackButton>
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
