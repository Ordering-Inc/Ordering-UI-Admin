import React from 'react'
import { useLanguage } from 'ordering-components'
import { useWindowSize } from '../../hooks/useWindowSize'

import { Button } from '../../styles/Buttons'
import FaTrash from '@meronex/icons/fa/FaTrash'
import MdcBasket from '@meronex/icons/mdc/MdcBasket'
import { OrderStatusTypeSelector } from '../OrderStatusTypeSelector'
import { ExportCSV } from '../ExportCSV'

import { OrderDashboardControlsContainer, InnerContnet } from './styles'

export const OrdersDashboardControls = (props) => {
  const {
    handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <ExportCSV />

          <Button
            color='primary'
            borderRadius='6px'
            withIcon
            onClick={handleDeleteMultiOrders}
          >
            {width > 600 && t('DELETE', 'Delete')}
            <FaTrash />
          </Button>

          <OrderStatusTypeSelector
            mutiOrdersChange
            noSelected
            defaultValue='default'
            type='primary'
            handleChangeMultiOrdersStatus={handleChangeMultiOrdersStatus}
          />

          <Button color='secondary' borderRadius='6px' withIcon>
            {width > 600 && t('CREATE_ORDER', 'Create Order')}
            <MdcBasket />
          </Button>
        </InnerContnet>
      </OrderDashboardControlsContainer>
    </>
  )
}
