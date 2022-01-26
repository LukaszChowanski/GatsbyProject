import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { memo } from 'react'
import styled, { css } from 'styled-components'

import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import StyledLink from '../../SharedComponents/StyledLink'

const SimpleSection = ({
  simplesectionHeading,
  simplesectionParagraph,
  simplesectionLink,
  simplesectionBgimg
}) => {
  const img = simplesectionBgimg ? getImage(simplesectionBgimg.localFile) : null

  const isImage = simplesectionBgimg ? true : false
  return (
    <StyledSection>
      <BootstrapContainer>
        <Background>
          {simplesectionBgimg?.localFile ? (
            <ImageContainer image={img} alt="zdjecie" />
          ) : (
            <PlaceholderBackground />
          )}
        </Background>
        <Content isImage={isImage}>
          <h2>{simplesectionHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: simplesectionParagraph }}></p>
          {simplesectionLink && (
            <StyledLink to={simplesectionLink.url}>
              {simplesectionLink.title}
            </StyledLink>
          )}
        </Content>
      </BootstrapContainer>
    </StyledSection>
  )
}

export default memo(SimpleSection)

const StyledSection = styled.section`
  width: 100%;
  margin: 5rem 0;

  & > div {
    position: relative;
  }
`
const ImageContainer = styled(GatsbyImage)`
  position: absolute;
  inset: 0;
  background-color: #f8f8f8;
  border-radius: 32px 32px 500px 32px;
  width: calc(100% - 5rem);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 32px 32px 500px 32px;
    background-color: #70707080;
    z-index: 1;
  }

  img {
    border-radius: 32px 32px 500px 32px;

    @media (max-width: 767px) {
      width: calc(100% - 1rem);
      border-radius: 32px 32px 150px 32px;
    }
  }

  @media (max-width: 767px) {
    width: calc(100% - 1rem);
    border-radius: 32px 32px 150px 32px;

    &::before {
      border-radius: 32px 32px 150px 32px;
    }
  }
`

const PlaceholderBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-color: #f8f8f8;
  border-radius: 32px 32px 500px 32px;
  width: calc(100% - 5rem);

  @media (max-width: 767px) {
    width: calc(100% - 1rem);
    border-radius: 32px 32px 150px 32px;
  }
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  background-color: #f8f8f880;
  border-radius: 32px 32px 500px 32px;

  @media (max-width: 767px) {
    border-radius: 32px 32px 150px 32px;
  }
`

const Content = styled.article`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: calc(100% - 7rem);
  position: relative;
  z-index: 4;
  gap: 1rem;

  @media (max-width: 767px) {
    width: calc(100% - 2rem);
  }

  ${({ isImage }) =>
    isImage &&
    css`
      h2,
      p {
        color: #fff;
      }
    `}

  h2 {
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      height: 2px;
      width: min(64px, 100%);
      background-color: #b70000;
      box-shadow: 0px 3px 6px #b7000080;
    }
  }
  p {
    font: normal normal normal 20px/23px 'PT Sans';
  }
`
