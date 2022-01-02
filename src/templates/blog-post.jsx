import React from 'react'
import { Link, graphql } from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"
import parse from 'html-react-parser'
import styled from 'styled-components'

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

// import Bio from "../components/bio"
import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Header from '../components/SharedComponents/Header/Header'
import BootstrapContainer from '../components/SharedComponents/BootstrapContainer'

{
  /* <GatsbyImage
  image={featuredImage.data}
  alt={featuredImage.alt}
  style={{ marginBottom: 50 }}
/> */
}

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    sourceUrl: post.featuredImage?.node?.sourceUrl,
    alt: post.featuredImage?.node?.alt || ``
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article>
        <Header title={post.title} background={featuredImage.sourceUrl} />

        <BootstrapContainer>
          {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
          )}
        </BootstrapContainer>
      </article>

      <nav className="blog-post-nav">
        <BootstrapContainer>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li style={{ maxWidth: '35%', overflow: 'hidden' }}>
              {previous && (
                <StyledLink to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </StyledLink>
              )}
            </li>

            <li style={{ maxWidth: '35%', overflow: 'hidden' }}>
              {next && (
                <StyledLink to={next.uri} rel="next">
                  <span>{parse(next.title)} →</span>
                </StyledLink>
              )}
            </li>
          </ul>
        </BootstrapContainer>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

const StyledLink = styled(Link)`
  color: #707070;
  box-shadow: 0 8px 16px #00000028;
  max-height: 30px;
  display: flex;
  align-items: center;
  overflow: hidden;

  span {
    max-width: 38ch;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
