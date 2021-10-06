import React from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'ordering-components-admin'
import { HelmetTags } from '../../components/HelmetTags'
import { ReviewProductsListing as ReviewProductsListingController } from '../../../src/components/ReviewProductsListing'

export const ReviewProducts = (props) => {
  const { store } = useParams()
  const [ordering] = useApi()

  const reviewProductsProps = {
    ...props,
    ordering,
    slug: store
  }
  return (
    <>
      <HelmetTags page='reviewProducts' />
      <ReviewProductsListingController {...reviewProductsProps} />
    </>
  )
}
