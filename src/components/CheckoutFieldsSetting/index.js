import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { CheckoutFieldsSetting as CheckoutFieldsSettingController } from './naked'
import { Switch } from '../../styles'
import Skeleton from 'react-loading-skeleton'

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
        <h1>{t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')}</h1>
        <FieldContainer isHeader>
          <div className='name'>{t('FIELD', 'Field')}</div>
          <div className='required'>{t('REQUIRED', 'Required')}</div>
          <div className='status'>{t('STATE', 'Status')}</div>
        </FieldContainer>
        {checkoutFieldsState?.loading ? (
          [...Array(10).keys()].map(i => (
            <FieldContainer key={i}>
              <div className='name'><Skeleton width={120} /></div>
              <div className='required'>
                <Skeleton width={30} style={{ borderRadius: 20 }} />
              </div>
              <div className='status'>
                <Skeleton width={30} style={{ borderRadius: 20 }} />
              </div>
            </FieldContainer>
          ))
        ) : (
          <>
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
          </>
        )}
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
