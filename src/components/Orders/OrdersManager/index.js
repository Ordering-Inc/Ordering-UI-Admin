import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { OrdersManage as OrdersManageController, useConfig, useLanguage, useSession } from 'ordering-components-admin'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { Alert } from '../../Shared'
import {
  OrdersListContainer,
  OrdersContent,
  OrdersInnerContent,
  WrapItemView,
  WrapperIndicator,
  OrderSubFilterControls,
  OrderStatusSubFilterWrapper
} from './styles'
import { OrdersDashboard } from '../OrdersDashboard'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
import { OrderNotification } from '../OrderNotification'
import { WizardOrders } from '../WizardOrders'

const OrdersManagerUI = (props) => {
  const {
    isLateralBar,
    isSelectedOrders,
    searchValue,
    driverGroupList,
    assignableDriverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    citiesList,
    adminsList,
    ordersStatusGroup,
    filterValues,
    deletedOrderIds,
    startMulitOrderStatusChange,
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
    setSelectedOrderIds,
    allowColumns,
    setAllowColumns,
    timeStatus,
    setTimeStatus,
    isUseQuery,
    disableDriverLocationsSockets,
    detailsOrder,
    setDetailsOrder,
    disableSocketRoomDriver
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [filterModalOpen, setFilterModalOpen] = useState(false)

  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(0)
  const [isTourFlag, setIsTourFlag] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [slaSettingTime, setSlaSettingTime] = useState(60000)
  const [ordersAmountByStatus, setOrdersAmountByStatus] = useState({
    pending: null,
    inProgress: null,
    completed: null,
    cancelled: null
  })

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

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleOpenOrderDetail = (order, isKeydown = false) => {
    if (isTourOpen && currentTourStep === 4 && !isKeydown) {
      setIsTourOpen(false)
      return
    }
    (!configs?.optimize_order_data || (configs?.optimize_order_data?.value === '0')) && setDetailsOrder(order)
    setOrderDetailId(order.id)
    setIsOpenOrderDetail(true)
    if (!isSelectedOrders) {
      onOrderRedirect(order.id)
    } else {
      handleCustomOrderDetail && handleCustomOrderDetail(true)
    }
    if (isTourOpen && currentTourStep === 4) {
      setIsTourFlag(true)
    }
    if (isTourOpen && currentTourStep === 0) {
      setTimeout(() => {
        setCurrentTourStep(1)
      }, 1)
    }
  }

  const handleOpenTour = () => {
    const tourElement = document.querySelector('[data-tour="tour_start"]')
    if (!tourElement) {
      setAlertState({
        open: true,
        content: t('ONE_ORDER_IS_REQUIRED', 'One order is required')
      })
      return
    }

    const orderElement = document.getElementById('orderTable')
    if (orderElement) orderElement.scrollTo(0, 0)
    setCurrentTourStep(0)
    setIsTourOpen(true)
    handleBackRedirect()
  }

  useEffect(() => {
    if (startMulitOrderStatusChange) {
      setTotalSelectedOrder(selectedOrderIds.length)
    }
  }, [startMulitOrderStatusChange])

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
        setIsOpenOrderDetail(true)
      }
    }
  }, [user])

  useEffect(() => {
    if (isTourOpen) return
    setIsTourFlag(false)
  }, [isTourOpen])

  return (
    <>
      <OrdersListContainer
        isSelectedOrders={isSelectedOrders}
      >
        <OrdersContentHeader
          isDisableTitle={isSelectedOrders}
          isSelectedOrders={isSelectedOrders}
          title={t('ORDERS_LIST', 'Orders list')}
          searchValue={searchValue}
          assignableDriverGroupList={assignableDriverGroupList}
          driverGroupList={driverGroupList}
          driversList={driversList}
          citiesList={citiesList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          adminsList={adminsList}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleOpenTour={() => handleOpenTour()}
          filterModalOpen={filterModalOpen}
          setFilterModalOpen={setFilterModalOpen}
          setTimeStatus={setTimeStatus}
          setSlaSettingTime={setSlaSettingTime}
          isLateralBar={isLateralBar}
          disableDriverLocationsSockets={disableDriverLocationsSockets}
          disableSocketRoomDriver={disableSocketRoomDriver}
        />
        <OrderStatusFilterBar
          isUseQuery={isUseQuery}
          selectedOrderStatus={ordersStatusGroup}
          changeOrderStatus={handleOrdersStatusGroupFilter}
          ordersAmountByStatus={ordersAmountByStatus}
        />
        <OrderSubFilterControls>
          <OrderStatusSubFilterWrapper isColumn={selectedOrderIds?.length}>
            <OrderStatusSubFilter
              ordersStatusGroup={ordersStatusGroup}
              selectedSubOrderStatus={selectedSubOrderStatus}
              handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
            />
          </OrderStatusSubFilterWrapper>
          {!isSelectedOrders && (
            <OrdersDashboardControls
              selectedOrderNumber={selectedOrderIds?.length}
              filterValues={filterValues}
              franchiseId={props.franchiseId}
              handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              handleDeleteMultiOrders={handleDeleteMultiOrders}
              handleOpenCustomOrderDetail={(id) => {
                setOrderDetailId(id)
                setIsOpenOrderDetail(true)
              }}
              handleOpenOrderDetail={handleOpenOrderDetail}
              ordersStatusGroup={ordersStatusGroup}
              selectedSubOrderStatus={selectedSubOrderStatus}
            />
          )}
        </OrderSubFilterControls>
        <OrdersContent>
          <OrdersInnerContent className='order-content'>
            <WrapItemView>
              <OrdersDashboard
                isUseQuery={isUseQuery}
                isSelectedOrders={isSelectedOrders}
                driverId={props.driverId}
                customerId={props.customerId}
                businessId={props.businessId}
                franchiseId={props.franchiseId}
                searchValue={searchValue}
                filterValues={filterValues}
                selectedOrderIds={selectedOrderIds}
                deletedOrderIds={deletedOrderIds}
                driversList={driversList}
                ordersStatusGroup={ordersStatusGroup}
                selectedSubOrderStatus={selectedSubOrderStatus}
                handleSelectedOrderIds={handleSelectedOrderIds}
                orderDetailId={orderDetailId}
                handleOpenOrderDetail={handleOpenOrderDetail}
                setSelectedOrderIds={setSelectedOrderIds}
                currentTourStep={currentTourStep}
                handleOpenTour={handleOpenTour}
                isTourOpen={isTourOpen}
                setIsTourOpen={setIsTourOpen}
                setFilterModalOpen={setFilterModalOpen}
                timeStatus={timeStatus}
                slaSettingTime={slaSettingTime}
                allowColumns={allowColumns}
                setAllowColumns={setAllowColumns}
                ordersAmountByStatus={ordersAmountByStatus}
                setOrdersAmountByStatus={setOrdersAmountByStatus}
                franchisesList={props.franchisesList}
                disableSocketRoomDriver={disableSocketRoomDriver}
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
          isTourOpen={isTourOpen}
          onClose={() => handleBackRedirect()}
          setCurrentTourStep={setCurrentTourStep}
          currentTourStep={currentTourStep}
          isTourFlag={isTourFlag}
          setIsTourFlag={setIsTourFlag}
          setIsTourOpen={setIsTourOpen}
          drivers={driversList.drivers}
          disableSocketRoomDriver={disableSocketRoomDriver}
        />
      )}

      {!isSelectedOrders && (
        <OrderNotification customerId={props.customerId} />
      )}

      {totalSelectedOrder > 0 && (
        <WrapperIndicator>
          {selectedOrderIds.length}/{totalSelectedOrder}
        </WrapperIndicator>
      )}

      <WizardOrders
        isTourOpen={isTourOpen}
        setIsTourOpen={setIsTourOpen}
        currentStep={currentTourStep}
        detailsOrder={detailsOrder}
      />
      <Alert
        title={t('ORDERS_MANAGER', 'Orders manager')}
        content={alertState.content}
        open={alertState.open}
        onClose={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Alert
        title={t('ORDERS_MANAGER', 'Orders manager')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
