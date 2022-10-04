import React, { useState, createContext } from 'react'

export type TModalContext = {
  isVisible: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<TModalContext | null>(null)

type IProps = {
  children: React.ReactNode
}
const ModalProvider = ({ children }: IProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  return (
    <ModalContext.Provider value={{ isVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
