import React, { useState, useMemo } from 'react'
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
  SmsPreviewContent,
  Description,
  BottomSpace
} from './styles'
import { SettingsList } from '../../Settings/SettingsList'

export const CampaignSMS = (props) => {
  const {
    isAddMode,
    contactState,
    handleChangeData,
    handleUpdateContact,
    handleAddCampaign,
    formState,
    categoryList
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const category = categoryList?.categories.find(item => item.key === 'twilio')

  const isEnableConfig = useMemo(() => {
    return category?.configs?.every(config => !!config?.value)
  }, [category])

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
      {isEnableConfig ? (
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
        </>
      ) : (
        <>
          <Description>
            <span>
              {t('TWILIO_SETTINGS_LINK_DESC', 'You need to complete Twilio configuration first')}
            </span>
          </Description>
          {category && (
            <SettingsList
              {...props}
              category={category}
              isCampaign
            />
          )}
          <BottomSpace />
        </>
      )}
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
