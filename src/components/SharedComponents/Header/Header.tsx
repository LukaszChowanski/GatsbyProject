import React from 'react'
import { Container, ImgContainer } from './style'
import BootstrapContainer from '../BootstrapContainer'
import { StaticImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type IProps = {
  title?: string
  gatsbyImage?: IGatsbyImageData
  children?: React.ReactNode
}

const Header = ({ title, gatsbyImage, children }: IProps) => {
  return (
    <Container>
      <ImgContainer>
        {!gatsbyImage && (
          <StaticImage src="./trushotz.jpg" alt="zdjęcie" layout="fullWidth" />
        )}
        {gatsbyImage && <GatsbyImage image={gatsbyImage} alt="" />}
      </ImgContainer>
      <BootstrapContainer>
        <h1>{title || children}</h1>
      </BootstrapContainer>
    </Container>
  )
}

export default Header
