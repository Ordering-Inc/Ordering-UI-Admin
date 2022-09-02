import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Files } from 'react-bootstrap-icons'
import {
  Container,
  Header,
  Content,
  LinkItemWrapper,
  LinkWrapper
} from './styles'
import { IconButton } from '../../../styles'

export const BusinessSyncStoreDetail = (props) => {
  const { business } = props

  const [, t] = useLanguage()

  const link = {
    order_status_update: 'https://integrator.com/orderstatusUpdate',
    receive_menus: 'https://integrator.com/menuUpdate',
    snooze: 'https://integrator.com/snoozeUnsnooze',
    busy_mode: 'https://integrator.com/busyMode',
    preparation_time: 'https://integrator.com/updatePrepTimeURL'
  }

  const LinkItem = (props) => {
    const { name, URL } = props

    return (
      <LinkItemWrapper>
        <p>{name}</p>
        <LinkWrapper>
          <a href={URL}>{URL}</a>
          <IconButton onClick={() => navigator.clipboard.writeText(URL)}>
            <Files />
          </IconButton>
        </LinkWrapper>
      </LinkItemWrapper>
    )
  }

  return (
    <Container>
      <Header>
        <h2>{business?.name}</h2>
      </Header>
      <Content>
        <LinkItem
          name={t('RECEIVE_ORDER_STATUS_UPDATES', 'Receive order status updates')}
          URL={link.order_status_update}
        />
        <LinkItem
          name={t('RECEIVE_MENUS', 'Receive menus')}
          URL={link.receive_menus}
        />
        <LinkItem
          name={t('SNOOZE_OR_UNSNOOZE', 'Snooze or unsnooze')}
          URL={link.snooze}
        />
        <LinkItem
          name={t('ENABLE_OR_DISABLE_BUSY_MODE', 'Enable or Disable busy mode')}
          URL={link.busy_mode}
        />
        <LinkItem
          name={t('UPDATE_PREPARATION_TIME', 'Update preparation time')}
          URL={link.preparation_time}
        />
      </Content>
    </Container>
  )
}
