import styled from 'styled-components';

import { Button } from '../../core/Button/Button';

export const ContentWrapper = styled.div`
  height: auto;
  min-height: 300px;
  background: white;
  display: flex;
  gap: 30px;
  padding: 74px;
  position: relative;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-top: 30px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const TypographyH1 = styled.h1`
  margin: 0 0 30px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const TestButton = styled(Button)``;
