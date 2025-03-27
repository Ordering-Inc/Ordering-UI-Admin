import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useConfig, useSession, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { Alert } from '../../Shared'
import { DriversManager } from './DriversManager'
import { DriversLocation } from '../DriversLocation'
import { usePreventDoubleClick } from '../../../utils'
import {
  MainContentContainer,
  TopContent,
  DriversContainer,
  OrdersContainer,
  WrapperDriversLocation,
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

const DEBOUNCE_DELAY = 300

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
    setSelectedOrderIds,
    allowColumns,
    setAllowColumns,
    isUseQuery,
    adminsList,
    assignableDriverGroupList,
    mapsData,
    setMapsData,
    detailsOrder,
    setDetailsOrder
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  const [{ configs }] = useConfig()

  const isFilterDriverGroup = (configs?.filter_order_options?.value.split('|').map(value => (value)) || []).includes('driver_group_general')

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [assignedOrders, setAssignedOrders] = useState({ loading: false, error: null, orders: [] })
  const [orderForMap, setOrderForMap] = useState(detailsOrder)
  const [isTourOpen, setIsTourOpen] = useState(false)
  const [currentTourStep, setCurrentTourStep] = useState(0)
  const [isTourFlag, setIsTourFlag] = useState(false)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [timeStatus, setTimeStatus] = useState(null)
  const [slaSettingTime, setSlaSettingTime] = useState(60000)
  const [totalSelectedOrder, setTotalSelectedOrder] = useState(0)
  const [ordersAmountByStatus, setOrdersAmountByStatus] = useState({
    pending: null,
    inProgress: null,
    completed: null,
    cancelled: null
  })

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    setDetailsOrder(null)
    setOrderForMap(null)
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

  const handleOpenOrderDetailBase = (order, isKeydown = false) => {
    if (isTourOpen && currentTourStep === 4 && !isKeydown) {
      setIsTourOpen(false)
      return
    }
    (!configs?.optimize_order_data || (configs?.optimize_order_data?.value === '0')) && setDetailsOrder(order)
    setOrderDetailId(order.id)
    setOrderForMap((prev) => (prev?.id === order?.id ? null : order))
    // setIsOpenOrderDetail(true)
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

  const handleOpenOrderDetail = usePreventDoubleClick(handleOpenOrderDetailBase, DEBOUNCE_DELAY)

  const handleSetOpenOrderDetail = (state) => {
    setIsOpenOrderDetail(state)
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

  const handleUpdateAssignedOrders = (_assignedOrders) => {
    setAssignedOrders(_assignedOrders)
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
          disableSocketRoomDriver
          isDisableTitle={isSelectedOrders}
          isDisableControl={isSelectedOrders}
          title={t('ORDER_MANAGER', 'Orders manager')}
          searchValue={searchValue}
          assignableDriverGroupList={assignableDriverGroupList}
          driverGroupList={driverGroupList}
          driversList={driversList}
          citiesList={citiesList}
          paymethodsList={paymethodsList}
          businessesList={businessesList}
          handleChangeSearch={handleChangeSearch}
          handleChangeFilterValues={handleChangeFilterValues}
          selectedOrderIds={selectedOrderIds}
          handleDeleteMultiOrders={handleDeleteMultiOrders}
          handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          handleOpenTour={() => handleOpenTour()}
          filterModalOpen={filterModalOpen}
          adminsList={adminsList}
          setFilterModalOpen={setFilterModalOpen}
          setTimeStatus={setTimeStatus}
          setSlaSettingTime={setSlaSettingTime}
        />

        <MainContentContainer>
          <TopContent>
            <DriversContainer>
              <DriversManager
                enableSocketEventDriverRoom
                disableSocketRoomDriver
                disableDriverLocationsSockets
                showCompressedInfo
                filterValues={filterValues}
                driverGroupList={driverGroupList}
                isFilterDriverGroup={isFilterDriverGroup}
                drivers={driversList.drivers}
                setMapsData={setMapsData}
                handleEmtpyOrderSelected={handleBackRedirect}
                handleUpdateAssignedOrders={handleUpdateAssignedOrders}
                orderForMap={orderForMap}
                setOrderForMap={setOrderForMap}
              />
            </DriversContainer>
            <OrdersContainer showCompressedInfo>
              <OrderStatusFilterBar
                isUseQuery={isUseQuery}
                selectedOrderStatus={ordersStatusGroup}
                changeOrderStatus={handleOrdersStatusGroupFilter}
                ordersAmountByStatus={ordersAmountByStatus}
              />
              <OrderSubFilterControls isColumn={selectedOrderIds?.length}>
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
                    handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                    handleDeleteMultiOrders={handleDeleteMultiOrders}
                  />
                )}
              </OrderSubFilterControls>
              <OrdersContent>
                <OrdersInnerContent className='order-content'>
                  <WrapItemView>
                    <OrdersDashboard
                      hidePhoto
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
                      isTourOpen={isTourOpen}
                      setIsTourOpen={setIsTourOpen}
                      setFilterModalOpen={setFilterModalOpen}
                      timeStatus={timeStatus}
                      slaSettingTime={slaSettingTime}
                      allowColumns={allowColumns}
                      setAllowColumns={setAllowColumns}
                      setOrdersAmountByStatus={setOrdersAmountByStatus}
                      isUseQuery={isUseQuery}
                      handleSetOpenOrderDetail={handleSetOpenOrderDetail}
                    />
                  </WrapItemView>
                </OrdersInnerContent>
              </OrdersContent>
            </OrdersContainer>
          </TopContent>
          <WrapperDriversLocation>
            <DriversLocation
              driversIsOnline={mapsData.driversIsOnline}
              selectedDriver={mapsData.selectedDriver}
              onlineDrivers={mapsData.onlineDrivers}
              offlineDrivers={mapsData.offlineDrivers}
              selectedOrder={orderForMap}
              assignedOrders={assignedOrders}
            />
          </WrapperDriversLocation>
        </MainContentContainer>
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
          disableSocketRoomDriver
        />
      )}

      <OrderNotification customerId={props.customerId} />

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

export const AllInOne = (props) => {
  const OrdersListControlProps = {
    ...props,
    UIComponent: OrdersManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups.name', 'driver_groups.id', 'assigned_orders_count', 'photo']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
