import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Hero from './Hero/Hero'
import SimpleSection from './SimpleSection/SimpleSection'
import WhatDoYouGain from './WhatDoYouGain/WhatDoYouGain'
import TimeLine from './TimeLine/TimeLine'
import Reviews from './Reviews/Reviews'
import BlogPosts from './BlogPosts/BlogPosts'
import Accordion from './Accordion/Accordion'

const HomeFlexibleContent = () => {
  const data = useStaticQuery(homepageQuery)

  const { flexibleContent } = data.wpPage.homepage
  return (
    <>
      {flexibleContent.map((item, index) => {
        switch (item.fieldGroupName) {
          case 'page_Homepage_FlexibleContent_Simplesection':
            return <SimpleSection key={index} {...item} index={index} />
          case 'page_Homepage_FlexibleContent_Hero':
            return <Hero key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Whatdoyougain':
            return <WhatDoYouGain key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Timeline':
            return <TimeLine key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Blogposts':
            return <BlogPosts key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Reviews':
            return <Reviews key={index} {...item} />
          case 'page_Homepage_FlexibleContent_Accordion':
            return <Accordion key={index} qaArray={item.accordionList} />
        }
      })}
    </>
  )
}

export default HomeFlexibleContent

const homepageQuery = graphql`
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
                  gatsbyImageData
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
                  gatsbyImageData
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
                  gatsbyImageData
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
                localFile {
                  publicURL
                }
              }
              timelineSubheading
              timelineSubparagraph
            }
          }
          ... on WpPage_Homepage_FlexibleContent_Blogposts {
            fieldGroupName
            blogpostsPostlist {
              ... on WpPost {
                id
                slug
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(width: 385, height: 230)
                      }
                    }
                  }
                }
                excerpt
                title
                uri
              }
            }
          }
          ... on WpPage_Homepage_FlexibleContent_Reviews {
            fieldGroupName
            reviewsLink {
              target
              title
              url
            }
            reviewsList {
              ... on WpOpinia {
                title
                content
                id
              }
            }
          }
          ... on WpPage_Homepage_FlexibleContent_Accordion {
            fieldGroupName
            ... on WpPage_Homepage_FlexibleContent_Accordion {
              fieldGroupName
              accordionList {
                accordionAnswer
                accordionQuestion
              }
            }
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
