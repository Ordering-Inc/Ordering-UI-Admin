import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrderBySelector } from '../OrderBySelector'
import { OrdersList } from '../OrdersList'
import { Messages } from '../Messages'
import { OrderDetails } from '../OrderDetails'
import { OpenAndCloseOrderSelector } from '../OpenAndCloseOrderSelector'

import {
  MessagesContainer,
  MessagesInnerContent,
  WrapperMainContent,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperMessagesList,
  WrapperTab,
  Tab,
  WrapperSortContainer,
  OrdersListContainer,
  WrapperMessage,
  MessageOrderDetailContainer
} from './styles'

export const MessagesManager = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    filterValues,
    handleChangeSearch,
    handleChangeFilterValues,
    activeSwitch,
    handleSwitch,
    ordersStatusGroup,
    orderIdForUnreadCountUpdate,
    handleNotification,
    handleOpenOrderDetail,
    handleUpdateOrderForUnreadCount
  } = props
  const [, t] = useLanguage()
  const [openOrderAndUser, setOpenOrderAndUser] = useState(true)
  const [openOrclosedOrderView, setOpenOrclosedOrderView] = useState('all')
  const [openMessageOrderDetail, setOpenMessageOrderDetail] = useState(false)
  const [orderBy, setOrderBy] = useState('last_direct_message_at')
  const [messageType, setMessageType] = useState('')
  const [messageOrder, setMessageOrder] = useState({})

  const handleMessageOrderDetail = (state) => {
    setOpenMessageOrderDetail(state)
  }

  const handleOpenMessage = (order, messageType) => {
    setMessageType(messageType)
    setMessageOrder(order)
  }

  const handleSetMessageType = (messageType) => {
    setMessageType(messageType)
  }

  return (
    <MessagesContainer>
      <MessagesInnerContent>
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
          {!openOrderAndUser ? (
            <OrdersOpenButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndUser(true)}>
              <AiFillPlusCircle />
            </OrdersOpenButton>
          ) : (
            <OrdersCloseButton messageDashboardView={activeSwitch.messages} onClick={() => setOpenOrderAndUser(false)}>
              <FaRegTimesCircle />
            </OrdersCloseButton>
          )}
          <WrapperMessagesList
            style={{ display: `${openOrderAndUser ? 'block' : 'none'}` }}
          >
            <WrapperTab>
              <Tab
                active
              >
                {t('ORDERS', 'Orders')}
              </Tab>
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
            <OrdersListContainer>
              <OrdersList
                orderListView='small'
                orderBy={orderBy}
                messageDashboardView
                openOrclosedOrderView={openOrclosedOrderView}
                searchValue={searchValue}
                filterValues={filterValues}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                activeSwitch={activeSwitch}
                messageType={messageType}
                messageOrder={messageOrder}
                orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
                handleNotification={handleNotification}
                handleOpenOrderDetail={handleOpenOrderDetail}
                handleOpenMessage={handleOpenMessage}
              />
            </OrdersListContainer>
          </WrapperMessagesList>
          {/* message section */}
          {Object.keys(messageOrder).length !== 0 && (
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
          {Object.keys(messageOrder).length !== 0 && (
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
      </MessagesInnerContent>
    </MessagesContainer>
  )
}
