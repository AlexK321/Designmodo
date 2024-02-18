import React, { useState } from 'react';

import { AppRoutes } from './pages';
import { IAnimationOptions } from './pages/types/interfaces';
import { GlobalStyles } from './theme';

export const Context = React.createContext<[IAnimationOptions, any]>([{} as IAnimationOptions, () => {}]);

const App = () => {
  const [animationOptions, setAnimationOptions] = useState<IAnimationOptions>({
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
