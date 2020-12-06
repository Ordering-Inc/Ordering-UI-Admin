import React, { useEffect, useState } from 'react'
import { useLanguage, OrdersManage as OrdersManageController, OrderList as OrdersListController } from 'ordering-components'
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
    driverOrders,
    searchValue,
    driversList,
    paymethodsList,
    businessesList,
    updateOrdersSelectedStatus,
    ordersStatusGroup,
    filterValues,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleSelectedOrderIds,
    handleChangeDriverOrdersModal
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [driverAvailable, setDriverAvailable] = useState('all')

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
    updateOrdersSelectedStatus: updateOrdersSelectedStatus,
    orderListView: 'small',
    handleSelectedOrderIds: handleSelectedOrderIds
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

  return (
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
                      {ordersStatusGroup === 'pending' && (
                        <>
                          <OrdersListController {...OrdersCommonControlProps} {...PendingOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...PreOrdersControlProps} />
                        </>
                      )}
                      {ordersStatusGroup === 'inProgress' && (
                        <>
                          <OrdersListController {...OrdersCommonControlProps} {...AcceptedByBusinessOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...AcceptedByDriverOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...DriverArrivedByBusinessOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...ReadyForPickupOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...PickupCompletedByDriverOrdersControlProps} />
                        </>
                      )}
                      {ordersStatusGroup === 'completed' && (
                        <>
                          <OrdersListController {...OrdersCommonControlProps} {...CompletedByAdminOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...DeliveryCompletedByDriverOrdersControlProps} />
                        </>
                      )}
                      {ordersStatusGroup === 'cancelled' && (
                        <>
                          <OrdersListController {...OrdersCommonControlProps} {...RejectByAdminOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...RejectByBusinessOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...RejectByDriverOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...PickupFailedByDriverOrdersControlProps} />
                          <OrdersListController {...OrdersCommonControlProps} {...DeliveryFailedByDriverOrdersControlProps} />
                        </>
                      )}
                    </>
                  )}
                  {openTab.driver && (
                    <DriversModal
                      driversList={driversList}
                      driverOrders={driverOrders}
                      updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                      handleChangeDriverAvailable={handleChangeDriverAvailable}
                      handleChangeDriverOrders={handleChangeDriverOrdersModal}
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

export const DeliveryDashboard = (props) => {
  const DeliveryDashboardControlProps = {
    ...props,
    UIComponent: DeliveryDashboardUI
  }
  return <OrdersManageController {...DeliveryDashboardControlProps} />
}
