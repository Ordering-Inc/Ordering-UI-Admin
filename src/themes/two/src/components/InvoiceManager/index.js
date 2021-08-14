import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { InvoiceManager as InvoiceManagerController } from './naked'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { IconButton } from '../../styles/Buttons'
import { InvoiceDetails } from '../InvoiceDetails'
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
  const [openInvoiceDetail, setOpenInvoiceDetail] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const InvoiceList = [
    { id: 1, key: 'business', name: t('BUSINESS_INVOICE', 'Business invoice'), icon: <BusinessIcon />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus neque aliquet mauris.' },
    { id: 2, key: 'driver', name: t('DRIVER_INVOICE', 'Driver invoice'), icon: <DriverIcon />, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus neque aliquet mauris.' }
  ]

  const handleOpenInvoiceDetail = (index) => {
    setOpenInvoiceDetail(true)
    setSelectedInvoice(index)
  }

  const handleCloseInvoiceDetail = () => {
    setOpenInvoiceDetail(false)
    setSelectedInvoice(null)
  }

  return (
    <>
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
              <InvoiceItemContainer
                key={i}
                onClick={() => handleOpenInvoiceDetail(invoice.key)}
              >
                <IconWrapper>{invoice?.icon}</IconWrapper>
                <InvoiceListDetailsWrapper>
                  <h2>{invoice?.name}</h2>
                  <p>{invoice?.description}</p>
                </InvoiceListDetailsWrapper>
              </InvoiceItemContainer>
            ))
          }
        </InvoiceListContainer>
      </InvoiceManagerContainer>
      {
        openInvoiceDetail && (
          <InvoiceDetails
            open={openInvoiceDetail}
            onClose={handleCloseInvoiceDetail}
            selectedInvoice={selectedInvoice}
          />
        )
      }
    </>
  )
}

export const InvoiceManager = (props) => {
  const invoiceManagerProps = {
    ...props,
    UIComponent: InvoiceManagerUI
  }

  return <InvoiceManagerController {...invoiceManagerProps} />
}
