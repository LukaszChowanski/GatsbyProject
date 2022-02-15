import { createGlobalStyle } from 'styled-components'
import '@fontsource/pt-sans'
import '@fontsource/pt-sans/700.css'
import theme from './theme'

const { c_headings, c_paragraphs, c_btnLight } = theme

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1,
.h1 {
  font: normal normal 700 64px/64px "PT Sans", sans-serif;
  color: ${c_headings};
}

h2,
.h2 {
  font: normal normal 700 32px/32px "PT Sans", sans-serif;
  color: ${c_headings};
}

h3,
.h3 {
  font: normal normal 700 28px/28px "PT Sans", sans-serif;
  color: ${c_headings};
}

p,
.p,
span,
label,
li {
  font: normal normal 400 20px/23px "PT Sans", sans-serif;
  color: ${c_paragraphs};
  margin-top: 0;
  margin-bottom: 0;

  &--small {
    font: normal normal 400 16px/18px "PT Sans", sans-serif;
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
  font: normal normal 400 18px/21px "PT Sans", sans-serif;
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
  border-radius: 32px;
}

@media (max-width: 768px) {
  h1,
  .h1 {
    font: normal normal 700 55px/55px "PT Sans", sans-serif;
  }

  h2,
  .h2 {
    font: normal normal 700 27px/27px "PT Sans", sans-serif;
  }

  h3,
  .h3 {
    font: normal normal 700 24px/24px "PT Sans", sans-serif;
  }

  p,
  .p,
  span,
  label,
  li {
    font: normal normal 400 16px/18px "PT Sans", sans-serif;
    margin-top: 0;
  margin-bottom: 0;

    &--small {
      font: normal normal 400 14px/16px "PT Sans", sans-serif;
    }
  }
  button,
  a {
    font: normal normal 400 16px/21px "PT Sans", sans-serif;
  }
}
`
export default GlobalStyle
