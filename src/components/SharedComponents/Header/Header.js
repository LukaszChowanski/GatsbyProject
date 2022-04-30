import React from 'react'
import { Container, ImgContainer } from './style'
import BootstrapContainer from '../BootstrapContainer'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'

const Header = ({ title, gatsbyImage, children }) => {
  return (
    <Container>
      <ImgContainer>
        {!gatsbyImage && (
          <StaticImage
            src="./hero_bg_optimized.jpg"
            alt="zdjęcie"
            layout="fullWidth"
          />
        )}
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt="" />}
        {/* <img src={background} alt="zdjęcie" /> */}
      </ImgContainer>
      <BootstrapContainer>
        <h1>{title || children}</h1>
      </BootstrapContainer>
    </Container>
  )
}

export default Header
