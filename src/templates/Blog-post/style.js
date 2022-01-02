import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledArticle = styled.article`
  p {
    margin-bottom: 0.8rem;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    max-width: 45%;
  }
`

const StyledLink = styled(Link)`
  color: #707070;
  box-shadow: 0 8px 16px #00000028;
  max-height: 30px;
  display: flex;
  align-items: center;

  & span {
    max-width: 38ch;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export { StyledArticle, StyledUl, StyledLink }
