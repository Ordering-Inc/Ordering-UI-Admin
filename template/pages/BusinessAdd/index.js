import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessAdd as BusinessAddController } from '../../../src/components/Stores'
export const BusinessAdd = (props) => {
  return (
    <>
      <HelmetTags page='business_add' />
      <BusinessAddController {...props} />
    </>
  )
}
