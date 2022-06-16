import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'

const Container = styled(BootstrapContainer)`
  display: grid;
  margin-top: 4rem;

  .gatsby-image-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    height: 100%;
    width: 100%;
  }
`

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 2rem 6rem;
  position: relative;

  & > p {
    max-width: 75%;
    margin-inline: auto;
  }

  & > button {
    margin-inline: auto;
    margin-top: 1rem;
  }

  @media (max-width: 1064px) {
    padding: 2rem 1rem;
  }
`

const H2Wrapper = styled.div`
  width: 80%;
  position: relative;
  margin-bottom: 2rem;

  h2 {
    width: max-content;
    position: relative;
    margin-bottom: 2rem;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      -webkit-transform: translateY(0.8rem);
      transform: translateY(0.8rem);
      width: min(64px, 100%);
      height: 2px;
      background-color: ${({ theme }) => theme.c_decoration};
      -webkit-box-shadow: 0px 3px 6px ${({ theme }) => theme.c_decorationBs};
      box-shadow: 0px 3px 6px ${({ theme }) => theme.c_decorationBs};
    }
  }
`

const Grid = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 40px;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 85%;
    top: 35px;
    left: 0;
    background-color: ${({ theme }) => theme.c_decorationBs};
    box-shadow: 0px 3px 6px ${({ theme }) => theme.c_decorationBs};
  }

  li {
    display: flex;
    gap: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }
`

const SubHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 70px;
  line-height: 70px;
  font-weight: 700;
  color: ${({ theme }) => theme.c_decoration};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 35px;
    left: -39px;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #f8f8f8;
    border: 4px solid ${({ theme }) => theme.c_decorationBs};
    box-shadow: 4px 4px 24px ${({ theme }) => theme.c_decoration};
    border-radius: 50%;
  }
`
export { SubHeading, Grid, H2Wrapper, Content, Container }
