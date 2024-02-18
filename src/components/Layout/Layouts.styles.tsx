import styled from 'styled-components';

export const LayoutBox = styled.div`
  width: 1234px;
  max-width: 1234px;
  min-height: 100vh;
  background: #e5e5e5;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 58px;
  background: #222222;
  position: relative;
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: right;
  padding: 0 12px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  height: 1px;
`;
