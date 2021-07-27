import React from 'react'
import { BusinessAnalytics as BusinessAnalyticsController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader
} from './styles'

const BusinessAnalyticsUI = (props) => {
  const [, t] = useLanguage()

  return (
    <BusinessAnalyticsContainer>
      <BusinessAnalyticsHeader>
        <h1>{t('BUSINESS_ANALYTICS', 'Business Analytics')}</h1>
        <div>calendar</div>
      </BusinessAnalyticsHeader>
    </BusinessAnalyticsContainer>
  )
}

export const BusinessAnalytics = (props) => {
  const businessAnalyticsProps = {
    ...props,
    UIComponent: BusinessAnalyticsUI
  }
  return (
    <BusinessAnalyticsController {...businessAnalyticsProps} />
  )
}