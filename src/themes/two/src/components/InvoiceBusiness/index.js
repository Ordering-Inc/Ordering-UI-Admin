import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { InvoiceBusiness as InvoiceBusinessController } from './naked'
import { DragScroll } from '../DragScroll'
import {
  InvoiceDriversContainer,
  DetailsHeader,
  HeaderActionBtnWrapper,
  DetailsList,
  Tab
} from './styles'
import { IconButton } from '../../styles/Buttons'
import {
  Download,
  XLg as CloseIcon
} from 'react-bootstrap-icons'
import { InvoiceGeneral } from '../InvoiceGeneral'
import { InvoicePaymentMethods } from '../InvoicePaymentMethods'
import { InvoiceOrderType } from '../InvoiceOrdertype'

const InvoiceBusinessUI = (props) => {
  const {
    actionSidebar
  } = props

  const [, t] = useLanguage()
  const [selectedDetailType, setSelectedDetailType] = useState('general')

  const changeSelectedAnalyticsStatus = (detailType) => {
    window.scrollTo(0, 0)
    setSelectedDetailType(detailType)
  }

  return (
    <InvoiceDriversContainer>
      <DetailsHeader>
        <h2>{t('BUSINESS_INVOICE', 'Business invoice')}</h2>
        <HeaderActionBtnWrapper>
          <IconButton>
            <Download />
          </IconButton>
          <IconButton
            color='black'
            onClick={() => actionSidebar(false)}
          >
            <CloseIcon />
          </IconButton>
        </HeaderActionBtnWrapper>
      </DetailsHeader>
      <DetailsList>
        <DragScroll>
          <Tab
            active={selectedDetailType === 'general'}
            onClick={() => changeSelectedAnalyticsStatus('general')}
          >
            {t('GENERAL', 'General')}
          </Tab>

          <Tab
            active={selectedDetailType === 'payment_methods'}
            onClick={() => changeSelectedAnalyticsStatus('payment_methods')}
          >
            {t('PAYMENT_METHODS', 'Payment methods')}
          </Tab>

          <Tab
            active={selectedDetailType === 'order_type'}
            onClick={() => changeSelectedAnalyticsStatus('order_type')}
          >
            {t('ORDER_TYPE', 'Order type')}
          </Tab>
        </DragScroll>
      </DetailsList>
      {
        selectedDetailType === 'general' && <InvoiceGeneral {...props} />
      }
      {
        selectedDetailType === 'payment_methods' && <InvoicePaymentMethods {...props} />
      }
      {
        selectedDetailType === 'order_type' && <InvoiceOrderType />
      }
    </InvoiceDriversContainer>
  )
}

export const InvoiceBusiness = (props) => {
  const invoiceBusinessProps = {
    ...props,
    propsToFetch: ['name'],
    UIComponent: InvoiceBusinessUI
  }
  return <InvoiceBusinessController {...invoiceBusinessProps} />
}
