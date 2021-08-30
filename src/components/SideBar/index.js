import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import {
  BarContainer
} from './styles'

export const SideBar = (props) => {
  const {
    open,
    sidebarId,
    defaultSideBarWidth,
    moveDistance,
    isBorderShow
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sideBarWidth = defaultSideBarWidth || 500

  const id = sidebarId || 'sideBar'

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById(id).style.width = value
      ? width >= sideBarWidth ? `${sideBarWidth}px` : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= sideBarWidth) {
        document.getElementById(id).style.width = '100vw'
      } else {
        document.getElementById(id).style.width = `${sideBarWidth}px`
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open, defaultSideBarWidth])

  return (
    <>
      <BarContainer
        id={id}
        isBorderShow={isBorderShow}
        moveDistance={moveDistance}
      >
        <IconButton
          color='black'
          onClick={() => props.onClose()}
        >
          <XLg />
        </IconButton>
        {props.children}
      </BarContainer>
    </>
  )
}
