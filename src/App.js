/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from './images/doo_logo.svg';

const mainStyles = css``;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 23px 61px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;
const downloadButton = css`
  color: #6e6d7a;
  background: #f5f6f9;
  border-radius: 8px;
  padding: 10px 40px;
  font-family: inherit;
`;
export default function App() {
  return (
    <div css={mainStyles}>
      <header css={headerStyles}>
        <a class="logo-link" href="/" title="Go back to the Doo homepage">
          <img src={logo} alt="Doo Logo" />
        </a>

        <nav>
          <a href="#abc">DOO FOR IOS</a>
          <a href="#abc">DOO FOR MAC</a>
          <a href="#abc">SUPPORT</a>
          <a href="#abc" css={downloadButton}>
            DOWNLOAD
          </a>
        </nav>
      </header>
    </div>
  );
}
