import React from 'react'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderContentHeader } from '../OrderContentHeader'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import {
  OrdersContainer,
  OrdersContent,
  OrdersInnerContent
} from './styles'
import { OrdersList } from '../OrdersList'
export const OrdersManager = (props) => {
  const {
    searchValue,
    driversList,
    driverGroupList,
    paymethodsList,
    businessesList,
    ordersStatusGroup,
    filterValues,
    deletedOrderId,
    handleOrdersStatusGroupFilter,
    handleChangeSearch,
    handleChangeFilterValues,
    selectedOrderIds,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleSelectedOrderIds,
    handleNotification,
    handleOpenOrderDetail,
    handleSwitch,
    activeSwitch
  } = props
  return (
    <OrdersContainer>
      <OrderStatusFilterBar
        selectedOrderStatus={ordersStatusGroup}
        changeOrderStatus={handleOrdersStatusGroupFilter}
      />
      <OrdersContent>
        <OrdersInnerContent className='order-content'>
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
          <OrdersDashboardControls
            selectedOrderNumber={selectedOrderIds.length}
            filterValues={filterValues}
            handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
            handleDeleteMultiOrders={handleDeleteMultiOrders}
          />
          <OrdersList
            orderListView='big'
            searchValue={searchValue}
            filterValues={filterValues}
            selectedOrderIds={selectedOrderIds}
            deletedOrderId={deletedOrderId}
            driversList={driversList}
            ordersStatusGroup={ordersStatusGroup}
            handleSelectedOrderIds={handleSelectedOrderIds}
            activeSwitch={activeSwitch}
            handleNotification={handleNotification}
            handleOpenOrderDetail={handleOpenOrderDetail}
          />
        </OrdersInnerContent>
      </OrdersContent>
    </OrdersContainer>
  )
}
