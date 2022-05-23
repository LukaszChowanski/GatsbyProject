import React, { createContext } from 'react'

type GlobalContent = {
  openModal: (e: React.MouseEvent<HTMLElement>) => void
}
const ModalContext = createContext<GlobalContent | null>(null)

export default ModalContext
