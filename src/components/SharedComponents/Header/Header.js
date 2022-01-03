import React from 'react'
import { Container, ImgContainer } from './style'
import BootstrapContainer from '../BootstrapContainer'
import { StaticImage } from 'gatsby-plugin-image'

import BgImg from '../../../images/hero_bg_optimized.jpg'

const Header = ({ title, background }) => {
  return (
    <Container>
      <ImgContainer>
        <StaticImage
          src="./hero_bg_optimized.jpg"
          alt="zdjęcie"
          layout="fullWidth"
        />
        {/* <img src={background} alt="zdjęcie" /> */}
      </ImgContainer>
      <BootstrapContainer>
        <h1>{title}</h1>
      </BootstrapContainer>
    </Container>
  )
}

export default Header
