import React, { useContext } from 'react'
import { getImage } from 'gatsby-plugin-image'

import ModalButton from '../../SharedComponents/ModalButton/ModalButton'
import ModalContext, { ModalContextType } from '../../../ModalContext'
import StyledLink from '../../SharedComponents/StyledLink'

import { IProps } from './type'
import StyledSection, { Container, ImageContainer } from './style'

const Hero = ({
  heroMainheading,
  heroModalbtncontent,
  heroParagraph,
  heroSubheading,
  heroBgimg: { localFile }
}: IProps) => {
  const img = getImage(localFile)
  const { openModal } = useContext(ModalContext) as ModalContextType

  return (
    <StyledSection>
      {img && <ImageContainer image={img} alt="dokumenty" />}
      <Container>
        <h1>{heroMainheading}</h1>
        <h2>{heroSubheading}</h2>
        <p>{heroParagraph}</p>
        <ModalButton onClick={openModal}>{heroModalbtncontent}</ModalButton>
        <StyledLink to="/#content">Dowiedz się więcej</StyledLink>
      </Container>
    </StyledSection>
  )
}

export default Hero
