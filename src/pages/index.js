import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import HomeFlexibleContent from '../components/FrontPage/HomeFlexibleContent'

const IndexPage = props => {
  const { title } = props.data.site.siteMetadata

  return (
    <Layout>
      <Seo title={title} />
      <HomeFlexibleContent />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
