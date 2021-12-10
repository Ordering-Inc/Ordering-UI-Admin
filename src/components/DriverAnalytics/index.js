import React, { useState } from 'react'
import { useLanguage, DriverAnalytics as DriverAnalyticsController } from 'ordering-components-admin'
import { AnalyticsDriversFilter } from '../AnalyticsDriversFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button, IconButton } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AnalyticsStatusFilterBar } from '../AnalyticsStatusFilterBar'
import { AnalyticsMap } from '../AnalyticsMap'
import { AnalyticsOrdersStatus } from '../AnalyticsOrdersStatus'
import { AnalyticsCustomerSatisfaction } from '../AnalyticsCustomerSatisfaction'
import { AnalyticsOrdersAcceptSpend } from '../AnalyticsOrdersAcceptSpend'
import { AnalyticsFilterTimeZone } from '../AnalyticsFilterTimeZone'
import { AnalyticsTopOrders } from '../AnalyticsTopOrders'
import { AnalyticsSpendTimes } from '../AnalyticsSpendTimes'
import { AnalyticsAvailableTimes } from '../AnalyticsAvailableTimes'
import { AnalyticsBusyTimes } from '../AnalyticsBusyTimes'
import { AnalyticsSpendList } from '../AnalyticsSpendList'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useInfoShare } from '../../contexts/InfoShareContext'
import { ReportsDriverGroupFilter } from '../ReportsDriverGroupFilter'
import { AnalyticsStatusSubFilter } from '../AnalyticsStatusSubFilter'

import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  HeaderTitleContainer,
  HeaderFilterContainer,
  BusinessFilterWrapper,
  BusinessCalendarWrapper,
  AnalyticsContentWrapper,
  MapWrraper,
  AnalyticsTimeZoneWrapper
} from './styles'
import { AnalyticsDriverOrders } from '../AnalyticsDriverOrders'
import { ReportsBrandFilter } from '../ReportsBrandFilter'

const DriverAnalyticsUI = (props) => {
  const {
    handleChangeFilterList,
    filterList,
    ordersList,
    salesList,
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
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const handleChangeDate = (date1, date2) => {
    handleChangeFilterList({ ...filterList, lapse: `${date1},${date2}` })
  }

  const [driversFilterModal, setDriversFilterModal] = useState(false)
  const [driverGroupModal, setDriverGroupModal] = useState(false)
  const [isBrandFilter, setIsBrandFilter] = useState(false)

  return (
    <BusinessAnalyticsContainer>
      <BusinessAnalyticsHeader>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('DRIVERS_ANALYTICS', 'Drivers analytics')}</h1>
        </HeaderTitleContainer>
        <HeaderFilterContainer>
          <BusinessFilterWrapper>
            <Button onClick={() => setIsBrandFilter(true)}>
              {t('BRAND', 'Brand')} ({filterList?.franchises_id ? filterList?.franchises_id.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
          <BusinessFilterWrapper>
            <Button onClick={() => setDriverGroupModal(true)}>
              {t('DRIVER_GROUP', 'Driver group')} ({filterList?.driver_groups_ids ? filterList?.driver_groups_ids.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
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
              handleChangeDate={handleChangeDate}
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
        <div className='col-md-12 col-lg-6'>
          <AnalyticsDriverOrders
            isOrders
            filterList={filterList}
            chartDataList={ordersList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsDriverOrders
            filterList={filterList}
            chartDataList={salesList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsTopOrders
            dataList={topOrdersList}
          />

        </div>
        <div className='col-md-12 col-lg-6'>
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
        <div className='col-md-12 col-lg-6'>
          <AnalyticsSpendTimes
            chartDataList={spendTimesList}
            filterList={filterList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsAvailableTimes
            filterList={filterList}
            availableTimesList={availableTimesList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsBusyTimes
            filterList={filterList}
            busyTimesList={busyTimesList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsOrdersAcceptSpend
            dataList={ordersAcceptSpendList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsSpendList
            title={t('ORDER_INBUSINESS_PICKUP_SPEND', 'Time spent in business waiting for order')}
            dataList={completeSpendList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsSpendList
            title={t('ORDER_PICKUP_SPEND', 'Time spent to pickup order')}
            dataList={pickUpSpendList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsSpendList
            title={t('ORDER_DELIVERY_SPEND', 'Time spent to deliver order')}
            dataList={deliverySpendList}
          />
        </div>
        <div className='col-md-12 col-lg-6'>
          <AnalyticsSpendList
            title={t('ORDER_COMPLETE_SPEND', 'Time spent since order accepted to pickup and deliver the order')}
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
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('DRIVER_GROUP', 'Driver group')}
        open={driverGroupModal}
        onClose={() => setDriverGroupModal(false)}
      >
        <ReportsDriverGroupFilter
          {...props}
          onClose={() => setDriverGroupModal(false)}
        />
      </Modal>
      <Modal
        width='50%'
        height='80vh'
        padding='30px'
        title={t('BRAND', 'Brand')}
        open={isBrandFilter}
        onClose={() => setIsBrandFilter(false)}
      >
        <ReportsBrandFilter
          {...props}
          onClose={() => setIsBrandFilter(false)}
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
