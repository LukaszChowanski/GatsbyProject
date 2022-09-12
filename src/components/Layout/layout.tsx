/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useRef } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'

import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import theme from './theme'
import GlobalStyle from './GlobalStyle'
import ContactForm from '../SharedComponents/ContactForm/ContactForm'
import ModalContext from '../../ModalContext'
import useModal from './useModal'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const clickRef = useRef<HTMLDivElement>(null)
  const [isVisible, openModal, closeModal] = useModal(clickRef)

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ openModal }}>
        <MainContainer>
          <GlobalStyle />
          <header>
            <Nav />
          </header>

          <main>{children}</main>
          <Footer />
          <Modal isActive={isVisible}>
            <ContactForm ref={clickRef} closeModal={closeModal} />
          </Modal>
        </MainContainer>
      </ModalContext.Provider>
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
const Modal = styled.div<{ isActive: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  backdrop-filter: blur(8px);
  display: none;
  place-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      display: grid;
    `}

  & > div {
    padding: 1rem;

    ${({ theme }) => theme.b_small} {
      width: 100%;
    }
  }
`
