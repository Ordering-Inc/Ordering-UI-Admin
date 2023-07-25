import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrdersManager as OrdersManagerController } from '../../../src/components/Orders'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const OrdersList = (props) => {
  const ordersListProps = {
    ...props,
    isUseQuery: true,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return removeQueryToUrl(['id'])
      }
      return addQueryToUrl({ id: orderId })
    }
  }
  return (
    <>
      <HelmetTags page='orders' />
      <OrdersManagerController {...ordersListProps} />
    </>
  )
}
