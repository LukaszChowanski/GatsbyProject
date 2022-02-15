import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import styled from 'styled-components'
import BootstrapContainer from '../components/SharedComponents/BootstrapContainer'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = props => {
  const reviewArray = props.data.allWpOpinia.nodes

  return (
    <Layout>
      <Seo title="Opinie" />
      <StyledHeader>
        <StaticImage src="../images/hero_bg_optimized.jpg" alt="dokumenty" />
        <Container>
          <h1>Opinie</h1>
        </Container>
      </StyledHeader>
      <BootstrapContainer>
        <ReviewsList>
          {reviewArray.map((item, index) => {
            return (
              <li key={index}>
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
              </li>
            )
          })}
        </ReviewsList>
      </BootstrapContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query Opinie {
    allWpOpinia(sort: { fields: date, order: DESC }) {
      nodes {
        content
        uri
        title
      }
    }
  }
`
const ReviewsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 6rem;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.c_bg400};
    padding: 1rem;
  }
`

const Container = styled(BootstrapContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 112px;
  z-index: 3;
`

const StyledHeader = styled.header`
  width: 100%;
  position: relative;
  min-height: 200px;

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 0 32px 500px 0;

    img {
      border-radius: 0;
    }
    ${({ theme }) => theme.b_medium} {
      border-radius: 0 32px 150px 0;
    }

    ${({ theme }) => theme.b_small} {
      width: calc(100% - 1rem);
      border-radius: 0 32px 64px 0;
    }
  }

  & h1 {
    text-align: left;
    color: ${({ theme }) => theme.c_headingsLight};
    max-width: calc(100% - 2rem);
  }

  &::before {
    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.c_bg400};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 32px 500px 0;
    z-index: 0;
  }

  &::after {
    content: ' ';
    position: absolute;
    background-color: #707070a1;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 0 32px 500px 0;
    z-index: 2;
  }

  ${({ theme }) => theme.b_medium} {
    &::before {
      border-radius: 0 32px 150px 0;
    }

    &::after {
      border-radius: 0 32px 150px 0;
      width: calc(100% - 1rem);
    }
  }

  ${({ theme }) => theme.b_small} {
    h1 {
      text-align: center;
    }

    &::before {
      border-radius: 0 32px 64px 0;
    }

    &::after {
      border-radius: 0 32px 64px 0;
      width: calc(100% - 1rem);
    }
  }
`
