import styled, { css } from 'styled-components'
import bgc from '../../images/list.svg'

const StyledNav = styled.nav`
  max-width: 100%;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;

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

    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 70px 1fr 32px;
      justify-items: center;
    }
  }

  img {
    border-radius: 50%;
  }
`

const MenuListOfElements = styled.ul<{ mobile: boolean }>`
  display: flex;
  background-color: #fff;
  gap: 1rem;
  padding-left: 0;
  margin-block: 0;
  list-style: none;
  margin-inline: auto;

  & a {
    font: normal normal 700 14px/19px 'PT Sans';
    color: ${props => props.theme.c_paragraphs};
    padding: 0.6em 1em 0.4em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;

    &[aria-current='page'] {
      text-decoration: underline 3px ${({ theme }) => theme.c_decoration};
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    background-color: #fff;
    order: 5;
    grid-row: 2;
    grid-column: 1 / -1;
    flex-direction: column;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    border-radius: 0 0 16px 16px;
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

const Burger = styled.button`
  width: 29px;
  height: 29px;
  background: url(${bgc});
  background-size: cover;

  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

export { StyledNav, MenuListOfElements, Burger }
