import React from 'react'
import { InvoiceDriverManager } from '../InvoiceDriverManager'
import { InvoiceBusinessManager } from '../InvoiceBusinessManager'

import {
  Container
} from './styles'

export const InvoiceDetails = (props) => {
  const {
    selectedInvoice
  } = props

  return (
    <Container>
      {
        selectedInvoice === 'driver' && (
          <InvoiceDriverManager
            {...props}
          />
        )
      }
      {
        selectedInvoice === 'business' && (
          <InvoiceBusinessManager
            {...props}
          />
        )
      }
    </Container>
  )
}
