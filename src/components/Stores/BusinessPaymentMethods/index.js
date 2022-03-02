import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  BusinessPaymethods as BusinessPaymentMethodsController
} from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { ChevronRight } from 'react-bootstrap-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Modal } from '../../Shared'
import { Button } from '../../../styles'
import { PaymentOptionStripeDirect } from '../PaymentOptionStripeDirect'
import { PaymentOption } from '../PaymentOption'
import { PaymethodOptionPaypalExpress } from '../PaymethodOptionPaypalExpress'
import { PaymethodOptionStripeRedirect } from '../PaymethodOptionStripeRedirect'
import { PaymethodOptionStripeConnect } from '../PaymethodOptionStripeConnect'
import { PaymentOptionPaypal } from '../PaymentOptionPaypal'

import {
  MainContainer,
  PaymentMethodsContainer,
  PaymethodListWrapper,
  PaymethodOptionContainer,
  PaymethodOption,
  PaymethodName,
  DropDownWrapper
} from './styles'

const BusinessPaymentMethodsUI = (props) => {
  const {
    business,
    businessPaymethodsState,
    paymethodsList,
    handleClickPayment,
    handleDeleteBusinessPaymethodOption,
    setIsExtendExtraOpen,
    actionState,
    changesState,
    sitesState,
    stripeConnectData,
    handleChangeBusinessPaymentState,
    handleChangeStripeConnectData,
    cleanChangesState,
    handleChangeSandbox,
    handleChangeInput,
    handleSaveClick,
    handleStripeConnect,
    handleChangeStripeInput,
    handleStripeSave,

    isTutorialMode,
    handleTutorialContinue
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedBusinessPaymethod, setSelectedBusinessPaymethod] = useState(null)
  const [selectedPaymethodGateway, setSelectedPaymethodGateway] = useState(null)
  const ActionIcon = <FiMoreVertical />

  const orderTypes = [
    { value: 1, text: t('DELIVERY', 'Delivery') },
    { value: 2, text: t('PICKUP', 'Pickup') },
    { value: 3, text: t('EATIN', 'Eatin') },
    { value: 4, text: t('CURBSIDE', 'Curbside') },
    { value: 5, text: t('DRIVER_THRU', 'Driver thru') }
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
      <PaymentMethodsContainer>
        <h1>{t('PAYMETHODS', 'Payment methods')}</h1>
        {(paymethodsList.loading || businessPaymethodsState.loading) ? (
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
        ) : (
          <PaymethodListWrapper>
            {paymethodsList.paymethods.map(paymethod => (
              <PaymethodOptionContainer
                key={paymethod.id}
                disabled={isTutorialMode || !(isCheckFoundBusinessPaymethod(paymethod.id))}
                onClick={() => handleOpenEdit(paymethod.id, paymethod.gateway)}
              >
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
                {!isTutorialMode && isCheckFoundBusinessPaymethod(paymethod.id) && (
                  <ChevronRight />
                  // <DropDownWrapper>
                  //   <DropdownButton
                  //     menuAlign={theme?.rtl ? 'left' : 'right'}
                  //     title={ActionIcon}
                  //     id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  //   >
                  //     <Dropdown.Item
                  //       onClick={() => handleDeleteBusinessPaymethodOption(paymethod.id)}
                  //     >
                  //       {t('DELETE', 'Delete')}
                  //     </Dropdown.Item>
                  //   </DropdownButton>
                  // </DropDownWrapper>
                )}
              </PaymethodOptionContainer>
            ))}
          </PaymethodListWrapper>
        )}

        {isTutorialMode && (
          <Button
            borderRadius='8px'
            color='primary'
            onClick={() => handleTutorialContinue()}
          >
            {t('CONTINUE', 'Continue')}
          </Button>
        )}
      </PaymentMethodsContainer>
      {width >= 1000 ? (
        <>
          {isEdit && (
            <>
              {!['stripe_direct',
                'paypal',
                'paypal_express',
                'stripe_redirect',
                'stripe_connect'
              ].includes(selectedPaymethodGateway) && (
                <PaymentOption
                  sitesState={sitesState}
                  open={isEdit}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={changesState}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
                  cleanChangesState={cleanChangesState}
                  actionState={actionState}
                  handleChangeSandbox={handleChangeSandbox}
                  handleChangeInput={handleChangeInput}
                  handleSaveClick={handleSaveClick}
                />
              )}
              {selectedPaymethodGateway === 'stripe_direct' && (
                <PaymentOptionStripeDirect
                  sitesState={sitesState}
                  open={isEdit}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={changesState}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
                  cleanChangesState={cleanChangesState}
                  actionState={actionState}
                  handleChangeSandbox={handleChangeSandbox}
                  handleChangeInput={handleChangeInput}
                  handleSaveClick={handleSaveClick}
                />
              )}
              {selectedPaymethodGateway === 'paypal' && (
                <PaymentOptionPaypal
                  open={isEdit}
                  sitesState={sitesState}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={changesState}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                  sitesState={sitesState}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={changesState}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                  sitesState={sitesState}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={changesState}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                  sitesState={sitesState}
                  business={business}
                  onClose={() => handleCloseEdit()}
                  businessPaymethod={selectedBusinessPaymethod}
                  changesState={stripeConnectData}
                  orderTypes={orderTypes}
                  handleChangeBusinessPaymentState={handleChangeStripeConnectData}
                  cleanChangesState={cleanChangesState}
                  actionState={actionState}
                  handleStripeConnect={handleStripeConnect}
                  handleChangeStripeInput={handleChangeStripeInput}
                  handleStripeSave={handleStripeSave}
                />
              )}
            </>
          )}
        </>
      ) : (
        <>
          {isEdit && (
            <>
              <Modal
                width='80%'
                open={isEdit}
                onClose={() => handleCloseEdit()}
              >
                {!['stripe_direct',
                  'paypal',
                  'paypal_express',
                  'stripe_redirect',
                  'stripe_connect'
                ].includes(selectedPaymethodGateway) && (
                  <PaymentOption
                    sitesState={sitesState}
                    open={isEdit}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
                    cleanChangesState={cleanChangesState}
                    actionState={actionState}
                    handleChangeSandbox={handleChangeSandbox}
                    handleChangeInput={handleChangeInput}
                    handleSaveClick={handleSaveClick}
                  />
                )}
                {selectedPaymethodGateway === 'stripe_direct' && (
                  <PaymentOptionStripeDirect
                    sitesState={sitesState}
                    open={isEdit}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
                    cleanChangesState={cleanChangesState}
                    actionState={actionState}
                    handleChangeSandbox={handleChangeSandbox}
                    handleChangeInput={handleChangeInput}
                    handleSaveClick={handleSaveClick}
                  />
                )}
                {selectedPaymethodGateway === 'paypal' && (
                  <PaymentOptionPaypal
                    open={isEdit}
                    sitesState={sitesState}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                    sitesState={sitesState}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                    sitesState={sitesState}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
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
                    sitesState={sitesState}
                    business={business}
                    onClose={() => handleCloseEdit()}
                    businessPaymethod={selectedBusinessPaymethod}
                    changesState={changesState}
                    orderTypes={orderTypes}
                    handleChangeBusinessPaymentState={handleChangeBusinessPaymentState}
                    cleanChangesState={cleanChangesState}
                    actionState={actionState}
                    handleStripeConnect={handleStripeConnect}
                    handleChangeStripeInput={handleChangeStripeInput}
                    handleStripeSave={handleStripeSave}
                  />
                )}
              </Modal>
            </>
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
