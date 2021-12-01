import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { EnterprisePromontionListing } from '../../../src/components/EnterprisePromontionListing'

export const EnterprisePromotionList = (props) => {
  const enterprisePromotionListProps = {
    ...props,
    isSearchByPromotionName: true,
    isSearchByPromotionDescription: true
  }
  return (
    <>
      <HelmetTags page='enterprise_promotions' />
      <EnterprisePromontionListing {...enterprisePromotionListProps} />
    </>
  )
}
