import { createGlobalStyle } from 'styled-components';

import { device } from './constants';

export interface ITheme {
  colors: {
    bg: string;
    bg2: string;
    font: string;
    main: string;
  };
}

const darkTheme: ITheme = {
  colors: {
    bg: '#8298ab',
    bg2: '#001529',
    font: '#E5E4E8',
    main: 'orange',
  },
};

const lightTheme: ITheme = {
  colors: {
    bg: 'white',
    bg2: 'white',
    font: 'black',
    main: 'blue',
  },
};

export const appTheme: { dark: ITheme; light: ITheme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: black;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div#root {
    @media ${device.tablet} {
      max-width: 768px;
      margin: 0 auto;
    }
  }

  h1 {
    font-size: 43px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -2px;
  }

  p {
    margin: 1px;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
  }
`;
