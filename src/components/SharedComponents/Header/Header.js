import React from "react"
import Container, { ImgContainer } from './style'
import BootstrapContainer from "../BootstrapContainer"

const Header = ({title, background}) => {

    return (
      <Container>
        <ImgContainer>
          <img src={background} alt="zdjęcie" />
        </ImgContainer>
        <BootstrapContainer>
          <h1>{title}</h1>
        </BootstrapContainer>
      </Container>
    )
}

export default Header
