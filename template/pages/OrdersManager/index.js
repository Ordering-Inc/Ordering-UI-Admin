import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrdersManager as OrdersManagerController } from '../../../src/themes/two/src/components/OrdersManager'
export const OrdersManager = (props) => {
  return (
    <>
      <HelmetTags page='orders' />
      <OrdersManagerController />
    </>
  )
}
