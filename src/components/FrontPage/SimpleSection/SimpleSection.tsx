import { getImage } from 'gatsby-plugin-image'
import React from 'react'

import Container from '../../SharedComponents/Container'
import StyledLink from '../../SharedComponents/StyledLink'

import {
  Content,
  Background,
  PlaceholderBackground,
  ImageContainer,
  StyledSection
} from './style'
import { IProps } from './type'

const SimpleSection = ({
  simplesectionHeading,
  simplesectionParagraph,
  simplesectionLink,
  simplesectionBgimg,
  index
}: IProps) => {
  const img = simplesectionBgimg ? getImage(simplesectionBgimg.localFile) : null

  const anchor = index === 1 ? 'content' : undefined
  const isImage: boolean = img ? true : false

  return (
    <StyledSection id={anchor}>
      <Container>
        <Background>
          {img && <ImageContainer image={img} alt="zdjecie" />}
          {!img && <PlaceholderBackground />}
        </Background>
        <Content isImage={isImage}>
          <h2>{simplesectionHeading}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: simplesectionParagraph }}
          ></div>
          {simplesectionLink && (
            <StyledLink to={simplesectionLink.url}>
              {simplesectionLink.title}
            </StyledLink>
          )}
        </Content>
      </Container>
    </StyledSection>
  )
}

export default React.memo(SimpleSection)
