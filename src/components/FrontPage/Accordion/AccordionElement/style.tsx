import styled, { css } from 'styled-components'
import plus from '/src/images/plus.svg'
import minus from '/src/images/minus.svg'

type SectionProps = {
  readonly show?: boolean
  readonly height?: number | undefined
}

export default styled.section<SectionProps>`
  width: 100%;
  color: #707070;
  overflow: hidden;
  padding-inline: 6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  .h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    cursor: pointer;

    &::before {
      content: '';
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.c_decoration};
    }

    &::after {
      content: '';
      background-image: url(${plus});
      background-size: cover;
      background-position: center;
      width: 25px;
      min-width: 25px;
      height: 25px;
      text-align: center;
      transition: all 1s;
      margin-left: auto;
    }

    .gatsby-image-wrapper {
      margin-left: auto;
      width: 25px;
      min-width: 25px;
      height: 25px;
    }
  }

  .hiddenContent {
    max-height: 0px;
    transition: all 0.35s;
    padding-inline: 2rem;
  }

  article {
    padding-top: 1rem;
  }

  ${({ show, height }: SectionProps) =>
    show &&
    css`
      .h3::after {
        background-image: url(${minus});
        transform: rotate(180deg);
      }
      .hiddenContent {
        max-height: ${height}px;
      }
    `}

  ${({ theme }) => theme.b_small} {
    padding-inline: 2rem;
  }
`
