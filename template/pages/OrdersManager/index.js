import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { OrdersManager as OrdersManagerController } from '../../../src/themes/two/src/components/OrdersManager'
export const OrdersManager = (props) => {
  const [events] = useEvent()
  const OrdersManagerProps = {
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
      <OrdersManagerController {...OrdersManagerProps} />
    </>
  )
}
