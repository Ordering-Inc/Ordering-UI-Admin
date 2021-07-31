import React, { useState, useEffect, useRef } from 'react'
import { BusinessAnalytics as BusinessAnalyticsController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import FiCalendar from '@meronex/icons/fi/FiCalendar'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AnalyticsStatusFilterBar } from '../AnalyticsStatusFilterBar'
import { AnalyticsStatusSubFilter } from '../AnalyticsStatusSubFilter'
import { AnalyticsMap } from '../AnalyticsMap'
import { AnalyticsLineChart } from '../AnalyticsLineChart'
import { AnalyticsProductCategories } from '../AnalyticsProductCategories'
import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  BusinessFilterCalendar,
  BusinessFilterWrapper,
  BusinessCalendarWrapper,
  CalendarContainer,
  AnalyticsContentWrapper
} from './styles'
import { AnalyticsOrdersStatus } from '../AnalyticsOrdersStatus'

const BusinessAnalyticsUI = (props) => {
  const [, t] = useLanguage()
  const [businessFilterModal, setBusinessFilterModal] = useState(false)
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const calendarRef = useRef()

  const handleClickOutside = (e) => {
    console.log(isShowCalendar)
    if (!isShowCalendar) return
    const outsideCalendar = !calendarRef.current?.contains(e.target)
    if (outsideCalendar) {
      setIsShowCalendar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [isShowCalendar])

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
          <BusinessCalendarWrapper>
            <Button onClick={() => setIsShowCalendar(true)}>
              <FiCalendar />
              {t('BUSINESS', 'Business')}
            </Button>
            {
              isShowCalendar && (
                <CalendarContainer ref={calendarRef}>
                  <AnalyticsCalendar />
                </CalendarContainer>
              )
            }
          </BusinessCalendarWrapper>
        </BusinessFilterCalendar>
      </BusinessAnalyticsHeader>
      <AnalyticsStatusFilterBar {...props} />
      <AnalyticsStatusSubFilter {...props} />
      <AnalyticsMap />
      <AnalyticsContentWrapper className='row'>
        <div className='col-md-6'>
          <AnalyticsLineChart isOrders />
        </div>
        <div className='col-md-6'>
          <AnalyticsLineChart />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories isProducts />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories />
        </div>
        <div className='col-md-12'>
          <AnalyticsOrdersStatus />
        </div>
      </AnalyticsContentWrapper>
      <Modal
        width='50%'
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
