import React, { useState } from 'react'
import { useConfig } from 'ordering-components-admin'
import { DeliveriesLocation } from '../DeliveriesLocation'
import { OrdersDashboardList } from '../OrdersDashboardList'
import { OrdersHeaderFilterGroup } from '../OrdersHeaderFilterGroup'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'

import {
  DeliveryDashboardContainer,
  OrdersContainer,
  FilterContainer,
  WrapperOrderlist,
  WrapperDeliveriesLocation
} from './styles'

export const DeliveryDashboard = (props) => {
  const {
    driversList,
    ordersStatusGroup,
    selectedSubOrderStatus,
    handleOrdersStatusGroupFilter,
    handleSelectedSubOrderStatus,
    ordersAmountByStatus,
    setOrdersAmountByStatus,
    isUseQuery,
    driverGroupList,
    handleChangeFilterValues
  } = props

  const ordersDashboardListProps = {
    ...props
  }

  const [{ configs }] = useConfig()

  if ((configs?.optimize_order_data && (configs?.optimize_order_data?.value === '1'))) {
    ordersDashboardListProps.propsToFetch = ['app_id', 'business', 'business_id', 'created_at', 'customer', 'customer_id', 'delivery_type', 'driver_group_id', 'driver_id', 'driver', 'delivery_datetime', 'delivery_datetime_utc', 'external_id', 'eta_time', 'id', 'logistic_status', 'logistic_attemps', 'uuid', 'order_group', 'order_group_id', 'priority', 'summary', 'status', 'time_status', 'total', 'metadata']
  }

  const [interActionMapOrder, setInterActionMapOrder] = useState(null)

  const handleUpdateDriverLocation = (order) => {
    setInterActionMapOrder({ ...order })
  }

  const handleLocation = (order) => {
    if (interActionMapOrder?.id === order?.id) {
      setInterActionMapOrder(null)
    } else {
      setInterActionMapOrder({ ...order })
    }
  }

  return (
    <DeliveryDashboardContainer>
      <OrdersContainer>
        <OrdersHeaderFilterGroup
          driverGroupList={driverGroupList}
          driversList={driversList}
          handleChangeFilterValues={handleChangeFilterValues}
        />
        <FilterContainer>
          <OrderStatusFilterBar
            isUseQuery={isUseQuery}
            selectedOrderStatus={ordersStatusGroup}
            changeOrderStatus={handleOrdersStatusGroupFilter}
            ordersAmountByStatus={ordersAmountByStatus}
          />
          <OrderStatusSubFilter
            ordersStatusGroup={ordersStatusGroup}
            selectedSubOrderStatus={selectedSubOrderStatus}
            handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
          />
        </FilterContainer>
        <WrapperOrderlist id='cardOrders'>
          <OrdersDashboardList
            {...ordersDashboardListProps}
            isUseQuery={isUseQuery}
            orderListView='card'
            selectedOrderCard={interActionMapOrder}
            handleOrderCardClick={handleLocation}
            handleUpdateDriverLocation={handleUpdateDriverLocation}
            isDelivery
            setOrdersAmountByStatus={setOrdersAmountByStatus}
          />
        </WrapperOrderlist>
      </OrdersContainer>
      <WrapperDeliveriesLocation>
        <DeliveriesLocation
          driversList={driversList}
          interActionMapOrder={interActionMapOrder}
        />
      </WrapperDeliveriesLocation>
    </DeliveryDashboardContainer>
  )
}
