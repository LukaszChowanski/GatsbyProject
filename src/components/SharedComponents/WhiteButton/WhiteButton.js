import React, { memo } from 'react'
import styled from 'styled-components'

const WhiteButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${({ theme: { c_btnBg } }) => c_btnBg ?? '#fff'};
  box-shadow: 0 8px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  color: ${({ theme: { c_btnBg } }) => c_btnBg ?? '#fff'};
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px
      ${({ theme: { c_btnBgColoredBs } }) => c_btnBgColoredBs ?? '#fff'};
  }
`

export default memo(WhiteButton)
