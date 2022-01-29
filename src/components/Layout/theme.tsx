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
  c_decoration: '#b70000',
  c_decorationBs: '#b7000080',
  c_btns: '#707070',
  c_btnLight: '#fff',
  c_bullets: '#707070',
  c_btnBg: '#fff',
  c_btnBgBs: '#00000028',
  c_btnBgColored: '#12bb45',
  c_btnBgColoredBs: '#12bb457f',
  c_bg400: '#f8f8f8',
  c_bg500: '#f8f8f891',
  c_bg600: '#f8f8f880',
  c_bg700: '#707070',
  b_medium: customMediaQuery(1064),
  b_small: customMediaQuery(768),
  b_xs: customMediaQuery(525)
}

export default theme
