import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { EnterprisePromontionListing } from '../../../src/components/EnterprisePromontionListing'

export const EnterprisePromotionList = (props) => {
  return (
    <>
      <HelmetTags page='enterprise_promotions' />
      <EnterprisePromontionListing {...props} />
    </>
  )
}
