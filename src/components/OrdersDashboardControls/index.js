import React from 'react'
import { OrderStatusTypeSelector } from '../../components/OrderStatusTypeSelector'
import { OrdersExportCSV } from '../OrdersExportCSV'
import { OrderDelete } from '../OrderDelete'
import {
  OrderDashboardControlsContainer,
  InnerContnet,
  WrapOrderStatusTypeSelector
} from './styles'

export const OrdersDashboardControls = (props) => {
  const {
    selectedOrderNumber,
    filterValues,
    handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus
  } = props

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <OrdersExportCSV filterValues={filterValues} />
          {selectedOrderNumber > 0 && (
            <>
              <OrderDelete
                handleDeleteMultiOrders={handleDeleteMultiOrders}
              />
              <WrapOrderStatusTypeSelector>
                <OrderStatusTypeSelector
                  orderControl
                  mutiOrdersChange
                  noSelected
                  defaultValue='default'
                  type='primary'
                  handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
                />
              </WrapOrderStatusTypeSelector>
            </>
          )}
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
