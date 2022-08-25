import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input, Switch } from '../../../styles'
import { Alert } from '../../Shared'

import {
  Container,
  Header,
  InputWrapper,
  FormContainer
} from './styles'

export const CountryDetails = (props) => {
  const {
    country,
    handleUpdateCountry,
    handleAddCountry
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors, control, reset } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const onSubmit = (values) => {
    if (country) {
      handleUpdateCountry(country?.id, values)
    } else {
      handleAddCountry(values)
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    reset()
  }, [country?.id])

  return (
    <Container>
      <Header>
        <h1>{country ? t('COUNTRY_SETTINGS', 'Country settings') : t('ADD_NEW_COUNTRY ', 'Add new country')}</h1>
        {country && (
          <Switch
            defaultChecked={!!country?.enabled}
            onChange={enabled => handleUpdateCountry(country?.id, { enabled: enabled })}
          />
        )}
      </Header>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            name='name'
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('NAME', 'Name'))
            })}
            defaultValue={country?.name ?? ''}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('CODE', 'Code')}</label>
          <Controller
            name='code'
            control={control}
            render={({ onChange, value }) => (
              <Input
                value={value}
                autoComplete='off'
                onChange={e => onChange(e.target.value.toUpperCase())}
              />
            )}
            rules={{
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Code is required'
              ).replace('_attribute_', t('CODE', 'Code')),
              minLength: {
                value: 2,
                message: t('ERROR_VERIFICATION_CODE_INVALID', 'The code is invalid')
              },
              maxLength: {
                value: 2,
                message: t('ERROR_VERIFICATION_CODE_INVALID', 'The code is invalid')
              }
            }}
            defaultValue={country?.code ?? ''}
          />
        </InputWrapper>
        <Button
          type='submit'
          borderRadius='8px'
          color='primary'
        >
          {country ? t('SAVE', 'Save') : t('ADD', 'Add')}
        </Button>
      </FormContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
