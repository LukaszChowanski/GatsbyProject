import React from 'react'
import { graphql } from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"
import parse from 'html-react-parser'

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

// import Bio from "../components/bio"
import Layout from '../../components/Layout/layout'
import Seo from '../../components/seo'
import Header from '../../components/SharedComponents/Header/Header'
import BootstrapContainer from '../../components/SharedComponents/BootstrapContainer'
import { StyledArticle, StyledUl, StyledLink } from './style'
import { getImage } from 'gatsby-plugin-image'
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
  const image = getImage(post.featuredImage.node.localFile)

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <StyledArticle>
        <Header
          title={post.title}
          background={featuredImage.sourceUrl}
          gatsbyImage={image}
        />

        <BootstrapContainer>
          {!!post.content && (
            <section itemProp="articleBody">{parse(post.content)}</section>
          )}
        </BootstrapContainer>
      </StyledArticle>

      <nav className="blog-post-nav">
        <BootstrapContainer>
          <StyledUl>
            <li>
              {previous && (
                <StyledLink to={previous.uri} rel="prev">
                  <span>← {parse(previous.title)}</span>
                </StyledLink>
              )}
            </li>

            <li>
              {next && (
                <StyledLink to={next.uri} rel="next">
                  <span>{parse(next.title)} →</span>
                </StyledLink>
              )}
            </li>
          </StyledUl>
        </BootstrapContainer>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

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
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                transformOptions: { fit: COVER }
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
