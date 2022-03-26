import React, { useEffect, useState } from 'react'
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
    formState,
    campaignState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [whatsApp, setWhatsApp] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (evt) => {
    setWhatsApp({ ...whatsApp, [evt.target.name]: evt.target.value })
  }

  const handleSaveWhatsApp = () => {
    if (!whatsApp?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!whatsApp?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }
    handleChangeItem('contact_data', whatsApp)
  }

  useEffect(() => {
    const contactData = formState?.changes?.contact_data ?? campaignState?.campaign?.contact_data
    if (contactData) setWhatsApp({ ...contactData })
  }, [formState, campaignState])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={whatsApp?.title || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGES', 'Messages')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={whatsApp?.body || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <WhatsAppPreviewWrapper>
          <WhatsAppPreviewLayout>
            <WhatsAppContentHeader bgimage={theme.images.general.whatsappHeader} />
            <WhatsAppContent>
              <WhatsAppMessageContent>
                <h2>{whatsApp?.title || ''}</h2>
                <p>{whatsApp?.body || ''}</p>
              </WhatsAppMessageContent>
            </WhatsAppContent>
          </WhatsAppPreviewLayout>
        </WhatsAppPreviewWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSaveWhatsApp()}
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
