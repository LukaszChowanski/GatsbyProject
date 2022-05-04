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
  border-radius: 32px 32px 500px 32px;
  width: calc(100% - 5rem);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 32px 32px 500px 32px;
    background-color: #70707080;
    z-index: 1;
  }

  img {
    border-radius: 32px 32px 500px 32px;

    ${({ theme }) => theme.b_small} {
      width: calc(100% - 1rem);
      border-radius: 32px 32px 150px 32px;
    }
  }

  ${({ theme }) => theme.b_small} {
    width: calc(100% - 1rem);
    border-radius: 32px 32px 150px 32px;

    &::before {
      border-radius: 32px 32px 150px 32px;
    }
  }
`

const PlaceholderBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.c_bg400};
  border-radius: 32px 32px 500px 32px;
  width: calc(100% - 5rem);

  ${({ theme }) => theme.b_small} {
    width: calc(100% - 1rem);
    border-radius: 32px 32px 150px 32px;
  }
`

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.c_bg600};
  border-radius: 32px 32px 500px 32px;

  ${({ theme }) => theme.b_small} {
    border-radius: 32px 32px 150px 32px;
  }
`

const Content = styled.article`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: calc(100% - 7rem);
  position: relative;
  z-index: 4;
  gap: 1rem;

  ${({ theme }) => theme.b_small} {
    width: calc(100% - 2rem);
  }

  ${({ isImage }) =>
    isImage &&
    css`
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
    font: normal normal normal 20px/23px 'PT Sans';
  }
`
export {
  Content,
  Background,
  PlaceholderBackground,
  ImageContainer,
  StyledSection
}
