import React from 'react'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import SinglePost from './SinglePost/SinglePost'
import { IProps } from './types'
import PostsList, { BlogPostsSection } from './style'

const BlogPosts = ({ blogpostsPostlist }: IProps): JSX.Element => {
  return (
    <BlogPostsSection>
      <BootstrapContainer>
        <PostsList>
          {blogpostsPostlist.map(item => {
            return <SinglePost key={item.id} {...item} />
          })}
        </PostsList>
      </BootstrapContainer>
    </BlogPostsSection>
  )
}

export default BlogPosts
