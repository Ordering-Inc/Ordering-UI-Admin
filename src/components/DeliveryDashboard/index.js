import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import BlankCheckbox from '@meronex/icons/ri/RiCheckboxBlankCircleLine'
import Checkbox from '@meronex/icons/ri/RiCheckboxCircleLine'
import { DriversLocation } from '../DriversLocation'
import { DeliveryDashboardOrdersList } from '../DeliveryDashboardOrdersList'
import { DriversModal } from '../DriversModal'
import {
  DeliveryDashboardContainer,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperOrdersAndDriver,
  WrapperTab,
  Tab,
  WrapperQuickShow,
  OrderAndDriverListContainer,
  WrapperOrderlist
} from './styles'
export const DeliveryDashboard = (props) => {
  const {
    searchValue,
    filterValues,
    driversList,
    deletedOrderId,
    ordersStatusGroup,
    driverOrders,
    handleChangeDriverOrdersModal,
    handleSelectedOrderIds,
    activeSwitch,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()

  const [openOrderAndDriver, setOpenOrderAndDriver] = useState(true)
  const [openTab, setOpenTab] = useState({ order: true, driver: false })
  const [driverAvailable, setDriverAvailable] = useState('all')
  const [interActionMapOrder, setInterActionMapOrder] = useState(null)
  const [isOnlyDelivery, setIsOnlyDelivery] = useState(true)

  const handleChangeDriverAvailable = (available) => {
    setDriverAvailable(available)
  }

  const handleChangeOrderAndDriver = () => {
    setOpenTab({ order: true, driver: false })
    setDriverAvailable('all')
  }

  const handleLocation = (order) => {
    if (interActionMapOrder?.id === order?.id) {
      setInterActionMapOrder(null)
    } else {
      setInterActionMapOrder({ ...order })
    }
  }

  return (
    <DeliveryDashboardContainer>
      <DriversLocation
        driversList={driversList}
        driverAvailable={driverAvailable}
        interActionMapOrder={interActionMapOrder}
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
      <WrapperOrdersAndDriver
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
          {!isOnlyDelivery ? (
            <Checkbox onClick={() => setIsOnlyDelivery(!isOnlyDelivery)} />
          ) : (
            <BlankCheckbox onClick={() => setIsOnlyDelivery(!isOnlyDelivery)} />
          )}
          {t('SHOW_ALL', 'Show all')}
        </WrapperQuickShow>
        <OrderAndDriverListContainer>
          <WrapperOrderlist style={{ display: `${openTab.order ? 'block' : 'none'}` }}>
            <DeliveryDashboardOrdersList
              orderListView='small'
              searchValue={searchValue}
              filterValues={filterValues}
              deletedOrderId={deletedOrderId}
              driversList={driversList}
              ordersStatusGroup={ordersStatusGroup}
              activeSwitch={activeSwitch}
              isOnlyDelivery={isOnlyDelivery}
              interActionMapOrder={interActionMapOrder}
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
        </OrderAndDriverListContainer>
      </WrapperOrdersAndDriver>
    </DeliveryDashboardContainer>
  )
}
