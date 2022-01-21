import React, { memo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BootstrapContainer from '../SharedComponents/BootstrapContainer'

const SimpleSection = React.forwardRef((props, ref) => {
  const data = useStaticQuery(flexibleContent),
    { simplesectionHeading, simplesectionParagraph } =
      data.wpPage.homepage.flexibleContent[1]

  return (
    <StyledSection ref={ref}>
      <BootstrapContainer>
        <h1>{simplesectionHeading}</h1>
        <TheContentArticle
          dangerouslySetInnerHTML={{ __html: simplesectionParagraph }}
        ></TheContentArticle>
      </BootstrapContainer>
    </StyledSection>
  )
})

export default memo(SimpleSection)

const StyledSection = styled.section`
  width: 100%;
  padding: 5rem 0;
`
const TheContentArticle = styled.article`
  p {
    font: normal normal normal 20px/23px 'PT Sans';
  }
`

const flexibleContent = graphql`
  query SimpleSectionQuery {
    wpPage(uri: { eq: "/" }) {
      homepage {
        flexibleContent {
          ... on WpPage_Homepage_FlexibleContent_Simplesection {
            simplesectionHeading
            simplesectionParagraph
            simplesectionLink {
              target
              title
              url
            }
          }
        }
      }
    }
  }
`
