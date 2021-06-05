import React, { useState, useEffect } from 'react'
import {
  LateralBarContainer
} from './styles'

export const DriverOrdersLateralBar = (props) => {
  const {
    open
  } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('driver_lateral_bar').style.width = value
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }
  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])
  return (
    <LateralBarContainer id='driver_lateral_bar'>
      lateralbar
    </LateralBarContainer>
  )
}
