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
  inset: 0;

  img {
    border-radius: 0;
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

  &::after {
    content: ' ';
    position: absolute;
    inset: 0;
    z-index: 2;
    background-color: #00000084;
  }

  a {
    box-shadow: none;
    border-radius: 8px 8px 0 0;
  }

  ${({ theme }) => theme.b_small} {
    h1 {
      text-align: center;
    }
  }
`

export default StyledSection
export { Container, ImageContainer }
