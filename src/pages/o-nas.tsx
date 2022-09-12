import React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import BootstrapContainer from '../components/SharedComponents/BootstrapContainer'
import Header from '../components/SharedComponents/Header/Header'
import Chessboard from '../components/Chessboard/Chessboard'

const AboutUs = ({ data }: PageProps<any>) => {
  const chessboard =
    data.allWpPage.edges[0].node.subpages.subpageElasticContent[0]
      .acfChessboardsection

  return (
    <Layout>
      <Header>O nas</Header>
      <BootstrapContainer>
        <Chessboard chessboard={chessboard} />
      </BootstrapContainer>
    </Layout>
  )
}

export default AboutUs

export const query = graphql`
  query AboutUsQuery {
    allWpPage(filter: { slug: { eq: "o-nas" } }) {
      edges {
        node {
          id
          subpages {
            subpageElasticContent {
              ... on WpPage_Subpages_SubpageElasticContent_Chessboard {
                fieldGroupName
                acfChessboardsection {
                  acfChessboardsectionheading
                  acfChessboardsectionimg {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          transformOptions: { fit: COVER }
                          formats: WEBP
                          placeholder: BLURRED
                        )
                      }
                    }
                  }
                  acfChessboardsectionimgpos
                  acfChessboardsectionparagraph
                }
              }
            }
          }
        }
      }
    }
  }
`
