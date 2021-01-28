import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  LoginForm as LoginFormController,
  useLanguage
} from 'ordering-components'
import { Alert } from '../Confirm'
import BsArrowRightShort from '@meronex/icons/bs/BsArrowRightShort'
import {
  LoginContainer,
  LoginHeroContainer,
  FormSide,
  FormInput,
  RedirectLink,
  LoginWith,
  TitleFormSide,
  InputWithIcon
} from './styles'

import { Tabs, Tab } from '../../styles/Tabs'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const LoginFormUI = (props) => {
  const {
    useLoginByEmail,
    useLoginByCellphone,
    hanldeChangeInput,
    hanldeChangeTab,
    handleButtonLoginClick,
    elementLinkToSignup,
    elementLinkToForgotPassword,
    formState,
    loginTab,
    isPopup
  } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const theme = useTheme()

  const onSubmit = async () => {
    handleButtonLoginClick()
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR')]
      })
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

  return (
    <LoginContainer isPopup={isPopup}>
      <LoginHeroContainer bgimage={theme.images?.general?.loginHero}>
        <img src={theme?.images?.logos?.logotypeInvert} alt='Logo login' />
      </LoginHeroContainer>

      <FormSide isPopup={isPopup}>
        <TitleFormSide>
          <h1>{t('WELCOME', 'Welcome!')}</h1>
          <p>
            {t(
              'LET’START_TO_ADMIN_YOUR_BUSINESS_NOW',
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
                  onChange={(e) => hanldeChangeInput(e)}
                />
                <img src={theme?.images?.icons?.email} alt='email' />
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
                onChange={(e) => hanldeChangeInput(e)}
              />
            )}

            <InputWithIcon>
              <Input
                type='password'
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
                onChange={(e) => hanldeChangeInput(e)}
              />
              <img src={theme?.images?.icons?.lock} alt='lock' />
            </InputWithIcon>
            <Button color='darkBlue' type='submit' disabled={formState.loading}>
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
    UIComponent: LoginFormUI
  }
  return <LoginFormController {...loginControllerProps} />
}
