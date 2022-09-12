import React, { useEffect, useState } from 'react'

export default (clickRef: React.RefObject<HTMLDivElement> | null) => {
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => {
    setIsVisible(true)
  }

  const closeModal = () => {
    setIsVisible(false)
  }

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

  return [isVisible, openModal, closeModal] as const
}
