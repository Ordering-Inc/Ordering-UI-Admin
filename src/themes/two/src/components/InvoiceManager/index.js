import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { InvoiceManager as InvoiceManagerController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { IconButton } from '../../styles/Buttons'
import {
  List as MenuIcon
} from 'react-bootstrap-icons'
import {
  InvoiceManagerContainer,
  HeaderContainer
} from './styles'

const InvoiceManagerUI = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

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
