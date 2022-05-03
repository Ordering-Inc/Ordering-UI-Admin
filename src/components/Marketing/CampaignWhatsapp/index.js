import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Input, TextArea, Button } from '../../../styles'
import { Alert } from '../../Shared'

import {
  Container,
  InputWrapper,
  WhatsAppPreviewWrapper,
  ButtonWrapper,
  WhatsAppPreviewLayout,
  WhatsAppContentHeader,
  WhatsAppContent,
  WhatsAppMessageContent
} from './styles'

export const CampaignWhatsapp = (props) => {
  const {
    isAddMode,
    contactState,
    handleChangeData,
    handleUpdateContact,
    handleAddCampaign,
    formState
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

  const handleSaveWhatsApp = () => {
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

    if (isAddMode) {
      if (formState?.changes?.conditions?.length > 0) {
        for (const item of formState?.changes?.conditions) {
          if (item?.date_condition === '=' || item?.date_condition === '>') {
            setAlertState({
              open: true,
              content: t('REQUIRED_BEFORE_OR_RANGE_OPTION_WHEN_FIXED', 'when audience type is Fixed, date condition is required Before or Date range option')
            })
            return
          }
          if (item?.condition === '=') {
            setAlertState({
              open: true,
              content: t('REQUIRED_MORE_OR_LESS_OPTION_WHEN_FIXED', 'when audience type is Fixed, order condition is required More or Less option')
            })
            return
          }
        }
      }
      handleAddCampaign()
    } else {
      handleUpdateContact()
    }
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
          <label>{t('MESSAGES', 'Messages')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={contactState?.changes?.contact_data?.body || ''}
            onChange={handleChangeData}
          />
        </InputWrapper>
        <WhatsAppPreviewWrapper>
          <WhatsAppPreviewLayout>
            <WhatsAppContentHeader bgimage={theme.images.general.whatsappHeader} />
            <WhatsAppContent>
              <WhatsAppMessageContent>
                <h2>{contactState?.changes?.contact_data?.title || ''}</h2>
                <p>{contactState?.changes?.contact_data?.body || ''}</p>
              </WhatsAppMessageContent>
            </WhatsAppContent>
          </WhatsAppPreviewLayout>
        </WhatsAppPreviewWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSaveWhatsApp()}
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
