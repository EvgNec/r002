import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsList,
  StatItem,
  StatValue,
  StatLabel,
  SummaryRow,
  SummaryValue,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <StatisticsContainer>
      <StatisticsList>
        <StatItem>
          <StatValue>{good}</StatValue>
          <StatLabel>Good</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{neutral}</StatValue>
          <StatLabel>Neutral</StatLabel>
        </StatItem>

        <StatItem>
          <StatValue>{bad}</StatValue>
          <StatLabel>Bad</StatLabel>
        </StatItem>
      </StatisticsList>

      <SummaryRow>
        <span>Total feedback</span>
        <SummaryValue>{countTotalFeedback}</SummaryValue>
      </SummaryRow>

      <SummaryRow>
        <span>Positive feedback</span>
        <SummaryValue>{countPositiveFeedbackPercentage}%</SummaryValue>
      </SummaryRow>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
