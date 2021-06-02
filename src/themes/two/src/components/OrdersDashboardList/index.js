import React, { useEffect, useState } from 'react'
import { DashboardOrdersList as OrdersListController, useLanguage } from 'ordering-components-admin'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

export const OrdersDashboardList = (props) => {
  const {
    orderListView,
    searchValue,
    filterValues,
    selectedOrderIds,
    deletedOrderId,
    driversList,
    ordersStatusGroup,
    handleSelectedOrderIds,
    activeSwitch,
    handleOpenOrderDetail,
    selectedSubOrderStatus,
    handleLocation
  } = props
  const [, t] = useLanguage()

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    orderBy: 'id',
    orderDirection: 'desc',
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }

  const [inProgressOrdersLoaded, setInProgressOrdersLoaded] = useState(false)
  const [completedOrdersLoaded, setCompletedOrdersLoaded] = useState(false)
  const [cancelledOrdersLoaded, setCancelledOrdersLoaded] = useState(false)

  useEffect(() => {
    if (ordersStatusGroup === 'inProgress') setInProgressOrdersLoaded(true)
    if (ordersStatusGroup === 'completed') setCompletedOrdersLoaded(true)
    if (ordersStatusGroup === 'cancelled') setCancelledOrdersLoaded(true)
  }, [ordersStatusGroup])

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${(ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
      >
        <OrdersListController
          {...OrdersCommonControlProps}
          orderStatus={selectedSubOrderStatus?.pending}
        />
      </WrapperOrderlist>

      {(inProgressOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.inProgress}
          />
        </WrapperOrderlist>
      )}

      {(completedOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.completed}
          />
        </WrapperOrderlist>
      )}

      {(cancelledOrdersLoaded || (searchValue !== '' && searchValue !== null)) && (
        <WrapperOrderlist
          style={{ display: `${(ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null)) ? 'block' : 'none'}` }}
        >
          <OrdersListController
            {...OrdersCommonControlProps}
            orderStatus={selectedSubOrderStatus?.cancelled}
          />
        </WrapperOrderlist>
      )}
    </>
  )
}
