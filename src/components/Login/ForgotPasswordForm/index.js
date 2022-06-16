import React, { useEffect, useState, useContext } from 'react'
import { ConfigFileContext } from '../../../contexts/ConfigFileContext'
import MdExitToApp from '@meronex/icons/md/MdExitToApp'
import HiOutlineMail from '@meronex/icons/hi/HiOutlineMail'

import { useForm } from 'react-hook-form'
import { Alert } from '../../Shared'
import {
  ForgotPasswordForm as ForgotPasswordController,
  useLanguage,
  useApi,
  ReCaptcha
} from 'ordering-components-admin'
import {
  ForgotPasswordContainer,
  FormSide,
  HeroContainer,
  FormInput,
  TitleFormSide,
  RedirectLink,
  InputWithIcon,
  ReCAPTCHAWrapper
} from './styles'

import { Button, Input } from '../../../styles'
import { useTheme } from 'styled-components'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData,
    elementLinkToLogin,
    isPopup,
    isReCaptchaEnable,
    handleReCaptcha
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()
  const theme = useTheme()
  const [ordering] = useApi()

  const [configFile, setConfigFile] = useContext(ConfigFileContext)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        ...alertState,
        success: false,
        open: true,
        title: t('ERROR_UNKNOWN', 'An error has ocurred'),
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    }
    if (!formState.loading && !formState.result?.error && alertState.success) {
      setAlertState({
        ...alertState,
        open: true,
        title: t('LINK_SEND_SUCCESSFULLY', 'Link Sent Successfully'),
        content: t('IF_ACCOUNT_EXIST_EMAIL_SEND_PASSWORD', 'If an account exists with this email a password will be sent')
      })
    }
  }, [formState.loading])

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
      setSubmitted(false)
    }
  }, [formState])

  const onSubmit = () => {
    // const _configFile = { ...configFile }
    // _configFile.project = projectName
    // setConfigFile(_configFile)
    // localStorage.setItem('project', projectName)
    setSubmitted(true)
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  let timeout = null
  const handleChangeProject = (e) => {
    e.persist()
    clearTimeout(timeout)
    setSubmitted(false)
    timeout = setTimeout(function () {
      setConfigFile({ ...configFile, project: e.target.value })
    }, 750)
  }

  useEffect(() => {
    if (ordering.project === '' || !submitted) return
    setAlertState({ ...alertState, success: true })
    handleButtonForgotPasswordClick()
  }, [ordering, submitted])

  useEffect(() => {
    setConfigFile({
      ...configFile,
      project: window.localStorage.getItem('project') || null
    })
  }, [])

  return (
    <ForgotPasswordContainer isPopup={isPopup}>
      <HeroContainer bgimage={theme.images?.general?.loginHero}>
        <img src={theme?.images?.logos?.logotypeInvert} alt='Logo login' />
      </HeroContainer>
      <FormSide isPopup={isPopup}>
        <TitleFormSide>
          <h1>{t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}</h1>
          <p>{t('SUBTITLE_FORGOT_PASSWORD', 'Enter your email addres and we\'ll send you a link to reset your password.')}</p>
        </TitleFormSide>
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
                  'The project field is required'
                ).replace('_attribute_', t('PROJECT', 'Project'))
              })}
              onChange={(e) => handleChangeProject(e)}
              autoComplete='off'
            />
            <MdExitToApp />
          </InputWithIcon>
          <InputWithIcon>
            <Input
              type='text'
              name='email'
              aria-label='email'
              spellcheck='false'
              placeholder={t('EMAIL', 'Email')}
              onChange={(e) => hanldeChangeInput(e)}
              ref={register({
                required: t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
                }
              })}
              autoComplete='off'
            />
            <HiOutlineMail />
          </InputWithIcon>
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
            disabled={formState.loading || alertState.success}
          >
            {formState.loading
              ? t('LOADING', 'Loading...')
              : alertState.success && formState.result.result
                ? t('LINK_SEND_FORGOT_PASSWORD', 'Link Sent')
                : t('FRONT_RECOVER_PASSWORD', 'Recover Password')}
          </Button>
          {elementLinkToLogin && (
            <RedirectLink register isPopup={isPopup}>
              <span>{t('SIGN_IN_MESSAGE', 'Do you want to sign in?')}</span>
              {elementLinkToLogin}
            </RedirectLink>
          )}
        </FormInput>
      </FormSide>
      <Alert
        title={alertState.title || t('TITLE_FORGOT_PASSWORD', 'Forgot your password?')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </ForgotPasswordContainer>
  )
}

export const ForgotPasswordForm = (props) => {
  const ForgotPasswordProps = {
    ...props,
    UIComponent: ForgotPasswordUI
  }
  return <ForgotPasswordController {...ForgotPasswordProps} />
}
