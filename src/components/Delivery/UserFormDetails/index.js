import React, { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, useCustomer } from 'ordering-components-admin'
import { useForm } from 'react-hook-form'
import parsePhoneNumber from 'libphonenumber-js'
import { Input, Button, Switch, DefaultSelect } from '../../../styles'
import { Alert, InputPhoneNumber } from '../../Shared'
import { sortInputFields } from '../../../utils'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { timezones } from '../../../config/constants'

import {
  FormInput,
  ActionsForm,
  SkeletonForm,
  DriverZoneRestrictionWrapper,
  WrapperPassword,
  TogglePassword,
  InputWrapper
} from './styles'

export const UserFormDetailsUI = (props) => {
  const {
    formState,
    showField,
    cleanFormState,
    isRequiredField,
    validationFields,
    handleChangeInput,
    handleButtonUpdateClick,
    userData,
    isCustomerMode,
    isDriversPage,
    handleChangeSwtich
  } = props

  const formMethods = useForm()
  const [, t] = useLanguage()

  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)
  const [userPhoneNumber, setUserPhoneNumber] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [, { setUserCustomer }] = useCustomer()
  const emailInput = useRef(null)

  const [user, setUser] = useState(userData)
  const [passwordSee, setPasswordSee] = useState(false)
  const [timezonesOptions, setTimezonesOptions] = useState([])
  const [timezoneSearchValue, setTimezoneSearchValue] = useState('')

  useEffect(() => {
    setUser(userData)
  }, [userData])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    cleanFormState && cleanFormState({ result: { error: false } })
  }

  const showInputPhoneNumber = validationFields?.fields?.checkout?.cellphone?.enabled ?? false

  const setUserCellPhone = (isEdit = false) => {
    // if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
    //   setUserPhoneNumber(userPhoneNumber)
    //   return
    // }
    if (user?.cellphone) {
      let phone = null
      if (formState.result.error && formState.changes?.cellphone && formState.changes?.country_phone_code) {
        phone = `+${formState.changes?.country_phone_code} ${formState.changes?.cellphone}`
        setUserPhoneNumber(phone)
        return
      }
      if (user?.country_phone_code) {
        phone = `+${user?.country_phone_code} ${user?.cellphone}`
      } else {
        phone = user?.cellphone
      }
      setUserPhoneNumber(phone)
      return
    }
    setUserPhoneNumber(user?.cellphone || '')
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber &&
      validationFields?.fields?.checkout?.cellphone?.enabled &&
      validationFields?.fields?.checkout?.cellphone?.required
    ) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      })
      return
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user?.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        })
        return
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      })
      return
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      let changes = null
      if (user?.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        }
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true)
      }
      handleButtonUpdateClick(changes)
    }
  }

  const handleChangePhoneNumber = (number, isValid) => {
    setUserPhoneNumber(number)

    let phoneNumberParser = null
    let phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    }
    if (isValid) {
      phoneNumberParser = parsePhoneNumber(number)
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      }
    }
    handleChangeInput(phoneNumber, true)
  }

  const handleChangeInputEmail = (e) => {
    handleChangeInput({ target: { name: 'email', value: e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '') } })
    formMethods.setValue('email', e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''))
    emailInput.current.value = e.target.value?.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
  }

  const handleExternalIdPaste = (event) => {
    event.preventDefault()
    const pastedData = event.clipboardData.getData('text/plain')
    const sanitizedData = pastedData.replace(/\s/g, '').replace(/[^\d]/g, '')
    document.execCommand('insertText', false, sanitizedData)
    handleChangeSwtich('external_id', sanitizedData)
  }

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      const content = Object.values(formMethods.errors).map(error => error.message)
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'))
      }
      setAlertState({
        open: true,
        content
      })
    }
  }, [formMethods.errors])

  useEffect(() => {
    if ((!formState?.loading && formState?.result?.error)) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
  }, [formState?.loading])

  useEffect(() => {
    if (user && !formState?.loading) {
      setUserCellPhone()
    }
  }, [user])

  useEffect(() => {
    if (!validationFields.loading && emailInput.current) {
      formMethods.setValue('email', formState?.result?.result
        ? formState?.result?.result?.email
        : formState?.changes?.email ?? (user && user?.email) ?? '')
    }
  }, [validationFields, emailInput.current])

  useEffect(() => {
    formMethods.register('email', {
      required: isRequiredField('email')
        ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email'))
        : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    })
  }, [formMethods])

  useEffect(() => {
    if (user?.id) {
      cleanFormState && cleanFormState({ changes: {} })
    }
  }, [user?.id])

  useEffect(() => {
    const _timezonesOptions = timezones
      .filter(timezone => timezone.toLocaleLowerCase().includes(timezoneSearchValue.toLocaleLowerCase()))
      .map(timezone => {
        return {
          value: timezone,
          content: timezone
        }
      })
    setTimezonesOptions(_timezonesOptions)
  }, [timezoneSearchValue])

  return (
    <>
      <FormInput onSubmit={formMethods.handleSubmit(onSubmit)}>
        {!validationFields?.loading ? (
          <>
            {sortInputFields({ values: validationFields?.fields?.checkout }).map(field =>
              showField && showField(field.code) && (
                <React.Fragment key={field.id}>
                  {field.code === 'email' ? (
                    <Input
                      key={field.id}
                      type={field.type}
                      name={field.code}
                      className='form'
                      placeholder={t(field.code.toUpperCase(), field?.name)}
                      value={formState?.changes[field.code] ?? (user && user[field.code]) ?? ''}
                      onChange={handleChangeInputEmail}
                      ref={(e) => {
                        emailInput.current = e
                      }}
                      autoComplete='off'
                    />
                  ) : (
                    <Input
                      key={field.id}
                      type={field.type}
                      name={field.code}
                      className='form'
                      placeholder={t(field.code.toUpperCase(), field?.name)}
                      value={formState?.changes[field.code] ?? (user && user[field.code]) ?? ''}
                      onChange={handleChangeInput}
                      ref={formMethods.register({
                        required: isRequiredField(field.code)
                          ? t(`VALIDATION_ERROR_${field.code.toUpperCase()}_REQUIRED`, `${field?.name} is required`).replace('_attribute_', t(field?.name, field.code))
                          : null
                      })}
                      autoComplete='off'
                    />
                  )}

                </React.Fragment>
              )
            )}
            {isDriversPage && (
              <>
                <Input
                  name='external_id'
                  className='form'
                  placeholder={t('EXTERNAL_ID', 'External Id')}
                  defaultValue={
                    formState?.changes?.external_id ?? (user && user?.external_id) ?? ''
                  }
                  onChange={handleChangeInput}
                  autoComplete='off'
                  onKeyPress={(e) => {
                    if (!/^[0-9]$/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onPaste={handleExternalIdPaste}
                />
                <InputWrapper isTimezone>
                  <DefaultSelect
                    placeholder={t('SELECT_TIMEZONE', 'Select a timezone')}
                    defaultValue={formState?.changes?.timezone ?? user?.timezone ?? ''}
                    options={timezonesOptions}
                    onChange={val => handleChangeSwtich('timezone', val)}
                    optionInnerMaxHeight='300px'
                    isShowSearchBar
                    searchBarIsCustomLayout
                    searchBarIsNotLazyLoad
                    searchValue={timezoneSearchValue}
                    handleChangeSearch={setTimezoneSearchValue}
                  />
                </InputWrapper>
              </>
            )}
            {!!showInputPhoneNumber && (
              <InputPhoneNumber
                user={user}
                value={userPhoneNumber}
                setValue={handleChangePhoneNumber}
                handleIsValid={setIsValidPhoneNumber}
              />
            )}
            <WrapperPassword>
              <Input
                type={!passwordSee ? 'password' : 'text'}
                name='password'
                className='form'
                placeholder={t('FRONT_VISUALS_PASSWORD', 'Password')}
                onChange={handleChangeInput}
                ref={formMethods.register({
                  required: isRequiredField('password')
                    ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
                    : null,
                  minLength: {
                    value: 8,
                    message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                  }
                })}
              />
              <TogglePassword onClick={() => setPasswordSee(!passwordSee)}>
                {!passwordSee ? <Eye /> : <EyeSlash />}
              </TogglePassword>
            </WrapperPassword>
            {isDriversPage && (
              <DriverZoneRestrictionWrapper>
                <span>{('DRIVER_ZONE_RESTRICTION', 'Driver Zone Restriccion')}</span>
                <Switch
                  defaultChecked={formState?.changes?.driver_zone_restriction ?? user?.driver_zone_restriction ?? false}
                  onChange={(val) => handleChangeSwtich('driver_zone_restriction', val)}
                />
              </DriverZoneRestrictionWrapper>
            )}
            {isDriversPage && (
              <DriverZoneRestrictionWrapper>
                <span>{('MONO_SESSION', 'Mono session')}</span>
                <Switch
                  defaultChecked={formState?.changes?.mono_session ?? user?.mono_session ?? false}
                  onChange={(val) => handleChangeSwtich('mono_session', val)}
                />
              </DriverZoneRestrictionWrapper>
            )}
            <ActionsForm>
              <Button
                id='form-btn'
                color='primary'
                borderRadius='5px'
                type='submit'
                disabled={formState.loading || Object.keys(formState?.changes).length === 0}
              >
                {formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')}
              </Button>
            </ActionsForm>
          </>
        ) : (
          <SkeletonForm>
            {[...Array(6)].map((item, i) => (
              <Skeleton key={i} />
            ))}
          </SkeletonForm>
        )}
      </FormInput>
      <Alert
        title={t('PROFILE', 'Profile')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
