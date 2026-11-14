import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 500px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;

  &:hover {
    background-color: #e8f0fe;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #4caf50;
`;

export const Text = styled.p`
  flex: 1;
  margin: 0;
  font-size: 16px;

  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};

  color: ${({ completed }) => (completed ? '#999' : '#333')};
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
