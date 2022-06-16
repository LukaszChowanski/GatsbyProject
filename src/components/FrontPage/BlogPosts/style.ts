import styled, { css } from 'styled-components'
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
  overflow-x: visible;
`
const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;

  .gatsby-image-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    margin-bottom: 5rem;
  }

  img {
    height: 330px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const ContentLi = styled.div<{ hover: boolean }>`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  overflow: hidden;
  height: 200px;
  align-self: flex-end;
  background-color: #fff;
  border-radius: 8px;
  margin: 1rem 1rem 0 1rem;
  padding: 1rem 1rem 3rem 1rem;
  box-shadow: 0 8px 24px #00000019;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: height 0.65s ease-in-out;

  ${({ hover }) =>
    hover &&
    css`
      height: calc(100% - 1rem);
      transition: height 0.45s ease-in-out;
    `}

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      to bottom,
      transparent 0% 60%,
      #fff 85%,
      #fff 100%
    );
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
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 3;
  line-height: 32px;
  justify-self: center;
  transform: translateY(50%);
  margin-top: auto;
  text-align: center;
  /* background-color: ${({ theme }) => theme.c_decorationBs};
  color: #fff; */
`

export { BlogPostsSection, StyledLi, ContentLi, LinkStickBottom }
