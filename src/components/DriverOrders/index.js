import React from 'react'
import { useLanguage, DashboardOrdersList as OrdersListController } from 'ordering-components'
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
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()

  const OrdersControlProps = {
    ...props,
    UIComponent: OrderListing,
    orderBy: 'id',
    orderDirection: 'desc',
    useDefualtSessionManager: true,
    asDashboard: true,
    orderStatus: [0, 3, 4, 7, 8, 9],
    initialPageSize: 50,
    loadMorePageSize: 10,
    driverId: driver.id,
    filterValues: {},
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    handleSelectedOrderIds: handleSelectedOrderIds,
    driversList: driversList,
    orderListView: 'big',
    handleOpenOrderDetail: handleOpenOrderDetail,
    driverOrdersView: true
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
