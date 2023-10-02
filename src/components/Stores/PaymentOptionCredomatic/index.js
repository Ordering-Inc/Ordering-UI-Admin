import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button, Input, IconButton, Checkbox } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useTheme } from 'styled-components'
import { ThreeDots, XLg } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Confirm } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  SandboxWrapper,
  FieldName,
  Header,
  CloseButton,
  ActionSelectorWrapper,
  BodyContainer
} from './styles'

import { Tab, TabsContainer } from '../BusinessMenu/styles'
import { TabOption, TabOptionName } from '../PaymentOptionStripeDirect/styles'

export const PaymentOptionCredomatic = (props) => {
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

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

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
        document.getElementById('credomatic').style.width = '100%'
      } else {
        document.getElementById('credomatic').style.width = '500px'
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
      <Container id='credomatic'>
        <Header>
          <h1>{t('CREDOMATIC', 'Credomatic')}</h1>
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
        <BodyContainer>
          {paymentTabs === 0 && (
            <>
              <FieldName>{t('PROCESSOR_ID', 'Processor ID')}</FieldName>
              <Input
                name='processor_id'
                defaultValue={
                  changesState?.data?.processor_id
                    ? changesState?.data?.processor_id
                    : businessPaymethod?.data?.processor_id
                }
                placeholder={t('PROCESSOR_ID', 'Processor ID')}
                onChange={e => handleChangeInput(e, false)}
              />
              <FieldName>{t('PRIVATE_PRODUCTION_KEY', 'Private Production Key')}</FieldName>
              <Input
                name='private_production_key'
                defaultValue={
                  changesState?.data?.private_production_key
                    ? changesState?.data?.private_production_key
                    : businessPaymethod?.data?.private_production_key
                }
                placeholder={t('PRIVATE_PRODUCTION_KEY', 'Private Production Key')}
                onChange={e => handleChangeInput(e, false)}
              />
              <FieldName>{t('PUBLIC_PRODUCTION_KEY', 'Public Production Key')}</FieldName>
              <Input
                name='public_production_key'
                defaultValue={
                  changesState?.data?.public_production_key
                    ? changesState?.data?.public_production_key
                    : businessPaymethod?.data?.public_production_key
                }
                placeholder={t('PUBLIC_PRODUCTION_KEY', 'Public Production Key')}
                onChange={e => handleChangeInput(e, false)}
              />
              <FieldName>{t('PRIVATE_SANDBOX_KEY', 'Private Sandbox Key')}</FieldName>
              <Input
                name='private_sandbox_key'
                defaultValue={
                  changesState?.data_sandbox?.private_sandbox_key
                    ? changesState?.data_sandbox?.private_sandbox_key
                    : businessPaymethod?.data_sandbox?.private_sandbox_key
                }
                placeholder={`${t('PRIVATE_SANDBOX_KEY', 'Private Sandbox Key')}`}
                onChange={e => handleChangeInput(e, true)}
              />
              <FieldName>{t('PUBLIC_SANDBOX_KEY', 'Public Sandbox Key')}</FieldName>
              <Input
                name='public_sandbox_key'
                defaultValue={
                  changesState?.data_sandbox?.public_sandbox_key
                    ? changesState?.data_sandbox?.public_sandbox_key
                    : businessPaymethod?.data_sandbox?.public_sandbox_key
                }
                placeholder={`${t('PUBLIC_SANDBOX_KEY', 'Public Sandbox Key')})`}
                onChange={e => handleChangeInput(e, true)}
              />
              <SandboxWrapper>
                <Checkbox
                  checked={changesState?.sandbox ?? businessPaymethod?.sandbox}
                  onChange={e => handleChangeSandbox(e.target.checked)}
                />
                <span>{t('SANDBOX_MODE', 'Sandbox Mode')}</span>
              </SandboxWrapper>
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
            onClick={() => handleSaveClick(businessPaymethod.id)}
          >
            {actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')}
          </Button>
        </BodyContainer>
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
