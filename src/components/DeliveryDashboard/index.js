import React, { useEffect, useState } from 'react'
import { AdminOrders } from '../AdminOrdersListControl'
import { useLanguage } from 'ordering-components'
import { useWindowSize } from '../../../src/hooks/useWindowSize'

import GoogleMapReact from 'google-map-react'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OrderStatusFilterBar } from '../../../src/components/OrderStatusFilterBar'
import { OrderContentHeader } from '../../../src/components/OrderContentHeader'
import { OrderListing } from '../OrderListing'

import {
  DeliveryDashboardContainer,
  DeliveryDashboardContent,
  DeliveryDashboardInnerContent,
  MapAndOrderContent,
  WrapperMap,
  WrapperOrdersAndDriver,
  WrapperMapMarker,
  MapMarkerImg,
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
    completedByAdminOrders,
    deliveryCompletedByDriverOrders,
    rejectedByAdminOrders,
    rejectByBusinessOrders,
    rejectByDriverOrders,
    pickupFailedByDriverOrders,
    deliveryFailedByDriverOrders,

    searchValue,
    ordersStatusSelected,
    handleChangeSearch,
    handleChangeOrdersStatus
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const mapCenter = { lat: 59.95, lng: 30.33 }
  const mapZoom = 10
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)

  useEffect(() => {
    if (width < 1200) {
      setOpenOrderAndDriver(false)
    } else {
      setOpenOrderAndDriver(true)
    }
  }, [width])

  return (
    <DeliveryDashboardContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusSelected}
        changeOrderStatus={handleChangeOrdersStatus}
      />
      <DeliveryDashboardContent>
        <DeliveryDashboardInnerContent>
          <OrderContentHeader
            active='deliveryDashboard'
            searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />
          <MapAndOrderContent>
            <WrapperMap>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
                }}
                defaultCenter={mapCenter}
                center={mapCenter}
                defaultZoom={mapZoom}
                options={{ fullscreenControl: false }}
                className='map'
              >
                <WrapperMapMarker lat={mapCenter.lat} lng={mapCenter.lng}>
                  <MapMarkerImg bgimage='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' />
                </WrapperMapMarker>
              </GoogleMapReact>
            </WrapperMap>

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
                    onClick={() => setOpenTab({ order: true, driver: false })}
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
                          orderStatusTitle={t(
                            'PENDING_ORDERS',
                            'Pendig orders'
                          )}
                          orderListView='small'
                        />
                      )}

                      {ordersStatusSelected === 'inProgress' && (
                        <>
                          <OrderListing
                            orderList={acceptedByBusinessOrders}
                            orderStatusTitle={t(
                              'ACCEPTED_BY_BUSINESS',
                              'Accepted by Business'
                            )}
                            orderListView='small'
                          />
                          <OrderListing
                            orderList={acceptedByDriverOrders}
                            orderStatusTitle={t(
                              'ACCEPTED_BY_Driver',
                              'Accepted by Driver'
                            )}
                            orderListView='small'
                          />
                          <OrderListing
                            orderList={driverArrivedByBusinessOrders}
                            orderStatusTitle={t(
                              'DRIVER_ARRIVED_BY_BUSINESS',
                              'Driver arrived by business'
                            )}
                            orderListView='small'
                          />
                        </>
                      )}

                      {ordersStatusSelected === 'completed' && (
                        <>
                          <OrderListing
                            orderList={completedByAdminOrders}
                            orderStatusTitle={t(
                              'COMPLETED_BY_ADMIN',
                              'Completed by admin'
                            )}
                            orderListView='small'
                          />
                          <OrderListing
                            orderList={deliveryCompletedByDriverOrders}
                            orderStatusTitle={t(
                              'DELIVERY_COMPLETED_BY_DRIVER',
                              'Delivery completed by driver'
                            )}
                            orderListView='small'
                          />
                        </>
                      )}

                      {ordersStatusSelected === 'cancelled' && (
                        <>
                          <OrderListing
                            orderList={rejectedByAdminOrders}
                            orderStatusTitle={t(
                              'REJECTED_BY_ADMIN',
                              'Rejected by admin'
                            )}
                            orderListView='small'
                          />

                          <OrderListing
                            orderList={rejectByBusinessOrders}
                            orderStatusTitle={t(
                              'REJECT_BY_BUSINESS',
                              'Reject by business'
                            )}
                            orderListView='small'
                          />

                          <OrderListing
                            orderList={rejectByDriverOrders}
                            orderStatusTitle={t(
                              'REJECT_BY_DRIVER',
                              'Reject by driver'
                            )}
                            orderListView='small'
                          />
                          <OrderListing
                            orderList={pickupFailedByDriverOrders}
                            orderStatusTitle={t(
                              'PICKUP_FAILED_BY_DRIVER',
                              'Pickup failed by driver'
                            )}
                            orderListView='small'
                          />

                          <OrderListing
                            orderList={deliveryFailedByDriverOrders}
                            orderStatusTitle={t(
                              'DELIVERY_FAILED_BY_DRIVER',
                              'Delivery failed by driver'
                            )}
                            orderListView='small'
                          />
                        </>
                      )}
                    </>
                  )}
                  {openTab.driver && <div>driver</div>}
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
  const AdminOrdersControlProps = {
    UIComponent: DeliveryDashboardUI,
    isSearchByOrderNumber: true,
    isSearchByCustomerEmail: true,
    isSearchByCustomerPhone: true
  }
  return <AdminOrders {...AdminOrdersControlProps} />
}
