import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import BlankCheckbox from '@meronex/icons/ri/RiCheckboxBlankCircleLine'
import Checkbox from '@meronex/icons/ri/RiCheckboxCircleLine'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { DriversLocation } from '../DriversLocation'
import { OrdersList } from '../OrdersList'
import { DriversModal } from '../DriversModal'

import {
  DeliveryConatiner,
  DeliveryContent,
  InnerContent,
  WrapperMainContent,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapOrdersListAndMap,
  WrapperTab,
  Tab,
  WrapperQuickShow,
  OrdersListContainer,
  WrapperOrderlist
} from './styles'

export const DeliveryDashboard = (props) => {
  const {
    searchValue,
    driversList,
    driverGroupList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    handleOrdersStatusGroupFilter,
    handleChangeSearch,
    handleChangeFilterValues,
    driverOrders,
    handleSelectedOrderIds,
    handleChangeDriverOrdersModal,
    activeSwitch,
    handleSwitch,
    handleNotification,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()

  const [driverAvailable, setDriverAvailable] = useState('all')
  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [interActionMapOrder, setInterActionMapOrder] = useState(null)
  const [isCheckedQuickShow, setIsCheckedQuickShow] = useState(false)
  const [googleMapLoad, setGoogleMapLoad] = useState(false)

  const handleChangeDriverAvailable = (available) => {
    setDriverAvailable(available)
  }

  const handleChangeOrderAndDriver = () => {
    setOpenTab({ order: true, driver: false })
    setDriverAvailable('all')
  }

  const handleLocation = (order) => {
    setInterActionMapOrder({ ...order })
  }

  useEffect(() => {
    setInterActionMapOrder(null)
    setOpenTab({ order: true, driver: false })
    setIsCheckedQuickShow(false)
    setGoogleMapLoad(true)
  }, [])

  return (
    <DeliveryConatiner>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusGroup}
        changeOrderStatus={handleOrdersStatusGroupFilter}
      />
      <DeliveryContent>
        <InnerContent className='order-content'>
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
          <WrapperMainContent>
            {googleMapLoad && (
              <DriversLocation
                disableUI={!activeSwitch.deliveries}
                driversList={driversList}
                driverAvailable={driverAvailable}
                interActionMapOrder={interActionMapOrder}
              />
            )}
            {!openOrderAndDriver ? (
              <OrdersOpenButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndDriver(true)} name='order-open'>
                <AiFillPlusCircle />
              </OrdersOpenButton>
            ) : (
              <OrdersCloseButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndDriver(false)} name='order-close'>
                <FaRegTimesCircle />
              </OrdersCloseButton>
            )}
            <WrapOrdersListAndMap
              style={{ display: `${openOrderAndDriver ? 'block' : 'none'}` }}
            >
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
              <OrdersListContainer>
                <WrapperOrderlist style={{ display: `${openTab.order ? 'block' : 'none'}` }}>
                  <OrdersList
                    orderListView='small'
                    searchValue={searchValue}
                    filterValues={filterValues}
                    driversList={driversList}
                    ordersStatusGroup={ordersStatusGroup}
                    activeSwitch={activeSwitch}
                    isCheckedQuickShow={isCheckedQuickShow}
                    interActionMapOrder={interActionMapOrder}
                    handleNotification={handleNotification}
                    handleOpenOrderDetail={handleOpenOrderDetail}
                    handleLocation={handleLocation}
                  />
                </WrapperOrderlist>
                {openTab.driver && (
                  <DriversModal
                    driversList={driversList}
                    driverOrders={driverOrders}
                    handleChangeDriverAvailable={handleChangeDriverAvailable}
                    handleChangeDriverOrders={handleChangeDriverOrdersModal}
                    handleSelectedOrderIds={handleSelectedOrderIds}
                    handleOpenOrderDetail={handleOpenOrderDetail}
                  />
                )}
              </OrdersListContainer>
            </WrapOrdersListAndMap>
          </WrapperMainContent>
        </InnerContent>
      </DeliveryContent>
    </DeliveryConatiner>
  )
}
