import styled from 'styled-components'

const Container = styled.header`
  margin-bottom: 3rem;
  display: grid;
  position: relative;
  padding: 1rem;

  & > div {
    padding-top: 100px;
    z-index: 3;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 2rem;
    color: #fff;
  }
`

const ImgContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;

  img {
    border-radius: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: #00000084;
  }

  .gatsby-image-wrapper {
    max-height: 100%;
    height: 100%;
  }
`
export { Container, ImgContainer }
