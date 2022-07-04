import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'

import { ReviewsSection, ReviewsContainer } from './style'
import Bullet from './Bullets/Bullets'
import Review from './Review/Review'
import { IReviews } from './type'

const Reviews = ({ reviewsList }: IReviews): JSX.Element => {
  let slider: any

  useEffect(() => {
    slider = new Glide('.reviews-glide', {
      type: 'carousel',
      perView: 1,
      breakpoints: {
        787: {
          perView: 1,
          gap: 8
        }
      }
    })

    slider.mount()

    return () => slider.destroy()
  })

  return (
    <ReviewsSection>
      <ReviewsContainer>
        <div className="glide reviews-glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {reviewsList &&
                reviewsList.map(({ id, title, content }) => (
                  <Review key={id} id={id} title={title} content={content} />
                ))}
            </ul>
          </div>

          <div className="glide__bullets" data-glide-el="controls[nav]">
            {reviewsList.map((_, index): JSX.Element => {
              return <Bullet key={index} index={index}></Bullet>
            })}
          </div>
        </div>
      </ReviewsContainer>
    </ReviewsSection>
  )
}

export default Reviews
