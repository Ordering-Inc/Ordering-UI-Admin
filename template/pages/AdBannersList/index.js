import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { AdBannersListing as AdBannersListController } from '../../../src/components/Marketing'

export const AdBannersList = (props) => {
  return (
    <>
      <HelmetTags page='ad_banners' />
      <AdBannersListController {...props} />
    </>
  )
}
