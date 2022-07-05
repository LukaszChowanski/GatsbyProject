import { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto-condensed'
import '@fontsource/roboto-condensed/700.css'
import theme from './theme'

const { c_headings, c_paragraphs, c_btnLight } = theme

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1,
.h1 {
  font: normal normal 700 64px/64px "Roboto Condensed", sans-serif;
  color: ${c_headings};
}

h2,
.h2 {
  font: normal normal 700 32px/32px "Roboto Condensed", sans-serif;
  color: ${c_headings};
}

h3,
.h3 {
  font: normal normal 700 28px/28px "Roboto Condensed", sans-serif;
  color: ${c_headings};
}

p,
.p,
span,
label,
li {
  font: normal normal 400 20px/23px "Roboto Condensed", sans-serif;
  color: ${c_paragraphs};
  margin-top: 0;
  margin-bottom: 0;

  &--small {
    font: normal normal 400 16px/20px "Roboto Condensed", sans-serif;
  }
}

h1,
h2,
h3 {
  margin-top: 0;
  margin-bottom: 0;
}

.bold {
  font-weight: 700;
}

button,
a {
  font: normal normal 400 18px/21px "Roboto Condensed", sans-serif;
  padding: 4px 16px;
  text-decoration: none;
  border-radius: 4px;
  color: ${c_btnLight};
  width: max-content;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

img {
  max-width: 100%;
  border-radius: 16px;
}

@media (max-width: 768px) {
  h1,
  .h1 {
    font: normal normal 700 55px/55px "Roboto Condensed", sans-serif;
  }

  h2,
  .h2 {
    font: normal normal 700 27px/27px "Roboto Condensed", sans-serif;
  }

  h3,
  .h3 {
    font: normal normal 700 24px/24px "Roboto Condensed", sans-serif;
  }

  p,
  .p,
  span,
  label,
  li {
    font: normal normal 400 16px/22px "Roboto Condensed", sans-serif;
    margin-top: 0;
  margin-bottom: 0;

    &--small {
      font: normal normal 400 14px/19px "Roboto Condensed", sans-serif;
    }
  }
  button,
  a {
    font: normal normal 400 16px/21px "Roboto Condensed", sans-serif;
  }
}
`
export default GlobalStyle
