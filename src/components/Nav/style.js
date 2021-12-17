import styled from 'styled-components'

const StyledNav = styled.nav`
display: flex;
align-items: center;
max-width: 100%;
background-color: #fff;
box-shadow: 0 8px 16px #00000029;
border-radius: 0 0 16px 16px;
position: relative;
height: 64px;
padding: 0 32px;
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
    font: normal normal 400 18px/21px "PT Sans";
    color: ${ props => props.theme.colors.paragraphs };
    padding: 0.6em 1em 0.4em;
    line-height: 1;
    text-decoration: none;
  border-radius: 4px;
  }
`

const Button = styled.button`
background-color: #12bb45;
-webkit-box-shadow: 0px 8px 16px #12bb457f;
box-shadow: 0px 8px 16px #12bb457f;
color: #fff;
font-size: 16px;font: normal normal 400 18px/21px "PT Sans";
font-size: 18px;
padding: 4px 16px;
text-decoration: none;
border-radius: 4px;
color: ${({theme}) => theme.colors.paragraphsLight };
width: -webkit-max-content;
width: -moz-max-content;
width: max-content;
outline: none;
border: none;
`

export { StyledNav, MenuListOfElements, Button}