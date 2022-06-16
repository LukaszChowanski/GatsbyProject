import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'

const StyledSection = styled.section`
  overflow-x: hidden;
  position: relative;
  padding-block: 4rem;

  ${({ theme }) => theme.b_medium} {
    padding-block: 1rem 1rem;
  }
`
const Content = styled(BootstrapContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.b_medium} {
    grid-template-columns: 1fr;
  }
`
const LeftColumn = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background-color: ${({ theme }) => theme.c_bg400};
    border-radius: 16px;
    z-index: 0;
  }

  ${({ theme }) => theme.b_medium} {
    &::before {
      width: calc(100%);
      border-radius: 16px;
    }
  }

  ${({ theme }) => theme.b_xs} {
    &::before {
      width: calc(100% - 2rem);
      margin-left: 1rem;
      border-radius: 16px;
    }
  }
`
const ContentImg = styled(GatsbyImage)`
  align-self: center;
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
    border-radius: 16px;
  }

  ${({ theme }) => theme.b_medium} {
    margin-top: 2rem;
  }

  ${({ theme }) => theme.b_xs} {
    display: none;
  }
`
const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  li {
    margin-bottom: 0.8rem;
  }
`
const BackgroundImage = styled(GatsbyImage)`
  border-radius: 32px 0 0 32px;
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;

  &::before {
    content: '';
    border-radius: 32px 0 0 32px;
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.c_decorationBs};
    z-index: 1;
  }

  ${({ theme }) => theme.b_medium} {
    border-radius: 16px 0 0 16px;
    width: 100%;

    &::before {
      border-radius: 16px 0 0 16px;
    }
  }
`
export {
  StyledSection,
  BackgroundImage,
  Wrapper,
  ContentImg,
  LeftColumn,
  Content
}
