import React from 'react'
import { useLanguage, AddressFieldsSetting as AddressFieldsSettingController } from 'ordering-components-admin'
import { Switch } from '../../styles'
import Skeleton from 'react-loading-skeleton'

import {
  CheckoutFieldsDetailsContainer,
  FieldContainer
} from './styles'

const AddressFieldsSettingUI = (props) => {
  const {
    addressFieldsState,
    handleChangeFieldSetting
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
        {addressFieldsState?.loading ? (
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
            {addressFieldsState.fields.map(field => (
              <FieldContainer key={field.id}>
                <div className='name'>{t(field.code.toUpperCase())}</div>
                <div className='required'>
                  <Switch
                    defaultChecked={field.required}
                    disabled={field.code === 'email'}
                    onChange={(val) => handleChangeFieldSetting(field.id, { required: val })}
                  />
                </div>
                <div className='status'>
                  <Switch
                    defaultChecked={field.enabled}
                    disabled={field.code === 'email'}
                    onChange={(val) => handleChangeFieldSetting(field.id, { enabled: val })}
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
export const AddressFieldsSetting = (props) => {
  const addressFieldsProps = {
    ...props,
    UIComponent: AddressFieldsSettingUI
  }
  return <AddressFieldsSettingController {...addressFieldsProps} />
}
