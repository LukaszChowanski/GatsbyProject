import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import StyledLink from '../../../SharedComponents/StyledLink'

type ReviewsLink = {
  target: string
  title: string
  url: string
}

type IProps = {
  reviewsLink: ReviewsLink
  prevSlide: () => void
  nextSlide: () => void
}
const Controls = ({ reviewsLink, prevSlide, nextSlide }: IProps) => {
  return (
    <div className="controls">
      <button className="prev" onClick={prevSlide} aria-label="prev">
        <StaticImage
          src="../../../../images/arrow-left-square-fill.svg"
          alt="poprzedni"
        />
      </button>
      <StyledLink to={reviewsLink.url}>{reviewsLink.title}</StyledLink>
      <button className="next" onClick={nextSlide} aria-label="next">
        <StaticImage
          src="../../../../images/arrow-right-square-fill.svg"
          alt="kolejny"
        />
      </button>
    </div>
  )
}

export default Controls
