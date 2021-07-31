import React, { useState } from 'react'
import { useLanguage, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrdersDashboardList } from '../OrdersDashboardList'
import { Button } from '../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { OrderNotification } from '../OrderNotification'
import { OrderDetails } from '../OrderDetails'
import { Messages } from '../Messages'

import {
  MessagesListingContainer,
  MessagesContent,
  OrdersContainer,
  FilterContainer,
  MessagesOptionTabs,
  Tab,
  OrdersOrderByOptionContainer,
  MessageContainer,
  ContactsContainer
} from './styles'

const MessagesListingUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    filterValues,
    handleChangeSearch,
    handleChangeFilterValues
  } = props

  const [, t] = useLanguage()
  const [selectedOption, setSelectedOption] = useState('orders')
  const [orderByOption, setOrderByOption] = useState('last_direct_message_at')
  const [contactsOption, setContactsOption] = useState('drivers')
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orderIdForUnreadCountUpdate, setOrderIdForUnreadCountUpdate] = useState(null)

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
  }

  const handleOrderCardClick = (order) => {
    setSelectedOrder({ ...order })
  }

  return (
    <>
      <MessagesListingContainer>
        <OrdersContentHeader
          isDisableControl
          title={t('MESSAGES', 'Messages')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
        />
        <MessagesContent>
          <OrdersContainer>
            <FilterContainer>
              <MessagesOptionTabs>
                <Tab
                  active={selectedOption === 'orders'}
                  onClick={() => setSelectedOption('orders')}
                >
                  {t('ORDERS', 'Orders')}
                </Tab>
                <Tab
                  active={selectedOption === 'contacts'}
                  onClick={() => setSelectedOption('contacts')}
                >
                  {t('CONTACTS', 'Contacts')}
                </Tab>
              </MessagesOptionTabs>
              {selectedOption === 'orders' && (
                <OrdersOrderByOptionContainer>
                  <Button
                    color={orderByOption === 'last_direct_message_at' ? 'primary' : 'secundaryDark'}
                    onClick={() => setOrderByOption('last_direct_message_at')}
                  >
                    {t('NEWEST', 'Newest')}
                    {orderByOption === 'last_direct_message_at' && <MdClose />}
                  </Button>
                  <Button
                    color={orderByOption === 'id' ? 'primary' : 'secundaryDark'}
                    onClick={() => setOrderByOption('id')}
                  >
                    {t('ORDER_NUMBER', 'Order number')}
                    {orderByOption === 'id' && <MdClose />}
                  </Button>
                </OrdersOrderByOptionContainer>
              )}
              {selectedOption === 'contacts' && (
                <ContactsContainer>
                  <Button
                    color={contactsOption === 'drivers' ? 'primary' : 'secundaryDark'}
                    onClick={() => setContactsOption('drivers')}
                  >
                    {t('DRIVERS', 'Drivers')}
                    {contactsOption === 'drivers' && <MdClose />}
                  </Button>
                  <Button
                    color={contactsOption === 'businesses' ? 'primary' : 'secundaryDark'}
                    onClick={() => setContactsOption('businesses')}
                  >
                    {t('BUSINESSES', 'Businesses')}
                    {contactsOption === 'businesses' && <MdClose />}
                  </Button>
                  <Button
                    color={contactsOption === 'customers' ? 'primary' : 'secundaryDark'}
                    onClick={() => setContactsOption('customers')}
                  >
                    {t('CUSTOMERS', 'Customers')}
                    {contactsOption === 'customers' && <MdClose />}
                  </Button>
                </ContactsContainer>
              )}
            </FilterContainer>
            <OrdersDashboardList
              isMessagesView
              searchValue={searchValue}
              filterValues={filterValues}
              driversList={driversList}
              orderByOption={orderByOption}
              selectedOrderCard={selectedOrder}
              orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
              handleOpenOrderDetail={handleOpenOrderDetail}
              handleOrderCardClick={handleOrderCardClick}
            />
          </OrdersContainer>
          <MessageContainer>
            {selectedOrder && (
              <Messages
                isChat
                orderId={selectedOrder?.id}
                order={selectedOrder}
                handleUpdateOrderForUnreadCount={(orderId) => setOrderIdForUnreadCountUpdate(orderId)}
                // messages={messages}
              />
            )}
          </MessageContainer>
        </MessagesContent>
      </MessagesListingContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          driversList={driversList}
          onClose={() => setIsOpenOrderDetail(false)}
        />
      )}
      <OrderNotification />
    </>
  )
}

export const MessagesListing = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: MessagesListingUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
