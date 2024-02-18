import { useContext, useEffect } from 'react';

import { Context } from '../../App';
import { Content } from '../../components/Content';
import { useStartAnimation } from '../../utils/startAnimation';

import { ContentWrapper, MainWrapper } from './PreviewPage.styles';

export const PreviewPage = () => {
  const [animationOptions, setAnimationOptions] = useContext<any>(Context);
  const { startAllAnimations } = useStartAnimation();
  useEffect(() => {
    setAnimationOptions(
      JSON.parse(localStorage.getItem('animationOptions') || '{"currentElementId": null, "options": {}}'),
    );
  }, []);

  useEffect(() => {
    startAllAnimations();
  }, [Object.values(animationOptions.options)]);

  return (
    <MainWrapper>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </MainWrapper>
  );
};
