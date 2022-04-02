import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { CampaignEmail } from '../CampaignEmail'
import { CampaignSMS } from '../CampaignSMS'
import { CampaignWhatsapp } from '../CampaignWhatsapp'
import { CampaignNotification } from '../CampaignNotification'
import { CampaignPopup } from '../CampaignPopup'
import { CampaignWebHook } from '../CampaignWebHook'

import {
  Container,
  SelectWrapper,
  Option
} from './styles'

export const CampaignDetailContent = (props) => {
  const {
    handleChangeItem,
    formState,
    campaignState
  } = props

  const [, t] = useLanguage()
  const [typeOptions, setTypeOptions] = useState(null)
  const [contactTypeSearchVal, setContactTypeSearchVal] = useState('')

  const typeList = [
    { value: 'email', content: <Option>{t('EMAIL', 'Email')}</Option> },
    { value: 'sms', content: <Option>{t('SMS', 'SMS')}</Option> },
    { value: 'notification', content: <Option>{t('NOTIFICATION', 'Notification')}</Option> },
    { value: 'webhook', content: <Option>{t('WEBHOOK', 'Webhook')}</Option> },
    { value: 'popup', content: <Option>{t('POPUP', 'Popup')}</Option> },
    { value: 'whatsapp', content: <Option>{t('WHATSAPP', 'Whatsapp')}</Option> }
  ]

  useEffect(() => {
    const options = typeList.filter(option => option?.value.toLocaleLowerCase().includes(contactTypeSearchVal.toLocaleLowerCase()))
    setTypeOptions(options)
  }, [contactTypeSearchVal])

  return (
    <Container>
      <SelectWrapper>
        <label>{t('CONTACT_TYPE', 'Contact type')}</label>
        <Select
          options={typeOptions}
          className='select'
          defaultValue={formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type ?? ''}
          placeholder={t('SELECT_OPTION', 'Select an option')}
          onChange={(value) => handleChangeItem('contact_type', value)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={contactTypeSearchVal}
          handleChangeSearch={(val) => setContactTypeSearchVal(val)}
        />
      </SelectWrapper>

      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'email' && <CampaignEmail {...props} />}
      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'sms' && <CampaignSMS {...props} />}
      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'whatsapp' && <CampaignWhatsapp {...props} />}
      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'notification' && <CampaignNotification {...props} />}
      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'popup' && <CampaignPopup {...props} />}
      {(formState?.changes?.contact_type ?? campaignState?.campaign?.contact_type) === 'webhook' && <CampaignWebHook {...props} />}
    </Container>
  )
}
