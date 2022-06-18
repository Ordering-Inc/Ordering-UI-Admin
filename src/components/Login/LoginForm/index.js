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
import { Alert } from '../../Shared'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import MdExitToApp from '@meronex/icons/md/MdExitToApp'
import { Button, Input, Tabs, Tab } from '../../../styles'
import { useTheme } from 'styled-components'
import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail'
import RiLockPasswordLine from '@meronex/icons/ri/RiLockPasswordLine'
import { Eye, EyeSlash } from 'react-bootstrap-icons'

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
  ReCAPTCHAWrapper
} from './styles'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeInput,
    hanldeChangeTab,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup,
    isReCaptchaEnable,
    handleReCaptcha
  } = props
  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ configs }] = useConfig()
  const theme = useTheme()
  const { handleSubmit, register, errors } = useForm()
  const [configFile, setConfigFile] = useContext(ConfigFileContext)

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [submitted, setSubmitted] = useState(false)
  const [passwordSee, setPasswordSee] = useState(false)

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

  useEffect(() => {
    if (ordering.project === null || !submitted) return
    handleButtonLoginClick()
  }, [ordering, submitted])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
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
  }

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

        {useLoginByEmail && useLoginByCellphone && (
          <LoginWith isPopup={isPopup}>
            <Tabs variant='primary'>
              {useLoginByEmail && (
                <Tab
                  onClick={() => hanldeChangeTab('email')}
                  active={loginTab === 'email'}
                >
                  {t('LOGIN_WITH_EMAIL', 'Login with Email')}
                </Tab>
              )}
              {useLoginByCellphone && (
                <Tab
                  onClick={() => hanldeChangeTab('cellphone')}
                  active={loginTab === 'cellphone'}
                >
                  {t('LOGIN_WITH_CELLPHONE', 'Login with Cellphone')}
                </Tab>
              )}
            </Tabs>
          </LoginWith>
        )}

        {(useLoginByCellphone || useLoginByEmail) && (
          <FormInput
            noValidate
            isPopup={isPopup}
            onSubmit={handleSubmit(onSubmit)}
          >
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

            {useLoginByEmail && loginTab === 'email' && (
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
            {useLoginByCellphone && loginTab === 'cellphone' && (
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
              {formState.loading ? t('LOADING') + '...' : t('LOGIN')}
              <BsArrowRightShort />
            </Button>

            <RedirectLink isPopup={isPopup}>
              <span>{t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')}</span>
              {elementLinkToForgotPassword}
            </RedirectLink>
          </FormInput>
        )}

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
    allowedLevels: [0, 2, 5]
  }
  return <LoginFormController {...loginControllerProps} />
}
