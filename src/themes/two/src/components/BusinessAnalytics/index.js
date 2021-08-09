import React, { useState } from 'react'
import { useLanguage, BusinessAnalytics as BusinessAnalyticsController } from 'ordering-components-admin'
import { AnalyticsBusinessFilter } from '../AnalyticsBusinessFilter'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button, IconButton } from '../../styles/Buttons'
import { Modal } from '../Modal'
import { AnalyticsStatusFilterBar } from '../AnalyticsStatusFilterBar'
import { AnalyticsStatusSubFilter } from '../AnalyticsStatusSubFilter'
import { AnalyticsMap } from '../AnalyticsMap'
import { AnalyticsOrdersOrSales } from '../AnalyticsOrdersOrSales'
import { AnalyticsProductCategories } from '../AnalyticsProductCategories'
import { AnalyticsOrdersStatus } from '../AnalyticsOrdersStatus'
import { AnalyticsRegisterUsers } from '../AnalyticsRegisterUsers'
import { AnalyticsCustomerSatisfaction } from '../AnalyticsCustomerSatisfaction'
import { AnalyticsOrdersAcceptSpend } from '../AnalyticsOrdersAcceptSpend'
import { AnalyticsSpendList } from '../AnalyticsSpendList'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'

import {
  BusinessAnalyticsContainer,
  BusinessAnalyticsHeader,
  HeaderTitleContainer,
  HeaderFilterContainer,
  BusinessFilterWrapper,
  BusinessCalendarWrapper,
  AnalyticsContentWrapper,
  MapWrraper
} from './styles'

const BusinessAnalyticsUI = (props) => {
  const {
    filterList,
    ordersList,
    salesList,
    topProductList,
    topCategoryList,
    orderStatusList,
    registerUsersList,
    customerSatisfactionList,
    ordersAcceptSpendList,
    arrivedPickUpSpendList,
    orderLocationList
  } = props

  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [businessFilterModal, setBusinessFilterModal] = useState(false)

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
          <h1>{t('BUSINESS_ANALYTICS', 'Business Analytics')}</h1>
        </HeaderTitleContainer>
        <HeaderFilterContainer>
          <BusinessFilterWrapper>
            <Button onClick={() => setBusinessFilterModal(true)}>
              {t('BUSINESS', 'Business')} ({filterList?.businessIds ? filterList?.businessIds.length : t('ALL', 'All')})
            </Button>
          </BusinessFilterWrapper>
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
        <div className='col-md-12'>
          <AnalyticsOrdersStatus
            filterList={filterList}
            orderStatusList={orderStatusList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsRegisterUsers
            registerUsersList={registerUsersList}
            filterList={filterList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsCustomerSatisfaction
            dataList={customerSatisfactionList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsOrdersAcceptSpend
            dataList={ordersAcceptSpendList}
          />
        </div>
        <div className='col-md-6'>
          <AnalyticsSpendList
            dataList={arrivedPickUpSpendList}
            title={t('TIME_WAITING_ON_READY_FOR_PICKUP', 'TIME SPENT WAITING ON READY FOR PICKUP')}
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

export const BusinessAnalytics = (props) => {
  const businessAnalyticsProps = {
    ...props,
    UIComponent: BusinessAnalyticsUI
  }
  return (
    <BusinessAnalyticsController {...businessAnalyticsProps} />
  )
}
