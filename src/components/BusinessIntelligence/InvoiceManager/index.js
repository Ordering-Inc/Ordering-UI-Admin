import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { IconButton } from '../../../styles'
import { InvoiceDetails } from '../InvoiceDetails'
import { SideBar } from '../../Shared'

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

export const InvoiceManager = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [openInvoiceDetail, setOpenInvoiceDetail] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  const InvoiceList = [
    { id: 1, key: 'business', name: t('BUSINESS_INVOICE', 'Business invoice'), icon: <BusinessIcon />, description: t('BUSINESS_INVOICE_DESCRIPTION', 'Business invoice description') },
    { id: 2, key: 'driver', name: t('DRIVER_INVOICE', 'Driver invoice'), icon: <DriverIcon />, description: t('DRIVER_INVOICE_DESCRIPTION', 'Driver invoice description') }
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
          <SideBar
            sidebarId='invoice_details'
            open={openInvoiceDetail}
            onClose={handleCloseInvoiceDetail}
          >
            <InvoiceDetails
              selectedInvoice={selectedInvoice}
            />
          </SideBar>
        )
      }
    </>
  )
}
