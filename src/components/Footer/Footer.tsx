import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container, FooterContainer } from './style'
import { Thanks } from '../FrontPage/BlogPosts/style'

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
        <Thanks>
          <a href="https://www.pexels.com/" target="_blank">
            Zdjecia: https://www.pexels.com/
          </a>
          <a href="https://icons8.com/" target="_blank">
            Ikonki: https://icons8.com/
          </a>
        </Thanks>
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
