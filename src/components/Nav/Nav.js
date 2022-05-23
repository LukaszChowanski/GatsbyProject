import React, { useContext, useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { StyledNav, MenuListOfElements, Button, Burger, Logo } from './style'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

import ModalContext from '../../ModalContext'
import { StaticImage } from 'gatsby-plugin-image'

const Nav = () => {
  const data = useStaticQuery(navData),
    menuItems = data.wpMenu.menuItems.nodes

  const [isHidden, setIsHidden] = useState(true)
  const { openModal } = useContext(ModalContext)

  const handleBurgerClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <StyledNav>
      <BootstrapContainer>
        <Link to="/">
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
                  <Link to={path}>{label}</Link>
                </li>
              )
            })}
        </MenuListOfElements>
        <Button onClick={openModal}>Umów się na bezpłatną konsultację</Button>
        <Burger onClick={handleBurgerClick} aria-label="main menu toggle" />
      </BootstrapContainer>
    </StyledNav>
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

export default Nav
