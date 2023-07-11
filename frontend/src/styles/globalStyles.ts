import { createGlobalStyle, css } from "styled-components";
import resetCss from "./resetcss";

const font = `
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
`;

const commonVariables = `
  --color-default: #515151;
  --neutral-800: #262626;
  --primary-bg: white;
  --end-bg: white;
  --masked-img-bg: antiquewhite;
  --user-preview-bg: #f2f1f1;
  --header-bg: #0A0A08;
  --header-color: white;
`;

const lightTheme = `
    ${commonVariables}
    --primary-bg: #F5E2C1;
    --end-bg: pink;
  `;

const darkTheme = `
    ${commonVariables}
    --primary-bg: #17191a;
    --color-default: #b5aea5;
    --user-preview-bg: #2b2d2f;
`;

const global = css`
  ${resetCss}
  :root {
    ${font}
    ${(props) => {
      return props.theme?.isDark ? darkTheme : lightTheme;
    }}
  }

  body {
    color: var(--color-default);
  }

  a {
    color: unset;
  }

  button {
    cursor: pointer;
  }
`;

export const GlobalStyles = createGlobalStyle`
    ${global}
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
