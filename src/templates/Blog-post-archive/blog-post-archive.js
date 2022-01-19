import React from 'react'
import { Link, graphql } from 'gatsby'
import parse from 'html-react-parser'

import Layout from '../../components/Layout/layout'
import Seo from '../../components/seo'
import BootstrapContainer from '../../components/SharedComponents/BootstrapContainer'
import BgImg from '../../images/hero_bg_optimized.jpg'
import { StyledLink, StyledOl } from './style'
import Header from '../../components/SharedComponents/Header/Header'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath }
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Blog post archive" />
      <Header title="Blog" background={BgImg} />
      <BootstrapContainer>
        <StyledOl>
          {posts.map(post => {
            const { title, uri } = post,
              sourceUrl = post.featuredImage.node.sourceUrl,
              img = getImage(post.featuredImage.node.localFile)

            return (
              <li key={post.uri}>
                <GatsbyImage
                  image={img}
                  alt="zdjęcie"
                  width="384"
                  height="230"
                />
                {/* <img src={sourceUrl} alt="" /> */}
                <h2>{parse(title)}</h2>
                {parse(post.excerpt)}
                <StyledLink to={uri} aria-label="czytaj więcej">
                  Czytaj więcej
                </StyledLink>
              </li>
            )
          })}
        </StyledOl>
      </BootstrapContainer>
      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
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
    }
  }
`
