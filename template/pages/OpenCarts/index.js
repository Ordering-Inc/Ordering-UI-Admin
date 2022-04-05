import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OpenCartListing as OpenCartListingController } from '../../../src/components/CartRecovery'

export const OpenCarts = (props) => {
  return (
    <>
      <HelmetTags page='open_carts' />
      <OpenCartListingController {...props} />
    </>
  )
}
