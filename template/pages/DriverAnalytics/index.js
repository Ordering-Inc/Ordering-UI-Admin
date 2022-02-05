import React from 'react'
import { HelmetTags } from '../../components/HelmetTags'
import { DriverAnalytics as DriverAnalyticsController } from '../../../src/components/BusinessIntelligence'

export const DriverAnalytics = (props) => {
  return (
    <>
      <HelmetTags page='drivers_analytics' />
      <DriverAnalyticsController {...props} />
    </>
  )
}
