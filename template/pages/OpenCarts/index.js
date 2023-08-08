import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OpenCartListing as OpenCartListingController } from '../../../src/components/CartRecovery'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const OpenCarts = (props) => {
  const openCartsProps = {
    ...props,
    isUseQuery: true,
    onCartRedirect: (id) => {
      if (!id) {
        return removeQueryToUrl(['id'])
      }
      return addQueryToUrl({ id: id })
    }
  }

  return (
    <>
      <HelmetTags page='open_carts' />
      <OpenCartListingController {...openCartsProps} />
    </>
  )
}
