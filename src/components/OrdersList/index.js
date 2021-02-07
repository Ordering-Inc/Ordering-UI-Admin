import React, { useState, useEffect } from 'react'
import { OrderList as OrdersListController, useLanguage } from 'ordering-components'
import { OrderListing } from '../OrderListing'
import { WrapperOrderlist } from './styles'

const OrdersListUI = (props) => {
  const {
    orderList,
    messageDashboardView,
    ordersStatusGroup,
    searchValue,
    openOrclosedOrderView
  } = props

  const [, t] = useLanguage()
  const [pendingOrders, setPendingOrders] = useState(null)

  const [acceptedByBusinessOrders, setAcceptedByBusinessOrders] = useState(null)
  const [readyForPickupOrders, setReadyForPickupOrders] = useState(null)
  const [acceptedByDriverOrders, setAcceptedByDriverOrders] = useState(null)
  const [driverArrivedByBusinessOrders, setDriverArrivedByBusinessOrders] = useState(null)
  const [pickupCompletedByDriverOrders, setPickupCompletedByDriverOrders] = useState(null)

  const [completedByAdminOrders, setCompletedByAdminOrders] = useState(null)
  const [deliveryCompletedByDriverOrders, setDeliveryCompletedByDriverOrders] = useState(null)

  const [rejectByAdminOrders, setRejectByAdminOrders] = useState(null)
  const [rejectByBusinessOrders, setRejectByBusinessOrders] = useState(null)
  const [rejectByDriverOrders, setRejectByDriverOrders] = useState(null)
  const [pickupFailedByDriverOrders, setPickupFailedByDriverOrders] = useState(null)
  const [deliveryFailedByDriverOrders, setDeliveryFailedByDriverOrders] = useState(null)

  const [openOrders, setOpenOrders] = useState(null)
  const [closeOrders, setCloseOrders] = useState(null)

  useEffect(() => {
    if (orderList.loading) return
    const _pendingOrders = orderList.orders.filter(order => order.status === 0)
    setPendingOrders(_pendingOrders)

    const _acceptedByBusinessOrders = orderList.orders.filter(order => order.status === 7)
    setAcceptedByBusinessOrders(_acceptedByBusinessOrders)
    const _readyForPickupOrders = orderList.orders.filter(order => order.status === 4)
    setReadyForPickupOrders(_readyForPickupOrders)
    const _acceptedByDriverOrders = orderList.orders.filter(order => order.status === 8)
    setAcceptedByDriverOrders(_acceptedByDriverOrders)
    const _driverArrivedByBusinessOrders = orderList.orders.filter(order => order.status === 3)
    setDriverArrivedByBusinessOrders(_driverArrivedByBusinessOrders)
    const _pickupCompletedByDriverOrders = orderList.orders.filter(order => order.status === 9)
    setPickupCompletedByDriverOrders(_pickupCompletedByDriverOrders)

    const _completedByAdminOrders = orderList.orders.filter(order => order.status === 1)
    setCompletedByAdminOrders(_completedByAdminOrders)
    const _deliveryCompletedByDriverOrders = orderList.orders.filter(order => order.status === 11)
    setDeliveryCompletedByDriverOrders(_deliveryCompletedByDriverOrders)

    const _rejectByAdminOrders = orderList.orders.filter(order => order.status === 2)
    setRejectByAdminOrders(_rejectByAdminOrders)
    const _rejectByBusinessOrders = orderList.orders.filter(order => order.status === 5)
    setRejectByBusinessOrders(_rejectByBusinessOrders)
    const _rejectByDriverOrders = orderList.orders.filter(order => order.status === 6)
    setRejectByDriverOrders(_rejectByDriverOrders)
    const _pickupFailedByDriverOrders = orderList.orders.filter(order => order.status === 10)
    setPickupFailedByDriverOrders(_pickupFailedByDriverOrders)
    const _deliveryFailedByDriverOrders = orderList.orders.filter(order => order.status === 12)
    setDeliveryFailedByDriverOrders(_deliveryFailedByDriverOrders)

    const _openOrders = orderList.orders.filter(order => order.status === 0 || order.status === 7 || order.status === 8 || order.status === 3 || order.status === 4 || order.status === 9)
    setOpenOrders(_openOrders)
    const _closerOrders = orderList.orders.filter(order => order.status === 1 || order.status === 11 || order.status === 2 || order.status === 5 || order.status === 6 || order.status === 10 || order.status === 12)
    setCloseOrders(_closerOrders)
  }, [orderList])

  return (
    <>
      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          size='small'
          orderStatusTitle={t('PENDING', 'Pendig')}
          orderList={pendingOrders}
          orderLoading={orderList.loading || pendingOrders === null}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          orderStatusTitle={t('ACCEPTED_BY_BUSINESS', 'Accepted by Business')}
          orderList={acceptedByBusinessOrders}
          orderLoading={orderList.loading || acceptedByBusinessOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('READY_FOR_PICKUP', 'Ready for pickup')}
          orderList={readyForPickupOrders}
          orderLoading={orderList.loading || readyForPickupOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('ACCEPTED_BY_DRIVER', 'Accepted by Driver')}
          orderList={acceptedByDriverOrders}
          orderLoading={orderList.loading || acceptedByDriverOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')}
          orderList={driverArrivedByBusinessOrders}
          orderLoading={orderList.loading || driverArrivedByBusinessOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')}
          orderList={pickupCompletedByDriverOrders}
          orderLoading={orderList.loading || pickupCompletedByDriverOrders === null}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          orderStatusTitle={t('COMPLETED_BY_ADMIN', 'Completed by admin')}
          orderList={completedByAdminOrders}
          orderLoading={orderList.loading || completedByAdminOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')}
          orderList={deliveryCompletedByDriverOrders}
          orderLoading={orderList.loading || deliveryCompletedByDriverOrders === null}
        />
      </WrapperOrderlist>

      <WrapperOrderlist
        style={{ display: `${(!messageDashboardView && (ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          orderStatusTitle={t('REJECTED_BY_ADMIN', 'Rejected by admin')}
          orderList={rejectByAdminOrders}
          orderLoading={orderList.loading || rejectByAdminOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('REJECT_BY_BUSINESS', 'Reject by business')}
          orderList={rejectByBusinessOrders}
          orderLoading={orderList.loading || rejectByBusinessOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('REJECT_BY_DRIVER', 'Reject by driver')}
          orderList={rejectByDriverOrders}
          orderLoading={orderList.loading || rejectByDriverOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('PICKUP_FAILED_BY_DRIVER', 'Pickup failed by driver')}
          orderList={pickupFailedByDriverOrders}
          orderLoading={orderList.loading || pickupFailedByDriverOrders === null}
        />
        <OrderListing
          {...props}
          orderStatusTitle={t('DELIVERY_FAILED_BY_DRIVER', 'Delivery failed by driver')}
          orderList={deliveryFailedByDriverOrders}
          orderLoading={orderList.loading || deliveryFailedByDriverOrders === null}
        />
      </WrapperOrderlist>

      {/* Message dashboard view */}
      <WrapperOrderlist
        style={{ display: `${(messageDashboardView && (openOrclosedOrderView === 'open' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          messageListView
          orderList={openOrders}
          orderLoading={orderList.loading || openOrders === null}
        />
      </WrapperOrderlist>
      <WrapperOrderlist
        style={{ display: `${(messageDashboardView && (openOrclosedOrderView === 'close' || (searchValue !== '' && searchValue !== null))) ? 'block' : 'none'}` }}
      >
        <OrderListing
          {...props}
          orderList={closeOrders}
          orderLoading={orderList.loading || closeOrders === null}
        />
      </WrapperOrderlist>
    </>
  )
}

export const OrdersList = (props) => {
  const ordersListProps = {
    ...props,
    UIComponent: OrdersListUI,
    useDefualtSessionManager: true,
    asDashboard: true,
    isSearchByOrderId: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true,
    orderBy: props.orderBy,
    orderDirection: props.orderBy === 'id' ? 'desc' : 'asc',
    orderStatus: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // propsToFetch: [
    //   'business',
    //   'business_id',
    //   'created_at',
    //   'customer',
    //   'customer_id',
    //   'delivery_datetime',
    //   'delivery_type',
    //   'discount',
    //   'driver',
    //   'driver_id',
    //   'driver_tip',
    //   'id',
    //   'logistic_attemps',
    //   'logistic_status',
    //   'priority',
    //   'service_fee',
    //   'status',
    //   'summary',
    //   'products'
    // ]
  }

  return (
    <OrdersListController {...ordersListProps} />
  )
}
