import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrdersContentHeader, OrdersDashboardList, OrderNotification, OrderDetails, Messages } from '../../Orders'
import { Button } from '../../../styles/Buttons'
import MdClose from '@meronex/icons/ios/MdClose'
import { ChatContactList } from '../ChatContactList'
import { ChatBusinessesList } from '../ChatBusinessesList'
import { AutoScroll } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  MessagesListingContainer,
  MessagesContent,
  OrdersContainer,
  FilterContainer,
  MessagesOptionTabs,
  Tab,
  OrdersOrderByOptionContainer,
  MessageContainer,
  ContactsContainer,
  InnerTabsContainer
} from './styles'

const MessagesListingUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    filterValues,
    selectedSubOrderStatus,
    handleChangeSearch,
    handleChangeFilterValues,
    isUseQuery
  } = props

  const query = new URLSearchParams(useLocation().search)

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [selectedOption, setSelectedOption] = useState('orders')
  const [orderByOption, setOrderByOption] = useState('last_direct_message_at')
  const [contactsOption, setContactsOption] = useState('drivers')
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orderIdForUnreadCountUpdate, setOrderIdForUnreadCountUpdate] = useState(null)
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [timeStatus, setTimeStatus] = useState(null)

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)

    if (isUseQuery) {
      addQueryToUrl({ id: order.id })
    }
  }

  const handleCloseOrderDetail = () => {
    setIsOpenOrderDetail(false)
    removeQueryToUrl(['id'])
  }

  const handleOrderCardClick = (order) => {
    setSelectedOrder({ ...order })
  }

  useEffect(() => {
    if (width >= 768) return
    document.body.style.overflow = isOpenOrderDetail ? 'hidden' : 'auto'
  }, [width, isOpenOrderDetail])

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setOrderDetailId(id)
      setIsOpenOrderDetail(true)
    }
  }, [])

  return (
    <>
      <MessagesListingContainer id='deliveryDashboard'>
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
          filterModalOpen={filterModalOpen}
          setFilterModalOpen={setFilterModalOpen}
          setTimeStatus={setTimeStatus}
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
                {/* <Tab
                  active={selectedOption === 'contacts'}
                  onClick={() => setSelectedOption('contacts')}
                >
                  {t('CONTACTS', 'Contacts')}
                </Tab> */}
              </MessagesOptionTabs>
              {selectedOption === 'orders' && (
                <OrdersOrderByOptionContainer>
                  <InnerTabsContainer>
                    <AutoScroll innerScroll scrollId='orderByOption'>
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
                    </AutoScroll>
                  </InnerTabsContainer>
                </OrdersOrderByOptionContainer>
              )}
              {selectedOption === 'contacts' && (
                <ContactsContainer>
                  <InnerTabsContainer>
                    <AutoScroll innerScroll scrollId='contactOption'>
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
                    </AutoScroll>
                  </InnerTabsContainer>
                </ContactsContainer>
              )}
            </FilterContainer>
            {selectedOption === 'orders' && (
              <OrdersDashboardList
                isMessagesView
                searchValue={searchValue}
                filterValues={filterValues}
                driversList={driversList}
                orderByOption={orderByOption}
                selectedOrderCard={selectedOrder}
                selectedSubOrderStatus={selectedSubOrderStatus}
                orderIdForUnreadCountUpdate={orderIdForUnreadCountUpdate}
                handleOpenOrderDetail={handleOpenOrderDetail}
                handleOrderCardClick={handleOrderCardClick}
                timeStatus={timeStatus}
                isUseQuery={isUseQuery}
                franchisesList={props.franchisesList}
              />
            )}
            {selectedOption === 'contacts' && (
              <>
                {contactsOption === 'drivers' && (
                  <ChatContactList isDriver />
                )}
                {contactsOption === 'customers' && (
                  <ChatContactList isCustomer />
                )}
                {contactsOption === 'businesses' && (
                  <ChatBusinessesList />
                )}
              </>
            )}
          </OrdersContainer>
          <MessageContainer>
            {selectedOrder && (
              <Messages
                isChat
                orderId={selectedOrder?.id}
                order={selectedOrder}
                handleUpdateOrderForUnreadCount={(orderId) => setOrderIdForUnreadCountUpdate(orderId)}
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
          drivers={driversList.drivers}
          onClose={() => handleCloseOrderDetail()}
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
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
