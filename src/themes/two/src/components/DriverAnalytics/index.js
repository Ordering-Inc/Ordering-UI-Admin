import React, { useState } from 'react'
import { DriverAnalytics as DriverAnalyticsController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AnalyticsStatusFilterBar } from '../AnalyticsStatusFilterBar'
import { AnalyticsStatusSubFilter } from '../AnalyticsStatusSubFilter'
import { AnalyticsMap } from '../AnalyticsMap'
import { AnalyticsOrdersOrSales } from '../AnalyticsOrdersOrSales'
import { AnalyticsProductCategories } from '../AnalyticsProductCategories'
import { AnalyticsOrdersStatus } from '../AnalyticsOrdersStatus'
import { AnalyticsRegisterUsers } from '../AnalyticsRegisterUsers'
import { AnalyticsCustomerSatisfaction } from '../AnalyticsCustomerSatisfaction'
import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  HeaderFilterContainer,
  BusinessFilterWrapper,
  CalendarWrapper,
  AnalyticsContentWrapper,
  MapWrraper,
  TimeZoneFilterWrapper
} from './styles'
import { AnalyticsOrdersAcceptSpend } from '../AnalyticsOrdersAcceptSpend'
import { AnalyticsArrivedPickUp } from '../AnalyticsArrivedPickUp'
import { AnalyticsTimeZone } from '../AnalyticsTimeZone'

const DriverAnalyticsUI = (props) => {
  const {
    filterList
  } = props

  const [, t] = useLanguage()
  const [businessFilterModal, setBusinessFilterModal] = useState(false)

  return (
    <BusinessAnalyticsContainer>
      <BusinessAnalyticsHeader>
        <h1>{t('DRIVERS_ANALYTICS', 'Drivers analytics')}</h1>
        <HeaderFilterContainer>
          <BusinessFilterWrapper>
            <Button onClick={() => setBusinessFilterModal(true)}>
              {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
          <TimeZoneFilterWrapper>
            <AnalyticsTimeZone
              {...props}
            />
          </TimeZoneFilterWrapper>
          <CalendarWrapper>
            <AnalyticsCalendar
              {...props}
            />
          </CalendarWrapper>
        </HeaderFilterContainer>
      </BusinessAnalyticsHeader>
      <AnalyticsStatusFilterBar
        {...props}
      />
      <AnalyticsStatusSubFilter
        {...props}
      />
      <MapWrraper>
        <AnalyticsMap
          {...props}
        />
      </MapWrraper>

      <AnalyticsContentWrapper className='row'>
        <div className='col-md-6'>
          <AnalyticsOrdersOrSales isOrders {...props} />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersOrSales {...props} />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories
            {...props}
            isProducts
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories
            {...props}
          />
        </div>
        <div className='col-md-12'>
          <AnalyticsOrdersStatus
            {...props}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsRegisterUsers
            {...props}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsCustomerSatisfaction
            {...props}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersAcceptSpend
            {...props}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsArrivedPickUp
            {...props}
          />
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
        <AnalyticsBusinessFilter
          {...props} onClose={() => setBusinessFilterModal(false)}
        />
      </Modal>
    </BusinessAnalyticsContainer>
  )
}

export const DriverAnalytics = (props) => {
  const driverAnalyticsProps = {
    ...props,
    UIComponent: DriverAnalyticsUI
  }
  return (
    <DriverAnalyticsController {...driverAnalyticsProps} />
  )
}
