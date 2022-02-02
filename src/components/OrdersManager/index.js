import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useSession, OrdersManage as OrdersManageController } from 'ordering-components-admin'
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
import { WizardOrders } from '../WizardOrders'

const OrdersManagerUI = (props) => {
  const {
    isSelectedOrders,
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
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
    handleCustomOrderDetail,
    setSelectedOrderIds
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(0)

  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    setDetailsOrder(null)
    setOrderDetailId(null)
    if (!isSelectedOrders) {
      onOrderRedirect()
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(false)
    }
  }

  const handleOpenOrderDetail = (order) => {
    setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
    if (!isSelectedOrders) {
      onOrderRedirect(order.id)
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true)
    }
    if (isTourOpen) {
      setTimeout(() => {
        setCurrentTourStep(1)
      }, 50)
    }
  }

  const handleOpenTour = () => {
    setCurrentTourStep(0)
    setIsTourOpen(true)
    setIsOpenOrderDetail(false)
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
    if (isSelectedOrders) return
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      if (user?.level === 5) {
        handleBackRedirect()
      } else {
        setOrderDetailId(id)
        onOrderRedirect && onOrderRedirect(id)
        setIsOpenOrderDetail(true)
      }
    }
  }, [user])

  return (
    <>
      <OrdersListContainer
        isSelectedOrders={isSelectedOrders}
      >
        <OrdersContentHeader
          isDisableTitle={isSelectedOrders}
          isDisableControl={isSelectedOrders}
          title={t('ORDERS_MANAGER', 'Orders manager')}
          searchValue={searchValue}
          driverGroupList={driverGroupList}
          driversList={driversList}
          citiesList={citiesList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          filterValues={filterValues}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleOpenTour={() => handleOpenTour()}
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
                isSelectedOrders={isSelectedOrders}
                driverId={props.driverId}
                customerId={props.customerId}
                businessId={props.businessId}
                searchValue={searchValue}
                filterValues={filterValues}
                selectedOrderIds={selectedOrderIds}
                deletedOrderId={deletedOrderId}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                selectedSubOrderStatus={selectedSubOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
                orderDetailId={orderDetailId}
                handleOpenOrderDetail={handleOpenOrderDetail}
                setSelectedOrderIds={setSelectedOrderIds}
                currentTourStep={currentTourStep}
                handleOpenTour={handleOpenTour}
              />
            </WrapItemView>
          </OrdersInnerContent>
        </OrdersContent>
      </OrdersListContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          isSelectedOrders={isSelectedOrders}
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          driversList={driversList}
          isTourOpen={isTourOpen}
          onClose={() => handleBackRedirect()}
          setCurrentTourStep={setCurrentTourStep}
        />
      )}

      <OrderNotification />

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}

      {isTourOpen && (
        <WizardOrders
          isTourOpen={isTourOpen}
          setIsTourOpen={setIsTourOpen}
          currentStep={currentTourStep}
        />
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
