import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessesListing } from '../../../src/components/Stores'
import { addQueryToUrl, removeQueryToUrl } from '../../../src/utils'

export const BusinessesList = (props) => {
  const businessesProps = {
    ...props,
    isUseQuery: true,
    onBusinessRedirect: (businessId) => {
      if (!businessId) {
        return removeQueryToUrl(['id', 'section', 'tab', 'business_type', 'paymethod', 'payemthod_tab', 'setting_tab', 'menu', 'product', 'zone', 'zone_tab', 'wallet'])
      }
      return addQueryToUrl({ id: businessId })
    }
  }
  return (
    <>
      <HelmetTags page='businesses' />
      <BusinessesListing {...businessesProps} />
    </>
  )
}
