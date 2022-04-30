import styled from 'styled-components'

const Container = styled.header`
  margin-bottom: 3rem;
  display: grid;
  position: relative;

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
  width: calc(100% - 5rem);
  height: 100%;
  position: absolute;

  img {
    border-radius: 0;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: calc(100% + 5rem);
    background-color: #f8f8f8;
    border-radius: 0 32px 500px 0;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: #707070a1;
    border-radius: 0 32px 500px 0;
  }

  .gatsby-image-wrapper {
    max-height: 100%;
    height: 100%;
    border-radius: 0 32px 500px 0;
  }
`
export { Container, ImgContainer }
