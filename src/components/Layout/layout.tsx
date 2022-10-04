/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import { ModalProvider } from '../../context/ModalContext'
import theme from './theme'
import GlobalStyle from './GlobalStyle'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <MainContainer>
          <GlobalStyle />
          <Header />
          <main>{children}</main>
          <Footer />
          <Modal />
        </MainContainer>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Layout

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
`
