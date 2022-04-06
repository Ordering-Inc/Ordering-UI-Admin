import React, { useState } from 'react'
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
    isAddMode,
    contactState,
    handleChangeData,
    handleUpdateContact,
    handleAddCampaign
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleSaveSms = () => {
    if (!contactState?.changes?.contact_data?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!contactState?.changes?.contact_data?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }

    if (isAddMode) handleAddCampaign()
    else handleUpdateContact()
  }

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={contactState?.changes?.contact_data?.title || ''}
            onChange={handleChangeData}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGE', 'Message')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={contactState?.changes?.contact_data?.body || ''}
            onChange={handleChangeData}
          />
        </InputWrapper>
        <SmsPreviewWrapper>
          <SmsContentLayout bgimage={theme.images.general.mobileHalfMask}>
            <SmsPreviewContentWrapper>
              <SmsPreviewContent>
                <h2>{contactState?.changes?.contact_data?.title || ''}</h2>
                <p>{contactState?.changes?.contact_data?.body || ''}</p>
              </SmsPreviewContent>
            </SmsPreviewContentWrapper>
          </SmsContentLayout>
        </SmsPreviewWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSaveSms()}
          disabled={contactState.loading}
        >
          {isAddMode ? t('ADD', 'Add') : t('SAVE', 'Save')}
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
