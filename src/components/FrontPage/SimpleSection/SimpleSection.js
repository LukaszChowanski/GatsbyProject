import { getImage } from 'gatsby-plugin-image'
import React from 'react'

import {
  Content,
  Background,
  PlaceholderBackground,
  ImageContainer,
  StyledSection
} from './style'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import StyledLink from '../../SharedComponents/StyledLink'

const SimpleSection = ({
  simplesectionHeading,
  simplesectionParagraph,
  simplesectionLink,
  simplesectionBgimg,
  index
}) => {
  const img = simplesectionBgimg ? getImage(simplesectionBgimg.localFile) : null

  const anchor = index == 1 ? 'content' : null
  const isImage = simplesectionBgimg ? true : false

  return (
    <StyledSection id={anchor}>
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
          <div
            dangerouslySetInnerHTML={{ __html: simplesectionParagraph }}
          ></div>
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

export default React.memo(SimpleSection)
