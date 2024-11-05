import React from 'react'
import { useConfig, useSession } from 'ordering-components-admin'
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
    selectedSubOrderStatus,
    franchiseId
  } = props

  const [{ user }] = useSession()
  const [{ configs }] = useConfig()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <CreateCustomOrder handleOpenCustomOrderDetail={handleOpenCustomOrderDetail} handleOpenOrderDetail={handleOpenOrderDetail} />
          <OrdersExportCSV
            filterValues={filterValues}
            ordersStatusGroup={ordersStatusGroup}
            selectedSubOrderStatus={selectedSubOrderStatus}
            franchiseId={franchiseId}
          />
          {selectedOrderNumber > 0 && (
            <>
              {user?.level !== 5 && (
                <OrderDelete
                  handleDeleteMultiOrders={handleDeleteMultiOrders}
                />
              )}
              {(user?.level !== 5 || configs?.allow_driver_manager_batch_update_order_status?.value === '1') && (
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
              )}
            </>
          )}
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
