import styled, { css } from 'styled-components'
import bgc from '../../images/list.svg'

const StyledNav = styled.nav`
  max-width: 100%;
  position: absolute;
  z-index: 100;
  width: 100%;

  & > div {
    background-color: #fff;
    box-shadow: 0 8px 16px #00000029;
    border-radius: 0 0 16px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 64px;
    padding-inline: 0.5rem;
    position: relative;

    @media (max-width: 550px) {
      display: grid;
      grid-template-columns: 70px 1fr 32px;
    }
  }
`

const MenuListOfElements = styled.ul`
  display: flex;
  background-color: #fff;
  gap: 1rem;
  padding-left: 0;
  margin-block: 0;
  list-style: none;
  margin-inline: auto;

  & a {
    font: normal normal 400 18px/21px 'PT Sans';
    color: ${props => props.theme.colors.paragraphs};
    padding: 0.6em 1em 0.4em;
    line-height: 1;
    text-decoration: none;
    border-radius: 4px;
  }

  @media (max-width: 767px) {
    /* display: ${({ mobile }) => (mobile ? 'none' : 'flex')}; */
    width: 100%;
    background-color: #fff;
    order: 5;
    grid-row: 2;
    grid-column: 1 / -1;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    border-radius: 0 0 32px 32px;
    transition: all 0.4s;
    align-items: center;

    ${({ mobile }) =>
      !mobile &&
      css`
        max-height: 200px;
        padding-block: 1rem;
        opacity: 1;
      `}
  }
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.btnBgColored};
  box-shadow: 0px 8px 16px #00000028;
  color: ${({ theme }) => theme.colors.btnLight};
  font-size: 16px;
  text-align: center;
  max-width: 100%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px ${({ theme }) => theme.colors.btnBgColoredBs};
  }

  @media (max-width: 1064px) {
    max-width: fit-content;
    justify-self: center;
    margin-right: 0;
  }
`

const Burger = styled.button`
  width: 29px;
  height: 29px;
  background: url(${bgc});
  background-size: cover;
`

export { StyledNav, MenuListOfElements, Button, Burger }
