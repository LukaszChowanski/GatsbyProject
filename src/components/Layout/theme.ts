const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

const theme = {
  f_thin: 300,
  f_regular: 400,
  f_bold: 700,
  c_headings: '#707070',
  c_headingsLight: '#fff',
  c_paragraphs: '#707070',
  c_paragraphsLight: '#fff',
  c_decoration: '#4188FF',
  c_decorationBs: '#4188FFa1',
  c_btns: '#707070',
  c_btnLight: '#fff',
  c_bullets: '#707070',
  c_btnBg: '#fff',
  c_btnBgBs: '#00000028',
  c_btnBgColored: '#649EFF',
  c_btnBgColoredBs: '#649EFF20',
  c_bg400: '#f8f8f8',
  c_bg500: '#f8f8f891',
  c_bg600: '#f8f8f880',
  c_bg700: '#707070',
  b_medium: customMediaQuery(1064),
  b_small: customMediaQuery(768),
  b_xs: customMediaQuery(525)
}

export default theme
