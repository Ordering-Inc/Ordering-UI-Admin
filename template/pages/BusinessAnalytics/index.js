import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessAnalytics as BusinessAnalyticsController } from '../../../src/themes/two/src/components/BusinessAnalytics'

export const BusinessAnalytics = (props) => {
  return (
    <>
      <HelmetTags page='business_analytics' />
      <BusinessAnalyticsController {...props} />
    </>
  )
}
