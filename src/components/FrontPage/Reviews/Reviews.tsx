import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

import { ReviewsSection, ReviewsContainer, Wrapper } from './style'
import Bullet from './Bullets/Bullets'
import Controls from './Controls/Controls'
import Review from './Review/Review'

type ReviewsLink = {
  target: string
  title: string
  url: string
}

type SingleReview = {
  title: string
  content: string
  id: number
}

type IProps = {
  reviewsLink: ReviewsLink
  reviewsList: SingleReview[]
}

const Reviews = ({ reviewsLink, reviewsList }: IProps): JSX.Element => {
  let slider: any

  useEffect(() => {
    slider = new Glide('.reviews-glide', {
      type: 'carousel',
      perView: 1,
      breakpoints: {
        787: {
          perView: 1
        }
      }
    })

    slider.mount()

    return () => slider.destroy()
  })

  const nextSlide = () => {
    slider.go('>')
  }

  const prevSlide = () => {
    slider.go('<')
  }

  return (
    <ReviewsSection>
      <ReviewsContainer>
        <div className="glide reviews-glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {reviewsList &&
                reviewsList.map(({ id, title, content }) => (
                  <Review id={id} title={title} content={content} />
                ))}
            </ul>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            {reviewsList.map((_, index): JSX.Element => {
              return <Bullet index={index}></Bullet>
            })}
          </div>
        </div>

        <Controls
          reviewsLink={reviewsLink}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      </ReviewsContainer>
    </ReviewsSection>
  )
}

export default Reviews
