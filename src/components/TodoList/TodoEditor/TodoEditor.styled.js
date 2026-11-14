import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: 450px;
  box-sizing: border-box;

  padding: 20px;
  margin-bottom: 20px;

  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  box-sizing: border-box;

  font-size: 16px;
  font-family: inherit;

  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const AddButton = styled.button`
  align-self: flex-start;
  padding: 10px 20px;

  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;

  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1976d2;
  }
`;
