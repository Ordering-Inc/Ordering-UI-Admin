import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useLanguage, OrdersManage as OrdersManageController, OrderList as OrdersListController } from 'ordering-components'
import { useWindowSize } from '../../../src/hooks/useWindowSize'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OrderStatusFilterBar } from '../../../src/components/OrderStatusFilterBar'
import { OrderContentHeader } from '../../../src/components/OrderContentHeader'
import { OrderListing } from '../OrderListing'
import { DriversModal } from '../DriversModal'
import { DriversLocation } from '../DriversLocation'
import { OrderDetails } from '../OrderDetails'
import { Modal } from '../Modal'
import {
  DeliveryDashboardContainer,
  DeliveryDashboardContent,
  DeliveryDashboardInnerContent,
  MapAndOrderContent,
  WrapperOrdersAndDriver,
  OrderAndDriverListContainer,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperTab,
  Tab,
  WrapperOrderNotification,
  WrapperOrderlist
} from './styles'

const DeliveryDashboardUI = (props) => {
  const {
    driverOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeDriverOrdersModal
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [driverAvailable, setDriverAvailable] = useState('all')

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
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
    driversList: driversList,
    orderListView: 'small'
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

  const DriverArrivedByBusinessOrdersControlProps = {
    orderStatus: [3],
    orderStatusTitle: t('DRIVER_ARRIVED_BY_BUSINESS', 'Driver arrived by business')
  }

  const ReadyForPickupOrdersControlProps = {
    orderStatus: [4],
    orderStatusTitle: t('READY_FOR_PICKUP', 'Ready for pickup')
  }

  const PickupCompletedByDriverOrdersControlProps = {
    orderStatus: [9],
    orderStatusTitle: t('PICKUP_COMPLETED_BY_DRIVER', 'Pickup completed by driver')
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
    if (width < 1200) {
      setOpenOrderAndDriver(false)
    } else {
      setOpenOrderAndDriver(true)
    }
  }, [width])

  const handleChangeDriverAvailable = (available) => {
    setDriverAvailable(available)
  }

  const handleChangeOrderAndDriver = () => {
    setOpenTab({ order: true, driver: false })
    setDriverAvailable('all')
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
    history.push('/delivery-dashboard')
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
      <DeliveryDashboardContainer>
        <OrderStatusFilterBar
          selectedOrderStatus={ordersStatusGroup}
          changeOrderStatus={handleOrdersStatusGroupFilter}
        />
        <DeliveryDashboardContent>
          <DeliveryDashboardInnerContent>
            <OrderContentHeader
              active='deliveryDashboard'
              searchValue={searchValue}
              driverGroupList={driverGroupList}
              driversList={driversList}
              paymethodsList={paymethodsList}
              businessesList={businessesList}
              ordersStatusSelected={ordersStatusGroup}
              handleChangeSearch={handleChangeSearch}
              handleChangeFilterValues={handleChangeFilterValues}
            />
            <MapAndOrderContent>

              <DriversLocation
                driversList={driversList}
                driverAvailable={driverAvailable}
              />

              {!openOrderAndDriver ? (
                <OrdersOpenButton onClick={() => setOpenOrderAndDriver(true)} name='order-open'>
                  <AiFillPlusCircle />
                </OrdersOpenButton>
              ) : (
                <OrdersCloseButton onClick={() => setOpenOrderAndDriver(false)} name='order-close'>
                  <FaRegTimesCircle />
                </OrdersCloseButton>
              )}
              <WrapperOrdersAndDriver style={{ display: `${openOrderAndDriver ? 'block' : 'none'}` }}>
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
                <OrderAndDriverListContainer>
                  <WrapperOrderlist style={{ display: `${openTab.order ? 'block' : 'none'}` }}>
                    {(ordersStatusGroup === 'pending' || (searchValue !== '' && searchValue !== null)) && (
                      <>
                        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PendingOrdersControlProps} />
                        <OrdersListController handleNotification={handleNotification} handleOpenOrderDetail={handleOpenOrderDetail} {...OrdersCommonControlProps} {...PreOrdersControlProps} />
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
                  </WrapperOrderlist>
                  {openTab.driver && (
                    <DriversModal
                      driversList={driversList}
                      driverOrders={driverOrders}
                      handleChangeDriverAvailable={handleChangeDriverAvailable}
                      handleChangeDriverOrders={handleChangeDriverOrdersModal}
                    />
                  )}
                </OrderAndDriverListContainer>
              </WrapperOrdersAndDriver>
            </MapAndOrderContent>
          </DeliveryDashboardInnerContent>
        </DeliveryDashboardContent>
      </DeliveryDashboardContainer>

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
    </>
  )
}

export const DeliveryDashboard = (props) => {
  const DeliveryDashboardControlProps = {
    ...props,
    UIComponent: DeliveryDashboardUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo', 'location', 'qualification', 'assigned_orders_count', 'last_order_assigned_at']
  }
  return <OrdersManageController {...DeliveryDashboardControlProps} />
}
