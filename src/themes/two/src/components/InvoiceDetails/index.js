import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { InvoiceDrivers } from '../InvoiceDrivers'

import {
  Container
} from './styles'

export const InvoiceDetails = (props) => {
  const {
    open,
    onClose,
    selectedInvoice
  } = props

  const { width } = useWindowSize()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [extraDetailOpen, setExtraDetailOpen] = useState(false)

  const actionSidebar = (value) => {
    setIsMenuOpen(value)

    if (!value) {
      onClose()
    }
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('invoiceDetailList').style.width = '100vw'
      } else {
        if (extraDetailOpen && width >= 1000) {
          document.getElementById('invoiceDetailList').style.width = '1000px'
        } else {
          document.getElementById('invoiceDetailList').style.width = '500px'
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
    if (extraDetailOpen) {
      document.getElementById('invoiceDetailList').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [extraDetailOpen])

  return (
    <Container
      id='invoiceDetailList'
    >
      {
        selectedInvoice === 'driver' && (
          <InvoiceDrivers
            {...props}
            actionSidebar={actionSidebar}
          />
        )
      }
    </Container>
  )
}
