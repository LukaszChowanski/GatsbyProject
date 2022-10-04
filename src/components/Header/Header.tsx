import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import BootstrapContainer from '../SharedComponents/BootstrapContainer'
import ModalButton from '../SharedComponents/ModalButton/ModalButton'

import { StyledNav, MenuListOfElements, Burger } from './style'

const Header = () => {
  const data = useStaticQuery(navData),
    menuItems = data.wpMenu.menuItems.nodes

  const [isHidden, setIsHidden] = useState(true)

  const handleBurgerClick = () => {
    setIsHidden(prev => !prev)
  }

  return (
    <header>
      <StyledNav>
        <BootstrapContainer>
          <Link to="/" title="Strona główna">
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>
          <MenuListOfElements mobile={isHidden}>
            {menuItems &&
              menuItems.map(({ databaseId, label, path }) => {
                return (
                  <li key={databaseId}>
                    <Link to={path} title={label}>
                      {label}
                    </Link>
                  </li>
                )
              })}
          </MenuListOfElements>
          <ModalButton>Umów się</ModalButton>
          <Burger onClick={handleBurgerClick} aria-label="main menu toggle" />
        </BootstrapContainer>
      </StyledNav>
    </header>
  )
}

const navData = graphql`
  query MenuQuery {
    wpMenu(locations: { eq: MAIN_MENU }) {
      menuItems {
        nodes {
          id
          url
          path
          label
          databaseId
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Header
