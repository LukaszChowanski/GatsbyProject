import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Header from '../components/SharedComponents/Header/Header'
import Accordion from '../components/FrontPage/Accordion/Accordion'

const Faq = props => {
  const qa = props.data.wpPage.subpages.subpageElasticContent[0].accordionList
  const title = props.data.site.siteMetadata.title
  return (
    <Layout>
      <Seo title={title} />
      <Header title={props.data.wpPage.title}></Header>
      <Accordion qaArray={qa}></Accordion>
    </Layout>
  )
}

export default Faq

export const pageQuery = graphql`
  query FlexibleFAQ {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(slug: { eq: "faq" }) {
      id
      subpages {
        subpageElasticContent {
          ... on WpPage_Subpages_SubpageElasticContent_Accordion {
            fieldGroupName
            accordionList {
              accordionAnswer
              accordionQuestion
            }
          }
        }
      }
      title
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
