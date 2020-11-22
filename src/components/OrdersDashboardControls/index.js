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
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const handleChangeOrderStatusType = (orderType) => {
    console.log(orderType)
  }

  return (
    <>
      <OrderDashboardControlsContainer>
        <InnerContnet>
          <ExportCSV />

          <Button color='primary' borderRadius='6px' withIcon>
            {width > 600 && t('DELETE', 'Delete')}
            <FaTrash />
          </Button>

          <OrderStatusTypeSelector
            defaultValue={60}
            type='primary'
            handleChangeOrderStatusType={(orderType) => handleChangeOrderStatusType(orderType)}
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
