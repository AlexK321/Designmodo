import styled from 'styled-components';

import { device } from '../../constants';
import { Button } from '../../core/Button/Button';

export const ContentWrapper = styled.div`
  height: auto;
  min-height: 300px;
  background: white;
  display: flex;
  gap: 30px;
  padding: 74px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const TestButton = styled(Button)`
  margin-top: 20px;
`;
