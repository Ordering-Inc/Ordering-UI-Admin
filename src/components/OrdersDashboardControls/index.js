import React from 'react'
// import { useLanguage } from 'ordering-components'
// import { useWindowSize } from '../../hooks/useWindowSize'

// import { Button } from '../../styles/Buttons'
// import MdcBasket from '@meronex/icons/mdc/MdcBasket'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { ExportCSV } from '../ExportCSV'
import { OrderDelete } from '../OrderDelete'
import { OrderDashboardControlsContainer, InnerContnet } from './styles'

export const OrdersDashboardControls = (props) => {
  const {
    selectedOrderNumber,
    filterValues,
    handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus
  } = props
  // const [, t] = useLanguage()
  // const { width } = useWindowSize()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <ExportCSV filterValues={filterValues} />
          {selectedOrderNumber > 0 && (
            <>
              <OrderDelete
                handleDeleteMultiOrders={handleDeleteMultiOrders}
              />

              <OrderStatusTypeSelector
                orderControl
                mutiOrdersChange
                noSelected
                defaultValue='default'
                type='primary'
                handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
              />
            </>
          )}
          {/* <Button color='secondary' borderRadius='6px' withIcon>
            {width > 600 && t('CREATE_ORDER', 'Create Order')}
            <MdcBasket />
          </Button> */}
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
