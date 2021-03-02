import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import FaRegTimesCircle from '@meronex/icons/fa/FaRegTimesCircle'
import { OpenAndCloseOrderSelector } from '../OpenAndCloseOrderSelector'
import { OrderBySelector } from '../OrderBySelector'
import { MessagesDashboardOrdersList } from '../MessagesDashboardOrdersList'
import { Messages } from '../Messages'
import { OrderDetails } from '../OrderDetails'

import {
  MessagesManagerContainer,
  OrdersOpenButton,
  OrdersCloseButton,
  WrapperOrdersAndUser,
  WrapperTab,
  Tab,
  WrapperSortContainer,
  OrderAndUserListContainer,
  WrapperMessage,
  MessageOrderDetailContainer
} from './styles'
export const MessagesDashbaord = (props) => {
  const {
    searchValue,
    filterValues,
    deletedOrderId,
    driversList,
    activeSwitch,
    handleOpenOrderDetail,
    orderIdForUnreadCountUpdate,
    handleUpdateOrderForUnreadCount
  } = props
  const [, t] = useLanguage()
  const [openOrclosedOrderView, setOpenOrclosedOrderView] = useState('all')
  const [orderBy, setOrderBy] = useState('last_direct_message_at')
  const [openOrderAndUser, setOpenOrderAndUser] = useState(true)
  const [messageType, setMessageType] = useState('')
  const [messageOrder, setMessageOrder] = useState({})
  const [openMessageOrderDetail, setOpenMessageOrderDetail] = useState(false)

  const handleOpenMessage = (order, messageType) => {
    setMessageType(messageType)
    setMessageOrder(order)
  }

  const handleSetMessageType = (messageType) => {
    setMessageType(messageType)
  }

  const handleMessageOrderDetail = (state) => {
    setOpenMessageOrderDetail(state)
  }

  return (
    <MessagesManagerContainer>
      {!openOrderAndUser ? (
        <OrdersOpenButton onClick={() => setOpenOrderAndUser(true)}>
          <AiFillPlusCircle />
        </OrdersOpenButton>
      ) : (
        <OrdersCloseButton onClick={() => setOpenOrderAndUser(false)}>
          <FaRegTimesCircle />
        </OrdersCloseButton>
      )}
      <WrapperOrdersAndUser
        style={{ display: `${openOrderAndUser ? 'block' : 'none'}` }}
      >
        <WrapperTab>
          <Tab active>
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
        <OrderAndUserListContainer>
          <MessagesDashboardOrdersList
            orderListView='small'
            orderBy={orderBy}
            messageDashboardView
            openOrclosedOrderView={openOrclosedOrderView}
            searchValue={searchValue}
            filterValues={filterValues}
            deletedOrderId={deletedOrderId}
            driversList={driversList}
            activeSwitch={activeSwitch}
            messageType={messageType}
            messageOrder={messageOrder}
            orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
            handleOpenOrderDetail={handleOpenOrderDetail}
            handleOpenMessage={handleOpenMessage}
          />
        </OrderAndUserListContainer>
      </WrapperOrdersAndUser>
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
    </MessagesManagerContainer>
  )
}
