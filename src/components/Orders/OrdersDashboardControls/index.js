import React from 'react'
import { useSession } from 'ordering-components-admin'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { OrdersExportCSV } from '../OrdersExportCSV'
import { OrderDelete } from '../OrderDelete'
import { CreateCustomOrder } from '../CreateCustomOrder'
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
    handleChangeMultiOrdersStatus,
    handleOpenCustomOrderDetail,
    handleOpenOrderDetail,
    ordersStatusGroup,
    selectedSubOrderStatus
  } = props

  const [{ user }] = useSession()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <CreateCustomOrder handleOpenCustomOrderDetail={handleOpenCustomOrderDetail} handleOpenOrderDetail={handleOpenOrderDetail} />
          <OrdersExportCSV
            filterValues={filterValues}
            ordersStatusGroup={ordersStatusGroup}
            selectedSubOrderStatus={selectedSubOrderStatus}
          />
          {selectedOrderNumber > 0 && (
            <>
              {user?.level !== 5 && (
                <OrderDelete
                  handleDeleteMultiOrders={handleDeleteMultiOrders}
                />
              )}
              <WrapOrderStatusTypeSelector>
                <OrderStatusTypeSelector
                  orderControl
                  isFirstSelect
                  noPadding
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
