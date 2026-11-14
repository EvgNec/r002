import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px 12px;

  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;

  background-color: #fff;
  transition: border-color 200ms ease;

  &:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.15);
  }

  &::placeholder {
    color: #999;
  }
`;
