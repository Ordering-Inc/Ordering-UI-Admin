import React from 'react'
import { OpenCartsDashboardList } from '../OpenCartsDashboardList'
import {
  OrdersManageContainer
} from './styles'

export const OpenCartsDashboard = (props) => {
  return (
    <OrdersManageContainer>
      <OpenCartsDashboardList
        {...props}
      />
    </OrdersManageContainer>
  )
}
