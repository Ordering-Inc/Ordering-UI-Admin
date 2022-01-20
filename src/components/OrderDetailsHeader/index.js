import React from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import { Printer, Diagram3, ThreeDotsVertical, XLg as CloseIcon, Chat as ChatIcon, Dot } from 'react-bootstrap-icons'
import { IconButton as ButtonLink } from '../../styles/Buttons'
import {
  OrderDetailsHeaderContainer,
  UreadMessageAlert,
  ButtonGroup
} from './styles'

export const OrderDetailsHeader = (props) => {
  const {
    order,
    handleOpenMetaFields,
    handleOpenMessages,
    actionSidebar
  } = props

  const [, t] = useLanguage()
  const [{ user }] = useSession()
  return (
    <OrderDetailsHeaderContainer>
      <div>
        <h1>{t('INVOICE_ORDER_NO', 'Order No')} {order?.id}</h1>
        <p>
          <span>{order?.paymethod?.name}</span>
          <EnDotSingle />
          {order?.delivery_type === 1 && (
            <span>
              {t('DELIVERY', 'Delivery')}
            </span>
          )}
          {order?.delivery_type === 2 && (
            <span>
              {t('PICKUP', 'Pickup')}
            </span>
          )}
          {order?.delivery_type === 3 && (
            <span>
              {t('EAT_IN', 'Eat in')}
            </span>
          )}
          {order?.delivery_type === 4 && (
            <span>
              {t('CURBSIDE', 'Curbside')}
            </span>
          )}
          {order?.delivery_type === 5 && (
            <span>
              {t('DRIVE_THRU', 'Drive thru')}
            </span>
          )}
        </p>
      </div>
      <ButtonGroup>
        {user?.level !== 5 && (
          <ButtonLink
            onClick={() => handleOpenMessages('chat')}
          >
            <ChatIcon />
            {order?.unread_count > 0 && (
              <UreadMessageAlert>
                <Dot />
              </UreadMessageAlert>
            )}
          </ButtonLink>
        )}
        <ButtonLink onClick={() => window.print()}>
          <Printer />
        </ButtonLink>
        <ButtonLink
          onClick={() => handleOpenMessages('history')}
        >
          <Diagram3 />
        </ButtonLink>
        <ButtonLink
          onClick={() => handleOpenMetaFields()}
        >
          <ThreeDotsVertical />
        </ButtonLink>
        <ButtonLink
          color='black'
          onClick={() => actionSidebar(false)}
        >
          <CloseIcon />
        </ButtonLink>
      </ButtonGroup>
    </OrderDetailsHeaderContainer>
  )
}
