import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
{
  wpgraphql {
    pageBy(uri: "/") {
      title
    }
  }
}
`

const IndexPage = (props) => {

  const {title} = props.data.wpgraphql.pageBy

  return(
    <Layout>
      <SEO title={title} />
      <StyledMain>
        index.js
      </StyledMain>
    </Layout>
  )
}

export default IndexPage

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 70% 30%; 
    margin: 0 auto;
    max-width: 1140px;
    & h1 {
        font-size: 62px;
    }
`
