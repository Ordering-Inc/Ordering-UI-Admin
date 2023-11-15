import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { ProfessionalDetail } from '../ProfessionalDetail'
import { UserDetails } from '../UserDetails'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'

import {
  LateralBarContainer,
  CloseButtonWrapper,
  WrapUserDetails
} from './styles'

export const UserDetailsLateralBar = (props) => {
  const {
    open,
    isProfessionals
  } = props

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
        if (extraOpen && width >= 1000) {
          document.getElementById('user_lateral_bar').style.width = '1000px'
        } else {
          document.getElementById('user_lateral_bar').style.width = '500px'
        }
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
      document.getElementById('user_lateral_bar').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <LateralBarContainer id='user_lateral_bar'>
      <WrapUserDetails>
        <CloseButtonWrapper>
          <IconButton
            color='black'
            onClick={() => props.onClose()}
          >
            <XLg />
          </IconButton>
        </CloseButtonWrapper>
        {isProfessionals ? (
          <ProfessionalDetail
            {...props}
            setExtraOpen={setExtraOpen}
          />
        ) : (
          <UserDetails
            {...props}
            setExtraOpen={setExtraOpen}
          />
        )}
      </WrapUserDetails>
    </LateralBarContainer>
  )
}
