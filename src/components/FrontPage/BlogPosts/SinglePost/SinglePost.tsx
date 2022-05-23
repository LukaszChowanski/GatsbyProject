import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import IProps from '../types'
import { StyledLi, LinkStickBottom } from '../style'

const SinglePost = ({
  excerpt,
  featuredImage,
  title,
  uri
}: IProps): JSX.Element => {
  const img = getImage(featuredImage.node.localFile)
  return (
    <StyledLi>
      {img && <GatsbyImage image={img} alt="title" loading="lazy" />}
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      <LinkStickBottom to={uri}>Czytaj więcej</LinkStickBottom>
    </StyledLi>
  )
}

export default React.memo(SinglePost)
