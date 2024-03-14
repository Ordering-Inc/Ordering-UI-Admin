import React, { useEffect, useRef } from 'react'
import parsePhoneNumber from 'libphonenumber-js'
import PhoneInput from 'react-phone-number-input'
import { useLanguage, useConfig, useSession } from 'ordering-components-admin'
import { findExitingCode } from '../../../utils'
import { Container, ErrorMsg } from './styles'

export const InputPhoneNumber = (props) => {
  const {
    user,
    value,
    setValue,
    handleIsValid,
    disabled,
    isUser
  } = props

  const [, t] = useLanguage()
  const [{ auth }] = useSession()
  const [{ configs }] = useConfig()

  const phoneRef = useRef(null)
  const codesStartsWithZero = ['44']

  const isValidPhoneNumber = (number) => {
    if (!number) return
    if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
      return true
    }
    const numberParser = parsePhoneNumber(number)
    let enableIspossibly = false
    if (codesStartsWithZero.includes(numberParser?.countryCallingCode)) {
      const inputNumber = returnRawNumber(number)
      const validationsForUK = ['01', '02', '07', '0800', '0808', '0845', '0870', '0871']
      const result = validationsForUK.some(areaCode => inputNumber?.number?.startsWith(areaCode))
      enableIspossibly = result
    }

    return enableIspossibly ? numberParser?.isPossible?.() : numberParser?.isValid?.()
  }

  const returnRawNumber = (number) => {
    if (!number) return null
    if (!parseInt(configs?.validation_phone_number_lib?.value ?? 1, 10)) {
      return null
    }
    const numberParser = parsePhoneNumber(number)
    const validations = ['0', '+']
    if (validations.includes(phoneRef?.current?.value[0]) && codesStartsWithZero.includes(numberParser?.countryCallingCode)) {
      const numberInput = phoneRef?.current?.value.replace('-', '')
      let numberRaw = ''
      numberInput?.split(' ')?.filter((_splited, i) => i > 0 || (i === 0 && _splited[0] === '0'))?.map(splited => {
        numberRaw = `${numberRaw}${splited}`
        return numberRaw
      })

      return {
        number: numberRaw,
        countryCallingCode: numberParser?.countryCallingCode ? `+${numberParser?.countryCallingCode}` : null
      }
    }

    return number
  }

  useEffect(() => {
    if (value) {
      handleIsValid && handleIsValid(isValidPhoneNumber(value))
    }
  }, [value])

  return (
    <Container className='phone_number' disabled={disabled} isValid={value ? isValidPhoneNumber(value) : true}>
      <>
        {props.beforeElements?.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>))}
        {props.beforeComponents?.map((BeforeComponent, i) => (
          <BeforeComponent key={i} {...props} />))}
        <PhoneInput
          ref={phoneRef}
          disabled={disabled}
          placeholder={t('PHONE_NUMBER', 'Phone number')}
          defaultCountry={findExitingCode(configs?.default_country_code?.value?.toUpperCase())}
          value={value}
          displayInitialValueAsLocalNumber={!isUser}
          international={isUser}
          onChange={(val) => setValue && setValue(val, isValidPhoneNumber(val), returnRawNumber(val))}
        />
        {value && !isValidPhoneNumber(value) && !disabled && (
          <>
            {((auth && user?.country_phone_code) || !auth || value.includes('+')) && (
              <ErrorMsg>{t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')}</ErrorMsg>
            )}

            {auth && !user?.country_phone_code && !value.includes('+') && (
              <ErrorMsg>{t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')}</ErrorMsg>
            )}
          </>
        )}
        {props.afterComponents?.map((AfterComponent, i) => (
          <AfterComponent key={i} {...props} />))}
        {props.afterElements?.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>))}
      </>
    </Container>
  )
}
