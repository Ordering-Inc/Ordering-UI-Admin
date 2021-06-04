import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Container,
  Tab
} from './styles'

export const DriversOnlineOfflineFilter = (props) => {
  const [, t] = useLanguage()
  return (
    <Container>
      <Tab
        active
        // onClick={() => }
      >
        {t('ONLINE', 'Online')}
      </Tab>
      <Tab>
        {t('OFFLINE', 'Offline')}
      </Tab>
    </Container>
  )
}
