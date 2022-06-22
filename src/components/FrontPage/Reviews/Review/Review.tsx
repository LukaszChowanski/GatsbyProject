import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledLi, Wrapper } from '../style'

type IProps = {
  title: string
  content: string
  id: number
}

const Review = ({ id, title, content }: IProps) => {
  return (
    <StyledLi key={id} className="glide__slide">
      <h3>
        <StaticImage
          src="../../../../images/person-circle.svg"
          alt="ppl"
          width={28}
          height={28}
        />

        {title}
      </h3>
      <Wrapper dangerouslySetInnerHTML={{ __html: content }}></Wrapper>
    </StyledLi>
  )
}

export default Review
