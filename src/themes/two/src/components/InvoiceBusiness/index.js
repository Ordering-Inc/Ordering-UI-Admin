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
import { InvoicePayMethods } from '../InvoicePayMethods'
import { InvoiceOrderType } from '../InvoiceOrdertype'

const InvoiceBusinessUI = (props) => {
  const {
    actionSidebar
  } = props

  const [, t] = useLanguage()

  const orderTypeList = [
    { value: 1, name: t('DELIVERY', 'Delivery'), enabled: false },
    { value: 2, name: t('PICKUP', 'Pickup'), enabled: false },
    { value: 3, name: t('EAT_IN', 'Eat in'), enabled: false },
    { value: 4, name: t('CURBSIDE', 'Curbside'), enabled: false },
    { value: 5, name: t('DRIVE_THRU', 'Drive thru'), enabled: false },
    { value: 6, name: t('INCLUDE_CANCELED_ORDERS', 'Include canceled orders'), enabled: false },
    { value: 7, name: t('INCLUDE_DISCOUNTS_BY_PLATFORM', 'Include discounts done by platform'), enabled: false }
  ]

  const [selectedDetailType, setSelectedDetailType] = useState('general')
  const [orderTypes, setOrderTypes] = useState(orderTypeList)

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
        selectedDetailType === 'payment_methods' && <InvoicePayMethods {...props} />
      }
      {
        selectedDetailType === 'order_type' && (
          <InvoiceOrderType
            {...props}
            orderTypes={orderTypes}
            handleChangeOrderTypes={setOrderTypes}
          />
        )
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
