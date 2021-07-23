import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'

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
    <BarContainer id={id}>
      <MdcClose onClick={() => props.onClose()} />
      {props.children}
    </BarContainer>
  )
}
