import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout/layout'
import BootstrapContainer from '../components/SharedComponents/BootstrapContainer'
import Header from '../components/SharedComponents/Header/Header'

const AboutUs = ({ data }) => {
  const chessboard =
    data.allWpPage.edges[0].node.subpages.subpageElasticContent[0]
      .acfChessboardsection

  return (
    <Layout>
      <Header>O nas</Header>
      <BootstrapContainer>
        {chessboard.map((field, index) => {
          const image = getImage(field.acfChessboardsectionimg.localFile)

          return (
            <Article key={index}>
              {index % 2 === 0 && <GatsbyImage image={image} alt="" />}
              <ArticleContent>
                <h2>{field.acfChessboardsectionheading}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: field.acfChessboardsectionparagraph
                  }}
                ></p>
              </ArticleContent>
              {index % 2 === 1 && <GatsbyImage image={image} alt="" />}
            </Article>
          )
        })}
      </BootstrapContainer>
    </Layout>
  )
}

export default AboutUs

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    position: relative;
    margin-bottom: 2rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 50px;
      height: 2px;
      background-color: ${({ theme }) => theme.c_decoration};
      box-shadow: 0 2px 4px ${({ theme }) => theme.c_decorationBs};
    }
  }
`

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
