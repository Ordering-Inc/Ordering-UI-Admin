import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DriversLocation } from '../DriversLocation'
import { DeliveryDashboardOrdersList } from '../../../../../components/DeliveryDashboardOrdersList'
import { DriversModal } from '../../../../../components/DriversModal'
import { OrdersDashboardList } from '../OrdersDashboardList'
import { OrderStatusFilterBar } from '../OrderStatusFilterBar'
import { OrderStatusSubFilter } from '../OrderStatusSubFilter'
import {
  DeliveryDashboardContainer,
  OrdersContainer,
  FiterContainer,
  WrapperOrderlist,
  WrapperDriversLocation
} from './styles'
export const DeliveryDashboard = (props) => {
  const {
    driversList,
    ordersStatusGroup,
    selectedSubOrderStatus,
    handleOrdersStatusGroupFilter,
    handleSelectedSubOrderStatus
  } = props

  const [, t] = useLanguage()
  const [driverAvailable, setDriverAvailable] = useState('all')
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
        <FiterContainer>
          <OrderStatusFilterBar
            selectedOrderStatus={ordersStatusGroup}
            changeOrderStatus={handleOrdersStatusGroupFilter}
          />
          <OrderStatusSubFilter
            ordersStatusGroup={ordersStatusGroup}
            selectedSubOrderStatus={selectedSubOrderStatus}
            handleSelectedSubOrderStatus={handleSelectedSubOrderStatus}
          />
        </FiterContainer>
        <WrapperOrderlist>
          <OrdersDashboardList
            orderListView='card'
            {...props}
          />
        </WrapperOrderlist>
      </OrdersContainer>
      <WrapperDriversLocation>
        <DriversLocation
          driversList={driversList}
          driverAvailable={driverAvailable}
          interActionMapOrder={interActionMapOrder}
        />
      </WrapperDriversLocation>
    </DeliveryDashboardContainer>
  )
}
