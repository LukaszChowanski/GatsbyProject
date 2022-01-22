import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Hero from '../Hero/Hero'
import SimpleSection from '../SimpleSection'

const HomeFlexibleContent = () => {
  const data = useStaticQuery(dataToFetch)

  const { flexibleContent } = data.wpPage.homepage

  console.log(flexibleContent)
  return (
    <>
      {flexibleContent.map((item, index) => {
        switch (item.fieldGroupName) {
          case 'page_Homepage_FlexibleContent_Simplesection':
            return <SimpleSection key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Hero':
            return <Hero key={index} {...item} />
        }
      })}
    </>
  )
}

export default HomeFlexibleContent

const dataToFetch = graphql`
  query FlexibleHome {
    wpPage(uri: { eq: "/" }) {
      homepage {
        flexibleContent {
          ... on WpPage_Homepage_FlexibleContent_Hero {
            heroMainheading
            heroModalbtncontent
            heroParagraph
            heroSubheading
            heroBgimg {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: { fit: COVER }
                  )
                }
              }
              sourceUrl
            }
            fieldGroupName
          }
          ... on WpPage_Homepage_FlexibleContent_Simplesection {
            fieldGroupName
            simplesectionHeading
            simplesectionParagraph
            simplesectionLink {
              target
              title
              url
            }
            simplesectionBgimg {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: { fit: COVER }
                  )
                }
              }
            }
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
    }
  }
`
