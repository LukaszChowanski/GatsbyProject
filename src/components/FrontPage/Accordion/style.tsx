import styled, { css } from 'styled-components'
import plus from '/src/images/plus.svg'
import minus from '/src/images/minus.svg'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'

interface SectionProps {
  readonly show?: boolean
  readonly height?: string
}

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
`

export const StyledSection = styled.section<SectionProps>`
  width: 100%;
  color: #707070;
  overflow: hidden;
  padding-inline: 6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_bg400};
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  cursor: pointer;

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
    transition: all 0.95s ease-in-out;
    padding-inline: 2rem;
    overflow: hidden;
  }

  article {
    padding-top: 1rem;
  }

  ${({ show, height, theme }) =>
    show &&
    css`
      background-image: linear-gradient(
        155deg,
        ${theme.c_decorationBs},
        ${theme.c_decoration}
      );
      padding-block: 1rem;

      .h3 {
        color: #fff;
      }

      p {
        color: #fff;
      }

      .h3::after {
        background-image: url(${minus});
        transform: rotate(180deg);
      }

      .hiddenContent {
        max-height: ${height}px;
        transition: all 0.95 ease-in-out;
      }
    `}

  ${({ theme }) => theme.b_small} {
    padding-inline: 2rem;
  }
`
