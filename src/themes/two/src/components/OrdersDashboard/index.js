import React from 'react'
import { OrdersDashboardList } from '../../../../../components/OrdersDashboardList'
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
    handleOpenOrderDetail,
    activeSwitch
  } = props
  return (
    <OrdersManageContainer>
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
        handleOpenOrderDetail={handleOpenOrderDetail}
      />
    </OrdersManageContainer>
  )
}
