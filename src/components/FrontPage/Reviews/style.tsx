import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'

const ReviewsSection = styled.section`
  overflow: hidden;
  margin-block: 8rem;
`

const ReviewsContainer = styled(BootstrapContainer)`
  .glide {
    width: 50%;
    margin-inline: auto;
  }

  .glide__track {
    overflow: visible;
  }

  li.glide__slide {
    opacity: 0.3;
    transform: scale(0.75);
    transition: all 0.65s ease-in-out;

    &.glide__slide--active {
      transform: scale(1);
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
    left: calc(50%);
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
      width: 80%;
    }

    li.glide__slide {
      transform: scale(0.95);
      opacity: calc(0.9);
    }
  }
`

const StyledLi = styled.li`
  background-color: #f8f8f8;
  border-radius: 16px;
  padding: 4rem 4rem 6rem;

  ${({ theme }) => theme.b_small} {
    padding: 2rem 2rem 4rem;
  }
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  color: #707070;

  p {
    text-align: center;
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  ${({ theme }) => theme.b_small} {
    p {
      max-width: 90%;
    }
  }
`
export { ReviewsSection, ReviewsContainer, Wrapper, StyledLi }
