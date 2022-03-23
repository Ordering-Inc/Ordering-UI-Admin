import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { CampaignListing as CampaignListingController } from '../../../src/components/Marketing'

export const CampaignListing = (props) => {
  return (
    <>
      <HelmetTags page='campaign' />
      <CampaignListingController {...props} />
    </>
  )
}
