import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { InvoiceManager as InvoiceManagerController } from '../../../src/components/InvoiceManager'

export const InvoiceManager = (props) => {
  return (
    <>
      <HelmetTags page='invoice' />
      <InvoiceManagerController {...props} />
    </>
  )
}
