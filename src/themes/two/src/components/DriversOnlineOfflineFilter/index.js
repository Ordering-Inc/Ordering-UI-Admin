import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  Tab
} from './styles'

export const DriversOnlineOfflineFilter = (props) => {
  const {
    driversIsOnline,
    handleChangeDriverIsOnline
  } = props
  const [, t] = useLanguage()
  return (
    <Container>
      <Tab
        active={driversIsOnline}
        onClick={() => handleChangeDriverIsOnline(true)}
      >
        {t('ONLINE', 'Online')}
      </Tab>
      <Tab
        active={!driversIsOnline}
        onClick={() => handleChangeDriverIsOnline(false)}
      >
        {t('OFFLINE', 'Offline')}
      </Tab>
    </Container>
  )
}
