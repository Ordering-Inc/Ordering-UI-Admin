import React, { useState, useEffect } from 'react'
import { useLanguage, PaymentOptionSquare as PaymentOptionSquareController } from 'ordering-components-admin'
import { Button, IconButton, Input } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { ThreeDots, XLg } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../../Shared'
import { Tab, TabsContainer } from '../BusinessMenu/styles'
import { TabOption, TabOptionName } from '../PaymentOptionStripeDirect/styles'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import SiSquare from '@meronex/icons/si/SiSquare'

import {
  Container,
  Header,
  ActionSelectorWrapper,
  CloseButton,
  SquareInfoContainer,
  SquareButtonWrapper,
  FormContainer,
  FormController
} from './styles'

const PaymentOptionSquareUI = (props) => {
  const {
    open,
    onClose,
    businessPaymethod,
    handleDeletePaymethod,
    sitesState,
    changesState,
    orderTypes,
    handleChangeBusinessPaymentState,

    squareUrlState,
    handleConnectSquare,
    squareData,
    handleSavePaymethod
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [paymentTabs, setPaymentTabs] = useState(0)

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
        document.getElementById('payment_method_square').style.width = '100%'
      } else {
        document.getElementById('payment_method_square').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <Container id='payment_method_square'>
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
        <SquareInfoContainer>
          <SquareButtonWrapper>
            <Button
              borderRadius='8px'
              color='primary'
              onClick={handleConnectSquare}
              disabled={squareUrlState.loading}
            >
              <SiSquare />
              {t('CONNECT_WITH_SQUARE', 'Connect with Square')}
            </Button>
          </SquareButtonWrapper>
          <FormContainer>
            <FormController>
              <label>{t('APPLICATION_ID', 'Application Id')}</label>
              <Input
                disabled
                value={squareData?.data?.application_id ?? businessPaymethod?.data?.application_id ?? ''}
              />
            </FormController>
            <FormController>
              <label>{t('LOCATION_ID', 'Location Id')}</label>
              <Input
                disabled
                value={squareData?.data?.location_id ?? businessPaymethod?.data?.location_id ?? ''}
              />
            </FormController>
            <FormController>
              <label>{t('APPLICATION_ID', 'Application Id')} ({t('SANDBOX', 'Sandbox')})</label>
              <Input
                disabled
                value={squareData?.data_sandbox?.application_id ?? businessPaymethod?.data_sandbox?.application_id ?? ''}
              />
            </FormController>
            <FormController>
              <label>{t('LOCATION_ID', 'Location Id')} ({t('SANDBOX', 'Sandbox')})</label>
              <Input
                disabled
                value={squareData?.data_sandbox?.location_id ?? businessPaymethod?.data_sandbox?.location_id ?? ''}
              />
            </FormController>
            <Button
              borderRadius='8px'
              color='primary'
              disabled={!squareData}
              onClick={() => handleSavePaymethod(businessPaymethod?.id, squareData)}
            >
              {t('SAVE', 'Save')}
            </Button>
          </FormContainer>
        </SquareInfoContainer>
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
    </Container>
  )
}

export const PaymentOptionSquare = (props) => {
  const paymentOptionSquareProps = {
    ...props,
    UIComponent: PaymentOptionSquareUI
  }
  return <PaymentOptionSquareController {...paymentOptionSquareProps} />
}
