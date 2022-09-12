import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Header from '../components/SharedComponents/Header/Header'
import Accordion from '../components/FrontPage/Accordion/Accordion'

const Faq = ({ data }: any): JSX.Element => {
  const qa = data.wpPage.subpages.subpageElasticContent[0].accordionList
  const title = data.site.siteMetadata.title
  return (
    <Layout>
      <Seo title={title} />
      <Header title={data.wpPage.title}></Header>
      <Accordion qaArray={qa} />
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
