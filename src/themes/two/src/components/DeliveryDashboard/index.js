import React, { useState } from 'react'
import { DeliveriesLocation } from '../DeliveriesLocation'
import { OrdersDashboardList } from '../OrdersDashboardList'
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
    handleSelectedSubOrderStatus
  } = props

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
        <FilterContainer>
          <OrderStatusFilterBar
            selectedOrderStatus={ordersStatusGroup}
            changeOrderStatus={handleOrdersStatusGroupFilter}
          />
          <OrderStatusSubFilter
            ordersStatusGroup={ordersStatusGroup}
            selectedSubOrderStatus={selectedSubOrderStatus}
            handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
          />
        </FilterContainer>
        <WrapperOrderlist id='cardOrders'>
          <OrdersDashboardList
            {...props}
            orderListView='card'
            interActionMapOrder={interActionMapOrder}
            handleLocation={handleLocation}
            handleUpdateDriverLocation={handleUpdateDriverLocation}
          />
        </WrapperOrderlist>
      </OrdersContainer>
      <WrapperDeliveriesLocation>
        <DeliveriesLocation
          driversList={driversList}
          driverAvailable='all'
          interActionMapOrder={interActionMapOrder}
        />
      </WrapperDeliveriesLocation>
    </DeliveryDashboardContainer>
  )
}
