import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { StyledNav, MenuListOfElements, Button, Burger } from './style'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

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

const Nav = () => {
  const data = useStaticQuery(navData),
    siteTitle = data.site.siteMetadata.title,
    menuItems = data.wpMenu.menuItems.nodes

  const [isHidden, setIsHidden] = useState(true)

  const handleBurgerClick = () => {
    setIsHidden(!isHidden)
  }

  return (
    <StyledNav>
      <BootstrapContainer>
        <div> {siteTitle} </div>
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
        <Button>Umów się na bezpłatną konsultację</Button>
        <Burger onClick={handleBurgerClick} aria-label="main menu toggle" />
      </BootstrapContainer>
    </StyledNav>
  )
}

export default Nav
