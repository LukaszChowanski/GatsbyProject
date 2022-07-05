import { Link } from 'gatsby'
import React, { memo } from 'react'
import styled from 'styled-components'

type IProps = {
  children: JSX.Element | string
  to: string
}

const StyledLink = ({ children, to }: IProps) => {
  return <StyledButton to={to}>{children}</StyledButton>
}

const StyledButton = styled(Link)`
  background-color: ${({ theme: { c_btnBg } }) => c_btnBg ?? '#fff'};
  box-shadow: 0 8px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  color: ${({ theme: { c_btns } }) => c_btns ?? '#707070a1'};
  padding: 0.5rem 1rem;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  }
`

export default memo(StyledLink)
