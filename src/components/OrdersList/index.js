import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  OrderDetailsContainer
} from './styles'
import { OrdersManage as OrdersManageController, OrderList as OrdersListController, useLanguage } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderListing } from '../OrderListing'
import { OrderDetails } from '../OrderDetails'

const OrdersListUI = (props) => {
  const {
    searchValue,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deleteMultiOrderStatus,
    handleResetDeleteMulitOrders,
    changeMulitOrderStatus,
    multiOrderUpdateStatus,
    handleResetChangeMultiOrder,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders
  } = props

  const [, t] = useLanguage()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)

  const OrdersCommonControlProps = {
    ...props,
    UIComponent: OrderListing,
    useDefualtSessionManager: true,
    asDashboard: true,
    searchValue: searchValue,
    filterValues: filterValues,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    deleteMultiOrderStatus: deleteMultiOrderStatus,
    handleResetDeleteMulitOrders: handleResetDeleteMulitOrders,
    changeMulitOrderStatus: changeMulitOrderStatus,
    multiOrderUpdateStatus: multiOrderUpdateStatus,
    handleResetChangeMultiOrder: handleResetChangeMultiOrder,
    driversList: driversList,
    orderListView: 'big'
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    pendingOrder: true,
    orderStatusTitle: t('PENDING_ORDERS', 'Pendig orders')
  }

  const PreOrdersControlProps = {
    orderStatus: [0],
    preOrder: true,
    orderStatusTitle: t('PREORDERS', 'Preorders')
  }

  const AcceptedByBusinessOrdersControlProps = {
    orderStatus: [7],
    orderStatusTitle: t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')
  }

  const AcceptedByDriverOrdersControlProps = {
    orderStatus: [8],
    orderStatusTitle: t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')
  }

  const ReadyForPickupOrdersControlProps = {
    orderStatus: [4],
    orderStatusTitle: t('READY_FOR_PICKUP', 'Ready for pickup')
  }

  const PickupCompletedByDriverOrdersControlProps = {
    orderStatus: [9],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
  }

  const DriverArrivedByBusinessOrdersControlProps = {
    orderStatus: [3],
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  }

  const CompletedByAdminOrdersControlProps = {
    orderStatus: [1],
    orderStatusTitle: t('COMPLETED_BY_ADMIN', 'Completed by admin')
  }

  const DeliveryCompletedByDriverOrdersControlProps = {
    orderStatus: [11],
    orderStatusTitle: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
  }

  const RejectByAdminOrdersControlProps = {
    orderStatus: [2],
    orderStatusTitle: t('REJECTED_BY_ADMIN', 'Rejected by admin')
  }

  const RejectByBusinessOrdersControlProps = {
    orderStatus: [5],
    orderStatusTitle: t('REJECT_BY_BUSINESS', 'Reject by business')
  }

  const RejectByDriverOrdersControlProps = {
    orderStatus: [6],
    orderStatusTitle: t('REJECT_BY_DRIVER', 'Reject by driver')
  }

  const PickupFailedByDriverOrdersControlProps = {
    orderStatus: [10],
    orderStatusTitle: t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')
  }

  const DeliveryFailedByDriverOrdersControlProps = {
    orderStatus: [12],
    orderStatusTitle: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')
  }

  useEffect(() => {
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      setOrderDetailId(id)
      setIsOpenOrderDetail(true)
    }
  }, [])

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    history.push('/orders')
  }

  const handleOpenOrderDetail = (id) => {
    setOrderDetailId(id)
    setIsOpenOrderDetail(true)
  }

  return (
    <>
      <OrdersListContainer>
        <OrderStatusFilterBar
          selectedOrderStatus={ordersStatusGroup}
          changeOrderStatus={handleOrdersStatusGroupFilter}
        />
        <OrdersContent>
          <OrdersInnerContent className='order-content'>
            <OrderContentHeader
              active='orders'
              searchValue={searchValue}
              driversList={driversList}
              paymethodsList={paymethodsList}
              businessesList={businessesList}
              ordersStatusSelected={ordersStatusGroup}
              handleChangeSearch={handleChangeSearch}
              handleChangeFilterValues={handleChangeFilterValues}
            />
            <OrdersDashboardControls
              handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              handleDeleteMultiOrders={handleDeleteMultiOrders}
            />
            {ordersStatusGroup === 'pending' && (
              <>
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PendingOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PreOrdersControlProps} />
              </>
            )}
            {ordersStatusGroup === 'inProgress' && (
              <>
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByBusinessOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps} />
              </>
            )}
            {ordersStatusGroup === 'completed' && (
              <>
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps} />
              </>
            )}
            {ordersStatusGroup === 'cancelled' && (
              <>
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps} />
                <OrdersListController handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps} />
              </>
            )}
          </OrdersInnerContent>
        </OrdersContent>
      </OrdersListContainer>

      {isOpenOrderDetail && (
        <OrderDetailsContainer>
          <OrderDetails
            orderId={orderDetailId}
            handleBackRedirect={handleBackRedirect}
          />
        </OrderDetailsContainer>
      )}
    </>
  )
}

export const OrdersList = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersListUI
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
