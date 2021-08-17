import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { XLg } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import {
  BarContainer
} from './styles'

export const SideBar = (props) => {
  const {
    open,
    sidebarId
  } = props
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const id = sidebarId || 'sideBar'

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById(id).style.width = value
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById(id).style.width = '100vw'
      } else {
        document.getElementById(id).style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <>
      {open && (
        <BarContainer id={id}>
          <IconButton
            color='black'
            onClick={() => props.onClose()}
          >
            <XLg />
          </IconButton>
          {props.children}
        </BarContainer>
      )}
    </>
  )
}
