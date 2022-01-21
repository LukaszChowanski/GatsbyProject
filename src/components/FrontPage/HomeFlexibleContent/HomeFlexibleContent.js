import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const HomeFlexibleContent = () => {
  const data = useStaticQuery(dataToFetch)

  const { flexibleContent } = data.wpPage.homepage

  console.log(flexibleContent)
  return (
    <>
      {flexibleContent.map(item => {
        switch (item.fieldGroupName) {
          case 'page_Homepage_FlexibleContent_Simplesection':
            return <p>"page_Homepage_FlexibleContent_Simplesection"</p>
          case 'page_Homepage_FlexibleContent_Hero':
            return <p>Hero</p>
        }
      })}
    </>
  )
}

const dataToFetch = graphql`
  query FlexibleHome {
    wpPage(uri: { eq: "/" }) {
      homepage {
        flexibleContent {
          ... on WpPage_Homepage_FlexibleContent_Hero {
            heroSubheading
            heroParagraph
            heroModalbtncontent
            heroMainheading
            fieldGroupName
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
    }
  }
`

export default HomeFlexibleContent
