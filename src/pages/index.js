import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Hero from "../components/FrontPage/Hero"

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
        <Hero/>
      </StyledMain>
    </Layout>
  )
}

export default IndexPage

const StyledMain = styled.main`
  background: #70707001;
`
