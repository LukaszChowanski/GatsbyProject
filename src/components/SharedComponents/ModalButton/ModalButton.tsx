import React, { memo, useContext } from 'react'
import styled from 'styled-components'
import { ModalContext, TModalContext } from '../../../context/ModalContext'

type IProps = {
  children: React.ReactNode
}

const ModalButton = ({ children }: IProps) => {
  const { openModal } = useContext(ModalContext) as TModalContext

  return <StyledButton onClick={openModal}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background-color: ${({ theme: { c_btnBgColored } }) =>
    c_btnBgColored ?? '#fff'};
  box-shadow: 0 8px 16px ${({ theme: { c_btnBgBs } }) => c_btnBgBs ?? '#fff'};
  color: ${({ theme: { c_btnLight } }) => c_btnLight ?? '#fff'};
  padding: 0.5rem 1rem;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 16px
      ${({ theme: { c_btnBgColoredBs } }) => c_btnBgColoredBs ?? '#fff'};
  }
`
export default memo(ModalButton)
