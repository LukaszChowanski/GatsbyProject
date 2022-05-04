import styled from 'styled-components'
import StyledLink from '../../SharedComponents/StyledLink'

export default styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding-left: 0;
  column-gap: 1rem;

  ${({ theme }) => theme.b_medium} {
    grid-template-columns: unset;
    grid-auto-flow: column;
    grid-auto-columns: min(380px, 75%);
    overflow-x: auto;
    padding-left: 1rem;
    padding-bottom: 1.5rem;
  }
`
const BlogPostsSection = styled.section`
  overflow-x: hidden;
`
const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  img {
    height: 230px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  h3 {
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

const LinkStickBottom = styled(StyledLink)`
  margin-top: auto;
`

export { BlogPostsSection, StyledLi, LinkStickBottom }
