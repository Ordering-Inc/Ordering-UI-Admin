import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { EnterprisePromotionListing } from '../../../src/components/Marketing'

export const EnterprisePromotionList = (props) => {
  const enterprisePromotionListProps = {
    ...props,
    isSearchByPromotionName: true,
    isSearchByPromotionDescription: true
  }
  return (
    <>
      <HelmetTags page='enterprise_promotions' />
      <EnterprisePromotionListing {...enterprisePromotionListProps} />
    </>
  )
}
