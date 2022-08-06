import { createGlobalStyle } from "styled-components"
import styledTheme from "./styledTheme"
// import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
@font-face {
  font-family: Rockwell;
  src: url(fonts/Rockwell/Rock.ttf);
}
@font-face {
  font-family: Rockwell-bold;
  src: url(fonts/Rockwell/Rockwell-Bold.ttf);
}
  :root {
    font-size: 10px;
    @media screen and (min-width: ${styledTheme.device.sm} ) {
      font-size: 12px;
    }
    @media screen and (min-width: ${styledTheme.device.md} ) {
      font-size: 14px
    }
    @media screen and (min-width: ${styledTheme.device.lg} ) {
      font-size:16px;
    }
    cursor:background: linear-gradient(180deg, #FCF6C2 0%, #65AA8B 100%);
    --xs-container-width: 322px;
    --sm-container-width: 500px;
    --md-container-width: 900px;
    --lg-container-width: 1422px;
    --navbar-height: 120px;
    --footer-height: 60px;

    --grid-gap-sm: 10px;
    --grid-gap-lg: 24px;
    --grid-gap-xl: 36px;

    --padding-sm: 16px;
    --padding-lg: 22px;

    --border-radius-sm: 6px;
    --border-radius-base: 8px;
    --border-radius-lg: 28px;

    --sizing-xs: 4px;
    --sizing-sm: 8px;
    --sizing-base: 16px;
    --sizing-md: 24px;
    --sizing-lg: 40px;
    --sizing-xl: 64px;

    --text-xs: 0.625rem;
    --text-sm: 0.75rem;
    --text-base: 1rem;
    --text-md: 1.125rem;
    --text-title: 1.25rem;
    --text-lg: 1.5rem; 
    --text-xl: 3rem;

    --device-xs-max-width: 419px;
    --device-sm-max-width: 767px;
    --device-md-max-width: 1023px;
    --device-lg-max-width: 1441px;

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;

    --color-outline: rgba(0,125,250,0.6);

  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100%;
    cursor:none;
  }

  body {
    overflow:hidden;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-post-background);
    -webkit-font-smoothing: antialiased;

    * {
      color: var(--color-text);
    }
  }

  :lang(ko) {
    word-break: keep-all; 
  }

  ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, hgroup, p, blockquote, figure, form, fieldset, input, legend, pre, abbr, button {
    margin: 0;
    padding: 0;
  }

  h1 a, li a  {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 4px solid var(--color-outline);
    outline-offset: 1px;
  }



 
`

export default GlobalStyle
