import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import parsePhoneNumber from 'libphonenumber-js'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import FiUser from '@meronex/icons/fi/FiUser'
import MdExitToApp from '@meronex/icons/md/MdExitToApp'
import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail'
import RiLockPasswordLine from '@meronex/icons/ri/RiLockPasswordLine'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import {
  LoginForm as LoginFormController,
  ReCaptcha,
  useLanguage
  // useSession
} from 'ordering-components-admin'

import { Alert, InputPhoneNumber } from '../../Shared'
import { Button, Input } from '../../../styles'
import { capitalize } from '../../../utils'

import {
  LoginContainer,
  LoginHeroContainer,
  FormSide,
  FormInput,
  RedirectLink,
  TitleFormSide,
  InputWithIcon,
  WrapperPassword,
  TogglePassword,
  ReCAPTCHAWrapper
} from './styles'

const SignupFormUI = (props) => {
  const {
    // handleChangeInput,
    elementLinkToLogin,
    formState,
    isPopup,
    isReCaptchaEnable,
    handleReCaptcha
  } = props
  const [, t] = useLanguage()
  // const [, { login }] = useSession()
  const theme = useTheme()
  const { handleSubmit, register, errors } = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [passwordSee, setPasswordSee] = useState(false)
  const [userPhoneNumber, setUserPhoneNumber] = useState('')
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)

  const inputs = ['name', 'lastname', 'project_name', 'project']

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (e) => {
    console.log(e)
  }

  const onSubmit = () => {
    const isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true
    if (!userPhoneNumber) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      })
      return
    }
    if (!isPhoneNumberValid) {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      })
      // return
    }
    // handleButtonSignupClick && handleButtonSignupClick()
    // if (!formState.loading && formState.result.result && !formState.result.error) {
    //   handleSuccessSignup(formState.result.result)
    // }
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

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  return (
    <LoginContainer isPopup={isPopup}>
      <LoginHeroContainer bgimage={theme.images?.general?.loginHero}>
        <img src={theme?.images?.logos?.logotypeInvert} alt='Logo signup' />
      </LoginHeroContainer>

      <FormSide isPopup={isPopup}>
        <TitleFormSide>
          <h1>{t('WELCOME', 'Welcome!')}</h1>
          <p>
            {t(
              'SUBTITLE_ADMIN_SIGNUP',
              'Let’s start to admin your business now'
            )}
          </p>
        </TitleFormSide>

        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputs.map(field => (
            <InputWithIcon key={field}>
              <Input
                type='text'
                name={field}
                aria-label={field}
                placeholder={t(field.toUpperCase(), capitalize(field.replace('_', ' ')))}
                ref={register(field === 'project' ? {
                  required: t(
                    `VALIDATION_ERROR_${field.toUpperCase()}_REQUIRED`,
                    `${capitalize(field.replace('_', ' '))} is required`).replace('_attribute_', t(field.toUpperCase(), capitalize(field.replace('_', ' ')))
                  ),
                  pattern: {
                    value: /^[0-9a-zA-Z]+$/,
                    message: t(
                      'VALIDATION_ERROR_PROJECT',
                      'Invalid project, only letters and numbers'
                    ).replace('_attribute_', t(field.toUpperCase(), capitalize(field.replace('_', ' '))))
                  }
                } : {
                  required: t(
                    `VALIDATION_ERROR_${field.toUpperCase()}_REQUIRED`,
                    `${capitalize(field.replace('_', ' '))} is required`).replace('_attribute_', t(field.toUpperCase(), capitalize(field.replace('_', ' ')))
                  )
                })}
                onChange={handleChangeInput}
                autoComplete='off'
                autoCapitalize='off'
              />
              {['name', 'lastname'].includes(field) ? (
                <FiUser />
              ) : (
                <MdExitToApp />
              )}
            </InputWithIcon>
          ))}

          <InputWithIcon>
            <Input
              type='email'
              name='email'
              aria-label='email'
              placeholder={t('EMAIL')}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Email is required'
                ).replace('_attribute_', t('EMAIL', 'Email')),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t(
                    'VALIDATION_ERROR_EMAIL',
                    'Invalid email address'
                  ).replace('_attribute_', t('EMAIL', 'Email'))
                }
              })}
              onChange={handleChangeInput}
              autoComplete='off'
              autoCapitalize='off'
            />
            <HiOutlineMail />
          </InputWithIcon>

          <InputPhoneNumber
            value={userPhoneNumber}
            setValue={handleChangePhoneNumber}
            handleIsValid={setIsValidPhoneNumber}
          />

          <WrapperPassword>
            <Input
              type={!passwordSee ? 'password' : 'text'}
              name='password'
              aria-label='password'
              placeholder={t('PASSWORD')}
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Password is required'
                ).replace('_attribute_', t('PASSWORD', 'Password')),
                minLength: {
                  value: 5,
                  message: t(
                    'VALIDATION_ERROR_MIN_STRING',
                    'The Password must be at least 8 characters.'
                  )
                    .replace('_attribute_', t('PASSWORD', 'Password'))
                    .replace('_min_', 8)
                }
              })}
              onChange={handleChangeInput}
              autoComplete='off'
              autoCapitalize='off'
            />
            <RiLockPasswordLine />
            <TogglePassword onClick={() => setPasswordSee(!passwordSee)}>
              {!passwordSee ? <Eye /> : <EyeSlash />}
            </TogglePassword>
          </WrapperPassword>

          {isReCaptchaEnable && (
            <ReCAPTCHAWrapper>
              <ReCaptcha
                handleReCaptcha={handleReCaptcha}
              />
            </ReCAPTCHAWrapper>
          )}

          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={formState.loading}
          >
            {formState.loading ? t('LOADING') + '...' : t('SIGNUP')}
            <BsArrowRightShort />
          </Button>

          <RedirectLink isPopup={isPopup}>
            <span>{t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')}</span>
            {elementLinkToLogin}
          </RedirectLink>
        </FormInput>
      </FormSide>
      <Alert
        title={t('SIGNUP')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </LoginContainer>
  )
}

export const SignupForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: SignupFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
