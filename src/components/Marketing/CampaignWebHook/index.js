import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import { Alert } from '../../Shared'

import {
  Container,
  InputWrapper,
  ButtonWrapper
} from './styles'

export const CampaignWebHook = (props) => {
  const {
    formState,
    campaignState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const [webHook, setWebHook] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (evt) => {
    setWebHook({ ...webHook, [evt.target.name]: evt.target.value })
  }

  const handleSaveSms = () => {
    if (!webHook?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!webHook?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }
    if (!webHook?.webhook) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'URL is required').replace('_attribute_', t('URL', 'URL'))
      })
      return
    }
    handleChangeItem('contact_data', webHook)
  }

  useEffect(() => {
    const contactData = formState?.changes?.contact_data ?? campaignState?.campaign?.contact_data
    if (contactData) setWebHook({ ...contactData })
  }, [formState, campaignState])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={setWebHook.title || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGES', 'Messages')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={setWebHook.body || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('HOOKS', 'Hooks')}</label>
          <Input
            name='webhook'
            placeholder={t('URL', 'URL')}
            defaultValue={setWebHook.webhook || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSaveSms()}
          disabled={formState.loading}
        >
          {t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
      <Alert
        title={t('CAMPAIGN', 'Campaign')}
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
