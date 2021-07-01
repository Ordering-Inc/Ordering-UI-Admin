import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, BusinessPaymethods as BusinessPaymentMethodsController } from 'ordering-components-admin'

import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { SpinnerLoader } from '../SpinnerLoader'
import { PaymentOptionStripeDirect } from '../PaymentOptionStripeDirect'
import { PaymethodOptionPaypalExpress } from '../PaymethodOptionPaypalExpress'
import { PaymethodOptionStripeRedirect } from '../PaymethodOptionStripeRedirect'
import { PaymethodOptionStripeConnect } from '../PaymethodOptionStripeConnect'

import {
  MainContainer,
  PaymentMethodsContainer,
  PaymethodListWrapper,
  PaymethodOptionContainer,
  PaymethodOption,
  PaymethodName,
  DropDownWrapper,
  WrapperSpinnerLoader
} from './styles'

const BusinessPaymentMethodsUI = (props) => {
  const {
    businessPaymethodsState,
    paymethodsList,
    handleClickPayment,
    handleDeleteBusinessPaymethodOption,
    setIsExtendExtraOpen,
    actionState,
    changesState,
    cleanChangesState,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedBusinessPaymethod, setSelectedBusinessPaymethod] = useState(null)
  const [selectedPaymethodGateway, setSelectedPaymethodGateway] = useState(null)
  const ActionIcon = <FiMoreVertical />

  const editablePaymethods = [
    'stripe_direct', 'paypal_express', 'stripe_redirect', 'stripe_connect'
  ]

  const isCheckEnableSate = (id) => {
    const found = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === id)
    let valid = false
    if (found) {
      valid = found.enabled
    }
    return valid
  }

  const isCheckFoundBusinessPaymethod = (id) => {
    const found = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === id)
    return found
  }

  const handleOpenEdit = (paymethodId, paymethodGateway) => {
    setSelectedPaymethodGateway(paymethodGateway)
    const businessPaymethod = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId)
    setSelectedBusinessPaymethod(businessPaymethod)
    setIsEdit(true)
    setIsExtendExtraOpen(true)
  }

  const handleCloseEdit = () => {
    setIsExtendExtraOpen(false)
    setIsEdit(false)
  }

  useEffect(() => {
    if (!selectedBusinessPaymethod) return
    const updatedPaymethod = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === selectedBusinessPaymethod.paymethod_id)
    setSelectedBusinessPaymethod(updatedPaymethod)
  }, [businessPaymethodsState?.paymethods, selectedBusinessPaymethod])

  return (
    <MainContainer>
      {actionState.loading && (
        <WrapperSpinnerLoader>
          <SpinnerLoader />
        </WrapperSpinnerLoader>
      )}
      <PaymentMethodsContainer>
        <h1>{t('PAYMETHODS', 'Payment methods')}</h1>
        {(paymethodsList.loading || businessPaymethodsState.loading) && (
          [...Array(10).keys()].map(i => (
            <PaymethodOptionContainer key={i}>
              <PaymethodOption>
                <Skeleton width={15} height={15} />
                <PaymethodName>
                  <Skeleton width={120} height={24} />
                </PaymethodName>
              </PaymethodOption>
            </PaymethodOptionContainer>
          ))
        )}
        <PaymethodListWrapper>
          {paymethodsList.paymethods.map(paymethod => (
            <PaymethodOptionContainer key={paymethod.id}>
              <PaymethodOption
                onClick={() => handleClickPayment(paymethod.id)}
              >
                {isCheckEnableSate(paymethod.id) ? (
                  <RiCheckboxFill className='fill' />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <PaymethodName>{paymethod?.name}</PaymethodName>
              </PaymethodOption>
              {isCheckFoundBusinessPaymethod(paymethod.id) && (
                <DropDownWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={ActionIcon}
                    id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  >
                    {editablePaymethods.includes(paymethod.gateway) && (
                      <Dropdown.Item
                        onClick={() => handleOpenEdit(paymethod.id, paymethod.gateway)}
                      >
                        {t('EDIT', 'Edit')}
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item
                      onClick={() => console.log('custom')}
                    >
                      {t('CUSTOM_FIELDS', 'Custom fields')}
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDeleteBusinessPaymethodOption(paymethod.id)}
                    >
                      {t('DELETE', 'Delete')}
                    </Dropdown.Item>
                  </DropdownButton>
                </DropDownWrapper>
              )}
            </PaymethodOptionContainer>
          ))}
        </PaymethodListWrapper>
      </PaymentMethodsContainer>
      {isEdit && (
        <>
          {selectedPaymethodGateway === 'stripe_direct' && (
            <PaymentOptionStripeDirect
              open={isEdit}
              onClose={() => handleCloseEdit()}
              businessPaymethod={selectedBusinessPaymethod}
              changesState={changesState}
              cleanChangesState={cleanChangesState}
              actionState={actionState}
              handleChangeSandbox={handleChangeSandbox}
              handleChangeInput={handleChangeInput}
              handleSaveClick={handleSaveClick}
            />
          )}
          {selectedPaymethodGateway === 'paypal_express' && (
            <PaymethodOptionPaypalExpress
              open={isEdit}
              onClose={() => handleCloseEdit()}
              businessPaymethod={selectedBusinessPaymethod}
              changesState={changesState}
              cleanChangesState={cleanChangesState}
              actionState={actionState}
              handleChangeSandbox={handleChangeSandbox}
              handleChangeInput={handleChangeInput}
              handleSaveClick={handleSaveClick}
            />
          )}
          {selectedPaymethodGateway === 'stripe_redirect' && (
            <PaymethodOptionStripeRedirect
              open={isEdit}
              onClose={() => handleCloseEdit()}
              businessPaymethod={selectedBusinessPaymethod}
              changesState={changesState}
              cleanChangesState={cleanChangesState}
              actionState={actionState}
              handleChangeSandbox={handleChangeSandbox}
              handleChangeInput={handleChangeInput}
              handleSaveClick={handleSaveClick}
            />
          )}
          {selectedPaymethodGateway === 'stripe_connect' && (
            <PaymethodOptionStripeConnect
              open={isEdit}
              onClose={() => handleCloseEdit()}
              businessPaymethod={selectedBusinessPaymethod}
              changesState={changesState}
              cleanChangesState={cleanChangesState}
              actionState={actionState}
              handleChangeInput={handleChangeInput}
              handleSaveClick={handleSaveClick}
            />
          )}
        </>
      )}
    </MainContainer>
  )
}

export const BusinessPaymentMethods = (props) => {
  const businessPaymethodProps = {
    ...props,
    UIComponent: BusinessPaymentMethodsUI
  }
  return <BusinessPaymentMethodsController {...businessPaymethodProps} />
}
