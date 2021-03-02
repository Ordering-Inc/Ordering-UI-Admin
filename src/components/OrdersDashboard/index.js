import React from 'react'
import { OrdersDashboardControls } from '../OrdersDashboardControls'
import { OrdersDashboardList } from '../OrdersDashboardList'
import {
  OrdersManageContainer
} from './styles'

export const OrdersDashboard = (props) => {
  const {
    searchValue,
    filterValues,
    selectedOrderIds,
    deletedOrderId,
    driversList,
    ordersStatusGroup,
    handleSelectedOrderIds,
    handleChangeMultiOrdersStatus,
    handleDeleteMultiOrders,
    handleNotification,
    handleOpenOrderDetail,
    activeSwitch
  } = props
  return (
    <OrdersManageContainer>
      <OrdersDashboardControls
        selectedOrderNumber={selectedOrderIds.length}
        filterValues={filterValues}
        handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
        handleDeleteMultiOrders={handleDeleteMultiOrders}
      />
      <OrdersDashboardList
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
    </OrdersManageContainer>
  )
}
