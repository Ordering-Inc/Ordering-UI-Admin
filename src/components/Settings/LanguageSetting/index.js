import React from 'react'
import {
  useLanguage,
  LanguageSetting as LanguageSettingController
} from 'ordering-components-admin'
import { Switch } from '../../../styles'
import Skeleton from 'react-loading-skeleton'
import { Circle, RecordCircle } from 'react-bootstrap-icons'

import {
  LanguageDetailsContainer,
  FieldContainer,
  RadioWrapper
} from './styles'

const LanguageSettingUI = (props) => {
  const {
    languageFiledsState,
    handleChangeFieldSetting
  } = props

  const [languageState, t, { setLanguage }] = useLanguage()

  return (
    <>
      <LanguageDetailsContainer>
        <h1>{t('LANGUAGE_SETTINGS', 'Language settings')}</h1>
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
                <RadioWrapper
                  className={field.default ? 'checked default' : 'default'}
                  onClick={() => setLanguage(field)}
                  isDisabled={!field.enabled}
                >
                  {(field.default) ? <RecordCircle /> : <Circle />}
                </RadioWrapper>
                <div className='status'>
                  <Switch
                    defaultChecked={field.enabled}
                    disabled={languageState?.language?.id === field.id}
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
export const LanguageSetting = (props) => {
  const languageSettingProps = {
    ...props,
    UIComponent: LanguageSettingUI
  }
  return <LanguageSettingController {...languageSettingProps} />
}
