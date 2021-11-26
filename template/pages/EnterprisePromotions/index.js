import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { EnterprisePromontionList as EnterprisePromotionsController } from '../../../src/components/EnterprisePromontionList'

export const EnterprisePromotions = (props) => {
  return (
    <>
      <HelmetTags page='enterprise_promotions' />
      <EnterprisePromotionsController {...props} />
    </>
  )
}
