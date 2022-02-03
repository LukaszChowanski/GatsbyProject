import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import { GatsbyImage } from 'gatsby-plugin-image'

const Container = styled(BootstrapContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  padding-top: 112px;
  z-index: 3;
`

const ImageContainer = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 5rem);
  height: 100%;
  border-radius: 0 32px 500px 0;

  img {
    border-radius: 0;
  }
  ${({ theme }) => theme.b_medium} {
    border-radius: 0 32px 150px 0;
  }

  ${({ theme }) => theme.b_small} {
    width: calc(100% - 1rem);
    border-radius: 0 32px 64px 0;
  }
`

const StyledSection = styled.section`
  width: 100%;
  position: relative;

  & h1,
  h2,
  p {
    color: ${({ theme }) => theme.c_headingsLight};
    max-width: calc(100% - 2rem);
  }

  p {
    max-width: 50%;
    text-align: center;
  }

  &::before {
    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.c_bg400};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0 32px 500px 0;
    z-index: 0;
  }

  &::after {
    content: ' ';
    position: absolute;
    background-color: #707070a1;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 0 32px 500px 0;
    z-index: 2;
  }

  img {
    /* position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 0 32px 500px 0; */
  }

  ${({ theme }) => theme.b_medium} {
    &::before {
      border-radius: 0 32px 150px 0;
    }

    &::after {
      border-radius: 0 32px 150px 0;
      width: calc(100% - 1rem);
    }
  }

  ${({ theme }) => theme.b_small} {
    h1 {
      text-align: center;
    }

    &::before {
      border-radius: 0 32px 64px 0;
    }

    &::after {
      border-radius: 0 32px 64px 0;
      width: calc(100% - 1rem);
    }
  }
`

export default StyledSection
export { Container, ImageContainer }
