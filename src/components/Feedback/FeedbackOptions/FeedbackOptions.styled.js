import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const FeedbackButton = styled.button`
  flex: 1;
  min-width: 90px;
  padding: 12px 20px;

  border: 1px solid transparent;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;

  background-color: ${({ variant }) =>
    variant === 'good' ? '#dcfce7' : variant === 'bad' ? '#fee2e2' : '#f1f5f9'};

  color: ${({ variant }) =>
    variant === 'good' ? '#166534' : variant === 'bad' ? '#991b1b' : '#334155'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.97);
  }
`;
