import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

const flexibleContent = graphql`
query HeroQuery {
    wpgraphql {
      pageBy(uri: "/") {
        homepage {
          flexibleContent {
            ... on WPGRAPHQL_Page_Homepage_FlexibleContent_Hero {
              fieldGroupName
              heroMainheading
              heroParagraph
              heroModalbtncontent
              heroSubheading
              heroBgimg {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
  
`

const Hero = () => {

    const data = useStaticQuery(flexibleContent),
    {   heroMainheading,
        heroSubheading,
        heroParagraph,
        heroModalbtncontent,
    } = data.wpgraphql.pageBy.homepage.flexibleContent[0]

    console.log(data)

    return (
        <BootstrapContainer>
            <h1>{heroMainheading}</h1>
            <h2>{heroSubheading}</h2>
            <p>{heroParagraph}</p>
            <button>{heroModalbtncontent}</button>
            <button>Dowiedz się więcej</button>
       </BootstrapContainer>
    )
}

export default Hero