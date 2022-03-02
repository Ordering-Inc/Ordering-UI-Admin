import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import { Button } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Tab, TabsContainer } from '../BusinessMenu/styles'

import {
  Container,
  Header,
  CloseButton,
  TabOption,
  TabOptionName
} from './styles'

export const PaymentOption = (props) => {
  const {
    open,
    onClose,
    orderTypes,
    sitesState,
    changesState,
    handleChangeBusinessPaymentState,
    cleanChangesState,
    actionState,
    handleSaveClick,
    businessPaymethod
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paymentTabs, setPaymentTabs] = useState(sitesState?.sites?.length > 0 ? 0 : 1)

  const setPaymethodInfo = (values) => {
    const data = {}
    let array = changesState?.[values.key] ?? (values.key === 'allowed_order_types'
      ? businessPaymethod?.[values.key]
      : businessPaymethod?.[values.key]?.map(i => i.id)) ?? []

    array = [...new Set(
      array.includes(values.value)
        ? array.filter(item => item !== values.value)
        : [...array, values.value]
    )]

    data[values.key] = array.length > 0 ? array : []

    handleChangeBusinessPaymentState(data)
  }

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('payment_method_option').style.width = '100%'
      } else {
        document.getElementById('payment_method_option').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    setPaymentTabs(sitesState?.sites?.length > 0 ? 0 : 1)
  }, [sitesState])

  useEffect(() => {
    cleanChangesState({
      sandbox: businessPaymethod?.sandbox
    })
  }, [businessPaymethod?.sandbox])

  return (
    <Container id='payment_method_option'>
      <Header>
        <h1>{businessPaymethod?.paymethod?.name}</h1>
        <CloseButton>
          <MdcClose
            onClick={() => onClose()}
          />
        </CloseButton>
      </Header>

      <TabsContainer>
        {sitesState?.sites?.length > 0 && (
          <Tab
            active={paymentTabs === 0}
            onClick={() => setPaymentTabs(0)}
          >
            {t('CHANNELS', 'Channels')}
          </Tab>
        )}
        <Tab
          active={paymentTabs === 1}
          onClick={() => setPaymentTabs(1)}
        >
          {t('ORDER_TYPE', 'Order type')}
        </Tab>
      </TabsContainer>

      {paymentTabs === 0 && sitesState?.sites?.length > 0 && (
        sitesState?.sites.map(site => (
          <TabOption
            key={site.id}
            onClick={() => setPaymethodInfo({ key: 'sites', value: site.id })}
          >
            {(changesState?.sites ?? businessPaymethod?.sites?.map(s => s.id))?.includes(site.id) ? (
              <RiCheckboxFill className='fill' />
            ) : (
              <RiCheckboxBlankLine />
            )}
            <TabOptionName>{site.name}</TabOptionName>
          </TabOption>
        ))
      )}

      {paymentTabs === 1 && (
        orderTypes.map(type => (
          <TabOption
            key={type.value}
            onClick={() => setPaymethodInfo({ key: 'allowed_order_types', value: type.value })}
          >
            {(changesState?.allowed_order_types ?? businessPaymethod?.allowed_order_types)?.includes(type.value) ? (
              <RiCheckboxFill className='fill' />
            ) : (
              <RiCheckboxBlankLine />
            )}
            <TabOptionName>{type.text}</TabOptionName>
          </TabOption>
        ))
      )}

      <Button
        borderRadius='5px'
        color='primary'
        disabled={actionState.loading || Object.keys(changesState).length === 0}
        onClick={() => handleSaveClick(businessPaymethod.id)}
      >
        {actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
