import React, { useState } from 'react'
import { BusinessAnalytics as BusinessAnalyticsController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  BusinessFilterCalendar,
  BusinessFilterWrapper
} from './styles'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'

const BusinessAnalyticsUI = (props) => {
  const [, t] = useLanguage()
  const [businessFilterModal, setBusinessFilterModal] = useState(false)

  return (
    <BusinessAnalyticsContainer>
      <BusinessAnalyticsHeader>
        <h1>{t('BUSINESS_ANALYTICS', 'Business Analytics')}</h1>
        <BusinessFilterCalendar>
          <BusinessFilterWrapper>
            <Button onClick={() => setBusinessFilterModal(true)}>
              {t('BUSINESS', 'Business')} (All)
            </Button>
          </BusinessFilterWrapper>
        </BusinessFilterCalendar>
      </BusinessAnalyticsHeader>

      <Modal
        width='80%'
        height='80vh'
        padding='30px'
        title={t('BUSINESSES', 'Businesses')}
        open={businessFilterModal}
        onClose={() => setBusinessFilterModal(false)}
      >
        <AnalyticsBusinessFilter />
      </Modal>
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
