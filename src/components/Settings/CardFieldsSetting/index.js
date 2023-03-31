import React from 'react'
import { useLanguage, CardFieldsSetting as CardFieldsSettingController } from 'ordering-components-admin'
import { Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'

import {
  CardFieldsDetailsContainer,
  FieldContainer
} from './styles'

const CardFieldsSettingUI = (props) => {
  const {
    cardFieldsState,
    handleChangeFieldSetting
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <CardFieldsDetailsContainer>
        <h1>{t('CARD_FIELDS', 'Card fields')}</h1>
        <FieldContainer isHeader>
          <div className='name'>{t('FIELD', 'Field')}</div>
          <div className='required'>{t('REQUIRED', 'Required')}</div>
          <div className='status'>{t('STATE', 'Status')}</div>
        </FieldContainer>
        {cardFieldsState?.loading ? (
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
            {cardFieldsState.fields.map(field => (
              <FieldContainer key={field.id}>
                <div className='name'>{t(field.code.toUpperCase())}</div>
                <div className='required'>
                  <Switch
                    defaultChecked={field.required}
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
      </CardFieldsDetailsContainer>
    </>
  )
}
export const CardFieldsSetting = (props) => {
  const cardFieldsProps = {
    ...props,
    UIComponent: CardFieldsSettingUI
  }
  return <CardFieldsSettingController {...cardFieldsProps} />
}
