import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { BusinessAnalytics as BusinessAnalyticsController } from '../../../src/components/BusinessIntelligence'

export const BusinessAnalytics = (props) => {
  return (
    <>
      <HelmetTags page='business_analytics' />
      <BusinessAnalyticsController {...props} />
    </>
  )
}
