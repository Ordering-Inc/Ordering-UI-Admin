import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessBrandListing as BusinessBrandListingController } from '../../../src/components/BusinessBrandListing'

export const BrandManager = (props) => {
  return (
    <>
      <HelmetTags page='brand' />
      <BusinessBrandListingController {...props} />
    </>
  )
}
