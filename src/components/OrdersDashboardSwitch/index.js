import React from 'react'
import { useLanguage, useEvent } from 'ordering-components'

import { SwitchContainer, SwitchItem } from './styles'

export const OrdersDashboardSwitch = (props) => {
  const [, t] = useLanguage()
  const [events] = useEvent()

  const handleGoToPage = (data) => {
    events.emit('go_to_page', data)
  }

  return (
    <SwitchContainer>
      <SwitchItem active={props.active === 'ordersList'} onClick={() => handleGoToPage({ page: 'orders' })}>
        {t('ORDERS', 'orders')}
      </SwitchItem>

      <SwitchItem active={props.active === 'deliveryDashboard'} onClick={() => handleGoToPage({ page: 'delivery_dashboard' })}>
        {t('DASHBOARD', 'dashboard')}
      </SwitchItem>
    </SwitchContainer>
  )
}
