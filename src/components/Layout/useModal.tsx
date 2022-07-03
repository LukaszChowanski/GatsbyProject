import { useState } from 'react'

export default () => {
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

  return [isVisible, openModal, closeModal] as const
}
