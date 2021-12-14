import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
const BREAKPOINTS = {
  mobileMax: 37.5,
  tabletMax: 59.375,
  laoptopMax: 81.25,
};
const QUERIES = {
  mobileMax: `(max-width: ${BREAKPOINTS.mobileMax}rem)`,
  tabletMax: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopMax: `(max-width: ${BREAKPOINTS.laoptopMax}rem)`,
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={QUERIES}>
      <App />

      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
