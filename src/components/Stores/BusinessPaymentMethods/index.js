import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  useLanguage,
  BusinessPaymethods as BusinessPaymentMethodsController
} from 'ordering-components-admin'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { ChevronRight } from 'react-bootstrap-icons'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Modal, SearchBar, Alert } from '../../Shared'
import { Button } from '../../../styles'
import { PaymentOptionStripeDirect } from '../PaymentOptionStripeDirect'
import { PaymentOption } from '../PaymentOption'
import { PaymethodOptionPaypalExpress } from '../PaymethodOptionPaypalExpress'
import { PaymethodOptionStripeRedirect } from '../PaymethodOptionStripeRedirect'
import { PaymethodOptionStripeConnect } from '../PaymethodOptionStripeConnect'
import { PaymentOptionPaypal } from '../PaymentOptionPaypal'
import { BusinessWalletsList } from '../BusinessWalletsList'

import {
  MainContainer,
  PaymentMethodsContainer,
  PaymethodListWrapper,
  PaymethodOptionContainer,
  PaymethodOption,
  PaymethodName,
  SearchBarWrapper,
  ButtonGroup
} from './styles'

const BusinessPaymentMethodsUI = (props) => {
  const {
    business,
    businessPaymethodsState,
    paymethodsList,
    handleClickPayment,
    handleSelectAllPaymethods,
    // handleSelectNonePaymethods,
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
    isSuccessDeleted,
    setIsSuccessDeleted,

    isTutorialMode,
    handleTutorialContinue
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isEdit, setIsEdit] = useState(false)
  const [selectedBusinessPaymethod, setSelectedBusinessPaymethod] = useState(null)
  const [selectedPaymethodGateway, setSelectedPaymethodGateway] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOpenWalletDetails, setIsOpenWalletDetails] = useState(false)

  const orderTypes = [
    { value: 1, text: t('DELIVERY', 'Delivery') },
    { value: 2, text: t('PICKUP', 'Pickup') },
    { value: 3, text: t('EATIN', 'Eatin') },
    { value: 4, text: t('CURBSIDE', 'Curbside') },
    { value: 5, text: t('DRIVER_THRU', 'Driver thru') }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

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

  const handleOpenEdit = (e, paymethodId, paymethodGateway) => {
    const inValid = e.target.closest('.paymethod-checkbox')
    if (inValid) return true
    if (!isTutorialMode && isCheckFoundBusinessPaymethod(paymethodId)) {
      setSelectedPaymethodGateway(paymethodGateway)
      const businessPaymethod = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId)
      setSelectedBusinessPaymethod(businessPaymethod)
      setIsEdit(true)
      setIsExtendExtraOpen(true)
    }
  }

  const handleClickCheckBox = (id) => {
    let i = 0
    paymethodsList.paymethods.forEach(paymethod => {
      if (isCheckEnableSate(paymethod.id)) {
        i += 1
      }
    })
    if (isCheckEnableSate(id) && i < 2) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_MIN_ARRAY', 'The _attribute_ must have at least _min_ items.').replace('_attribute_', t('PAYMETHODS', 'Payment methods')).replace('_min_', t('ONE', 'one'))
      })
      return
    }
    handleClickPayment && handleClickPayment(id)
  }

  const handleCloseEdit = () => {
    setIsExtendExtraOpen(false)
    setIsEdit(false)
    setSelectedBusinessPaymethod(null)
    setIsSuccessDeleted(false)
  }

  useEffect(() => {
    if (!isSuccessDeleted) return
    handleCloseEdit()
  }, [isSuccessDeleted])

  useEffect(() => {
    if (!selectedBusinessPaymethod) return
    const updatedPaymethod = businessPaymethodsState.paymethods.find(paymethod => paymethod.paymethod_id === selectedBusinessPaymethod.paymethod_id)
    setSelectedBusinessPaymethod(updatedPaymethod)
  }, [businessPaymethodsState?.paymethods, selectedBusinessPaymethod])

  return (
    <MainContainer>
      <PaymentMethodsContainer isOpenWalletDetails={isOpenWalletDetails}>
        <h1>{t('PAYMETHODS', 'Payment methods')}</h1>
        <SearchBarWrapper>
          <SearchBar
            placeholder={t('SEARCH', 'Search')}
            isCustomLayout
            search={searchValue}
            onSearch={val => setSearchValue(val)}
          />
        </SearchBarWrapper>
        <ButtonGroup>
          <Button
            color='secundaryDark'
            onClick={() => handleSelectAllPaymethods()}
            disabled={(paymethodsList.loading || businessPaymethodsState.loading)}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          {/* <Button
            color='secundaryDark'
            onClick={() => handleSelectNonePaymethods()}
            disabled={(paymethodsList.loading || businessPaymethodsState.loading)}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button> */}
        </ButtonGroup>

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
            {paymethodsList.paymethods.filter(paymethod => paymethod?.name?.toLowerCase().includes(searchValue.toLowerCase())).map(paymethod => (
              <PaymethodOptionContainer
                key={paymethod.id}
                onClick={e => handleOpenEdit(e, paymethod.id, paymethod.gateway)}
                active={paymethod.id === selectedBusinessPaymethod?.paymethod_id}
                disabled={isTutorialMode || !(isCheckFoundBusinessPaymethod(paymethod.id))}
              >
                <PaymethodOption
                  className='paymethod-checkbox'
                  onClick={() => handleClickCheckBox(paymethod.id)}
                >
                  {isCheckEnableSate(paymethod.id) ? (
                    <RiCheckboxFill className='fill' />
                  ) : (
                    <RiCheckboxBlankLine />
                  )}
                </PaymethodOption>
                <PaymethodName>{paymethod?.name}</PaymethodName>
                {!isTutorialMode && isCheckFoundBusinessPaymethod(paymethod.id) && (
                  <ChevronRight />
                )}
              </PaymethodOptionContainer>
            ))}
            <BusinessWalletsList
              business={business}
              setIsOpenWalletDetails={setIsOpenWalletDetails}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              isClose={isEdit}
              handleClosePaymethodDetails={handleCloseEdit}
            />
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
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                  actionState={actionState}
                  handleStripeConnect={handleStripeConnect}
                  handleChangeStripeInput={handleChangeStripeInput}
                  handleStripeSave={handleStripeSave}
                  handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
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
                    handleDeletePaymethod={handleDeleteBusinessPaymethodOption}
                  />
                )}
              </Modal>
            </>
          )}
        </>
      )}
      <Alert
        title={t('PAYMETHODS', 'Payment methods')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
