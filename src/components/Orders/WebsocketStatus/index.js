import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils, WebsocketStatus as WebsocketStatusController } from 'ordering-components-admin'
import { Alert } from '../../Shared'
import {
  Contatiner,
  StatusContainer,
  WebsocketStatusDot,
  DateWrapper
} from './styles'

const SocketStatusUI = (props) => {
  const {
    socketStatus,
    getWebsocketStatus,
    connectedDate,
    reconnectAttemptCount
  } = props

  const [, t] = useLanguage()
  const [{ parseDate }] = useUtils()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    window.location.reload()
  }

  useEffect(() => {
    if (reconnectAttemptCount > 3) {
      setAlertState({
        open: true,
        content: t('WEBSOCKET_CONNECT_ERROR', 'There appears to be an error in establishing the WebSocket connection. Please try reloading the page to resolve the issue.')
      })
    }
  }, [reconnectAttemptCount])

  return (
    <Contatiner>
      <StatusContainer>
        <span>{getWebsocketStatus(socketStatus)}</span>
        <WebsocketStatusDot
          status={socketStatus}
        />
      </StatusContainer>
      <DateWrapper>
        {parseDate(connectedDate)}
      </DateWrapper>

      <Alert
        title={t('ERROR', 'Error')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </Contatiner>
  )
}

export const WebsocketStatus = (props) => {
  const socketProps = {
    ...props,
    UIComponent: SocketStatusUI
  }
  return <WebsocketStatusController {...socketProps} />
}
