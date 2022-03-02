import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import MdcClose from '@meronex/icons/mdc/MdcClose'

import { Button, Input } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  Container,
  SandboxWrapper,
  FieldName,
  Header,
  CloseButton,
  TabOption,
  TabOptionName
} from './styles'
import { Tab, TabsContainer } from '../BusinessMenu/styles'

export const PaymentOptionStripeDirect = (props) => {
  const {
    open,
    onClose,
    orderTypes,
    sitesState,
    changesState,
    handleChangeBusinessPaymentState,
    cleanChangesState,
    actionState,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick,
    businessPaymethod
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paymentTabs, setPaymentTabs] = useState(0)

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
        document.getElementById('stripe_direct').style.width = '100%'
      } else {
        document.getElementById('stripe_direct').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    cleanChangesState({
      sandbox: businessPaymethod?.sandbox
    })
  }, [businessPaymethod?.sandbox])
  return (
    <Container id='stripe_direct'>
      <Header>
        <h1>{t('STRIPE_DIRECT', 'Stripe direct')}</h1>
        <CloseButton>
          <MdcClose
            onClick={() => onClose()}
          />
        </CloseButton>
      </Header>

      <TabsContainer>
        <Tab
          active={paymentTabs === 0}
          onClick={() => setPaymentTabs(0)}
        >
          {t('GENERAL', 'General')}
        </Tab>
        {sitesState?.sites?.length > 0 && (
          <Tab
            active={paymentTabs === 1}
            onClick={() => setPaymentTabs(1)}
          >
            {t('CHANNELS', 'Channels')}
          </Tab>
        )}
        <Tab
          active={paymentTabs === 2}
          onClick={() => setPaymentTabs(2)}
        >
          {t('ORDER_TYPE', 'Order type')}
        </Tab>
      </TabsContainer>

      {paymentTabs === 0 && (
        <>
          <SandboxWrapper
            onClick={() => handleChangeSandbox()}
          >
            {changesState?.sandbox ? (
              <RiCheckboxFill className='fill' />
            ) : (
              <RiCheckboxBlankLine />
            )}
            <span>{t('SANDBOX', 'Sandbox')}</span>
          </SandboxWrapper>
          <FieldName>{t('PUBLISHABLE_KEY', 'Publishable key')}</FieldName>
          <Input
            name='publishable'
            defaultValue={
              changesState?.data?.publishable
                ? changesState?.data?.publishable
                : businessPaymethod?.data?.publishable
            }
            placeholder={t('PUBLISHABLE_KEY', 'Publishable key')}
            onChange={e => handleChangeInput(e, false)}
          />
          <FieldName>{t('SECRET_KEY', 'Secret key')}</FieldName>
          <Input
            name='secret'
            defaultValue={
              changesState?.data?.secret
                ? changesState?.data?.secret
                : businessPaymethod?.data?.secret
            }
            placeholder={t('SECRET_KEY', 'Secret key')}
            onChange={e => handleChangeInput(e, false)}
          />
          <FieldName>{t('PUBLISHABLE_KEY', 'Publishable key')} ({t('SANDBOX', 'Sandbox')})</FieldName>
          <Input
            name='publishable'
            defaultValue={
              changesState?.data_sandbox?.publishable
                ? changesState?.data_sandbox?.publishable
                : businessPaymethod?.data_sandbox?.publishable
            }
            placeholder={`${t('PUBLISHABLE_KEY', 'Publishable key')} (${t('SANDBOX', 'Sandbox')})`}
            onChange={e => handleChangeInput(e, true)}
          />
          <FieldName>{t('SECRECT_KEY', 'Secret key')} ({t('SANDBOX', 'Sandbox')})</FieldName>
          <Input
            name='secret'
            defaultValue={
              changesState?.data_sandbox?.secret
                ? changesState?.data_sandbox?.secret
                : businessPaymethod?.data_sandbox?.secret
            }
            placeholder={`${t('SECRECT_KEY', 'Secret key')} (${t('SANDBOX', 'Sandbox')})`}
            onChange={e => handleChangeInput(e, true)}
          />
        </>
      )}

      {paymentTabs === 1 && sitesState?.sites?.length > 0 && (
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

      {paymentTabs === 2 && (
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
