/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"

const BottomElement = () => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const siteTitle = data.site.siteMetadata.title
    return (
        <Container>
            <div> {siteTitle} </div>
            <Ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
            </Ul>
        </Container>
    )
}

export default BottomElement

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 40px;
    align-items: center;
    background-color: green;
    color: white;
    & a {
        color: white;
    }
    height: 40px;
`
const Ul = styled.ul`
    list-style-type:none;
    display: flex;
    & li{
        margin-right: 5px;
    }
`