import { useEffect } from 'react';

import { ContentWrapper, Description, Image, TestButton } from './Content.styles';

export const Content = () => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentWrapper>
      <Description>
        <h1>Animation Settings</h1>
        <p>
          The user should have the option to select any element on the page and set up its animation using the controls
          in the right panel. A dotted line will show the elements position and state before the animation begins,
          giving the user a clear idea of how the animation will appear. The preview button on the top panel will open
          the result in a new tab.
        </p>
        <TestButton>Button</TestButton>
      </Description>
      <Image
        src="https://png.pngtree.com/background/20230611/original/pngtree-picture-of-a-blue-bird-on-a-black-background-picture-image_3124189.jpg"
        alt="preview"
      />
    </ContentWrapper>
  );
};
