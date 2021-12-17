import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'
import styled from 'styled-components'

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
        heroBgimg : {
          sourceUrl
        }
    } = data.wpgraphql.pageBy.homepage.flexibleContent[0]

    console.log(data)

    return (
        <StyledSection>
          <img src={sourceUrl} alt="zdjecie" />
        <BootstrapContainer>
            <h1>{heroMainheading}</h1>
            <h2>{heroSubheading}</h2>
            <p>{heroParagraph}</p>
            <button>{heroModalbtncontent}</button>
            <button>Dowiedz się więcej</button>
       </BootstrapContainer>
       </StyledSection>
    )
}

export default Hero

const StyledSection = styled.section`
    width: 100%;
    position: relative;
    min-height: 500px;

    & > div {
      position: relative;
    }

    & h1,h2,p {
      color: ${({theme}) => theme.colors.headingsLight}
    }

    &::before {
        content: " ";
        position: absolute;
        background-color: #70707020;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 32px 32px 500px 32px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 5rem);
      height: 100%;
      border-radius: 32px 32px 500px 32px;
    }
`