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
                  {menuItems && menuItems.map( ({path, url, databaseId, label}) => {
                    if(url === "http://nas.gansa.pl/2021/rsgrupa/") {
                      return <li key={databaseId}><Link to="/">{label}</Link></li>
                    }
                    return <li key={databaseId}><Link to={url}>{label}</Link></li>
                  })}
                </MenuListOfElements>
                <Button>Umów się na bezpłatną konsultację</Button>
          </BootstrapContainer>
        </StyledNav>   
    )
}

export default Nav