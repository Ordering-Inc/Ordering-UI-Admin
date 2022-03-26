import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import { Alert } from '../../Shared'
import {
  Container,
  InputWrapper,
  EmailPreviewWrapper,
  EmailPreviewHeader,
  PointGroup,
  EmailPreviewContent,
  ButtonWrapper
} from './styles'

export const CampaignEmail = (props) => {
  const {
    formState,
    campaignState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()

  const [email, setEmail] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (evt) => {
    setEmail({ ...email, [evt.target.name]: evt.target.value })
  }

  const handleSaveEmail = () => {
    if (!email?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!email?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }
    handleChangeItem('contact_data', email)
  }

  useEffect(() => {
    const contactData = formState?.changes?.contact_data ?? campaignState?.campaign?.contact_data
    if (contactData) setEmail({ ...contactData })
  }, [formState, campaignState])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={email?.title || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGES', 'Messages')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={email?.body || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <EmailPreviewWrapper>
          <EmailPreviewHeader>
            <PointGroup>
              <div />
              <div />
              <div />
            </PointGroup>
          </EmailPreviewHeader>
          <EmailPreviewContent>
            <h2>{email?.title || ''}</h2>
            <p>{email?.body || ''}</p>
          </EmailPreviewContent>
        </EmailPreviewWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={handleSaveEmail}
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
