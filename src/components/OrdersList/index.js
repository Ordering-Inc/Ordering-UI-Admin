import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapperIndicator,
  WrapperOrderNotification
} from './styles'
import { OrdersManage as OrdersManageController, OrderList as OrdersListController, useLanguage } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderListing } from '../OrderListing'
import { OrderDetails } from '../OrderDetails'
import { Modal } from '../Modal'

const OrdersListUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    selectedOrderIds
  } = props

  const [, t] = useLanguage()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const [pendingOrder, setPendingOrder] = useState(false)
  const [preOrder, setPreOrder] = useState(false)
  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderId, setRegisterOrderId] = useState(null)

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
    deletedOrderId: deletedOrderId,
    handleSelectedOrderIds: handleSelectedOrderIds,
    selectedOrderIds: selectedOrderIds,
    driversList: driversList,
    orderListView: 'big'
  }

  const PendingOrdersControlProps = {
    orderStatus: [0],
    pendingOrder: true,
    orderStatusTitle: t('PENDING', 'Pendig')
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
  const handleOpenOrderDetail = (id, pendingOrder, preOrder) => {
    if (pendingOrder) {
      setPendingOrder(true)
    } else {
      setPendingOrder(false)
    }

    if (preOrder) {
      setPreOrder(true)
    } else {
      setPreOrder(false)
    }
    setOrderDetailId(id)
    setIsOpenOrderDetail(true)
  }

  const handleNotification = (orderId) => {
    setRegisterOrderId(orderId)
    setNotificationModalOpen(true)
  }

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false)
  }

  useEffect(() => {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedOrderIds.length)
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete])

  useEffect(() => {
    if (selectedOrderIds.length === 0) {
      setTimeout(() => {
        setTotalSelectedOrder(0)
      }, 500)
    }
  }, [selectedOrderIds])

  useEffect(() => {
    const sound = document.getElementById('notification-sound')
    const interval = setInterval(() => {
      if (notificationModalOpen) {
        sound.muted = false
        sound.play()
      }
    }, 3000)
    if (!notificationModalOpen) {
      clearInterval(interval)
      return
    }
    return () => clearInterval(interval)
  }, [notificationModalOpen])

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
              driverGroupList={driverGroupList}
              driversList={driversList}
              paymethodsList={paymethodsList}
              businessesList={businessesList}
              ordersStatusSelected={ordersStatusGroup}
              handleChangeSearch={handleChangeSearch}
              handleChangeFilterValues={handleChangeFilterValues}
            />
            <OrdersDashboardControls
              selectedOrderNumber={selectedOrderIds.length}
              filterValues={filterValues}
              handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              handleDeleteMultiOrders={handleDeleteMultiOrders}
            />
            {(ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null)) && (
              <>
                <OrdersListController
                  handleNotification={handleNotification}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  {...OrdersCommonControlProps} {...PendingOrdersControlProps}
                />
                <OrdersListController
                  handleNotification={handleNotification}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  {...OrdersCommonControlProps} {...PreOrdersControlProps}
                />
              </>
            )}
            {(ordersStatusGroup === 'inProgress' || (searchValue !== '' && searchValue !== null)) && (
              <>
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByBusinessOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps} />
              </>
            )}
            {(ordersStatusGroup === 'completed' || (searchValue !== '' && searchValue !== null)) && (
              <>
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps} />
              </>
            )}
            {(ordersStatusGroup === 'cancelled' || (searchValue !== '' && searchValue !== null)) && (
              <>
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps} />
                <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps} />
              </>
            )}
          </OrdersInnerContent>
        </OrdersContent>
      </OrdersListContainer>

      <Modal
        width='90%'
        height='90vh'
        open={isOpenOrderDetail}
        onClose={() => handleBackRedirect()}
      >
        <OrderDetails
          orderId={orderDetailId}
          driversList={driversList}
          pendingOrder={pendingOrder}
          preOrder={preOrder}
        />
      </Modal>

      <Modal
        width='50%'
        open={notificationModalOpen}
        onClose={() => handleCloseNotificationModal()}
        acceptText={t('OK', 'OK')}
        onAccept={() => handleCloseNotificationModal()}
      >
        <WrapperOrderNotification>
          <p>{t('ORDERING', 'Ordering')}</p>
          <p>Order #{registerOrderId} has been ordered.</p>
        </WrapperOrderNotification>
      </Modal>

      <audio id='notification-sound' muted>
        <source src={require('../../../template/assets/sounds/notification.ogg')} type='audio/ogg' />
        <source src={require('../../../template/assets/sounds/notification.mp3')} type='audio/mpeg' />
      </audio>

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}
    </>
  )
}

export const OrdersList = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersListUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
