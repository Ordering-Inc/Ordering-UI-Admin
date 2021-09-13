import React from 'react'
import { useLanguage, CheckoutFieldsSetting as CheckoutFieldsSettingController } from 'ordering-components-admin'
import { Switch } from '../../styles'

import {
  CheckoutFieldsDetailsContainer,
  FieldContainer
} from './styles'

const CheckoutFieldsSettingUI = (props) => {
  const {
    checkoutFieldsState,
    handleChangeCheckoutFieldSetting
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <CheckoutFieldsDetailsContainer>
        <h1>{t('CHECKOUT_FIELDS', 'Checkout fields')}</h1>
        <FieldContainer isHeader>
          <div className='name'>{t('FIELD', 'Field')}</div>
          <div className='required'>{t('REQUIRED', 'Required')}</div>
          <div className='status'>{t('STATE', 'Status')}</div>
        </FieldContainer>
        {checkoutFieldsState.fields.map(field => (
          <FieldContainer key={field.id}>
            <div className='name'>{t(field.code.toUpperCase())}</div>
            <div className='required'>
              <Switch
                defaultChecked={field.required}
                disabled={field.code === 'email'}
                onChange={(val) => handleChangeCheckoutFieldSetting(field.id, { required: val })}
              />
            </div>
            <div className='status'>
              <Switch
                defaultChecked={field.enabled}
                disabled={field.code === 'email'}
                onChange={(val) => handleChangeCheckoutFieldSetting(field.id, { enabled: val })}
              />
            </div>
          </FieldContainer>
        ))}
      </CheckoutFieldsDetailsContainer>
    </>
  )
}
export const CheckoutFieldsSetting = (props) => {
  const checkoutFieldsProps = {
    ...props,
    UIComponent: CheckoutFieldsSettingUI
  }
  return <CheckoutFieldsSettingController {...checkoutFieldsProps} />
}
