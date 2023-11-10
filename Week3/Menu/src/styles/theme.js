import { css } from "styled-components";

const colors = {
  green: "#D0FC5C",
  white: "#FFFFFF",
  black: "#000000",
  yellow: "#FDFD96",
  brown: "#836853",
};

const fonts = {
  title: css`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
  `,
  subtitle: css`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
  `,
  body: css`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
