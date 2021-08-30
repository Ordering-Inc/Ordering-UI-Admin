import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { ReviewsListing as ReviewsListingController } from '../../../src/components/ReviewsListing'

export const ReviewsList = (props) => {
  return (
    <>
      <HelmetTags page='reviews' />
      <ReviewsListingController {...props} />
    </>
  )
}
