import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useLanguage, useConfig, useEvent, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrderDetails } from '../../../../../components/OrderDetails'
import { Modal } from '../../../../../components/Modal'
import { Button } from '../../../../../styles/Buttons'
import { DeliveryDashboard } from '../../../../../components/DeliveryDashboard'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapItemView,
  WrapperIndicator,
  OrderNotification
} from './styles'

toast.configure()

const DeliveriesManagerUI = (props) => {
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
    handleSelectedOrderIds,
    selectedOrderIds,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [events] = useEvent()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    history.push('/orders-deliveries')
  }

  const handleOpenOrderDetail = (id) => {
    setOrderDetailId(id)
    setIsOpenOrderDetail(true)
  }

  const handleNotification = (orderId) => {
    const _registerOrderIds = [...registerOrderIds]
    if (!_registerOrderIds.includes(orderId)) {
      _registerOrderIds.push(orderId)
      setRegisterOrderIds(_registerOrderIds)
      if (configState?.configs?.notification_toast?.value === 'true') {
        toastNotify(orderId)
      } else {
        setNotificationModalOpen(true)
      }
    }
  }

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false)
    setRegisterOrderIds([])
  }

  const toastNotify = (orderId) => {
    const toastConfigure = {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    }
    const content = `Order #${orderId} has been ordered.`
    toast.dark(content, toastConfigure)
    const sound = document.getElementById('notification-sound')
    sound.muted = false
    sound.play()
    setRegisterOrderIds([])
  }

  const closeOrderDetailModal = (e) => {
    if (e.code === 'Escape') {
      handleBackRedirect()
    }
  }

  const closeNotificationModal = (e) => {
    if (e.code === 'Escape') {
      handleCloseNotificationModal()
    }
  }

  useEffect(() => {
    if (registerOrderIds.length > 0) return
    setNotificationModalOpen(false)
  }, [registerOrderIds])

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
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      setOrderDetailId(id)
      setIsOpenOrderDetail(true)
    }
  }, [])

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

  useEffect(() => {
    if (!isOpenOrderDetail) return
    document.addEventListener('keydown', closeOrderDetailModal)
    return () => document.removeEventListener('keydown', closeOrderDetailModal)
  }, [isOpenOrderDetail])

  useEffect(() => {
    if (!notificationModalOpen) return
    document.addEventListener('keydown', closeNotificationModal)
    return () => document.removeEventListener('keydown', closeNotificationModal)
  }, [notificationModalOpen])

  useEffect(() => {
    if (configState.loading) return
    events.on('order_added', handleNotification)
    return () => {
      events.off('order_added', handleNotification)
    }
  }, [configState])

  return (
    <>
      <OrdersListContainer>
        <OrderContentHeader
          title={t('DELIVERY_DASHBOARD', 'Delivery dashboard')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
        />
        <OrderStatusFilterBar
          selectedOrderStatus={ordersStatusGroup}
          changeOrderStatus={handleOrdersStatusGroupFilter}
        />
        <OrderStatusSubFilter
          ordersStatusGroup={ordersStatusGroup}
          selectedSubOrderStatus={selectedSubOrderStatus}
          handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
        />
        <OrdersContent>
          <OrdersInnerContent className='order-content'>
            <WrapItemView>
              <DeliveryDashboard
                searchValue={searchValue}
                filterValues={filterValues}
                driversList={driversList}
                deletedOrderId={deletedOrderId}
                ordersStatusGroup={ordersStatusGroup}
                handleSelectedOrderIds={handleSelectedOrderIds}
                handleOpenOrderDetail={handleOpenOrderDetail}
              />
            </WrapItemView>
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
        />
      </Modal>

      <Modal
        width='50%'
        hideCloseDefault
        open={notificationModalOpen}
      >
        <OrderNotification>
          <p>{t('ORDERING', 'Ordering')}</p>
          {registerOrderIds.map((orderId) =>
            <p key={orderId}>Order <span>#{orderId}</span> has been ordered.</p>
          )}
          <Button color='primary' onClick={() => handleCloseNotificationModal()}>
            {t('OK', 'OK')}
          </Button>
        </OrderNotification>
      </Modal>

      <audio id='notification-sound' muted>
        <source src={require('../../../../../../template/assets/sounds/notification.ogg')} type='audio/ogg' />
        <source src={require('../../../../../../template/assets/sounds/notification.mp3')} type='audio/mpeg' />
      </audio>

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}
    </>
  )
}

export const DeliveriesManager = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: DeliveriesManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
