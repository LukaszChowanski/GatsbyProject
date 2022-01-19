import React, { useRef } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Hero from '../components/FrontPage/Hero/Hero'
import SimpleSection from '../components/FrontPage/SimpleSection'
import styled from 'styled-components'

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const IndexPage = props => {
  const { title } = props.data.site.siteMetadata
  const myRef = useRef(null)

  return (
    <Layout>
      <Seo title={title} />
      <Hero element={myRef} />
      <SimpleSection ref={myRef} />
      <Article />
      <Article />
      <Article />
    </Layout>
  )
}

export default IndexPage

const Article = styled.article`
  height: 100vh;
`
