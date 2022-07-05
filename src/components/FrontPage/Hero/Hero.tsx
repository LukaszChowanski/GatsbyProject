import React from 'react'
import { getImage } from 'gatsby-plugin-image'

import ModalButton from '../../SharedComponents/ModalButton/ModalButton'
import StyledAnchorLink from '../../SharedComponents/StyledAnchorLink'

import { IProps } from './type'
import StyledSection, { Container, ImageContainer, CtaWrapper } from './style'

const Hero = ({
  heroMainheading,
  heroModalbtncontent,
  heroParagraph,
  heroBgimg: { localFile }
}: IProps) => {
  const img = getImage(localFile)

  return (
    <StyledSection>
      {img && <ImageContainer image={img} alt="dokumenty" />}
      <Container>
        <h1>{heroMainheading}</h1>
        <p>
          {heroParagraph} Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the 1500s,{' '}
        </p>
        <CtaWrapper>
          <ModalButton>{heroModalbtncontent}</ModalButton>
          <StyledAnchorLink to="/#content">
            Dowiedz się więcej &#8659;
          </StyledAnchorLink>
        </CtaWrapper>
      </Container>
    </StyledSection>
  )
}

export default Hero
