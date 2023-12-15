import { css } from "styled-components";

const colors = {
  green: "#D0FC5C",
  white: "#FFFFFF",
  black: "#000000",
  yellow: "#FDFD96",
  brown: "#836853",
  gray: "#D3D3D3",
  pink: "#FF69B4",
  red: "#ff2c2c",
};

const fonts = {
  title: css`
    font-family: "LINESeedKR-Bd", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
  `,
  subtitle: css`
    font-family: "LINESeedKR-Bd", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
  `,
  body: css`
    font-family: "LINESeedKR-Bd", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
