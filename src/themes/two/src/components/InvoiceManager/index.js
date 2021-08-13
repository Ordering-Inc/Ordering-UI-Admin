import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { InvoiceManager as InvoiceManagerController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { IconButton } from '../../styles/Buttons'
import {
  List as MenuIcon,
  ShopWindow as BusinessIcon,
  Truck as DriverIcon
} from 'react-bootstrap-icons'
import {
  InvoiceManagerContainer,
  HeaderContainer,
  InvoiceListContainer,
  InvoiceItemContainer,
  IconWrapper,
  InvoiceListDetailsWrapper
} from './styles'

const InvoiceManagerUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const InvoiceList = [
    { id: 1, name: t('BUSINESS_INVOICE', 'Business invoice'), icon: <BusinessIcon />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus neque aliquet mauris.' },
    { id: 2, name: t('DRIVER_INVOICE', 'Driver invoice'), icon: <DriverIcon />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus neque aliquet mauris.' }
  ]

  return (
    <InvoiceManagerContainer>
      <HeaderContainer>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('INVOICE_MANAGER', 'Invoice manager')}</h1>
      </HeaderContainer>
      <InvoiceListContainer>
        {
          InvoiceList.map((invoice, i) => (
            <InvoiceItemContainer key={i}>
              <IconWrapper>
                {invoice?.icon}
              </IconWrapper>
              <InvoiceListDetailsWrapper>
                <h2>{invoice?.name}</h2>
                <p>{invoice?.description}</p>
              </InvoiceListDetailsWrapper>
            </InvoiceItemContainer>
          ))
        }
      </InvoiceListContainer>
    </InvoiceManagerContainer>
  )
}

export const InvoiceManager = (props) => {
  const invoiceManagerProps = {
    ...props,
    UIComponent: InvoiceManagerUI
  }

  return <InvoiceManagerController {...invoiceManagerProps} />
}
