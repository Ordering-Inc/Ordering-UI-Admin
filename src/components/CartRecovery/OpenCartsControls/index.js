import React from 'react'
import { useSession } from 'ordering-components-admin'
import { OpenCartsExportCSV } from '../OpenCartsExportCSV'
// import { OrderDelete } from '../OrderDelete'
import {
  OrderDashboardControlsContainer,
  InnerContnet
} from './styles'

export const OpenCartsControls = (props) => {
  const {
    // selectedOrderNumber,
    filterValues,
    // handleDeleteMultiOrders
  } = props

  const [{ user }] = useSession()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <OpenCartsExportCSV filterValues={filterValues} />
          {/* {selectedOrderNumber > 0 && (
            <>
              {user?.level !== 5 && (
                <OrderDelete
                  handleDeleteMultiOrders={handleDeleteMultiOrders}
                />
              )}
            </>
          )} */}
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
