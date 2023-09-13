import React, { useState, useMemo } from 'react'
import { useLanguage, useConfig, GuestCheckoutFieldsSetting as GuestCheckoutFieldsSettingController } from 'ordering-components-admin'
import { DefaultSelect, IconButton, Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { InfoCircle } from 'react-bootstrap-icons'

import {
  CheckoutFieldsDetailsContainer,
  FieldContainer,
  SelectWrapper,
  Option,
  TitleWrapper,
  InfoWrapper,
  InfoContent
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
  const orderValidationFields = ['name', 'middle_name', 'lastname', 'second_lastname', 'email', 'mobile_phone', 'city_dropdown_option', 'address', 'zipcode', 'address_notes', 'coupon', 'driver_tip', 'comments', 'birthdate']

  const orderTypeList = useMemo(() => {
    const orderTypes = configs?.order_types_allowed?.options?.map(item => ({ value: item.value, content: <Option>{t(item.text, item.text?.replace('_', ' ').toLowerCase())}</Option> }))
    return orderTypes || []
  }, [configs?.order_types_allowed])

  return (
    <>
      <CheckoutFieldsDetailsContainer>
        <TitleWrapper>
          <h1>{t('CHECKOUT_CUSTOMER_FIELDS', 'Checkout and Customer fields')}</h1>
          <InfoWrapper>
            <IconButton
              color='primary'
            >
              <InfoCircle />
            </IconButton>
            <InfoContent>
              {t('GUEST_CHECKOUT_SETTING_INFO', 'Manage the fields that your guest users will be able to select and the fields required to complete an order (These options only apply for guest users)')}
            </InfoContent>
          </InfoWrapper>
        </TitleWrapper>
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
          <div className='guest'>{t('REQUIRED_WITH_GUEST', 'Required with guest')}</div>
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
              <div className='guest'>
                <Skeleton width={30} style={{ borderRadius: 20 }} />
              </div>
            </FieldContainer>
          ))
        ) : (
          <>
            {checkoutFieldsState.fields
              .filter(item => item?.order_type_id === parseInt(orderType))
              .sort((a, b) => {
                const indexA = orderValidationFields.indexOf(a?.validation_field.code)
                const indexB = orderValidationFields.indexOf(b?.validation_field.code)
                return indexA - indexB
              })
              .map(field => !hideSettingList.includes(field?.validation_field.code) && !([2, 3, 4, 5, 6].includes(field?.order_type_id) && field?.validation_field.code === 'driver_tip') && (
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
                  <div className='guest'>
                    <Switch
                      defaultChecked={field?.required_with_guest}
                      onChange={(val) => handleChangeCheckoutFieldSetting(field?.validation_field_id, field?.order_type_id, { required_with_guest: val })}
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
