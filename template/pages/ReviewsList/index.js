import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { ReviewsListing as ReviewsListingController } from '../../../src/components/BusinessIntelligence'

export const ReviewsList = (props) => {
  return (
    <>
      <HelmetTags page='reviews' />
      <ReviewsListingController {...props} />
    </>
  )
}
