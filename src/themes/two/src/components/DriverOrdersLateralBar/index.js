import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import {
  LateralBarContainer,
  CloseButton
} from './styles'

export const DriverOrdersLateralBar = (props) => {
  const {
    open
  } = props
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('driver_lateral_bar').style.width = '100vw'
      } else {
        document.getElementById('driver_lateral_bar').style.width = '500px'
      }
    }
  }, [width, isMenuOpen])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <LateralBarContainer id='driver_lateral_bar'>
      <CloseButton>
        <MdcClose />
      </CloseButton>
      lateralbar
    </LateralBarContainer>
  )
}
