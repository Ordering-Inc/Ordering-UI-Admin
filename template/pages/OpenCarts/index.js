import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { useEvent } from 'ordering-components-admin'
import { OpenCartListing as OpenCartListingController } from '../../../src/components/CartRecovery'

export const OpenCarts = (props) => {
  const [events] = useEvent()

  const openCartsProps = {
    ...props,
    onCartRedirect: (id) => {
      if (!id) {
        return events.emit('go_to_page', { page: 'open_carts', replace: true })
      }
      return events.emit('go_to_page', { page: 'open_carts', search: `?id=${id}` })
    }
  }

  return (
    <>
      <HelmetTags page='open_carts' />
      <OpenCartListingController {...openCartsProps} />
    </>
  )
}
