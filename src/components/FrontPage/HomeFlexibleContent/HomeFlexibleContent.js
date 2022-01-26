import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Hero from '../Hero/Hero'
import SimpleSection from '../SimpleSection/SimpleSection'
import WhatDoYouGain from '../WhatDoYouGain/WhatDoYouGain'
import TimeLine from '../TimeLine/TimeLine'

const HomeFlexibleContent = () => {
  const data = useStaticQuery(dataToFetch)

  const { flexibleContent } = data.wpPage.homepage
  // console.log(flexibleContent)
  return (
    <>
      {flexibleContent.map((item, index) => {
        switch (item.fieldGroupName) {
          case 'page_Homepage_FlexibleContent_Simplesection':
            return <SimpleSection key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Hero':
            return <Hero key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Whatdoyougain':
            return <WhatDoYouGain key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Timeline':
            return <TimeLine key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Blogposts':
            return <p key={index}>Blog Posts</p>
          case 'page_Homepage_FlexibleContent_Reviews':
            return <p key={index}>Reviews</p>
          case 'page_Homepage_FlexibleContent_Accordion':
            return <p key={index}>Akordeonik</p>
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
                  gatsbyImageData(transformOptions: { fit: COVER })
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
                  gatsbyImageData(transformOptions: { fit: COVER })
                }
              }
            }
          }
          ... on WpPage_Homepage_FlexibleContent_Whatdoyougain {
            fieldGroupName
            whatdoyougainBtntext
            whatdoyougainHeading
            whatdoyougainParagraph
            whatdoyougainImg {
              localFile {
                childImageSharp {
                  gatsbyImageData(transformOptions: { fit: COVER })
                }
              }
            }
          }
          ... on WpPage_Homepage_FlexibleContent_Timeline {
            fieldGroupName
            fieldGroupName
            timelineHeading
            timelineParagraph
            timelineModaltext
            timelineRepeater {
              timelineIcon {
                sourceUrl
              }
              timelineSubheading
              timelineSubparagraph
            }
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
