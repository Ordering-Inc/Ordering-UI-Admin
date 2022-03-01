import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { OpenCarts as OpenCartsController } from '../../../src/components/CartRecovery'

export const OpenCarts = (props) => {
  const [events] = useEvent()
  const openCartsProps = {
    ...props,
    onOrderRedirect: (orderId) => {
      if (!orderId) {
        return events.emit('go_to_page', { page: 'openCarts', replace: true })
      }
      return events.emit('go_to_page', { page: 'open_carts', search: `?id=${orderId}` })
    }
  }

  return (
    <>
      <HelmetTags page='open_carts' />
      <OpenCartsController {...openCartsProps} />
    </>
  )
}
