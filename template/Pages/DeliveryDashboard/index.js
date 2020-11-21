import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components'
import { useWindowSize } from '../../../src/hooks/useWindowSize'
import { AdminLayout } from '../../../src/layouts/AdminLayout'
import { HelmetTags } from '../../components/HelmetTags'
import GoogleMapReact from 'google-map-react'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import {
  DeliveryDashboardContainer,
  PageContent,
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

import { OrderStatusFilterBar } from '../../../src/components/OrderStatusFilterBar'
import { OrderContentHeader } from '../../../src/components/OrderContentHeader'
import { OrderListing } from '../../../src/components/OrderListing'

export const DeliveryDashboard = (props) => {
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('pending')
  const mapCenter = { lat: 59.95, lng: 30.33 }
  const mapZoom = 10
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const changeOrderStatus = (orderStatus) => {
    setSelectedOrderStatus(orderStatus)
  }

  useEffect(() => {
    if (width < 1200) {
      setOpenOrderAndDriver(false)
    } else {
      setOpenOrderAndDriver(true)
    }
  }, [width])

  return (
    <>
      <HelmetTags page='deliveryDashboard' />
      <AdminLayout>
        <DeliveryDashboardContainer>
          <PageContent>
            <OrderStatusFilterBar
              selectedOrderStatus={selectedOrderStatus}
              changeOrderStatus={(orderStatus) => changeOrderStatus(orderStatus)}
            />
            <DeliveryDashboardContent>
              <DeliveryDashboardInnerContent>
                <OrderContentHeader active='deliveryDashboard' />
                <MapAndOrderContent>
                  <WrapperMap>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk' }}
                      defaultCenter={mapCenter}
                      center={mapCenter}
                      defaultZoom={mapZoom}
                      options={{ fullscreenControl: false }}
                      className='map'
                    >
                      <WrapperMapMarker
                        lat={mapCenter.lat}
                        lng={mapCenter.lng}
                      >
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
                          <OrderListing
                            selectedOrderStatus={selectedOrderStatus}
                            orderListView='small'
                          />
                        )}
                        {openTab.driver && (
                          <div>driver</div>
                        )}
                      </OrderAndDriverListContainer>
                    </WrapperOrdersAndDriver>
                  )}
                </MapAndOrderContent>

              </DeliveryDashboardInnerContent>
            </DeliveryDashboardContent>
          </PageContent>
        </DeliveryDashboardContainer>
      </AdminLayout>
    </>
  )
}
