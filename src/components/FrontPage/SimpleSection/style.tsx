import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { css } from 'styled-components'

const StyledSection = styled.section`
  width: 100%;
  margin: 5rem 0;

  & > div {
    position: relative;
  }
`
const ImageContainer = styled(GatsbyImage)`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.c_bg400};
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 8px;
    background-color: #70707080;
    z-index: 1;
  }

  img {
    border-radius: 8px;
  }
`

const PlaceholderBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-color: #f8f8f8;
  border-radius: 16px;
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.c_bg600};
  border-radius: 16px;
`

const Content = styled.article`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 4;
  gap: 1rem;

  ${({ isImage }) =>
    isImage &&
    css`
      position: relative;

      &:before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: 16px;
        background-color: #00000064;
      }

      h2,
      p {
        color: ${({ theme }) => theme.c_headingsLight};
      }
    `}

  h2 {
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      height: 2px;
      width: min(64px, 100%);
      background-color: ${({ theme }) => theme.c_decoration};
      box-shadow: 0px 3px 6px ${({ theme }) => theme.c_decorationBs};
    }
  }
  p {
    font: normal normal normal 20px/23px ${({ theme }) => theme.f_regular};
    max-width: 75%;

    ${({ theme }) => theme.b_small} {
      max-width: 90%;
    }
  }
`
export {
  Content,
  Background,
  PlaceholderBackground,
  ImageContainer,
  StyledSection
}
