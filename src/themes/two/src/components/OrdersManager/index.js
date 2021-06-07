import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapItemView,
  WrapperIndicator
} from './styles'
import { OrdersDashboard } from '../OrdersDashboard'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
import { OrderNotification } from '../OrderNotification'

const OrdersManagerUI = (props) => {
  const {
    isDriverOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    startMulitOrderStatusChange,
    startMulitOrderDelete,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    selectedOrderIds,
    onOrderRedirect,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus,
    handleDriverOrderDetail
  } = props

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    if (!isDriverOrders) {
      onOrderRedirect()
    } else {
      handleDriverOrderDetail && handleDriverOrderDetail(false)
    }
  }

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
    if (!isDriverOrders) {
      onOrderRedirect(order.id)
    } else {
      handleDriverOrderDetail && handleDriverOrderDetail(true)
    }
  }

  useEffect(() => {
    if (startMulitOrderStatusChange || startMulitOrderDelete) {
      setTotalSelectedOrder(selectedOrderIds.length)
    }
  }, [startMulitOrderStatusChange, startMulitOrderDelete])

  useEffect(() => {
    if (selectedOrderIds.length === 0) {
      setTimeout(() => {
        setTotalSelectedOrder(0)
      }, 500)
    }
  }, [selectedOrderIds])

  useEffect(() => {
    if (isDriverOrders) return
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      setOrderDetailId(id)
      onOrderRedirect && onOrderRedirect(id)
      setIsOpenOrderDetail(true)
    }
  }, [])
  
  return (
    <>
      <OrdersListContainer>
        <OrdersContentHeader
          isDisableHeader={isDriverOrders}
          isDisableControl={isDriverOrders}
          title={t('ORDERS_MANAGER', 'Orders manager')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
        />
        <OrderStatusFilterBar
          selectedOrderStatus={ordersStatusGroup}
          changeOrderStatus={handleOrdersStatusGroupFilter}
        />
        <OrderStatusSubFilter
          ordersStatusGroup={ordersStatusGroup}
          selectedSubOrderStatus={selectedSubOrderStatus}
          handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
        />
        <OrdersContent>
          <OrdersInnerContent className='order-content'>
            <WrapItemView>
              <OrdersDashboard
                isDriverOrders={isDriverOrders}
                driverId={props.driverId}
                searchValue={searchValue}
                filterValues={filterValues}
                selectedOrderIds={selectedOrderIds}
                deletedOrderId={deletedOrderId}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                selectedSubOrderStatus={selectedSubOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
                handleOpenOrderDetail={handleOpenOrderDetail}
              />
            </WrapItemView>
          </OrdersInnerContent>
        </OrdersContent>
      </OrdersListContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          isDriverOrders
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          driversList={driversList}
          onClose={() => handleBackRedirect()}
        />
      )}

      <OrderNotification />

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}
    </>
  )
}

export const OrdersManager = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
