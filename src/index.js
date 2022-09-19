import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: white;
          font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont,
            'Helvetica Neue', 'Helvetica', 'Helvetica', 'Gill Sans', sans-serif;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
// ('reportWebVitals');
