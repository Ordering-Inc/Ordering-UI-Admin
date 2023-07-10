import React, { useState, useMemo } from 'react'
import { useLanguage, useConfig, GuestCheckoutFieldsSetting as GuestCheckoutFieldsSettingController } from 'ordering-components-admin'
import { DefaultSelect, Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'

import {
  CheckoutFieldsDetailsContainer,
  FieldContainer,
  SelectWrapper,
  Option
} from './styles'

const GuestCheckoutFieldsSettingUI = (props) => {
  const {
    checkoutFieldsState,
    handleChangeCheckoutFieldSetting
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const [orderType, setOrderType] = useState('1')

  const hideSettingList = ['city_dropdown_option', 'address', 'address_notes']

  const orderTypeList = useMemo(() => {
    const orderTypes = configs?.order_types_allowed?.options?.map(item => ({ value: item.value, content: <Option>{t(item.text, item.text?.replace('_', ' ').toLowerCase())}</Option> }))
    return orderTypes || []
  }, [configs?.order_types_allowed])

  return (
    <>
      <CheckoutFieldsDetailsContainer>
        <h1>{t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')}</h1>
        <SelectWrapper>
          <label>{t('FRONT_MAIN_EMAIL_ORDER_TYPE', 'Order type')}</label>
          <DefaultSelect
            placeholder={t('SELECT_ORDER_TYPE', 'Select order type')}
            defaultValue={orderType}
            options={orderTypeList}
            onChange={val => setOrderType(val)}
          />
        </SelectWrapper>
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
            {checkoutFieldsState.fields.filter(item => item?.order_type_id === parseInt(orderType)).map(field => !hideSettingList.includes(field?.validation_field.code) && (
              <FieldContainer key={field.id}>
                <div className='name'>{t(field?.validation_field.code.toUpperCase(), field?.validation_field.name)}</div>
                <div className='required'>
                  <Switch
                    defaultChecked={field?.required}
                    onChange={(val) => handleChangeCheckoutFieldSetting(field?.validation_field_id, field?.order_type_id, { required: val })}
                  />
                </div>
                <div className='status'>
                  <Switch
                    defaultChecked={field?.enabled}
                    onChange={(val) => handleChangeCheckoutFieldSetting(field?.validation_field_id, field?.order_type_id, { enabled: val })}
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
export const GuestCheckoutFieldsSetting = (props) => {
  const guestCheckoutFieldsSettingProps = {
    ...props,
    UIComponent: GuestCheckoutFieldsSettingUI
  }
  return <GuestCheckoutFieldsSettingController {...guestCheckoutFieldsSettingProps} />
}
