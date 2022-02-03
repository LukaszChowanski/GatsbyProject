import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import StyledLink from '../../../SharedComponents/StyledLink'
import IProps from '../types'

const SinglePost = ({
  excerpt,
  featuredImage,
  title,
  uri
}: IProps): JSX.Element => {
  const img = getImage(featuredImage.node.localFile)
  return (
    <StyledLi>
      <GatsbyImage image={img} alt="title" />
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
      <LinkStickBottom to={uri}>Czytaj więcej</LinkStickBottom>
    </StyledLi>
  )
}

export default SinglePost

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
