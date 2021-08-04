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
import { AnalyticsCustomerSatisfaction } from '../AnalyticsCustomerSatisfaction'
import { AnalyticsOrdersAcceptSpend } from '../AnalyticsOrdersAcceptSpend'
import { AnalyticsArrivedPickUp } from '../AnalyticsArrivedPickUp'
import { AnalyticsTimeZone } from '../AnalyticsTimeZone'
import { AnalyticsTopOrders } from '../AnalyticsTopOrders'
import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  HeaderFilterContainer,
  BusinessFilterWrapper,
  BusinessCalendarWrapper,
  AnalyticsContentWrapper,
  MapWrraper,
  AnalyticsTimeZoneWrapper
} from './styles'

const DriverAnalyticsUI = (props) => {
  const {
    filterList,
    ordersList,
    salesList,
    topProductList,
    topCategoryList,
    orderStatusList,
    topOrdersList,
    customerSatisfactionList,
    ordersAcceptSpendList,
    arrivedPickUpSpendList,
    orderLocationList,
    spendTimesList
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
              {t('DRIVERS', 'DRIVERS')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
          <AnalyticsTimeZoneWrapper>
            <AnalyticsTimeZone {...props} />
          </AnalyticsTimeZoneWrapper>
          <BusinessCalendarWrapper>
            <AnalyticsCalendar
              {...props}
            />
          </BusinessCalendarWrapper>
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
          locationList={orderLocationList}
        />
      </MapWrraper>

      <AnalyticsContentWrapper className='row'>
        <div className='col-md-6'>
          <AnalyticsOrdersOrSales
            isOrders
            filterList={filterList}
            chartDataList={ordersList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersOrSales
            filterList={filterList}
            chartDataList={salesList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories
            filterList={filterList}
            productCategoryList={topProductList}
            isProducts
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsProductCategories
            filterList={filterList}
            productCategoryList={topCategoryList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsTopOrders
            dataList={topOrdersList}
          />

        </div>
        <div className='col-md-6'>
          <AnalyticsCustomerSatisfaction
            dataList={customerSatisfactionList}
          />
        </div>
        <div className='col-md-12'>
          <AnalyticsOrdersStatus
            filterList={filterList}
            orderStatusList={orderStatusList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersAcceptSpend
            dataList={ordersAcceptSpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsArrivedPickUp
            dataList={arrivedPickUpSpendList}
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
