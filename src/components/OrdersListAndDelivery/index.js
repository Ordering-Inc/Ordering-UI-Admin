import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OrdersManage as OrdersManageController, useLanguage, useConfig } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderDetails } from '../OrderDetails'
import { Modal } from '../Modal'
import { OrdersList } from '../OrdersList'
import { DriversLocation } from '../DriversLocation'
import { DriversModal } from '../DriversModal'
import { Button } from '../../styles/Buttons'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapperIndicator,
  // WrapperOrderNotification,
  OrderNotification,
  MapAndOrderContent,
  WrapperOrdersAndDriver,
  OrderAndDriverListContainer,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperTab,
  Tab,
  WrapperOrderlist
} from './styles'

toast.configure()

const OrdersListUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    driverOrders,
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
    handleChangeDriverOrdersModal,
    selectedOrderIds
  } = props

  const [, t] = useLanguage()
  const [state] = useConfig()
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const [pendingOrder, setPendingOrder] = useState(false)
  const [preOrder, setPreOrder] = useState(false)
  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])
  const [activeOrdersList, setActiveOrdersList] = useState(true)

  const [driverAvailable, setDriverAvailable] = useState('all')
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [googleMapLoad, setGoogleMapLoad] = useState(false)

  const handleChangeDriverAvailable = (available) => {
    setDriverAvailable(available)
  }

  const handleChangeOrderAndDriver = () => {
    setOpenTab({ order: true, driver: false })
    setDriverAvailable('all')
  }

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    history.push('/orders-deliveries')
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

  const handleSwitch = () => {
    setActiveOrdersList(!activeOrdersList)
    setGoogleMapLoad(true)
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
    if (e.code === 'Escape') setIsOpenOrderDetail(false)
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
    if (activeOrdersList) return
    setOpenTab({ order: true, driver: false })
  }, [activeOrdersList])

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
              active={activeOrdersList ? 'orders' : 'deliveryDashboard'}
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
            {activeOrdersList && (
              <OrdersDashboardControls
                selectedOrderNumber={selectedOrderIds.length}
                filterValues={filterValues}
                handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                handleDeleteMultiOrders={handleDeleteMultiOrders}
              />
            )}
            <MapAndOrderContent
              deliveryUI={!activeOrdersList}
            >
              {googleMapLoad && (
                <DriversLocation
                  disableUI={activeOrdersList}
                  driversList={driversList}
                  driverAvailable={driverAvailable}
                />
              )}
              {!activeOrdersList && (
                <>
                  {!openOrderAndDriver ? (
                    <OrdersOpenButton onClick={() => setOpenOrderAndDriver(true)} name='order-open'>
                      <AiFillPlusCircle />
                    </OrdersOpenButton>
                  ) : (
                    <OrdersCloseButton onClick={() => setOpenOrderAndDriver(false)} name='order-close'>
                      <FaRegTimesCircle />
                    </OrdersCloseButton>
                  )}
                </>
              )}
              <WrapperOrdersAndDriver
                deliveryUI={!activeOrdersList}
                style={{ display: `${(openOrderAndDriver || activeOrdersList) ? 'block' : 'none'}` }}
              >
                {!activeOrdersList && (
                  <WrapperTab>
                    <Tab
                      active={openTab.order}
                      onClick={() => handleChangeOrderAndDriver()}
                    >
                      {t('ORDERS', 'Orders')}
                    </Tab>
                    <Tab
                      active={openTab.driver}
                      onClick={() => setOpenTab({ order: false, driver: true })}
                    >
                      {t('DRIVERS', 'Drivers')}
                    </Tab>
                  </WrapperTab>
                )}
                <OrderAndDriverListContainer
                  deliveryUI={!activeOrdersList}
                >
                  <WrapperOrderlist style={{ display: `${(openTab.order || activeOrdersList) ? 'block' : 'none'}` }}>
                    <OrdersList
                      orderListView={activeOrdersList ? 'big' : 'small'}
                      searchValue={searchValue}
                      filterValues={filterValues}
                      selectedOrderIds={selectedOrderIds}
                      deletedOrderId={deletedOrderId}
                      driversList={driversList}
                      ordersStatusGroup={ordersStatusGroup}
                      handleSelectedOrderIds={handleSelectedOrderIds}
                      handleNotification={handleNotification}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                    />
                  </WrapperOrderlist>
                  {openTab.driver && !activeOrdersList && (
                    <DriversModal
                      driversList={driversList}
                      driverOrders={driverOrders}
                      handleChangeDriverAvailable={handleChangeDriverAvailable}
                      handleChangeDriverOrders={handleChangeDriverOrdersModal}
                      handleSelectedOrderIds={handleSelectedOrderIds}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                    />
                  )}
                </OrderAndDriverListContainer>
              </WrapperOrdersAndDriver>
            </MapAndOrderContent>

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

export const OrdersListAndDelivery = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersListUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
