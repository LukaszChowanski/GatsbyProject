import React, { useRef } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import HomeFlexibleContent from '../components/FrontPage/HomeFlexibleContent/HomeFlexibleContent'

const IndexPage = props => {
  const { title } = props.data.site.siteMetadata
  const myRef = useRef(null)

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
    wpPage(slug: { eq: "/" }) {
      id
      homepage {
        flexibleContent {
          ... on WpPage_Homepage_FlexibleContent_Hero {
            heroModalbtncontent
          }
          ... on WpPage_Homepage_FlexibleContent_Simplesection {
            fieldGroupName
            simplesectionHeading
          }
          ... on WpPage_Homepage_FlexibleContent_Whatdoyougain {
            fieldGroupName
            whatdoyougainBtntext
          }
          ... on WpPage_Homepage_FlexibleContent_Timeline {
            fieldGroupName
            timelineHeading
          }
          ... on WpPage_Homepage_FlexibleContent_Blogposts {
            fieldGroupName
          }
          ... on WpPage_Homepage_FlexibleContent_Reviews {
            fieldGroupName
          }
          ... on WpPage_Homepage_FlexibleContent_Accordion {
            fieldGroupName
          }
          ... on WpPage_Homepage_FlexibleContent_Appointment {
            appointementShortcode
            fieldGroupName
          }
        }
      }
      featuredImageId
    }
  }
`
