import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { StyledLi, Wrapper } from '../style'
import { ISingleReview } from '../type'

const Review = ({ id, title, content }: ISingleReview) => {
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
