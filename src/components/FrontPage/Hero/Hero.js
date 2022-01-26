import React, { useEffect, useState } from 'react'
import StyledSection, { Container, ImageContainer } from './style'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import WhiteButton from '../../SharedComponents/WhiteButton/WhiteButton'
import { getImage } from 'gatsby-plugin-image'

const Hero = ({
  heroMainheading,
  heroModalbtncontent,
  heroParagraph,
  heroSubheading,
  heroBgimg: { localFile }
}) => {
  const img = getImage(localFile)
  // const [refEl, setRelEl] = useState(element)

  // useEffect(() => {
  //   setRelEl(element)
  // }, [element])

  const onCLickHandler = () => {
    // refEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <StyledSection>
      <ImageContainer image={img} alt="dokumenty" />
      <Container>
        <h1>{heroMainheading}</h1>
        <h2>{heroSubheading}</h2>
        <p>{heroParagraph}</p>
        <GreenButton>{heroModalbtncontent}</GreenButton>
        <WhiteButton>Dowiedz się więcej</WhiteButton>
      </Container>
    </StyledSection>
  )
}

export default Hero