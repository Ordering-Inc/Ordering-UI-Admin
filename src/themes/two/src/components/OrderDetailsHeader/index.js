import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import MdcDotsVertical from '@meronex/icons/mdc/MdcDotsVertical'
import EnDotSingle from '@meronex/icons/en/EnDotSingle'
import AiOutlinePrinter from '@meronex/icons/ai/AiOutlinePrinter'
import AiOutlineApartment from '@meronex/icons/ai/AiOutlineApartment'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { Button } from '../../styles/Buttons'
import {
  OrderDetailsHeaderContainer,
  ButtonLink
} from './styles'

export const OrderDetailsHeader = (props) => {
  const {
    order,
    handleOpenMetaFields,
    handleOpenMessages,
    actionSidebar
  } = props

  const [, t] = useLanguage()
  return (
    <OrderDetailsHeaderContainer>
      <div>
        <h1>{t('ORDER_NO', 'Order No')}. {order?.id}</h1>
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
      <div>
        <ButtonLink onClick={() => window.print()}>
          <AiOutlinePrinter />
        </ButtonLink>
        <ButtonLink
          onClick={() => handleOpenMessages('history')}
        >
          <AiOutlineApartment />
        </ButtonLink>
        <ButtonLink
          onClick={() => handleOpenMetaFields()}
        >
          <MdcDotsVertical />
        </ButtonLink>
        <Button
          borderRadius='5px'
          color='secundary'
          onClick={() => actionSidebar(false)}
        >
          <MdcClose />
        </Button>
      </div>
    </OrderDetailsHeaderContainer>
  )
}
