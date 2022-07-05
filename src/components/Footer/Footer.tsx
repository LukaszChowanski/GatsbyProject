import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container, FooterContainer } from './style'

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
