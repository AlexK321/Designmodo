import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout } from '../components/Layout';
import { appTheme } from '../theme';

import { MainPage } from './MainPage';
import { PreviewPage } from './PreviewPage';

export const AppRoutes = () => {
  const renderLayout = () => {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  };

  return (
    <ThemeProvider theme={appTheme.dark}>
      <BrowserRouter>
        <Routes>
          <Route element={renderLayout()}>
            <Route path="/" element={<MainPage />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Route>
          <Route path="*" element={<> Error page</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
