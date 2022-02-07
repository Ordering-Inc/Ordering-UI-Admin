import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { OrdersManager as OrdersManagerController } from '../../../src/components/Orders'

export const OrdersList = (props) => {
  const [events] = useEvent()
  const ordersListProps = {
    ...props,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return events.emit('go_to_page', { page: 'orders', replace: true })
      }
      return events.emit('go_to_page', { page: 'orders', search: `?id=${orderId}` })
    }
  }
  return (
    <>
      <HelmetTags page='orders' />
      <OrdersManagerController {...ordersListProps} />
    </>
  )
}
