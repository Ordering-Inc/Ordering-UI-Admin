import React, { useState, useEffect } from 'react'
import { useLanguage, useOrder, useValidationFields, CustomOrderDetails as CustomOrderDetailsController } from 'ordering-components-admin'
import { SelectCustomer } from '../SelectCustomer'
import { OrderTypeSelector } from '../OrderTypeSelector'
import { SelectBusinesses } from '../SelectBusinesses'
import { Map } from '../Map'
import { SelectProducts } from '../SelectProducts'
import { Checkout } from '../Checkout'
import { Alert } from '../../../Shared'
import { Button, Input, TextArea } from '../../../../styles'
import { RecordCircleFill, Circle } from 'react-bootstrap-icons'

import {
  DetailsContainer,
  FormControl,
  ToggleOptions,
  RaidoButton,
  ButtonWrapper
} from './styles'

const CustomOrderDetailsUI = (props) => {
  const {
    phone,
    onChangeNumber,
    customersPhones,
    setCustomersPhones,
    handleParentSidebarMove,
    businessList,
    selectedUser,
    selectedBusiness,
    setSelectedUser,
    setSelectedBusiness,
    productList,
    getProducts,
    handeUpdateProductCart,
    cart,
    onClose,
    handleOpenCustomOrderDetail,
    handlePlaceOrderByTotal,
    extraFields,
    setExtraFields,
    actionState,
    customerAddress
  } = props

  const [, t] = useLanguage()
  const [validationFields] = useValidationFields()
  const [, { changeAddress }] = useOrder()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOrderByProducts, setIsOrderByProducts] = useState(true)

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const handlePlaceOrder = () => {
    const errMessage = []

    if (!selectedBusiness) {
      errMessage.push(t(
        'VALIDATION_ERROR_REQUIRED',
        'Name is required'
      ).replace('_attribute_', t('BUSINESS', 'Business')))
    }
    if (!extraFields?.total) {
      errMessage.push(t(
        'VALIDATION_ERROR_REQUIRED',
        'Name is required'
      ).replace('_attribute_', t('TOTAL', 'Total')))
    }
    if (validationFields?.fields?.checkout?.comments?.enabled && validationFields?.fields?.checkout?.comments?.required && !extraFields?.comment) {
      errMessage.push(t(
        'VALIDATION_ERROR_REQUIRED',
        'Name is required'
      ).replace('_attribute_', t('COMMENT', 'Comment')))
    }
    if (errMessage.length > 0) {
      setAlertState({
        open: true,
        content: errMessage
      })
      return
    }

    handlePlaceOrderByTotal()
  }

  useEffect(() => {
    if (!customerAddress?.id) return
    changeAddress(customerAddress.id)
  }, [customerAddress?.id])

  useEffect(() => {
    if (customersPhones?.error) {
      setAlertState({ open: true, content: [customersPhones?.error] })
    }
  }, [customersPhones?.error])

  useEffect(() => {
    if (actionState?.error) {
      setAlertState({ open: true, content: actionState?.error })
    }
  }, [actionState])

  useEffect(() => {
    if (!isOrderByProducts) {
      setExtraFields({ external_id: extraFields?.external_id })
    }
  }, [isOrderByProducts])

  return (
    <>
      <DetailsContainer className='custom-order-content'>
        <h2>{t('CREATE_CUSTOM_ORDER', 'Create custom order')}</h2>
        <SelectCustomer
          phone={phone}
          customersPhones={customersPhones}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          onChangeNumber={onChangeNumber}
          handleParentSidebarMove={handleParentSidebarMove}
          customerAddress={customerAddress}
        />
        {customerAddress?.location && (
          <>
            <OrderTypeSelector />
            <SelectBusinesses
              businessList={businessList}
              selectedBusiness={selectedBusiness}
              setSelectedBusiness={setSelectedBusiness}
            />
            <Map
              customer={selectedUser}
              customerLocation={customerAddress?.location}
              business={selectedBusiness}
            />
            <ToggleOptions>
              <RaidoButton onClick={() => setIsOrderByProducts(true)}>
                {isOrderByProducts ? <RecordCircleFill className='active' /> : <Circle />}
                <span>{t('ORDER_BY_PRODUCTS', 'Order by products')}</span>
              </RaidoButton>
              <RaidoButton onClick={() => setIsOrderByProducts(false)}>
                {isOrderByProducts ? <Circle /> : <RecordCircleFill className='active' />}
                <span>{t('ORDER_BY_TOTAL', 'Order by total')}</span>
              </RaidoButton>
            </ToggleOptions>
            {!isOrderByProducts && (
              <FormControl>
                <label>{t('TOTAL', 'Total')}</label>
                <Input
                  value={extraFields?.total || ''}
                  onKeyPress={(e) => {
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onChange={(e) => setExtraFields({ ...extraFields, total: e.target.value })}
                  placeholder={t('TOTAL', 'Total')}
                />
              </FormControl>
            )}
            <FormControl>
              <label>
                {t('EXTERNAL_ID', 'External id')}
                <span>{t('OPTIONAL', 'Optional')}</span>
              </label>
              <Input
                value={extraFields?.external_id || ''}
                onChange={(e) => setExtraFields({ ...extraFields, external_id: e.target.value })}
                placeholder={t('EXTERNAL_ID', 'External id')}
              />
            </FormControl>
            {!isOrderByProducts && (
              <FormControl>
                <label>{t('COMMENT', 'Comment')}</label>
                <TextArea
                  value={extraFields?.comment || ''}
                  onChange={(e) => setExtraFields({ ...extraFields, comment: e.target.value })}
                  placeholder={t('COMMENT', 'Comment')}
                />
              </FormControl>
            )}
            {selectedBusiness && isOrderByProducts && (
              <SelectProducts
                productList={productList}
                getProducts={getProducts}
                handeUpdateProductCart={handeUpdateProductCart}
                cart={cart}
                business={selectedBusiness}
              />
            )}
            {cart && cart?.products.length > 0 && isOrderByProducts && (
              <Checkout
                cartUuid={cart.uuid}
                onPlaceOrderClick={(data, paymethod, cart) => {
                  cart?.uuid && handleOpenCustomOrderDetail(cart.uuid)
                  onClose()
                }}
                extraFields={extraFields}
              />
            )}
            {!isOrderByProducts && (
              <ButtonWrapper>
                <Button
                  color='primary'
                  onClick={handlePlaceOrder}
                  disabled={actionState?.loading}
                >
                  {t('PLACE_ORDER', 'Place Order')}
                </Button>
              </ButtonWrapper>
            )}
          </>
        )}
        <Alert
          title={t('ERROR', 'Error')}
          open={alertState.open}
          content={alertState.content}
          onClose={handleCloseAlert}
          onAccept={handleCloseAlert}
        />
      </DetailsContainer>
    </>
  )
}

export const CustomOrderDetails = (props) => {
  const customOrderProps = {
    ...props,
    UIComponent: CustomOrderDetailsUI
  }
  return <CustomOrderDetailsController {...customOrderProps} />
}
