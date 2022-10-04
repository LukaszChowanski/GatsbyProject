import React, { useRef, useEffect, useContext } from 'react'
import { ModalContext, TModalContext } from '../../context/ModalContext'
import ContactForm from '../SharedComponents/ContactForm/ContactForm'
import StyledModal from './style'

const Modal = () => {
  const clickRef = useRef<HTMLDivElement>(null)
  const { isVisible, closeModal } = useContext(ModalContext) as TModalContext

  const handleClickOutside = (ev: MouseEvent) => {
    if (clickRef?.current && !clickRef.current.contains(ev.target as Node)) {
      closeModal()
      document.removeEventListener('click', handleClickOutside)
    }
  }

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible])

  return (
    <StyledModal isActive={isVisible}>
      <ContactForm ref={clickRef} closeModal={closeModal} />
    </StyledModal>
  )
}

export default Modal
