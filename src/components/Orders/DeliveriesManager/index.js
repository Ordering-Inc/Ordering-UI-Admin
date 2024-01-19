import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useConfig, OrdersManage as OrdersManageController } from 'ordering-components-admin'
import { OrdersContentHeader } from '../OrdersContentHeader'
import { OrderDetails } from '../OrderDetails'
import { OrderNotification } from '../OrderNotification'
import { DeliveryDashboard } from '../DeliveryDashboard'

import {
  DeliveriesContainer,
  OrdersContent,
  WrapItemView
} from './styles'
import { useFilterValues } from '../../../contexts/FilterValuesContext'

const DeliveriesManagerUI = (props) => {
  const {
    searchValue,
    driverGroupList,
    driversList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    handleChangeSearch,
    handleChangeFilterValues,
    handleOrdersStatusGroupFilter,
    handleSelectedOrderIds,
    selectedSubOrderStatus,
    handleSelectedSubOrderStatus,
    onOrderRedirect,
    numberOfOrdersBySubstatus,
    timeStatus,
    setTimeStatus,
    isUseQuery
  } = props

  const [, t] = useLanguage()

  const query = new URLSearchParams(useLocation().search)
  const [isOpenOrderDetail, setIsOpenOrderDetail] = useState(false)
  const [orderDetailId, setOrderDetailId] = useState(null)
  const [detailsOrder, setDetailsOrder] = useState(null)
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [slaSettingTime, setSlaSettingTime] = useState(60000)
  const [ordersAmountByStatus, setOrdersAmountByStatus] = useState({
    pending: null,
    inProgress: null,
    completed: null,
    cancelled: null
  })

  const [filterValuesOrders, { handleFilterValues }] = useFilterValues()
  const [savedFilterValues, setSavedFilterValues] = useState(filterValues)

  const propsHeaderByCallcenter = props.isCallcenter ? {
    filterValues: savedFilterValues,
    setFilterValues: setSavedFilterValues,
    handleFilterValues
  } : {}
  const propsFilterGroupByCallcenter = props.isCallcenter ? {
    filterValues: filterValuesOrders,
    setFilterValues: handleFilterValues
  } : {}

  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const handleBackRedirect = () => {
    setIsOpenOrderDetail(false)
    onOrderRedirect()
  }

  const handleOpenOrderDetail = (order) => {
    (!configState?.configs?.optimize_order_data || (configState?.configs?.optimize_order_data?.value === '0')) && setDetailsOrder(order)
    setOrderDetailId(order.id)
    onOrderRedirect(order.id)
    setIsOpenOrderDetail(true)
  }

  useEffect(() => {
    const id = query.get('id')
    if (id === null) setIsOpenOrderDetail(false)
    else {
      setOrderDetailId(id)
      setIsOpenOrderDetail(true)
    }
  }, [])

  useEffect(() => {
    if (props.isCallcenter) return
    if (filterValuesOrders && !filterValuesOrders.administratorIds) {
      setSavedFilterValues({ ...filterValuesOrders, administratorIds: [] })
    } else {
      setSavedFilterValues(filterValuesOrders)
    }
  }, [filterValuesOrders])

  return (
    <>
      <DeliveriesContainer id='deliveryDashboard'>
        <OrdersContentHeader
          isDisableControl
          title={t('DELIVERY_DASHBOARD', 'Delivery dashboard')}
          isShowMapsKeySettingButton={!googleMapsApiKey}
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
          setSlaSettingTime={setSlaSettingTime}
          propsHeaderByCallcenter={propsHeaderByCallcenter}

        />
        <OrdersContent>
          <WrapItemView>
            <DeliveryDashboard
              searchValue={searchValue}
              filterValues={filterValues}
              driversList={driversList}
              deletedOrderId={deletedOrderId}
              ordersStatusGroup={ordersStatusGroup}
              selectedSubOrderStatus={selectedSubOrderStatus}
              handleSelectedOrderIds={handleSelectedOrderIds}
              handleOpenOrderDetail={handleOpenOrderDetail}
              handleOrdersStatusGroupFilter={handleOrdersStatusGroupFilter}
              handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
              isOnlyDelivery
              setFilterModalOpen={setFilterModalOpen}
              slaSettingTime={slaSettingTime}
              timeStatus={timeStatus}
              ordersAmountByStatus={ordersAmountByStatus}
              setOrdersAmountByStatus={setOrdersAmountByStatus}
              numberOfOrdersBySubstatus={numberOfOrdersBySubstatus}
              isUseQuery={isUseQuery}
              franchisesList={props.franchisesList}
              driverGroupList={driverGroupList}
              handleChangeFilterValues={handleChangeFilterValues}
              propsFilterGroupByCallcenter={propsFilterGroupByCallcenter}
            />
          </WrapItemView>
        </OrdersContent>
      </DeliveriesContainer>

      {isOpenOrderDetail && (
        <OrderDetails
          open={isOpenOrderDetail}
          order={detailsOrder}
          orderId={orderDetailId}
          drivers={driversList.drivers}
          onClose={() => handleBackRedirect()}
        />
      )}
      <OrderNotification
        isOnlyDelivery
      />
    </>
  )
}

export const DeliveriesManager = (props) => {
  const OrdersListControlProps = {
    ...props,
    isOnlyDelivery: true,
    UIComponent: DeliveriesManagerUI,
    driversPropsToFetch: ['id', 'name', 'lastname', 'location', 'enabled', 'available', 'busy', 'driver_groups', 'assigned_orders_count', 'last_order_assigned_at', 'last_location_at', 'cellphone', 'photo', 'qualification']
  }
  return <OrdersManageController {...OrdersListControlProps} />
}
