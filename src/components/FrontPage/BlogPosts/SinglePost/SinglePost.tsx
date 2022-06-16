import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import IProps from '../types'
import { StyledLi, ContentLi, LinkStickBottom } from '../style'

const SinglePost = ({
  excerpt,
  featuredImage,
  title,
  uri
}: IProps): JSX.Element => {
  const [isEnter, setIsEnter] = useState(false)
  const img = getImage(featuredImage.node.localFile)

  const handleMouseEnter = () => {
    setIsEnter(true)
  }

  const handleMouseLeave = () => {
    setIsEnter(false)
  }

  return (
    <StyledLi onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ContentLi hover={isEnter}>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      </ContentLi>
      {img && <GatsbyImage image={img} alt="title" loading="lazy" />}
      <LinkStickBottom to={uri}>Czytaj więcej</LinkStickBottom>
    </StyledLi>
  )
}

export default React.memo(SinglePost)
