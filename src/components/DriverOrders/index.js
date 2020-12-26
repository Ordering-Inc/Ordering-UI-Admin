import React from 'react'
import { useLanguage, OrderList as OrdersListController } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderListing } from '../OrderListing'

import {
  WrapperDriverOrders,
  Header,
  WrapperDriverImage,
  DriverImage,
  DriverInfo,
  WrapperOrderListing
} from './styles'

export const DriverOrders = (props) => {
  const {
    driver,
    driversList,
    driverOrders,
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()

  const OrdersControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    asDashboard: true,
    // searchValue: searchValue,
    filterValues: {},
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    handleSelectedOrderIds: handleSelectedOrderIds,
    driversList: driversList,
    orderListView: 'big',
    orders: driverOrders.orders,
    driverOrdersLoading: driverOrders.loading,
    orderStatus: [],
    handleOpenOrderDetail: handleOpenOrderDetail
  }

  return (
    <WrapperDriverOrders>
      <Header>
        <WrapperDriverImage>
          {driver.photo ? (
            <DriverImage bgimage={driver.photo} />
          ) : (
            <FaUserAlt />
          )}
        </WrapperDriverImage>
        <DriverInfo>
          <h2>
            {driver.name} {driver.lastname}
          </h2>
          <p>
            {driver.assigned_orders_count} {t('ORDERS', 'Orders')}
          </p>
        </DriverInfo>
      </Header>
      <WrapperOrderListing>
        <OrdersListController {...OrdersControlProps} />
      </WrapperOrderListing>
    </WrapperDriverOrders>
  )
}
