import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { OrdersManage as OrdersManageController, useLanguage, useConfig } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrderDetails } from '../OrderDetails'
import { Modal } from '../Modal'
import { Button } from '../../styles/Buttons'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapItemView,
  WrapperIndicator,
  OrderNotification
} from './styles'
import { OrdersDashboard } from '../OrdersDashboard'
import { DeliveryDashboard } from '../DeliveryDashboard'
import { MessagesDashbaord } from '../MessagesDashbaord'

toast.configure()

const MainOrdersManagerUI = (props) => {
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
  const [state] = useConfig()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [deliveryDashboardLoaded, setDeliveryDashboardLoaded] = useState(false)
  const [messagesDashboardLoaded, setMessagesDashboardLoaded] = useState(false)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [orderIdForUnreadCountUpdate, setOrderIdForUnreadCountUpdate] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])
  const [activeSwitch, setActiveSwitch] = useState({ orders: true, deliveries: false, messages: false })

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
      if (!state.loading) {
        if (state.configs.notification_toast.value === 'true') {
          toastNotify(orderId)
          setRegisterOrderIds([])
        } else {
          setNotificationModalOpen(true)
        }
      }
    }
  }

  const handleCloseNotificationModal = () => {
    setNotificationModalOpen(false)
    setRegisterOrderIds([])
  }

  const handleSwitch = (switchType) => {
    switch (switchType) {
      case 'orders':
        setActiveSwitch({ orders: true, deliveries: false, messages: false })
        break
      case 'deliveries':
        setActiveSwitch({ orders: false, deliveries: true, messages: false })
        break
      case 'messages':
        setActiveSwitch({ orders: false, deliveries: false, messages: true })
        break
    }
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

  const handleUpdateOrderForUnreadCount = (orderId) => {
    setOrderIdForUnreadCountUpdate(orderId)
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
    if (deliveryDashboardLoaded && messagesDashboardLoaded) return
    if (activeSwitch.deliveries) {
      setDeliveryDashboardLoaded(true)
    }
    if (activeSwitch.messages) {
      setMessagesDashboardLoaded(true)
    }
  }, [activeSwitch])

  return (
    <>
      <OrdersListContainer
        deliveryAndMessageUI={activeSwitch.deliveries || activeSwitch.messages}
      >
        {!activeSwitch.messages && (
          <OrderStatusFilterBar
            selectedOrderStatus={ordersStatusGroup}
            changeOrderStatus={handleOrdersStatusGroupFilter}
          />
        )}
        <OrdersContent
          messageUI={activeSwitch.messages}
        >
          <OrdersInnerContent className='order-content'>
            <OrderContentHeader
              activeSwitch={activeSwitch}
              handleSwitch={handleSwitch}
              searchValue={searchValue}
              driverGroupList={driverGroupList}
              driversList={driversList}
              paymethodsList={paymethodsList}
              businessesList={businessesList}
              filterValues={filterValues}
              handleChangeSearch={handleChangeSearch}
              handleChangeFilterValues={handleChangeFilterValues}
            />
            <WrapItemView
              style={{ display: `${activeSwitch.orders ? 'block' : 'none'}` }}
            >
              <OrdersDashboard
                searchValue={searchValue}
                filterValues={filterValues}
                selectedOrderIds={selectedOrderIds}
                deletedOrderId={deletedOrderId}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                handleSelectedOrderIds={handleSelectedOrderIds}
                handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                handleDeleteMultiOrders={handleDeleteMultiOrders}
                handleNotification={handleNotification}
                handleOpenOrderDetail={handleOpenOrderDetail}
                activeSwitch={activeSwitch}
              />
            </WrapItemView>
            {deliveryDashboardLoaded && (
              <WrapItemView
                style={{ display: `${activeSwitch.deliveries ? 'block' : 'none'}` }}
              >
                <DeliveryDashboard
                  searchValue={searchValue}
                  filterValues={filterValues}
                  driversList={driversList}
                  deletedOrderId={deletedOrderId}
                  ordersStatusGroup={ordersStatusGroup}
                  handleSelectedOrderIds={handleSelectedOrderIds}
                  activeSwitch={activeSwitch}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                />
              </WrapItemView>
            )}
            {messagesDashboardLoaded && (
              <WrapItemView
                style={{ display: `${activeSwitch.messages ? 'block' : 'none'}` }}
              >
                <MessagesDashbaord
                  searchValue={searchValue}
                  filterValues={filterValues}
                  deletedOrderId={deletedOrderId}
                  driversList={driversList}
                  activeSwitch={activeSwitch}
                  handleOpenOrderDetail={handleOpenOrderDetail}
                  orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
                  handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                />
              </WrapItemView>
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
          handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
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
          <Button color='darkBlue' onClick={() => handleCloseNotificationModal()}>
            {t('OK', 'OK')}
          </Button>
        </OrderNotification>
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

export const MainOrdersManager = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: MainOrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
