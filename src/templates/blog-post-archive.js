import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import BootstrapContainer from "../components/SharedComponents/BootstrapContainer"
import BgImg from '../images/hero_bg_optimized.jpg'

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
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
      <Header>
        <ImgContainer>
          <img src={BgImg} alt="zdjęcie" />
        </ImgContainer>
        <BootstrapContainer>
          <h1>Blog</h1>
        </BootstrapContainer>
      </Header>
      <BootstrapContainer>
        <StyledOl>
          {posts.map(post => {
            const {title, uri} = post,
            sourceUrl = post.featuredImage.node.sourceUrl

            return (
              <li key={post.uri}>
                    <img src={sourceUrl} alt="" />
                    <h3>{parse(title)}</h3>
                    <p itemProp="description">{parse(post.excerpt)}</p>
                    <StyledLink to={uri}>Czytaj więcej</StyledLink>
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

const StyledLink = styled(Link)`
  color: #707070;
  margin-top: 1rem;
  box-shadow: 0px 8px 16px #00000028;
  margin-top: auto;
  justify-self: flex-end;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

const ImgContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #f8f8f8;
    border-radius: 0 32px 500px 0;
    z-index: 0;
  }
`

const Header = styled.header`
  margin-bottom: 3rem;
  display: grid;

  img {
    position: relative;
    width: calc(100% - 5rem);
    height: 230px;
    border-radius: 0 32px 500px 0;
  }
  
  & > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }

  & > div {
    display: flex;
    align-items: flex-end;
    position: relative;
  }
  h1 {
    margin-bottom: 2rem;
    color: #fff;
  }
`

const StyledOl = styled.ol`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    margin-top: 0;
    padding-top: 1rem;

    li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    height: 230px;
    width: 100%;
    box-shadow: 0px 3px 24px #00000029;
    border-radius: 32px;
    object-fit: cover;
    object-position: center;
  }

  .h3 {
    color: #707070;
    margin-block: 8px;
  }

  p {
    color: #707070;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  Link {
    justify-self: flex-end;
    margin-top: auto;
  }
`

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
            title
            uri
            id
            sourceUrl
          }
        }
      }
    }
  }
`