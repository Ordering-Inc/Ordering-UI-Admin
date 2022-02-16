import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'
import {
  BarContainer
} from './styles'

export const SideBar = (props) => {
  const {
    open,
    sidebarId,
    defaultSideBarWidth,
    moveDistance,
    isBorderShow,
    noAnimation,
    handleCloseWizard
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
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 768 || width <= sideBarWidth) {
        document.getElementById(id).style.width = '100vw'
      } else {
        document.getElementById(id).style.width = `${sideBarWidth}px`
      }
    }
  }, [width, sideBarWidth])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open, defaultSideBarWidth])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape') {
      props.onClose && props.onClose()
      handleCloseWizard && handleCloseWizard()
    }
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <>
      <BarContainer
        id={id}
        isBorderShow={isBorderShow}
        moveDistance={moveDistance}
        noAnimation={noAnimation}
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
