import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

import { StyledNav, MenuListOfElements, Button} from './style'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

const navData = graphql`
query MyQuery {
  wpMenu(locations: {eq: MAIN_MENU}) {
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
    return (
      
        <StyledNav>
          <BootstrapContainer>
                <div> {siteTitle} </div>
                <MenuListOfElements>
                  {menuItems && menuItems.map( ({path, databaseId, label}) => 
                    <li key={databaseId}><Link to={path}>{label}</Link></li>)}
                </MenuListOfElements>
                <Button>Umów się na bezpłatną konsultację</Button>
          </BootstrapContainer>
        </StyledNav>   
    )
}

export default Nav