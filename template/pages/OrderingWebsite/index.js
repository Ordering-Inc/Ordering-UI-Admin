import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { OrderingWebsite as OrderingWebsiteController } from '../../../src/components/MyProducts'

export const OrderingWebsite = (props) => {
  return (
    <>
      <HelmetTags page='ordering_website' />
      <OrderingWebsiteController {...props} />
    </>
  )
}
