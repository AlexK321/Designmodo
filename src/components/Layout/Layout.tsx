import { ReactElement } from 'react';

import { Button } from '../../core/Button/Button';

import { Header, LayoutBox, Main } from './Layouts.styles';

export const Layout = ({ children }: { children: ReactElement }) => {
  const onPreviewClick = () => {
    const baseUrl = window.location.origin;
    window.open(`${baseUrl}/preview`, '_blank');
  };

  return (
    <LayoutBox>
      <Header>
        <Button onClick={onPreviewClick} variant="small">
          Preview
        </Button>
      </Header>
      <Main>{children}</Main>
    </LayoutBox>
  );
};
