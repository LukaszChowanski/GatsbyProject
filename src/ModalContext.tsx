import { createContext } from 'react'

export type ModalContextType = {
  openModal: () => void
}
const ModalContext = createContext<ModalContextType | null>(null)

export default ModalContext
