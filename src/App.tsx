import React, { useState } from 'react';

import { AppRoutes } from './pages';
import { GlobalStyles } from './theme';

interface IAnimationOptions {
  currentElementId: string | null;
  options: {
    bottom: number;
    left: number;
    opacity: number;
  };
}

export const Context = React.createContext([{}, () => {}]);

const App = () => {
  const [animationOptions, setAnimationOptions] = useState<any>({
    currentElementId: null,
    options: {},
  });

  return (
    <Context.Provider value={[animationOptions, setAnimationOptions]}>
      <AppRoutes />
      <GlobalStyles />
    </Context.Provider>
  );
};

export default App;
