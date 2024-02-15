import { useEffect } from 'react';

import { Content } from '../../components/Content';
import { Tools } from '../../components/Tools';

import { ContentWrapper, MainWrapper } from './MainPage.styles';

export const MainPage = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainWrapper>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
      <Tools />
    </MainWrapper>
  );
};
