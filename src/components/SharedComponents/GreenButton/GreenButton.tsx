import React, { memo } from 'react'
import styled from 'styled-components'

type IProps = {
  children: React.ReactNode
  onClick: () => void
}

const GreenButton = ({ children, onClick }: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${({ theme: { c_btnBgColored } }) =>
    c_btnBgColored ?? '#fff'};
  box-shadow: 0 8px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  color: ${({ theme: { c_btnLight } }) => c_btnLight ?? '#fff'};
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px
      ${({ theme: { c_btnBgColoredBs } }) => c_btnBgColoredBs ?? '#fff'};
  }
`
export default memo(GreenButton)
