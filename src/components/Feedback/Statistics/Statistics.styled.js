import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StatisticsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const StatItem = styled.div`
  padding: 16px 10px;
  background-color: #f1f5f9;
  border-radius: 8px;
  text-align: center;
`;

export const StatValue = styled.p`
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 700;
  color: #1e293b;
`;

export const StatLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;

  font-size: 16px;
  color: #475569;
`;

export const SummaryValue = styled.span`
  font-weight: 700;
  color: #2563eb;
`;
