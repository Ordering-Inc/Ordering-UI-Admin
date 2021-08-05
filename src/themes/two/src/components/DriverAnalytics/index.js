import React, { useState } from 'react'
import { DriverAnalytics as DriverAnalyticsController } from './naked'
import { useLanguage } from 'ordering-components-admin'
import { AnalyticsDriversFilter } from '../AnalyticsDriversFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AnalyticsStatusFilterBar } from '../AnalyticsStatusFilterBar'
import { AnalyticsMap } from '../AnalyticsMap'
import { AnalyticsOrdersOrSales } from '../AnalyticsOrdersOrSales'
import { AnalyticsProductCategories } from '../AnalyticsProductCategories'
import { AnalyticsOrdersStatus } from '../AnalyticsOrdersStatus'
import { AnalyticsCustomerSatisfaction } from '../AnalyticsCustomerSatisfaction'
import { AnalyticsOrdersAcceptSpend } from '../AnalyticsOrdersAcceptSpend'
import { AnalyticsFilterTimeZone } from '../AnalyticsFilterTimeZone'
import { AnalyticsTopOrders } from '../AnalyticsTopOrders'
import { AnalyticsSpendTimes } from '../AnalyticsSpendTimes'
import { AnalyticsAvailableTimes } from '../AnalyticsAvailableTimes'
import { AnalyticsBusyTimes } from '../AnalyticsBusyTimes'
import { AnalyticsSpendList } from '../AnalyticsSpendList'
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
    availableTimesList,
    spendTimesList,
    busyTimesList,
    completeSpendList,
    pickUpSpendList,
    deliverySpendList
  } = props

  const [, t] = useLanguage()
  const [driversFilterModal, setDriversFilterModal] = useState(false)

  return (
    <BusinessAnalyticsContainer>
      <BusinessAnalyticsHeader>
        <h1>{t('DRIVERS_ANALYTICS', 'Drivers analytics')}</h1>
        <HeaderFilterContainer>
          <BusinessFilterWrapper>
            <Button onClick={() => setDriversFilterModal(true)}>
              {t('DRIVERS', 'DRIVERS')} ({filterList?.userIds ? filterList?.userIds.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
          <AnalyticsTimeZoneWrapper>
            <AnalyticsFilterTimeZone {...props} />
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
          <AnalyticsSpendTimes
            chartDataList={spendTimesList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsAvailableTimes
            filterList={filterList}
            availableTimesList={availableTimesList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsBusyTimes
            filterList={filterList}
            busyTimesList={busyTimesList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersAcceptSpend
            dataList={ordersAcceptSpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsSpendList
            title={t('TIME_SPENT_IN_BUSINESS_WAITING_FOR_ORDER', 'Time spent in business waiting for order')}
            dataList={completeSpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsSpendList
            title={t('TIME_SPENT_TO_PICKUP_ORDER', 'Time spent to pickup order')}
            dataList={pickUpSpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsSpendList
            title={t('TIME_SPENT_TO_DELIVER_ORDER', 'Time spent to deliver order')}
            dataList={deliverySpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsSpendList
            title={t('TIME_SPENT_SINCE_ORDER_ACCEPTED_TO_PICKUP_AND_DELIVER_THE_ORDER', 'Time spent since order accepted to pickup and deliver the order')}
            dataList={arrivedPickUpSpendList}
          />
        </div>
      </AnalyticsContentWrapper>

      <Modal
        width='40%'
        height='80vh'
        padding='30px'
        title={t('DRIVERS', 'Drivers')}
        open={driversFilterModal}
        onClose={() => setDriversFilterModal(false)}
      >
        <AnalyticsDriversFilter
          {...props} onClose={() => setDriversFilterModal(false)}
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
