import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import BilStripe from '@meronex/icons/bi/BilStripe'
import { Button, Input, IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { useTheme } from 'styled-components'
import { ThreeDots, XLg } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Confirm } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  FieldName,
  Header,
  CloseButton,
  InputGroup,
  InputWrapper,
  StripeConnectButton,
  ActionSelectorWrapper
} from './styles'

import { Tab, TabsContainer } from '../BusinessMenu/styles'
import { TabOption, TabOptionName } from '../PaymentOptionStripeDirect/styles'

export const PaymethodOptionStripeConnect = (props) => {
  const {
    business,
    open,
    onClose,
    changesState,
    actionState,
    sitesState,
    handleStripeConnect,
    handleChangeStripeInput,
    handleStripeSave,
    businessPaymethod,
    orderTypes,
    handleChangeBusinessPaymentState,
    handleDeletePaymethod
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paymentTabs, setPaymentTabs] = useState(0)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [localState, setLocalState] = useState({ allowed_order_types: businessPaymethod?.allowed_order_types, sites: businessPaymethod?.sites })
  const filteredOptions = localState?.sites ?? businessPaymethod?.sites?.filter(a => sitesState?.sites?.find(b => a.id === b.id))
  const [all, setAll] = useState(!filteredOptions?.length)

  const setPaymethodInfo = (values) => {
    const data = {}
    if (values?.value === 'All') {
      data[values.key] = []
      setAll(!all)
    } else {
      let array = changesState?.[values.key] ?? (values.key === 'allowed_order_types'
        ? businessPaymethod?.[values.key]
        : businessPaymethod?.[values.key]?.map(i => i.id)) ?? []

      array = [...new Set(
        array.includes(values.value)
          ? array.filter(item => item !== values.value)
          : [...array, values.value]
      )]

      data[values.key] = array.length > 0 ? array : []
      if (values.key === 'sites') {
        setAll(!data?.sites?.length)
      }
    }

    handleChangeBusinessPaymentState(data)
  }

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
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
        document.getElementById('stripe_connect').style.width = '100%'
      } else {
        document.getElementById('stripe_connect').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    handleChangeBusinessPaymentState({
      allowed_order_types: businessPaymethod?.allowed_order_types || [1, 2, 3, 4, 5]
    })
  }, [businessPaymethod?.allowed_order_types])

  useEffect(() => {
    const changes = {}
    if (changesState?.allowed_order_types) changes.allowed_order_types = changesState?.allowed_order_types
    if (changesState?.sites) changes.sites = changesState?.sites
    if (Object.keys(changes).length > 0) setLocalState(JSON.parse(JSON.stringify(changes)))
  }, [changesState?.sites, changesState?.allowed_order_types])

  const handleTabClick = (tab, isInitialRender) => {
    setPaymentTabs(tab)
    if (!isInitialRender) {
      addQueryToUrl({ payemthod_tab: tab })
    }
  }

  useEffect(() => {
    const payemthodTab = query.get('payemthod_tab')
    if (payemthodTab) {
      handleTabClick(Number(payemthodTab), true)
    } else {
      handleTabClick(0)
    }
  }, [])

  return (
    <>
      <Container id='stripe_connect'>
        <Header>
          <h1>{t('STRIPE_CONNECT', 'Stripe connect')}</h1>
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
            onClick={() => handleTabClick(0)}
          >
            {t('GENERAL', 'General')}
          </Tab>
          {sitesState?.sites?.length > 0 && (
            <Tab
              active={paymentTabs === 1}
              onClick={() => handleTabClick(1)}
            >
              {t('CHANNELS', 'Channels')}
            </Tab>
          )}
          <Tab
            active={paymentTabs === 2}
            onClick={() => handleTabClick(2)}
          >
            {t('ORDER_TYPE', 'Order type')}
          </Tab>
        </TabsContainer>

        {paymentTabs === 0 && (
          <>
            <StripeConnectButton
              onClick={() => handleStripeConnect()}
            >
              <span><BilStripe /></span>
              <span>{t('CONNECT_WITH_STRIPE', 'Connect with stripe')}</span>
            </StripeConnectButton>
            <FieldName>{t('ACCESS_TOKEN_ID', 'Access token ID')}</FieldName>
            <Input
              name='token'
              defaultValue={
                changesState?.data?.token
                  ? changesState?.data?.token
                  : businessPaymethod?.data?.token
              }
              placeholder={t('ACCESS_TOKEN_ID', 'Access token ID')}
              disabled
            />

            <FieldName>{t('PUBLISHABLE_KEY', 'Publishable key')}</FieldName>
            <Input
              name='publishable'
              defaultValue={
                changesState?.data?.publishable
                  ? changesState?.data?.publishable
                  : businessPaymethod?.data?.publishable
              }
              placeholder={t('PUBLISHABLE_KEY', 'Publishable key')}
              disabled
            />

            <FieldName>{t('ID_USER', 'User ID')}</FieldName>
            <Input
              name='user'
              defaultValue={
                changesState?.data?.user
                  ? changesState?.data?.user
                  : businessPaymethod?.data?.user
              }
              placeholder={t('ID_USER', 'User ID')}
              disabled
            />

            <FieldName>{t('REFRESH_TOKEN', 'Refresh token')}</FieldName>
            <Input
              name='refresh_token'
              defaultValue={
                changesState?.data_sandbox?.refresh_token
                  ? changesState?.data_sandbox?.refresh_token
                  : businessPaymethod?.data_sandbox?.refresh_token
              }
              placeholder={t('REFRESH_TOKEN', 'Refresh token')}
              disabled
            />

            <InputGroup>
              <InputWrapper>
                <FieldName>{t('FIXED_FEE', 'Fixed fee')}</FieldName>
                <Input
                  type='number'
                  name='fixed_usage_fee'
                  defaultValue={
                    changesState?.fixed_usage_fee
                      ? changesState?.fixed_usage_fee
                      : business?.fixed_usage_fee
                  }
                  placeholder={t('FIXED_FEE', 'Fixed fee')}
                  onChange={e => handleChangeStripeInput(e)}
                  min={0}
                />
              </InputWrapper>

              <InputWrapper>
                <FieldName>{t('PERCENTAGE_FEE', 'Percentage fee')}</FieldName>
                <Input
                  type='number'
                  name='percentage_usage_fee'
                  defaultValue={
                    changesState?.percentage_usage_fee
                      ? changesState?.percentage_usage_fee
                      : business?.percentage_usage_fee
                  }
                  placeholder={t('PERCENTAGE_FEE', 'Percentage fee')}
                  onChange={e => handleChangeStripeInput(e)}
                  min={0}
                />
              </InputWrapper>
            </InputGroup>
          </>
        )}

        {paymentTabs === 1 && sitesState?.sites?.length > 0 && (
          <>
            <TabOption
              key='all'
              onClick={() => setPaymethodInfo({ key: 'sites', value: 'All' })}
            >
              {all ? (
                <RiCheckboxFill className='fill' />
              ) : (
                <RiCheckboxBlankLine />
              )}
              <TabOptionName>{t('ALL', 'All')}</TabOptionName>
            </TabOption>
            {!all && sitesState?.sites.map(site => (
              <TabOption
                key={site.id}
                onClick={() => setPaymethodInfo({ key: 'sites', value: site.id })}
              >
                {(localState?.sites ?? businessPaymethod?.sites?.map(s => s.id))?.includes(site.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <TabOptionName>{site.name}</TabOptionName>
              </TabOption>
            ))}
          </>
        )}

        {paymentTabs === 2 && (
          orderTypes.map(type => (
            <TabOption
              key={type.value}
              onClick={() => setPaymethodInfo({ key: 'allowed_order_types', value: type.value })}
            >
              {(localState?.allowed_order_types ?? businessPaymethod?.allowed_order_types)?.includes(type.value) ? (
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
          onClick={() => handleStripeSave(businessPaymethod.id)}
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
