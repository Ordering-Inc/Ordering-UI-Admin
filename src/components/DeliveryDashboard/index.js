import React, { useEffect, useState } from 'react'
import { AdminOrdersAndDriversList } from '../AdminOrdersAndDriversListController'
import { useLanguage } from 'ordering-components'
import { useWindowSize } from '../../../src/hooks/useWindowSize'

import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OrderStatusFilterBar } from '../../../src/components/OrderStatusFilterBar'
import { OrderContentHeader } from '../../../src/components/OrderContentHeader'
import { OrderListing } from '../OrderListing'
import { DriversModal } from '../DriversModal'
import { DriversLocation } from '../DriversLocation'

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
  Tab
} from './styles'

const DeliveryDashboardUI = (props) => {
  const {
    pendingOrders,
    acceptedByBusinessOrders,
    acceptedByDriverOrders,
    driverArrivedByBusinessOrders,
    readyForPickupOrders,
    pickupCompletedByDriverOrders,
    completedByAdminOrders,
    deliveryCompletedByDriverOrders,
    rejectedByAdminOrders,
    rejectByBusinessOrders,
    rejectByDriverOrders,
    pickupFailedByDriverOrders,
    deliveryFailedByDriverOrders,
    driversList,
    driverOrders,

    searchValue,
    ordersStatusSelected,
    handleChangeSearch,
    handleOrdersStatusFilter,
    handleChangeDriverOrders,
    handleUpdateOrdersStatus
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [driverAvailable, setDriverAvailable] = useState('all')

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

  return (
    <DeliveryDashboardContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusSelected}
        changeOrderStatus={handleOrdersStatusFilter}
      />
      <DeliveryDashboardContent>
        <DeliveryDashboardInnerContent>
          <OrderContentHeader
            active='deliveryDashboard'
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />
          <MapAndOrderContent>

            <DriversLocation
              driversList={driversList}
              driverAvailable={driverAvailable}
            />

            {!openOrderAndDriver ? (
              <OrdersOpenButton onClick={() => setOpenOrderAndDriver(true)}>
                <AiFillPlusCircle />
              </OrdersOpenButton>
            ) : (
              <OrdersCloseButton onClick={() => setOpenOrderAndDriver(false)}>
                <FaRegTimesCircle />
              </OrdersCloseButton>
            )}
            {openOrderAndDriver && (
              <WrapperOrdersAndDriver>
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
                  {openTab.order && (
                    <>
                      {ordersStatusSelected === 'pending' && (
                        <OrderListing
                          orderList={pendingOrders}
                          driversList={driversList}
                          orderStatusTitle={t(
                            'PENDING_ORDERS',
                            'Pendig orders'
                          )}
                          orderListView='small'
                          handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                        />
                      )}

                      {ordersStatusSelected === 'inProgress' && (
                        <>
                          <OrderListing
                            orderList={acceptedByBusinessOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'ACCEPTED_BY_BUSINESS',
                              'Accepted by Business'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={acceptedByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'ACCEPTED_BY_Driver',
                              'Accepted by Driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={driverArrivedByBusinessOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'DRIVER_ARRIVED_BY_BUSINESS',
                              'Driver arrived by business'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={readyForPickupOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'READY_FOR_PICKUP',
                              'Ready for pickup'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={pickupCompletedByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'PICKUP_COMPLETED_BY_DRIVER',
                              'Pickup completed by driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                        </>
                      )}

                      {ordersStatusSelected === 'completed' && (
                        <>
                          <OrderListing
                            orderList={completedByAdminOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'COMPLETED_BY_ADMIN',
                              'Completed by admin'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={deliveryCompletedByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'DELIVERY_COMPLETED_BY_DRIVER',
                              'Delivery completed by driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                        </>
                      )}

                      {ordersStatusSelected === 'cancelled' && (
                        <>
                          <OrderListing
                            orderList={rejectedByAdminOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'REJECTED_BY_ADMIN',
                              'Rejected by admin'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />

                          <OrderListing
                            orderList={rejectByBusinessOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'REJECT_BY_BUSINESS',
                              'Reject by business'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />

                          <OrderListing
                            orderList={rejectByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'REJECT_BY_DRIVER',
                              'Reject by driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                          <OrderListing
                            orderList={pickupFailedByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'PICKUP_FAILED_BY_DRIVER',
                              'Pickup failed by driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />

                          <OrderListing
                            orderList={deliveryFailedByDriverOrders}
                            driversList={driversList}
                            orderStatusTitle={t(
                              'DELIVERY_FAILED_BY_DRIVER',
                              'Delivery failed by driver'
                            )}
                            orderListView='small'
                            handleUpdateOrdersStatus={handleUpdateOrdersStatus}
                          />
                        </>
                      )}
                    </>
                  )}
                  {openTab.driver && (
                    <DriversModal
                      driversList={driversList}
                      driverOrders={driverOrders}
                      handleChangeDriverAvailable={handleChangeDriverAvailable}
                      handleChangeDriverOrders={handleChangeDriverOrders}
                    />
                  )}
                </OrderAndDriverListContainer>
              </WrapperOrdersAndDriver>
            )}
          </MapAndOrderContent>
        </DeliveryDashboardInnerContent>
      </DeliveryDashboardContent>
    </DeliveryDashboardContainer>
  )
}

export const DeliveryDashboard = () => {
  const AdminOrdersAndDriversListControlProps = {
    UIComponent: DeliveryDashboardUI,
    isSearchByOrderNumber: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }
  return <AdminOrdersAndDriversList {...AdminOrdersAndDriversListControlProps} />
}
