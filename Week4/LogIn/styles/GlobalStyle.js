import { createGlobalStyle, css } from "styled-components";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;

    background-color: ${({ theme }) => theme.colors.gray};
  }
  html,
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset} 
`;

export default GlobalStyle;
