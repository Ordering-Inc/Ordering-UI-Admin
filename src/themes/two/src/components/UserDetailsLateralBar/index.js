import React, { useState, useEffect } from 'react'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { UserDetails } from '../UserDetails'
import { useTheme } from 'styled-components'

import {
  LateralBarContainer,
  CloseButton
} from './styles'

export const UserDetailsLateralBar = (props) => {
  const {
    open
  } = props
  const theme = useTheme()
  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraOpen, setExtraOpen] = useState(false)

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
        document.getElementById('user_lateral_bar').style.width = '500px'
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

  useEffect(() => {
    if (width < 1000) return
    if (extraOpen) {
      if (theme?.rtl) {
        document.getElementById('user_lateral_bar').style.left = '500px'
      } else {
        document.getElementById('user_lateral_bar').style.right = '500px'
      }
    } else {
      if (theme?.rtl) {
        document.getElementById('user_lateral_bar').style.left = '0px'
      } else {
        document.getElementById('user_lateral_bar').style.right = '0px'
      }
    }
  }, [extraOpen])

  return (
    <LateralBarContainer id='user_lateral_bar'>
      <CloseButton
        onClick={() => props.onClose()}
      >
        <MdcClose />
      </CloseButton>
      <UserDetails
        {...props}
        setExtraOpen={setExtraOpen}
      />
    </LateralBarContainer>
  )
}
