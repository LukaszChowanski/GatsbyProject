import React, { useEffect } from 'react'
import styled from 'styled-components'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import StyledLink from '../../SharedComponents/StyledLink'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

type ReviewsLink = {
  target: string
  title: string
  url: number
}

type ReviewList = {
  title: string
  content: string
  id: number
}

type IProps = {
  reviewsLink: ReviewsLink
  reviewsList: ReviewList[]
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
    <ReviewsContainer>
      <div className="glide reviews-glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {reviewsList &&
              reviewsList.map(({ id, title, content }) => {
                return (
                  <li key={id} className="glide__slide">
                    <h3>
                      <StaticImage
                        src="../../../images/user-circle-solid.svg"
                        alt="ppl"
                        width={28}
                        height={28}
                      />
                      {title}
                    </h3>
                    <Wrapper
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></Wrapper>
                  </li>
                )
              })}
          </ul>
        </div>

        <div className="glide__bullets" data-glide-el="controls[nav]">
          {reviewsList.map((item, index): JSX.Element => {
            return (
              <button
                className="glide__bullet"
                data-glide-dir={`=${index}`}
                name={`slider-bullet${index}`}
                aria-label={`slider-bullet${index}`}
              ></button>
            )
          })}
        </div>
      </div>
      <div className="controls">
        <button className="prev" onClick={prevSlide} aria-label="prev">
          <StaticImage
            src="../../../images/arrow-left-square-fill.svg"
            alt="poprzedni"
          />
        </button>
        <StyledLink to={reviewsLink.url}>{reviewsLink.title}</StyledLink>
        <button className="next" onClick={nextSlide} aria-label="next">
          <StaticImage
            src="../../../images/arrow-right-square-fill.svg"
            alt="kolejny"
          />
        </button>
      </div>
    </ReviewsContainer>
  )
}

export default Reviews

const ReviewsContainer = styled(BootstrapContainer)`
  margin-block: 8rem;

  .glide {
    width: 60%;
    margin-inline: auto;
  }

  .glide__track {
    overflow: visible;
  }

  li.glide__slide {
    opacity: 0.3;

    &.glide__slide--active {
      opacity: 1;
    }
  }

  h3 {
    color: #707070;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-3rem);

    .gatsby-image-wrapper {
      margin-right: 0.5rem;
    }
  }

  .glide__track {
    position: relative;
  }

  .glide__bullets {
    margin-inline: auto;
    width: max-content;
    gap: 0.5rem;
    padding-bottom: 1rem;
    position: absolute;
    bottom: 1rem;
    left: calc(50% - 3rem);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    button {
      width: 8px;
      aspect-ratio: 1;
      background-color: #00000028;
      -webkit-box-shadow: 0px 3px 6px #00000028;
      box-shadow: 0px 3px 6px #00000028;
      padding: 0;
      position: relative;

      & + button {
        margin-left: 6px;
      }

      &.glide__bullet--active {
        background-color: #707070;
      }
    }
  }

  .controls {
    width: max-content;
    margin-inline: auto;
    margin-top: 3rem;
    transform: translateX(-3rem);
    display: flex;
    margin-top: 2rem;

    button {
      display: flex;
      align-items: center;
    }

    a {
      color: #707070;
      box-shadow: 0px 8px 16px #00000028;
      transition: all 0.3s;
      margin-inline: 0.5rem;
      padding-block: 0.5rem;
    }
  }

  ${({ theme }) => theme.b_small} {
    .glide {
      width: 90%;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  padding-bottom: 4rem;
  color: #707070;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 6rem);
    height: 100%;
    background-color: #f8f8f8;
    border-radius: 32px 32px 500px 32px;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: #f8f8f880;
    border-radius: 32px 32px 500px 32px;
    z-index: -1;
  }

  p {
    text-align: center;
    position: relative;
    max-width: 70%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  ${({ theme }) => theme.b_small} {
    &::before {
      width: calc(100% - 1rem);
      border-radius: 32px 32px 64px 32px;
    }

    &::after {
      content: '';
      position: absolute;
      border-radius: 32px 32px 64px 32px;
    }

    p {
      max-width: 90%;
    }
  }
`
