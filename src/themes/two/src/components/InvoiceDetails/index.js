import React, { useState, useEffect } from 'react'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { InvoiceDriverManager } from '../InvoiceDriverManager'
import { InvoiceBusinessManager } from '../InvoiceBusinessManager'

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
        document.getElementById('invoiceDetailList').style.width = '520px'
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
    <Container
      id='invoiceDetailList'
    >
      {
        selectedInvoice === 'driver' && (
          <InvoiceDriverManager
            {...props}
            actionSidebar={actionSidebar}
          />
        )
      }
      {
        selectedInvoice === 'business' && (
          <InvoiceBusinessManager
            {...props}
            actionSidebar={actionSidebar}
          />
        )
      }
    </Container>
  )
}
