import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import {
  Container
} from './styles'

export const DriversBusyStatusFilter = (props) => {
  const [, t] = useLanguage()
  return (
    <Container>
      <Button
        color='primary'
      >
        {t('BUSY', 'Busy')}
      </Button>
      <Button
        color='primary'
      >
        {t('NOT_BUSY', 'Not busy')}
      </Button>
    </Container>
  )
}
