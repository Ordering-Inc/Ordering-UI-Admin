import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderingWidgets as OrderingWidgetsController } from '../../../src/components/MyProducts'

export const OrderingWidgets = (props) => {
  return (
    <>
      <HelmetTags page='ordering_widgets' />
      <OrderingWidgetsController {...props} />
    </>
  )
}
