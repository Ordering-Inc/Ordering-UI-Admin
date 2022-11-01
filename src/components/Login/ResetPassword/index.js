import React, { useRef, useEffect, useState, useContext } from 'react'
import { ConfigFileContext } from '../../../contexts/ConfigFileContext'

import { useForm } from 'react-hook-form'
import RiLockPasswordLine from '@meronex/icons/ri/RiLockPasswordLine'
import MdExitToApp from '@meronex/icons/md/MdExitToApp'

import { Alert } from '../../Shared'

import {
  useLanguage,
  ResetPassword as ResetPasswordController
} from 'ordering-components-admin'

import {
  ResetPasswordContainer,
  FormSide,
  FormInput,
  TitleFormSide,
  HeroContainer,
  InputWithIcon,
  RedirectLink
} from './styles'

import { Input } from '../../../styles/Inputs'
import { Button } from '../../../styles/Buttons'
import { useTheme } from 'styled-components'

const ResetPasswordUI = (props) => {
  const {
    code,
    random,
    project,
    formState,
    resetPasswordData,
    handleResetPassword,
    handleChangeInput,
    redirectResetPassword,
    onPasswordReset,
    isSuccessfulReset,
    elementLinkToLogin
  } = props

  const { handleSubmit, register, errors, watch, reset } = useForm()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [configFile, setConfigFile] = useContext(ConfigFileContext)

  const [, t] = useLanguage()
  const theme = useTheme()

  const password = useRef({})

  password.current = watch('password', '')

  const onSubmit = () => {
    if (code && random) {
      handleResetPassword()
    } else {
      redirectResetPassword && redirectResetPassword(resetPasswordData)
      reset({ project: '', password: '' });
    }
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  let timeout = null
  const handleChangeProject = (e) => {
    e.persist()
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      setConfigFile({ ...configFile, project: e.target.value })
    }, 750)
  }

  useEffect(() => {
    if (!formState.loading && formState.result?.error) {
      setAlertState({
        open: true,
        content: formState.result?.result || [t('ERROR', 'Error')]
      })
    } else if (!formState.loading && formState.result?.result?.length) {
      setAlertState({
        open: true,
        content: formState.result?.result === 'OK' ? t('PASSWORD_RESET_SUCCESS', 'Password changed successfully') : t(formState.result?.result, 'Password changed successfully')
      })
    }
  }, [formState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(error => error.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (project) {
      setConfigFile({ ...configFile, project: project })
    }
    return () => closeAlert()
  }, [])

  return (
    <>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))}
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))}
      <ResetPasswordContainer>
        <HeroContainer bgimage={theme.images?.general?.loginHero}>
          <img src={theme?.images?.logos?.logotypeInvert} alt='Logo login' />
        </HeroContainer>
        {code && random ? (
          <FormSide>
            <TitleFormSide>
              <h1>{t('TITLE_RESET_PASSWORD', 'Reset password')}</h1>
              <p>{t('SUBTITLE_RESET_PASSWORD', 'Reset your password')}</p>
            </TitleFormSide>
            <FormInput
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              { !project && (
                <InputWithIcon>
                  <Input
                    type='text'
                    name='project'
                    aria-label='project'
                    spellcheck='false'
                    ref={register({
                      required: t(
                        'VALIDATION_ERROR_REQUIRED',
                        'Project is required'
                      ).replace('_attribute_', t('PROJECT', 'Project')),
                      minLength: {
                        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                      }
                    })}
                    placeholder={t('PROJECT', 'Project')}
                    onChange={(e) => handleChangeProject(e)}
                    autoComplete='off'
                    autoCapitalize='off'
                  />
                  <MdExitToApp />
                </InputWithIcon>
              )}
              <InputWithIcon>
                <Input
                  type='password'
                  name='password'
                  aria-label='password'
                  spellcheck='false'
                  ref={register({
                    required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field password is required'),
                    minLength: {
                      value: 8,
                      message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
                    }
                  })}
                  placeholder={t('NEW_PASSWORD', 'New passowrd')}
                  onChange={handleChangeInput}
                  autoComplete='off'
                />
                <RiLockPasswordLine />
              </InputWithIcon>
              <InputWithIcon>
                <Input
                  type='password'
                  name='confirm-password'
                  aria-label='confirm-password'
                  spellcheck='false'
                  ref={register({
                    required: t('VALIDATION_ERROR_PASSWORD_CONFIRM_REQUIRED', 'The field password confirm is required'),
                    validate: value =>
                      value === password.current || t('VALIDATION_ERROR_PASSWORDS_MATCH', 'The passwords do not match')
                  })}
                  placeholder={t('CONFIRM_PASSWORD', 'Confirm Password')}
                  onChange={handleChangeInput}
                  autoComplete='off'
                />
                <RiLockPasswordLine />
              </InputWithIcon>
              <Button
                type='submit'
                color={(formState.loading) ? 'secondary' : 'primary'}
                disabled={(formState.loading)}
              >
                {!formState.loading ? t('CHANGE_PASSWORD', 'Change password') : t('LOADING', 'Loading')}
              </Button>
              {elementLinkToLogin && (
                <RedirectLink register>
                  <span>{t('SIGN_IN_MESSAGE', 'Do you want to sign in?')}</span>
                  {elementLinkToLogin}
                </RedirectLink>
              )}
            </FormInput>
          </FormSide>
        ) : (
          <FormSide>
            <TitleFormSide>
              <h1>{t('TITLE_RESET_PASSWORD', 'Reset password')}</h1>
              <p>{t('RESET_PASSWORD_CODES_TITLE', 'Please insert the codes')}</p>
            </TitleFormSide>
            <FormInput
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              {!code && (
                <InputWithIcon>
                  <Input
                    name='code'
                    aria-label='code'
                    ref={register({
                      required: t('RESET_PASSWORD_CODE_REQUIRED', 'The field code is required')
                    })}
                    placeholder={t('CODE', 'Code')}
                    onChange={handleChangeInput}
                    autoComplete='off'
                  />
                  <MdExitToApp />
                </InputWithIcon>
              )}
              {!random && (
                <InputWithIcon>
                  <Input
                    name='random'
                    aria-label='random'
                    ref={register({
                      required: t('RESET_PASSWORD_RANDOM_REQUIRED', 'The field random is required')
                    })}
                    placeholder={t('RAMDON', 'Random')}
                    onChange={handleChangeInput}
                    autoComplete='off'
                  />
                  <MdExitToApp />
                </InputWithIcon>
              )}
              <Button
                type='submit'
                color='primary'
              >
                {t('SUBMIT_CODES', 'Submit codes')}
              </Button>
            </FormInput>
          </FormSide>
        )}
        <Alert
          title={t('RESET_PASSWORD', 'Reset Password')}
          content={alertState?.content}
          acceptText={t('ACCEPT', 'Accept')}
          open={alertState.open}
          onClose={() => closeAlert()}
          onAccept={() => isSuccessfulReset ? onPasswordReset() : closeAlert()}
          closeOnBackdrop={false}
        />
      </ResetPasswordContainer>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))}
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))}
    </>
  )
}

export const ResetPassword = (props) => {
  const resetPasswordProps = {
    ...props,
    UIComponent: ResetPasswordUI
  }

  return <ResetPasswordController {...resetPasswordProps} />
}
