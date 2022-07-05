import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

const Footer = () => {
  const {
    wpMenu: {
      menuItems: { nodes }
    }
  } = useStaticQuery(footerNavigation)

  return (
    <Container>
      <FooterContainer>
        <p>Portfolio projekt Gatsby.js</p>
        <nav>
          <ul>
            {nodes &&
              nodes.map((item, index) => (
                <li key={index} style={{ color: 'red' }}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </nav>
        <a href="https://www.pexels.com/">Zdjecia: https://www.pexels.com/</a>
      </FooterContainer>
    </Container>
  )
}

export default Footer

const Container = styled(BootstrapContainer)`
  margin-top: auto;
`

const FooterContainer = styled.footer`
  justify-self: flex-end;
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 22px;
  border-radius: 32px 32px 0 0;
  box-shadow: 0px 8px 16px #00000029;
  border-bottom: 3px solid ${({ theme }) => theme.c_decoration};

  ${({ theme }) => theme.b_small} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  nav {
    margin-inline: auto;
  }

  ul {
    margin-block: 0;
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  a,
  p {
    color: ${({ theme }) => theme.c_btns};
  }

  p {
    padding-inline: 1rem;
  }
`
const footerNavigation = graphql`
  query FooterMenu {
    wpMenu(locations: { eq: FOOTER_MENU }) {
      id
      menuItems {
        nodes {
          path
          label
        }
      }
    }
  }
`
