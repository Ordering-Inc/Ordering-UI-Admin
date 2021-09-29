import React from 'react'
import { useLanguage, LanguageSetting as LanguageSettingController } from 'ordering-components-admin'
import { Switch } from '../../styles'
import Skeleton from 'react-loading-skeleton'
import { Circle, RecordCircle } from 'react-bootstrap-icons'

import {
  LanguageDetailsContainer,
  FieldContainer
} from './styles'

const StripeConnectSettingUI = (props) => {
  const {
    languageFiledsState,
    defaultLanguage,
    setDefaultLanguage,
    handleChangeFieldSetting
  } = props

  const [, t] = useLanguage()

  const handleSetDefaultLanguage = (field) => {
    if (defaultLanguage.id === field.id) return
    setDefaultLanguage(field)
    handleChangeFieldSetting(field.id, { default: true })
  }

  return (
    <>
      <LanguageDetailsContainer>
        <h1>{t('STRIPE_CONNECT_SETTINGS', 'Stripe connect settings')}</h1>
        <FieldContainer isHeader>
          <div className='name'>{t('FIELD', 'Field')}</div>
          <div className='default'>{t('DEFAULT', 'Default')}</div>
          <div className='status'>{t('STATE', 'Status')}</div>
        </FieldContainer>
        {languageFiledsState?.loading ? (
          [...Array(20).keys()].map(i => (
            <FieldContainer key={i}>
              <div className='name'><Skeleton width={120} /></div>
              <div className='default'>
                <Skeleton width={20} height={20} style={{ borderRadius: 20 }} />
              </div>
              <div className='status'>
                <Skeleton width={30} style={{ borderRadius: 20 }} />
              </div>
            </FieldContainer>
          ))
        ) : (
          <>
            {languageFiledsState.fields.map(field => (
              <FieldContainer key={field.id}>
                <div className='name'>{field.name}</div>
                <div
                  className={defaultLanguage.id === field.id ? 'checked default' : 'default'}
                  onClick={() => handleSetDefaultLanguage(field)}
                >
                  {(defaultLanguage.id === field.id) ? <RecordCircle /> : <Circle />}
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
      </LanguageDetailsContainer>
    </>
  )
}
export const StripeConnectSetting = (props) => {
  const languageSettingProps = {
    ...props,
    UIComponent: StripeConnectSettingUI
  }
  return <LanguageSettingController {...languageSettingProps} />
}
