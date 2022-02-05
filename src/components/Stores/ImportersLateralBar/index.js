import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { ImportersListing } from '../ImportersListing'
import { IconButton } from '../../../styles'
import {
  LateralBarContainer,
  CloseButtonWrapper,
  WrapUserDetails
} from './styles'

export const ImportersLateralBar = (props) => {
  const {
    open
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
        document.getElementById('impoters_lateral_bar').style.width = '100vw'
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('impoters_lateral_bar').style.width = '1000px'
        } else {
          document.getElementById('impoters_lateral_bar').style.width = '500px'
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
      document.getElementById('impoters_lateral_bar').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraOpen])

  return (
    <LateralBarContainer id='impoters_lateral_bar'>
      <WrapUserDetails>
        <CloseButtonWrapper>
          <IconButton
            color='black'
            onClick={() => props.onClose()}
          >
            <XLg />
          </IconButton>
        </CloseButtonWrapper>
        <ImportersListing
          {...props}
          setExtraOpen={setExtraOpen}
        />
      </WrapUserDetails>
    </LateralBarContainer>
  )
}
