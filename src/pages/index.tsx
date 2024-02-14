import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { appTheme } from '../theme';

import { MainPage } from './MainPage';

export const AppRoutes = () => {
  return (
    <ThemeProvider theme={appTheme.dark}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<> Error page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
