import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessBrandListing as BusinessBrandListingController } from '../../../src/components/Stores'

export const BrandManager = (props) => {
  return (
    <>
      <HelmetTags page='brand' />
      <BusinessBrandListingController {...props} />
    </>
  )
}
