/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import Footer from './Footer/Footer'
import Nav from'./Nav/Nav'

const Layout = ({ children }) => {

  return (
    <MainContainer>
      <Nav/>
      <main>{children}</main>
      <Footer/>
    </MainContainer>
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