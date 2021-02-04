import React, { useEffect, useState, useContext } from 'react'
import { ConfigFileContext } from '../../contexts/ConfigFileContext'

import { useForm } from 'react-hook-form'
import { Alert } from '../Confirm'
import {
  ForgotPasswordForm as ForgotPasswordController,
  useLanguage,
  useApi
} from 'ordering-components'
import {
  ForgotPasswordContainer,
  FormSide,
  HeroContainer,
  FormInput,
  TitleFormSide,
  RedirectLink
} from './styles'

import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { useTheme } from 'styled-components'

const ForgotPasswordUI = (props) => {
  const {
    hanldeChangeInput,
    handleButtonForgotPasswordClick,
    formState,
    formData,
    elementLinkToLogin,
    isPopup
  } = props

  const { handleSubmit, register, errors } = useForm()
  const [alertState, setAlertState] = useState({ open: false, title: '', content: [], success: false })
  const [, t] = useLanguage()
  const theme = useTheme()
  const [ordering] = useApi()

  const [configFile, setConfigFile] = useContext(ConfigFileContext)
  const [submitted, setSubmitted] = useState(false)
  const [projectName, setProjectName] = useState(null)

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
        content: `${t('SUCCESS_SEND_FORGOT_PASSWORD', 'Your link has been sent to the email')}: ${formData.email}`
      })
    }
  }, [formState.loading])

  const onSubmit = () => {
    const _configFile = { ...configFile }
    _configFile.project = projectName
    setConfigFile(_configFile)
    localStorage.setItem('project', projectName)
    setSubmitted(true)
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }
  const hanldeChangeProject = (e) => {
    setSubmitted(false)
    setProjectName(e.target.value)
  }
  useEffect(() => {
    if (ordering.project === '' || !submitted) return
    setAlertState({ ...alertState, success: true })
    handleButtonForgotPasswordClick()
  }, [ordering, submitted])

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
            onChange={(e) => hanldeChangeProject(e)}
            autoComplete='off'
          />
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
          <Button color='darkBlue' type='submit' disabled={formState.loading || alertState.success}>
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
        title={alertState.title}
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
