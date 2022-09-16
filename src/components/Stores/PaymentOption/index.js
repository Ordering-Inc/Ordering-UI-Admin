import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { Button, IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Tab, TabsContainer } from '../BusinessMenu/styles'
import { useTheme } from 'styled-components'
import { ThreeDots, XLg } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Confirm } from '../../Shared'

import {
  Container,
  Header,
  CloseButton,
  TabOption,
  TabOptionName,
  ActionSelectorWrapper
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
    businessPaymethod,
    handleDeletePaymethod,
    isDisabledPaymentsAdvanced
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paymentTabs, setPaymentTabs] = useState(sitesState?.sites?.length > 0 ? 0 : 1)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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
      sandbox: businessPaymethod?.sandbox,
      allowed_order_types: businessPaymethod?.allowed_order_types || [1, 2, 3, 4, 5]
    })
  }, [businessPaymethod?.id, businessPaymethod?.sandbox, businessPaymethod?.allowed_order_types])

  return (
    <>
      <Container id='payment_method_option'>
        <Header>
          <h1>{businessPaymethod?.paymethod?.name}</h1>
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
          {sitesState?.sites?.length > 0 && (
            <Tab
              active={paymentTabs === 0}
              onClick={() => !isDisabledPaymentsAdvanced && setPaymentTabs(0)}
              disabledFeature={isDisabledPaymentsAdvanced}
              title={isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
            >
              {t('CHANNELS', 'Channels')}
            </Tab>
          )}
          <Tab
            active={paymentTabs === 1}
            onClick={() => !isDisabledPaymentsAdvanced && setPaymentTabs(1)}
            disabledFeature={isDisabledPaymentsAdvanced}
            title={isDisabledPaymentsAdvanced ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
          >
            {t('ORDER_TYPE', 'Order type')}
          </Tab>
        </TabsContainer>

        {paymentTabs === 0 && sitesState?.sites?.length > 0 && (
          sitesState?.sites.map(site => (
            <TabOption
              key={site.id}
              disabledFeature={isDisabledPaymentsAdvanced}
              onClick={() => !isDisabledPaymentsAdvanced && setPaymethodInfo({ key: 'sites', value: site.id })}
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
