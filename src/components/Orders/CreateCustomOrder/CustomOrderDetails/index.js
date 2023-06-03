import React, { useState, useEffect, useMemo } from 'react'
import { useLanguage, useOrder, useValidationFields, useConfig } from 'ordering-components-admin'
import { CustomOrderDetails as CustomOrderDetailsController } from './naked'
import { SelectCustomer } from '../SelectCustomer'
import { SelectBusinesses } from '../SelectBusinesses'
import { Map } from '../Map'
import { SelectProducts } from '../SelectProducts'
import { DriverTips } from '../DriverTips'
import { CartBill } from '../CartBill'
import { Checkout } from '../Checkout'
import { Alert } from '../../../Shared'

import {
  DetailsContainer
} from './styles'

const CustomOrderDetailsUI = (props) => {
  const {
    phone,
    onChangeNumber,
    customersPhones,
    setCustomersPhones,
    handleParentSidebarMove,
    businessList,
    getBusinessList,
    selectedUser,
    selectedBusiness,
    setSelectedUser,
    setSelectedBusiness,
    productList,
    getProducts,
    handeUpdateProductCart,
    cart
  } = props

  const [, t] = useLanguage()
  const [orderState, { changeAddress }] = useOrder()
  const [validationFields] = useValidationFields()
  const [{ configs }] = useConfig()

  const driverTipsOptions = typeof configs?.driver_tip_options?.value === 'string'
    ? JSON.parse(configs?.driver_tip_options?.value) || []
    : configs?.driver_tip_options?.value || []

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleCloseAlert = () => {
    setCustomersPhones({ ...customersPhones, error: null })
    setAlertState({ open: false, content: [] })
  }

  const customerAddress = useMemo(() => {
    let address = null
    if (selectedUser?.addresses) {
      address = selectedUser.addresses.find(address => address?.default)
    }
    return address
  }, [selectedUser])

  useEffect(() => {
    if (!customerAddress?.id) return
    changeAddress(customerAddress.id)
  }, [customerAddress?.id])

  useEffect(() => {
    if (!customerAddress?.location) return
    getBusinessList(customerAddress.location)
  }, [customerAddress?.location])

  useEffect(() => {
    if (customersPhones?.error) {
      setAlertState({ open: true, content: [customersPhones?.error] })
    }
  }, [customersPhones?.error])

  return (
    <>
      <DetailsContainer>
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
          <SelectBusinesses
            businessList={businessList}
            selectedBusiness={selectedBusiness}
            setSelectedBusiness={setSelectedBusiness}
          />
        )}
        {customerAddress?.location && (
          <Map
            customer={selectedUser}
            customerLocation={customerAddress?.location}
            business={selectedBusiness}
          />
        )}
        {selectedBusiness && (
          <SelectProducts
            productList={productList}
            getProducts={getProducts}
            handeUpdateProductCart={handeUpdateProductCart}
            cart={cart}
            business={selectedBusiness}
          />
        )}
        {/* {
          cart &&
          cart?.business_id &&
          orderState?.options?.type === 1 &&
          cart?.status !== 2 &&
          validationFields?.fields?.checkout?.driver_tip?.enabled &&
          driverTipsOptions.length > 0 &&
          (
            <DriverTips
              businessId={cart?.business_id}
              driverTipsOptions={driverTipsOptions}
              isFixedPrice={parseInt(configs?.driver_tip_type?.value, 10) === 1}
              isDriverTipUseCustom={!!parseInt(configs?.driver_tip_use_custom?.value, 10)}
              driverTip={parseInt(configs?.driver_tip_type?.value, 10) === 1
                ? cart?.driver_tip
                : cart?.driver_tip_rate}
              cart={cart}
              useOrderContext
            />
          )
        }
        {cart && <CartBill cart={cart} />} */}
        {cart && (
          <Checkout
            cartUuid={cart.uuid}
          />
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
