import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { GiftCardsListing as GiftCardsListingController } from '../../../src/components/Orders'

export const GiftCardsList = (props) => {
  const giftCardProps = {
    ...props,
    isUseQuery: true
  }
  return (
    <>
      <HelmetTags page='gift_cards' />
      <GiftCardsListingController {...giftCardProps} />
    </>
  )
}
