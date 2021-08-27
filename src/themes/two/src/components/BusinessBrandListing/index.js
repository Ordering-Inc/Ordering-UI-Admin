import React from 'react'
import { BusinessBrandListing as BusinessBrandListingController } from './naked'
import {
  BrandListingContainer
} from './styles'

const BusinessBrandListingUI = (props) => {
  return (
    <BrandListingContainer>
    BrandListing
    </BrandListingContainer>
  )
}

export const BusinessBrandListing = (props) => {
  const businessBrandListingProps = {
    ...props,
    UIComponent: BusinessBrandListingUI
  }
  return <BusinessBrandListingController {...businessBrandListingProps} />
}
