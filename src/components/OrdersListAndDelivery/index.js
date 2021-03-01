import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import BlankCheckbox from '@meronex/icons/ri/RiCheckboxBlankCircleLine'
import Checkbox from '@meronex/icons/ri/RiCheckboxCircleLine'
import { OrdersManage as OrdersManageController, useLanguage, useConfig } from 'ordering-components'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrderDetails } from '../OrderDetails'
import { Messages } from '../Messages'
import { Modal } from '../Modal'
import { OrdersList } from '../OrdersList'
import { DriversLocation } from '../DriversLocation'
import { DriversModal } from '../DriversModal'
import { Button } from '../../styles/Buttons'
import { OpenAndCloseOrderSelector } from '../OpenAndCloseOrderSelector'
import { OrderBySelector } from '../OrderBySelector'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapperIndicator,
  // WrapperOrderNotification,
  OrderNotification,
  WrapperMainContent,
  WrapperOrdersAndDriver,
  OrderAndDriverListContainer,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperTab,
  Tab,
  WrapperOrderlist,
  WrapperMessage,
  MessageOrderDetailContainer,
  WrapperSortContainer,
  WrapperQuickShow
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
  const [notificationModalOpen, setNotificationModalOpen] = useState(false)
  const [registerOrderIds, setRegisterOrderIds] = useState([])
  const [activeSwitch, setActiveSwitch] = useState({ orders: true, deliveries: false, messages: false })

  const [driverAvailable, setDriverAvailable] = useState('all')
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [openOrderAndUser, setOpenOrderAndUser] = useState(true)
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [googleMapLoad, setGoogleMapLoad] = useState(false)
  const [isCheckedQuickShow, setIsCheckedQuickShow] = useState(false)
  const [interActionMapOrder, setInterActionMapOrder] = useState(null)

  const [messageOrder, setMessageOrder] = useState({})
  const [messageType, setMessageType] = useState('')
  const [openMessageOrderDetail, setOpenMessageOrderDetail] = useState(false)
  const [openOrclosedOrderView, setOpenOrclosedOrderView] = useState('all')
  const [orderBy, setOrderBy] = useState('last_direct_message_at')
  const [orderIdForUnreadCountUpdate, setOrderIdForUnreadCountUpdate] = useState(null)

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
        setGoogleMapLoad(true)
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

  const handleOpenMessage = (order, messageType) => {
    setMessageType(messageType)
    setMessageOrder(order)
  }

  const handleMessageOrderDetail = (state) => {
    setOpenMessageOrderDetail(state)
  }

  const handleUpdateOrderForUnreadCount = (orderId) => {
    setOrderIdForUnreadCountUpdate(orderId)
  }

  const handleSetMessageType = (messageType) => {
    setMessageType(messageType)
  }

  const handleLocation = (order) => {
    if (interActionMapOrder?.id === order?.id) {
      setInterActionMapOrder(null)
    } else {
      setInterActionMapOrder({ ...order })
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
    if (!activeSwitch.messages) {
      setOpenMessageOrderDetail(false)
      setOpenOrclosedOrderView('all')
    }
  }, [activeSwitch.messages])

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
    if (activeSwitch.deliveries) setIsCheckedQuickShow(false)
    else {
      setInterActionMapOrder(null)
    }
  }, [activeSwitch])

  useEffect(() => {
    if (!activeSwitch.deliveries) return
    setOpenTab({ order: true, driver: false })
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
            {activeSwitch.orders && (
              <OrdersDashboardControls
                selectedOrderNumber={selectedOrderIds.length}
                filterValues={filterValues}
                handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                handleDeleteMultiOrders={handleDeleteMultiOrders}
              />
            )}
            <WrapperMainContent
              deliveryUI={activeSwitch.deliveries}
              messageUI={activeSwitch.messages}
            >
              {googleMapLoad && (
                <DriversLocation
                  disableUI={!activeSwitch.deliveries}
                  driversList={driversList}
                  driverAvailable={driverAvailable}
                  interActionMapOrder={interActionMapOrder}
                />
              )}
              {activeSwitch.deliveries && (
                <>
                  {!openOrderAndDriver ? (
                    <OrdersOpenButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndDriver(true)} name='order-open'>
                      <AiFillPlusCircle />
                    </OrdersOpenButton>
                  ) : (
                    <OrdersCloseButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndDriver(false)} name='order-close'>
                      <FaRegTimesCircle />
                    </OrdersCloseButton>
                  )}
                </>
              )}
              {activeSwitch.messages && (
                <>
                  {!openOrderAndUser ? (
                    <OrdersOpenButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndUser(true)}>
                      <AiFillPlusCircle />
                    </OrdersOpenButton>
                  ) : (
                    <OrdersCloseButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndUser(false)}>
                      <FaRegTimesCircle />
                    </OrdersCloseButton>
                  )}
                </>
              )}
              <WrapperOrdersAndDriver
                deliveryUI={activeSwitch.deliveries}
                messagesUI={activeSwitch.messages}
                style={{ display: `${((openOrderAndDriver && activeSwitch.deliveries) || (openOrderAndUser && activeSwitch.messages) || activeSwitch.orders) ? 'block' : 'none'}` }}
              >
                {activeSwitch.deliveries && (
                  <>
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
                    <WrapperQuickShow>
                      {isCheckedQuickShow ? (
                        <Checkbox onClick={() => setIsCheckedQuickShow(!isCheckedQuickShow)} />
                      ) : (
                        <BlankCheckbox onClick={() => setIsCheckedQuickShow(!isCheckedQuickShow)} />
                      )}
                      {t('SHOW_ALL', 'Show all')}
                    </WrapperQuickShow>
                  </>
                )}
                {activeSwitch.messages && (
                  <>
                    <WrapperTab messageUI={activeSwitch.messages}>
                      <Tab
                        active={openTab.order}
                      >
                        {t('ORDERS', 'Orders')}
                      </Tab>
                      {/* <Tab
                        active={openTab.driver}
                        onClick={() => setOpenTab({ order: false, driver: true })}
                      >
                        {t('USERS', 'Users')}
                      </Tab> */}
                    </WrapperTab>
                    <WrapperSortContainer>
                      <OpenAndCloseOrderSelector
                        defaultValue={openOrclosedOrderView}
                        setOpenOrclosedOrderView={setOpenOrclosedOrderView}
                      />
                      <OrderBySelector
                        defaultValue={orderBy}
                        setOrderBy={setOrderBy}
                      />
                    </WrapperSortContainer>
                  </>
                )}

                <OrderAndDriverListContainer
                  deliveryUI={activeSwitch.deliveries}
                  messageUI={activeSwitch.messages}
                >
                  <WrapperOrderlist style={{ display: `${(openTab.order || !activeSwitch.deliveries) ? 'block' : 'none'}` }}>
                    <OrdersList
                      orderListView={activeSwitch.orders ? 'big' : 'small'}
                      orderBy={orderBy}
                      messageDashboardView={activeSwitch.messages}
                      openOrclosedOrderView={openOrclosedOrderView}
                      searchValue={searchValue}
                      filterValues={filterValues}
                      selectedOrderIds={selectedOrderIds}
                      deletedOrderId={deletedOrderId}
                      driversList={driversList}
                      ordersStatusGroup={ordersStatusGroup}
                      handleSelectedOrderIds={handleSelectedOrderIds}
                      activeSwitch={activeSwitch}
                      isCheckedQuickShow={isCheckedQuickShow}
                      messageType={messageType}
                      messageOrder={messageOrder}
                      interActionMapOrder={interActionMapOrder}
                      orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
                      handleNotification={handleNotification}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                      handleOpenMessage={handleOpenMessage}
                      handleLocation={handleLocation}
                    />
                  </WrapperOrderlist>
                  {openTab.driver && activeSwitch.deliveries && (
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

              {/* message section */}
              {(Object.keys(messageOrder).length !== 0 && activeSwitch.messages) && (
                <WrapperMessage>
                  <Messages
                    messageDashboardView
                    orderId={messageOrder?.id}
                    order={messageOrder}
                    customer={messageType === 'customer'}
                    business={messageType === 'business'}
                    driver={messageType === 'driver'}
                    handleMessageOrderDetail={handleMessageOrderDetail}
                    handleUpdateOrderForUnreadCount={handleUpdateOrderForUnreadCount}
                    handleSetMessageType={handleSetMessageType}
                  />
                </WrapperMessage>
              )}
              {/* message order detail */}
              {activeSwitch.messages && Object.keys(messageOrder).length !== 0 && (
                <MessageOrderDetailContainer style={{ display: `${openMessageOrderDetail ? 'block' : 'none'}` }}>
                  <OrderDetails
                    messageDashboardView
                    orderId={messageOrder?.id}
                    driversList={driversList}
                    messageType={messageType}
                    handleOpenMessage={handleOpenMessage}
                    handleMessageOrderDetail={handleMessageOrderDetail}
                    handleOpenOrderDetail={handleOpenOrderDetail}
                  />
                </MessageOrderDetailContainer>
              )}
            </WrapperMainContent>

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

export const OrdersListAndDelivery = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersListUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
