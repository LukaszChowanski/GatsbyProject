/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import theme from './theme'
import GlobalStyle from './GlobalStyle'
import ContactForm from '../SharedComponents/ContactForm/ContactForm'
import ModalContext from '../../ModalContext'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const clickRef = useRef<HTMLDivElement>(null)

  const openModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setIsVisible(true)
  }

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setIsVisible(false)
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (clickRef.current && !clickRef.current.contains(e.target as Node)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClick)
    }

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [isVisible])

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
          {isVisible && (
            <Modal>
              <ContactForm ref={clickRef} closeModal={closeModal} />
            </Modal>
          )}
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
`
const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  backdrop-filter: blur(8px);
  display: grid;
  place-content: center;
  & > div {
    padding: 1rem;

    ${({ theme }) => theme.b_small} {
      width: 100%;
    }
  }
`
