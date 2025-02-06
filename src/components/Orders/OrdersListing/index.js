import React, { memo, useState, useEffect } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { OrdersTable } from '../OrdersTable'
import { OrdersCards } from '../OrdersCards'
import { Button } from '../../../styles'
import AiOutlineInfoCircle from '@meronex/icons/ai/AiOutlineInfoCircle'

import {
  WrapperNoneOrders,
  WrapperOrderListContent,
  InnerNoneOrdersContainer,
  InfoMessage,
  ColumnPopoverContainer
} from './styles'
import { ColumnAllowSettingPopover } from '../../Shared'

export const OrdersListing = memo((props) => {
  const {
    hidePhoto,
    isSelectedOrders,
    orderList,
    selectedOrderIds,
    orderListView,
    handleUpdateOrderStatus,
    handleSelectedOrderIds,
    pagination,
    handleOpenOrderDetail,
    handleOpenMessage,
    handleOrderCardClick,
    handleUpdateDriverLocation,
    messageOrder,
    selectedOrderCard,
    messageListView,
    messageType,
    loadMoreOrders,
    getPageOrders,
    ordersStatusGroup,
    groupStatus,
    orderDetailId,
    filterValues,
    setFilterModalOpen,
    setOrdersTotalAmount,

    isMessagesView,
    setSelectedOrderIds,
    handleOpenTour,
    currentTourStep,
    isTourOpen,
    setIsTourOpen,
    slaSettingTime,

    allowColumns,
    setAllowColumns,
    handleDrop,
    isDelivery,
    saveUserSettings,
    isUseQuery,
    handleSetOpenOrderDetail
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [filterApplied, setFilterApplied] = useState(false)

  const showExternalId = configState?.configs?.change_order_id?.value === '1'

  const handleDobleClick = () => {
    if (handleSetOpenOrderDetail && orderDetailId) {
      handleSetOpenOrderDetail(true)
    }
  }

  const optionsDefault = [
    {
      value: 'status',
      content: t('STATUS', 'Status'),
      enabled: true
    },
    {
      value: 'orderNumber',
      content: t('INVOICE_ORDER_NO', 'Order No.'),
      enabled: false
    },
    {
      value: 'dateTime',
      content: t('DATE_TIME', 'Date and time'),
      enabled: !showExternalId
    },
    {
      value: 'agent',
      content: t('AGENT', 'Agent'),
      enabled: true
    },
    {
      value: 'cartGroupId',
      content: t('GROUP_ORDER', 'Group Order'),
      enabled: true
    },
    {
      value: 'driverGroupId',
      content: t('EXPORT_DRIVER_GROUP_ID', 'Driver Group Id'),
      enabled: true
    },
    {
      value: 'business',
      content: t('BUSINESS', 'Business'),
      enabled: true
    },
    {
      value: 'customer',
      content: t('CUSTOMER', 'Customer'),
      enabled: true
    },
    {
      value: 'driver',
      content: t('DRIVER', 'Driver'),
      enabled: true
    },
    {
      value: 'advanced',
      content: t('ADVANCED_LOGISTICS', 'Advance Logistics'),
      enabled: true
    },
    {
      value: 'timer',
      content: t('SLA_TIMER', 'SLA’s timer'),
      enabled: true
    },
    {
      value: 'eta',
      content: t('ETA', 'ETA'),
      enabled: true
    },
    {
      value: 'total',
      content: t('EXPORT_TOTAL', 'Total'),
      enabled: true
    },
    {
      value: 'externalId',
      content: t('EXTERNAL_ID', 'External id'),
      enabled: true
    },
    {
      value: 'channel',
      content: t('CHANNEL', 'Channel'),
      enabled: true
    }
  ]

  const handleChangeAllowColumns = (type) => {
    let _column = {}
    if (type === 'channel') {
      _column = { visable: allowColumns[type].visable, title: t('CHANNEL', 'Channel'), className: 'channelInfo', draggable: true, colSpan: 1, order: 12 }
    } else {
      _column = allowColumns[type]
    }
    const updatedAllowColumns = {
      ...allowColumns,
      [type]: { ..._column, visable: !_column?.visable }
    }
    setAllowColumns(updatedAllowColumns)
    saveUserSettings(JSON.parse(JSON.stringify(updatedAllowColumns)))
  }

  useEffect(() => {
    if (orderList.loading || !messageListView) return
    if (orderList.orders.length === 0 || messageOrder) return
    handleOpenMessage && handleOpenMessage(orderList.orders[0], messageType)
  }, [orderList.loading, messageListView])

  useEffect(() => {
    if (!isMessagesView || orderList.loading || selectedOrderCard) return
    if (orderList?.orders.length > 0) {
      handleOrderCardClick(orderList.orders[0])
    }
  }, [isMessagesView, orderList, selectedOrderCard])

  useEffect(() => {
    let _filterApplied = false
    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false
    } else {
      _filterApplied = filterValues?.groupTypes?.length || filterValues?.businessIds?.length > 0 || filterValues?.cityIds?.length > 0 ||
        filterValues?.deliveryEndDatetime !== null || filterValues?.deliveryFromDatetime !== null || filterValues?.deliveryTypes?.length > 0 ||
        filterValues?.driverIds?.length > 0 || filterValues?.paymethodIds?.length > 0 || filterValues?.statuses?.length > 0
    }
    setFilterApplied(_filterApplied)
  }, [filterValues])

  useEffect(() => {
    if (!isNaN(pagination.total)) {
      setOrdersTotalAmount && setOrdersTotalAmount(pagination.total)
    }
  }, [pagination.total])

  return (
    <>
      {((ordersStatusGroup === groupStatus) || isMessagesView) && (
        <>
          {!orderList.loading && pagination?.total === 0
            ? (
              <WrapperNoneOrders>
                <InnerNoneOrdersContainer small={orderListView === 'small'}>
                  <img src={theme?.images?.dummies?.noOrders} alt='none' />
                  {filterApplied
                    ? (
                      <>
                        <p>{t('NOT_FOUND_FILTERED_ORDERS', 'No orders with the current filters applied.')}</p>
                        <Button
                          outline
                          borderRadius='8px'
                          color='primary'
                          onClick={() => setFilterModalOpen(true)}
                        >
                          {t('FILTERS', 'Filters')}
                        </Button>
                      </>
                    )
                    : (
                      <p>{t('MOBILE_NO_ORDERS', 'No Orders yet.')}</p>
                    )}
                </InnerNoneOrdersContainer>
              </WrapperNoneOrders>
            )
            : (
              <WrapperOrderListContent
                maxHeight={orderListView !== 'table'}
                onDoubleClick={handleDobleClick}
              >

                {orderListView === 'table'
                  ? (
                    <>
                      {allowColumns && !(Object.keys(allowColumns).filter(col => allowColumns[col]?.visable && allowColumns[col]?.order !== 0).length === 0) && (
                        <ColumnPopoverContainer>
                          <ColumnAllowSettingPopover
                            allowColumns={allowColumns}
                            optionsDefault={optionsDefault?.filter(({ enabled }) => enabled)}
                            handleChangeAllowColumns={handleChangeAllowColumns}
                            isOrder
                          />
                        </ColumnPopoverContainer>
                      )}
                      <OrdersTable
                        hidePhoto={hidePhoto}
                        setSelectedOrderIds={setSelectedOrderIds}
                        isSelectedOrders={isSelectedOrders}
                        orderList={orderList}
                        pagination={pagination}
                        selectedOrderIds={selectedOrderIds}
                        orderDetailId={orderDetailId}
                        loadMoreOrders={loadMoreOrders}
                        getPageOrders={getPageOrders}
                        handleUpdateOrderStatus={handleUpdateOrderStatus}
                        handleSelectedOrderIds={handleSelectedOrderIds}
                        handleOpenOrderDetail={handleOpenOrderDetail}
                        currentTourStep={currentTourStep}
                        isTourOpen={isTourOpen}
                        handleOpenTour={handleOpenTour}
                        setIsTourOpen={setIsTourOpen}
                        slaSettingTime={slaSettingTime}
                        groupStatus={groupStatus}
                        allowColumns={allowColumns}
                        setAllowColumns={setAllowColumns}
                        handleDrop={handleDrop}
                        saveUserSettings={saveUserSettings}
                        isUseQuery={isUseQuery}
                        franchisesList={props.franchisesList}
                      />
                    </>
                  )
                  : (
                    <OrdersCards
                      isMessagesView={isMessagesView}

                      orderList={orderList}
                      pagination={pagination}
                      selectedOrderIds={selectedOrderIds}
                      loadMoreOrders={loadMoreOrders}
                      getPageOrders={getPageOrders}
                      handleUpdateOrderStatus={handleUpdateOrderStatus}
                      handleSelectedOrderIds={handleSelectedOrderIds}
                      handleOpenOrderDetail={handleOpenOrderDetail}
                      selectedOrderCard={selectedOrderCard}
                      handleOrderCardClick={handleOrderCardClick}
                      handleUpdateDriverLocation={handleUpdateDriverLocation}
                      slaSettingTime={slaSettingTime}
                      isDelivery={isDelivery}
                      isUseQuery={isUseQuery}
                      franchisesList={props.franchisesList}
                    />
                  )}
              </WrapperOrderListContent>
            )}
          {(handleSetOpenOrderDetail && orderDetailId) && (
            <InfoMessage>
              <AiOutlineInfoCircle />
              <span>{t('DOBLE_CLICK_OPEN_ORDER_INFO', 'Doble click order to open details')}</span>
            </InfoMessage>
          )}
        </>
      )}
    </>
  )
})

OrdersListing.displayName = 'OrdersListing'
