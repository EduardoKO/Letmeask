import styled from 'styled-components';

export const Container = styled.button`
  margin-top:64px;
  height:50px;
  border-radius:8px;
  font-weight:400;
  background:#835afd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border:0;
  color:#FFF;
  padding: 0 32px;
  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;