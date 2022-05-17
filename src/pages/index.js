import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import HomeFlexibleContent from '../components/FrontPage/HomeFlexibleContent'
import ContactForm from '../components/SharedComponents/ContactForm/ContactForm'

const IndexPage = props => {
  const { title } = props.data.site.siteMetadata

  return (
    <Layout>
      <Seo title={title} />
      <HomeFlexibleContent />
      <ContactForm />
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
