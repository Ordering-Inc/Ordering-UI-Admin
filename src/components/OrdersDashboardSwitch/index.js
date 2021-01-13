import React from 'react'
import { useLanguage } from 'ordering-components'
import { SwitchContainer, SwitchItem, SwitchPane } from './styles'

export const OrdersDashboardSwitch = (props) => {
  const {
    activeSwitch,
    handleSwitch
  } = props
  const [, t] = useLanguage()

  return (
    <SwitchContainer>
      <SwitchItem active={activeSwitch?.orders} onClick={() => handleSwitch('orders')}>
        {t('ORDERS', 'orders')}
      </SwitchItem>

      <SwitchItem horizontalBorder active={activeSwitch?.deliveries} onClick={() => handleSwitch('deliveries')}>
        {t('DASHBOARD', 'dashboard')}
      </SwitchItem>

      <SwitchItem active={activeSwitch?.messages} onClick={() => handleSwitch('messages')}>
        {t('MESSAGES', 'Messages')}
      </SwitchItem>
      <SwitchPane
        deliveryDashboard={activeSwitch?.deliveries}
        messages={activeSwitch?.messages}
      />
    </SwitchContainer>
  )
}
