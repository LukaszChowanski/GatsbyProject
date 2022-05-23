import React, { useContext, useEffect, useState } from 'react'
import StyledSection, { Container, ImageContainer } from './style'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import WhiteButton from '../../SharedComponents/WhiteButton/WhiteButton'
import { getImage } from 'gatsby-plugin-image'
import ModalContext from '../../../ModalContext'

const Hero = ({
  heroMainheading,
  heroModalbtncontent,
  heroParagraph,
  heroSubheading,
  heroBgimg: { localFile }
}) => {
  const img = getImage(localFile)
  const { openModal } = useContext(ModalContext)

  return (
    <StyledSection>
      <ImageContainer image={img} alt="dokumenty" />
      <Container>
        <h1>{heroMainheading}</h1>
        <h2>{heroSubheading}</h2>
        <p>{heroParagraph}</p>
        <GreenButton onClick={openModal}>{heroModalbtncontent}</GreenButton>
        <WhiteButton to="/#content">Dowiedz się więcej</WhiteButton>
      </Container>
    </StyledSection>
  )
}

export default Hero
