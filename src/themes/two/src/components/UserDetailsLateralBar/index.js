import React, { useState, useEffect } from 'react'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { UserDetails } from '../UserDetails'

import {
  LateralBarContainer,
  CloseButton
} from './styles'

export const UserDetailsLateralBar = (props) => {
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

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('user_lateral_bar').style.width = '100vw'
      } else {
        // if (isOpenDriverOrderDetails && width >= 1000) {
        //   document.getElementById('user_lateral_bar').style.width = '1000px'
        // } else {
          document.getElementById('user_lateral_bar').style.width = '500px'
        // }
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <LateralBarContainer id='user_lateral_bar'>
      <CloseButton
        onClick={() => props.onClose()}
      >
        <MdcClose />
      </CloseButton>
      <UserDetails />
    </LateralBarContainer>
  )
}
