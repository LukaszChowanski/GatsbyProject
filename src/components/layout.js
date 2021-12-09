/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'

import Footer from './Footer/Footer'
import Nav from'./Nav/Nav'


const theme = {
  font: {
    thin: 300,
    regular: 400,
    bold: 700
  },
  colors: {
    btnLight: "hotpink",
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const Layout = ({ children }) => {

  return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyle/>
          <Nav/>
          <main>{children}</main>
          <Footer/>
        </MainContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1140px;
`