import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Button } from '../../../styles'
import { X as CloseIcon } from 'react-bootstrap-icons'
import { Alert } from '../../Shared'

import {
  Container,
  InputWrapper,
  EmailPreviewWrapper,
  EmailPreviewHeader,
  PointGroup,
  EmailPreviewContent,
  ButtonWrapper,
  PopupContent,
  HeaderWrapper,
  PopupButtonWrapper
} from './styles'

export const CampaignPopup = (props) => {
  const {
    formState,
    campaignState,
    handleChangeItem
  } = props

  const [, t] = useLanguage()

  const [popup, setPopup] = useState({})
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeInput = (evt) => {
    setPopup({ ...popup, [evt.target.name]: evt.target.value })
  }

  const handleSaveNotification = () => {
    if (!popup?.title) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Title is required').replace('_attribute_', t('TITLE', 'Title'))
      })
      return
    }
    if (!popup?.body) {
      setAlertState({
        open: true,
        content: t('VALIDATION_ERROR_REQUIRED', 'Body is required').replace('_attribute_', t('BODY', 'Body'))
      })
      return
    }
    handleChangeItem('contact_data', popup)
  }

  useEffect(() => {
    const contactData = formState?.changes?.contact_data ?? campaignState?.campaign?.contact_data
    if (contactData) setPopup({ ...contactData })
  }, [formState, campaignState])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('TITLE', 'Title')}</label>
          <Input
            name='title'
            placeholder={t('TITLE', 'Title')}
            defaultValue={popup?.title || ''}
            onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('MESSAGE', 'Message')}</label>
          <TextArea
            name='body'
            placeholder={t('WRITE_MESSAGE', 'Write a message')}
            defaultValue={popup?.body || ''}
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
            <PopupContent>
              <HeaderWrapper>
                <h1>{popup?.title | ''}</h1>
                <CloseIcon />
              </HeaderWrapper>
              <p>{popup.body || ''}</p>
              <PopupButtonWrapper>
                <Button color='primary' borderRadius='8px'>{t('DONE', 'Done')}</Button>
              </PopupButtonWrapper>
            </PopupContent>
          </EmailPreviewContent>
        </EmailPreviewWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          onClick={() => handleSaveNotification()}
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
