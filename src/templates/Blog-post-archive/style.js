import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  color: #707070;
  margin-top: 1rem;
  box-shadow: 0px 8px 16px #00000028;
  margin-top: auto;
  justify-self: flex-end;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`

const StyledOl = styled.ol`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  column-gap: 1rem;
  margin-top: 0;
  padding-top: 1rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .gatsby-image-wrapper {
    border-radius: 32px;
  }

  img {
    height: 230px;
    width: 100%;
    box-shadow: 0px 3px 24px #00000029;
    border-radius: 32px;
    object-fit: cover;
    object-position: center;
  }

  .h3 {
    color: #707070;
    margin-block: 8px;
  }

  p {
    color: #707070;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export { StyledLink, StyledOl }
