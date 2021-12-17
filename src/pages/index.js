import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Hero from "../components/FrontPage/Hero"
import SimpleSection from "../components/FrontPage/SimpleSection"

export const pageQuery = graphql`
  {
    wpgraphql {
      pageBy(uri: "/") {
        title
      }
    }
  }
`

const IndexPage = props => {
  const { title } = props.data.wpgraphql.pageBy

  return (
    <Layout>
      <SEO title={title} />
      <Hero />
      <SimpleSection />
    </Layout>
  )
}

export default IndexPage
