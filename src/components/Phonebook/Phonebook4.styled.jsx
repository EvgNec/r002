import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;
  max-width: 100%;
  margin: 40px auto;
  padding: 30px;

  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px 12px;

  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  transition: border-color 200ms ease;

  &:focus {
    border-color: #2196f3;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #2196f3;
  cursor: pointer;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  cursor: pointer;
`;

export const Radio = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #2196f3;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 10px 12px;

  font-size: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;

  font-size: 16px;
  font-weight: 600;
  color: white;

  background-color: #2196f3;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: background-color 200ms ease;

  &:hover:not(:disabled) {
    background-color: #1976d2;
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;
