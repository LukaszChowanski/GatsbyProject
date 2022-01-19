import React, { memo } from 'react'
import styled from 'styled-components'

const WhiteButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${({
    theme: {
      colors: { btnBg }
    }
  }) => btnBg ?? '#fff'};
  box-shadow: 0 8px 16px
    ${({
      theme: {
        colors: { btnBgBs }
      }
    }) => btnBgBs ?? '#fff'};
  color: ${({
    theme: {
      colors: { btns }
    }
  }) => btns ?? '#fff'};
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px
      ${({
        theme: {
          colors: { btnBgColoredBs }
        }
      }) => btnBgColoredBs ?? '#fff'};
  }
`

export default memo(WhiteButton)
