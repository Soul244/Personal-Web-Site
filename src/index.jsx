import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { lighten, normalize } from 'polished';

import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  ::selection {
      color: white;
      background: #1a1a1a;
    }
  html{
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #FDFDFD;
    cursor: none;
  }
`;

const theme = {
  textColor: lighten(0.1, 'black'),
  textColorDisabled: lighten(0.3, 'black'),
  textColorHover: lighten(0.4, 'black'),
  menuColor: lighten(0.4, 'black'),
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 0, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
