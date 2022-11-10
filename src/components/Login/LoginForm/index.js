import React, { useState, useEffect, useContext } from 'react'
import { ConfigFileContext } from '../../../contexts/ConfigFileContext'
import { useForm } from 'react-hook-form'
import {
  LoginForm as LoginFormController,
  ReCaptcha,
  useLanguage,
  useApi,
  useConfig
} from 'ordering-components-admin'
import { useCountdownTimer } from '../../../hooks/useCountdownTimer'
import { Alert } from '../../Shared'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import MdExitToApp from '@meronex/icons/md/MdExitToApp'
import { Button, Input } from '../../../styles'
import { useTheme } from 'styled-components'
import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail'
import RiLockPasswordLine from '@meronex/icons/ri/RiLockPasswordLine'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import OtpInput from 'react-otp-input'
import { formatSeconds } from '../../../utils'

import {
  LoginContainer,
  LoginHeroContainer,
  FormSide,
  FormInput,
  RedirectLink,
  LoginWith,
  TitleFormSide,
  InputWithIcon,
  WrapperPassword,
  TogglePassword,
  ReCAPTCHAWrapper,
  Tabs,
  Tab,
  CountdownTimer,
  OtpWrapper,
  ResendCode
} from './styles'

const LoginFormUI = (props) => {
  const {
    useLoginOtpEmail,
    useLoginByCellphone,
    handleChangeInput,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup,
    isReCaptchaEnable,
    handleReCaptcha,

    checkPhoneCodeState,
    otpType,
    setOtpType,
    handleChangeTab,
    generateOtpCode,
    otpState,
    setOtpState
  } = props
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const { handleSubmit, register, errors } = useForm()
  const [configFile, setConfigFile] = useContext(ConfigFileContext)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [reCaptchaVersion, setRecaptchaVersion] = useState({ version: 'v3', siteKey: '' })
  const [submitted, setSubmitted] = useState(false)
  const [passwordSee, setPasswordSee] = useState(false)
  const [loginWithOtpState, setLoginWithOtpState] = useState(false)
  const [willVerifyOtpState, setWillVerifyOtpState] = useState(false)

  const numOtpInputs = loginTab === 'otp' ? 6 : 4
  const otpPlaceholder = [...Array(numOtpInputs)].fill(0).join('')
  const [otpLeftTime, , resetOtpLeftTime] = useCountdownTimer(
    600, !checkPhoneCodeState?.loading && willVerifyOtpState)

  const isOtpEmail = loginTab === 'otp' && otpType === 'email'

  const onSubmit = () => {
    setSubmitted(true)
  }

  let timeout = null
  const hanldeChangeProject = (e) => {
    e.persist()
    clearTimeout(timeout)
    setSubmitted(false)
    timeout = setTimeout(function () {
      setConfigFile({ ...configFile, project: e.target.value })
    }, 750)
  }

  const handleChangeOtpType = (type) => {
    handleChangeTab('otp')
    setOtpType(type)
  }

  const handleSendOtp = () => {
    if (willVerifyOtpState) {
      setOtpState('')
      resetOtpLeftTime()
      if (loginTab === 'otp') {
        generateOtpCode()
        setWillVerifyOtpState(true)
      }
    }
  }

  useEffect(() => {
    if (ordering.project === null || !submitted) return
    if (loginTab === 'otp') {
      generateOtpCode()
      setWillVerifyOtpState(true)
    } else {
      handleButtonLoginClick()
    }
  }, [ordering, submitted])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      if (formState.result?.result?.[0] === 'ERROR_AUTH_VERIFICATION_CODE') {
        setRecaptchaVersion({ version: 'v2', siteKey: configs?.security_recaptcha_site_key?.value })
        setAlertState({
          open: true,
          content: [t('TRY_AGAIN', 'Please try again')]
        })
        setSubmitted(false)
        return
      }
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
      setSubmitted(false)
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
    setOtpState('')
  }

  useEffect(() => {
    if (otpState?.length === numOtpInputs) {
      if (loginTab === 'otp') {
        handleButtonLoginClick()
      }
    }
  }, [otpState])

  useEffect(() => {
    if (checkPhoneCodeState?.result?.error) {
      setAlertState({
        open: true,
        content: checkPhoneCodeState?.result?.result || [t('ERROR', 'Error')]
      })
    } else if (checkPhoneCodeState?.result?.result) {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      })
      resetOtpLeftTime()
    }
  }, [checkPhoneCodeState])

  useEffect(() => {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      })
    }
  }, [otpLeftTime])

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0 && configs?.security_recaptcha_auth?.value === '1') {
      if (configs?.security_recaptcha_type?.value === 'v3' &&
        configs?.security_recaptcha_score_v3?.value > 0 &&
        configs?.security_recaptcha_site_key_v3?.value
      ) {
        setRecaptchaVersion({ version: 'v3', siteKey: configs?.security_recaptcha_site_key_v3?.value })
        return
      }
      if (configs?.security_recaptcha_site_key?.value) {
        setRecaptchaVersion({ version: 'v2', siteKey: configs?.security_recaptcha_site_key?.value })
      }
    }
  }, [configs])

  useEffect(() => {
    setConfigFile({
      ...configFile,
      project: window.localStorage.getItem('project') || null
    })
  }, [])

  return (
    <LoginContainer isPopup={isPopup}>
      <LoginHeroContainer bgimage={configs?.dashboard_login_background?.value || theme.images?.general?.loginHero}>
        <img src={configs?.dashboard_logo?.value || theme?.images?.logos?.logotypeInvert} alt='Logo login' />
      </LoginHeroContainer>

      <FormSide isPopup={isPopup}>
        <TitleFormSide>
          <h1>{t('WELCOME', 'Welcome!')}</h1>
          <p>
            {t(
              'SUBTITLE_ADMIN_LOGIN',
              'Let’s start to admin your business now'
            )}
          </p>
        </TitleFormSide>

        {(ordering?.project && useLoginOtpEmail) && !loginWithOtpState && !willVerifyOtpState && (
          <LoginWith>
            <Tabs>
              <Tab
                onClick={() => handleChangeTab('email')}
                active={loginTab === 'email'}
              >
                {t('LOGIN_WITH_EMAIL', 'Login with Email')}
              </Tab>
              <Tab
                onClick={() => handleChangeOtpType('email')}
                active={isOtpEmail}
              >
                {t('BY_OTP_EMAIL', 'by Otp Email')}
              </Tab>
            </Tabs>
          </LoginWith>
        )}

        <FormInput
          noValidate
          isPopup={isPopup}
          onSubmit={handleSubmit(onSubmit)}
        >
          {!willVerifyOtpState && (
            <InputWithIcon>
              <Input
                type='text'
                name='project'
                aria-label='project'
                placeholder={t('PROJECT', 'Project')}
                ref={register({
                  required: t(
                    'VALIDATION_ERROR_REQUIRED',
                    'Project is required'
                  ).replace('_attribute_', t('PROJECT', 'Project'))
                })}
                onChange={(e) => hanldeChangeProject(e)}
                autoComplete='off'
                autoCapitalize='off'
              />
              <MdExitToApp />
            </InputWithIcon>
          )}

          {!willVerifyOtpState && (
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
                onChange={(e) => handleChangeInput(e)}
                autoComplete='off'
                autoCapitalize='off'
              />
              <HiOutlineMail />
            </InputWithIcon>
          )}
          {useLoginByCellphone && loginTab === 'cellphone' && !willVerifyOtpState && (
            <Input
              type='tel'
              name='cellphone'
              aria-label='cellphone'
              placeholder='Cellphone'
              ref={register({
                required: t(
                  'VALIDATION_ERROR_REQUIRED',
                  'Cellphone is required'
                ).replace('_attribute_', t('CELLPHONE', 'Cellphone'))
              })}
              onChange={(e) => handleChangeInput(e)}
              autoComplete='off'
            />
          )}

          {loginTab !== 'otp' && !willVerifyOtpState && (
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
                onChange={(e) => handleChangeInput(e)}
                autoComplete='off'
                autoCapitalize='off'
              />
              <RiLockPasswordLine />
              <TogglePassword onClick={() => setPasswordSee(!passwordSee)}>
                {!passwordSee ? <Eye /> : <EyeSlash />}
              </TogglePassword>
            </WrapperPassword>
          )}

          {isReCaptchaEnable && (
            <ReCAPTCHAWrapper>
              <ReCaptcha handleReCaptcha={handleReCaptcha} reCaptchaVersion={reCaptchaVersion} />
            </ReCAPTCHAWrapper>
          )}

          {(!willVerifyOtpState &&
            <Button
              borderRadius='8px'
              color='primary'
              type='submit'
              disabled={formState.loading}
            >
              {formState.loading
                ? t('LOADING') + '...'
                : loginWithOtpState || loginTab === 'otp'
                  ? t('GET_VERIFY_CODE', 'Get verify code')
                  : t('LOGIN', 'Login')}
              <BsArrowRightShort />
            </Button>
          )}
          {(willVerifyOtpState && !checkPhoneCodeState?.loading) && (
            <>
              <CountdownTimer>
                <span>{formatSeconds(otpLeftTime)}</span>
              </CountdownTimer>

              <OtpWrapper>
                <OtpInput
                  value={otpState}
                  onChange={otp => setOtpState(otp)}
                  numInputs={numOtpInputs}
                  containerStyle='otp-container'
                  inputStyle='otp-input'
                  placeholder={otpPlaceholder}
                  isInputNum
                  shouldAutoFocus
                  isDisabled={otpLeftTime === 0}
                />
              </OtpWrapper>
              <ResendCode disabled={otpLeftTime > 520} onClick={handleSendOtp}>
                {t('RESEND_AGAIN', 'Resend again')}?
              </ResendCode>
              <Button
                borderRadius='8px'
                type='button'
                color='primary'
                disabled={formState.loading}
                onClick={() => {
                  setLoginWithOtpState(false)
                  setWillVerifyOtpState(false)
                }}
              >
                {t('CANCEL', 'Cancel')}
              </Button>
            </>
          )}

          {loginTab !== 'otp' && (
            <RedirectLink isPopup={isPopup}>
              <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
              {elementLinkToForgotPassword}
            </RedirectLink>
          )}
        </FormInput>

        {elementLinkToSignup && (
          <RedirectLink register isPopup={isPopup}>
            <span>{t('NEW_ON_PLATFORM', 'New on Ordering?')}</span>
            {elementLinkToSignup}
          </RedirectLink>
        )}
      </FormSide>
      <Alert
        title={t('LOGIN')}
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

export const LoginForm = (props) => {
  const loginControllerProps = {
    ...props,
    UIComponent: LoginFormUI,
    allowedLevels: [0, 2, 5, 8]
  }
  return <LoginFormController {...loginControllerProps} />
}
