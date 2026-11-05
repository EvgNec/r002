import styled from '@emotion/styled';

export const AccordionSection = styled.section`
  width: 100%;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

export const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 14px 18px;

  border: none;
  background-color: #f5f5f5;
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  text-align: left;

  transition: background-color 0.2s;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const Arrow = styled.span`
  font-size: 12px;
`;

export const AccordionContent = styled.div`
  padding: 20px;
  border-top: 1px solid #ddd;
`;
