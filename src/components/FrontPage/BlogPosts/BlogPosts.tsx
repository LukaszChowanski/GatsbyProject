import React from 'react'
import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import SinglePost from './SinglePost/SinglePost'
import IPost from './types'

type IProps = {
  blogpostsPostlist: IPost[]
}

const BlogPosts = ({ blogpostsPostlist }: IProps): JSX.Element => {
  return (
    <BootstrapContainer>
      <PostsList>
        {blogpostsPostlist.map(item => {
          return <SinglePost key={item.id} {...item} />
        })}
      </PostsList>
    </BootstrapContainer>
  )
}

export default BlogPosts

const PostsList = styled.ul`
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
