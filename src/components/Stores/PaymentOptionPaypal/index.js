import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button, Input, IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { ThreeDots, XLg } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Confirm } from '../../Shared'

import {
  Container,
  SandboxWrapper,
  FieldName,
  Header,
  CloseButton,
  ActionSelectorWrapper
} from './styles'

import { Tab, TabsContainer } from '../BusinessMenu/styles'
import { TabOption, TabOptionName } from '../PaymentOptionStripeDirect/styles'

export const PaymentOptionPaypal = (props) => {
  const {
    open,
    onClose,
    changesState,
    cleanChangesState,
    actionState,
    sitesState,
    orderTypes,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick,
    businessPaymethod,
    handleChangeBusinessPaymentState,
    handleDeletePaymethod,
    isDisabledPaymentsAdvanced
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paymentTabs, setPaymentTabs] = useState(0)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

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

  const onClickDeletePaymethod = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('PAYMETHOD_ID', 'Paymethod')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeletePaymethod(businessPaymethod?.paymethod?.id)
      }
    })
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('paypal').style.width = '100%'
      } else {
        document.getElementById('paypal').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    const initState = {
      sandbox: businessPaymethod?.sandbox,
      allowed_order_types: businessPaymethod?.allowed_order_types || [1, 2, 3, 4, 5]
    }
    if (businessPaymethod?.data) {
      initState.data = businessPaymethod.data
    }
    if (businessPaymethod?.data_sandbox) {
      initState.data_sandbox = businessPaymethod.data_sandbox
    }
    cleanChangesState(initState)
  }, [])

  return (
    <>
      <Container id='paypal'>
        <Header>
          <h1>{t('PAYPAL', 'Paypal')}</h1>
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => onClickDeletePaymethod()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
          <CloseButton>
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
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
              onClick={() => !isDisabledPaymentsAdvanced && setPaymentTabs(1)}
              disabledFeature={isDisabledPaymentsAdvanced}
              title={isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
            >
              {t('CHANNELS', 'Channels')}
            </Tab>
          )}
          <Tab
            active={paymentTabs === 2}
            onClick={() => !isDisabledPaymentsAdvanced && setPaymentTabs(2)}
            disabledFeature={isDisabledPaymentsAdvanced}
            title={isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
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
            <FieldName>{t('CLIENT_ID', 'Client ID')}</FieldName>
            <Input
              name='client_id'
              defaultValue={
                changesState?.data?.client_id
                  ? changesState?.data?.client_id
                  : businessPaymethod?.data?.client_id
              }
              placeholder={t('CLIENT_ID', 'Client ID')}
              onChange={e => handleChangeInput(e, false)}
            />
            <FieldName>{t('SECRET_ID', 'Secret ID')}</FieldName>
            <Input
              name='secret'
              defaultValue={
                changesState?.data?.secret
                  ? changesState?.data?.secret
                  : businessPaymethod?.data?.secret
              }
              placeholder={t('SECRET_ID', 'Secret ID')}
              onChange={e => handleChangeInput(e, false)}
            />
            <FieldName>{t('CLIENT_ID', 'Client ID')} ({t('SANDBOX', 'Sandbox')})</FieldName>
            <Input
              name='client_id'
              defaultValue={
                changesState?.data_sandbox?.client_id
                  ? changesState?.data_sandbox?.client_id
                  : businessPaymethod?.data_sandbox?.client_id
              }
              placeholder={`${t('CLIENT_ID', 'Client ID')} (${t('SANDBOX', 'Sandbox')})`}
              onChange={e => handleChangeInput(e, true)}
            />
            <FieldName>{t('SECRET_ID', 'Secret ID')} ({t('SANDBOX', 'Sandbox')})</FieldName>
            <Input
              name='secret'
              defaultValue={
                changesState?.data_sandbox?.secret
                  ? changesState?.data_sandbox?.secret
                  : businessPaymethod?.data_sandbox?.secret
              }
              placeholder={`${t('SECRET_ID', 'Secret ID')} (${t('SANDBOX', 'Sandbox')})`}
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
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}
