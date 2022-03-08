import React from 'react'
import { RecoveryNotifications as RecoveryNotificationsController } from './naked'
import {
  Container
} from './styles'

const RecoveryNotificationsUI = () => {
  return (
    <Container>
      container
    </Container>
  )
}

export const RecoveryNotifications = (props) => {
  const recoveryNotificationsProps = {
    ...props,
    UIComponent: RecoveryNotificationsUI
  }
  return <RecoveryNotificationsController {...recoveryNotificationsProps} />
}
