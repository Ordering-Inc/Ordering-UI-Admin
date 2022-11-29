import React, { useState, useEffect } from 'react'
import { useLanguage, CampaignDetailContent as CampaignDetailContentController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { CampaignEmail } from '../CampaignEmail'
import { CampaignSMS } from '../CampaignSMS'
import { CampaignWhatsapp } from '../CampaignWhatsapp'
import { CampaignNotification } from '../CampaignNotification'
import { CampaignPopup } from '../CampaignPopup'
import { CampaignWebHook } from '../CampaignWebHook'
import { Alert } from '../../Shared'

import {
  Container,
  SelectWrapper,
  Option
} from './styles'

const CampaignDetailContentUI = (props) => {
  const {
    handleChangeType,
    contactState,
    isAddMode
  } = props

  const [, t] = useLanguage()
  const [typeOptions, setTypeOptions] = useState(null)
  const [contactTypeSearchVal, setContactTypeSearchVal] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const typeList = [
    { value: 'email', content: <Option>{t('EMAIL', 'Email')}</Option> },
    { value: 'sms', content: <Option>{t('SMS', 'SMS')}</Option> },
    { value: 'notification', content: <Option>{t('PUSH_NOTIFICATIONS', 'Push notifications')}</Option> },
    { value: 'webhook', content: <Option>{t('WEBHOOK', 'Webhook')}</Option> }
    // { value: 'popup', content: <Option>{t('POPUP', 'Popup')}</Option> },
    // { value: 'whatsapp', content: <Option>{t('WHATSAPP', 'Whatsapp')}</Option> }
  ]

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    const options = typeList.filter(option => option?.value.toLocaleLowerCase().includes(contactTypeSearchVal.toLocaleLowerCase()))
    setTypeOptions(options)
  }, [contactTypeSearchVal])

  useEffect(() => {
    if (!contactState?.error || contactState.loading) return
    setAlertState({
      open: true,
      content: contactState?.error
    })
  }, [contactState?.error])

  return (
    <>
      <Container>
        <SelectWrapper>
          <label>{t('CONTACT_TYPE', 'Contact type')}</label>
          <Select
            options={typeOptions}
            className='select'
            defaultValue={contactState?.changes?.contact_type || ''}
            placeholder={t('SELECT_OPTION', 'Select an option')}
            onChange={(value) => handleChangeType('contact_type', value)}
            // isShowSearchBar
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            isDisabled={!isAddMode}
            searchValue={contactTypeSearchVal}
            handleChangeSearch={(val) => setContactTypeSearchVal(val)}
          />
        </SelectWrapper>

        {contactState?.changes?.contact_type === 'email' && <CampaignEmail {...props} />}
        {contactState?.changes?.contact_type === 'sms' && <CampaignSMS {...props} />}
        {contactState?.changes?.contact_type === 'whatsapp' && <CampaignWhatsapp {...props} />}
        {contactState?.changes?.contact_type === 'notification' && <CampaignNotification {...props} />}
        {contactState?.changes?.contact_type === 'popup' && <CampaignPopup {...props} />}
        {contactState?.changes?.contact_type === 'webhook' && <CampaignWebHook {...props} />}
      </Container>
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

export const CampaignDetailContent = (props) => {
  const campaignDetailContentProps = {
    ...props,
    UIComponent: CampaignDetailContentUI
  }
  return <CampaignDetailContentController {...campaignDetailContentProps} />
}
