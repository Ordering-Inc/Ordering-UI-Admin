import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import { useTheme } from 'styled-components'
import { Alert } from '../../Shared'

import {
  Container,
  InputWrapper,
  ButtonWrapper,
  SmsPreviewWrapper,
  SmsContentLayout,
  SmsPreviewContentWrapper,
  SmsPreviewContent
} from './styles'

export const CampaignSMS = (props) => {
  const {
    formState,
    campaignState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [sms, setSms] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (evt) => {
    setSms({ ...sms, [evt.target.name]: evt.target.value })
  }

  const handleSaveSms = () => {
    if (!sms?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!sms?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }
    handleChangeItem('contact_data', sms)
  }

  useEffect(() => {
    const contactData = formState?.changes?.contact_data ?? campaignState?.campaign?.contact_data
    if (contactData) setSms({ ...contactData })
  }, [formState, campaignState])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={sms.title || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGES', 'Messages')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={sms.body || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <SmsPreviewWrapper>
          <SmsContentLayout bgimage={theme.images.general.mobileHalfMask}>
            <SmsPreviewContentWrapper>
              <SmsPreviewContent>
                <h2>{sms.title || ''}</h2>
                <p>{sms.body || ''}</p>
              </SmsPreviewContent>
            </SmsPreviewContentWrapper>
          </SmsContentLayout>
        </SmsPreviewWrapper>
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
