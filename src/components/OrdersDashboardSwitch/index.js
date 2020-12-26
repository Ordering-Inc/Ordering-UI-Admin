import React from 'react'
import { useLanguage } from 'ordering-components'
import { SwitchContainer, SwitchItem, SwitchPane } from './styles'

export const OrdersDashboardSwitch = (props) => {
  const {
    handleSwitch
  } = props
  const [, t] = useLanguage()

  return (
    <SwitchContainer>
      <SwitchItem active={props.active === 'orders'} onClick={() => handleSwitch()}>
        {t('ORDERS', 'orders')}
      </SwitchItem>

      <SwitchItem active={props.active === 'deliveryDashboard'} onClick={() => handleSwitch()}>
        {t('DASHBOARD', 'dashboard')}
      </SwitchItem>
      <SwitchPane active={props.active === 'deliveryDashboard'} />
    </SwitchContainer>
  )
}
