import styled, { css } from 'styled-components'

const StyledModal = styled.div<{ isActive: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  backdrop-filter: blur(8px);
  display: none;
  place-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      display: grid;
    `}

  & > div {
    padding: 1rem;

    ${({ theme }) => theme.b_small} {
      width: 100%;
    }
  }
`

export default StyledModal
