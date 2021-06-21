import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import { BusinessOwnerSetting } from '../BusinessOwnerSetting'
import {
  InfoConatiner
} from './styles'

export const BusinessInfoSetting = (props) => {
  const {
    business
  } = props
  const [, t] = useLanguage()
  const [selectedInfoItem, setSelctedInfoItem] = useState('owner')
  return (
    <InfoConatiner>
      <h1>{t('INFORMATION', 'Information')}</h1>
      <BusinessInfoSettingList
        selectedInfoItem={selectedInfoItem}
        handleSelectInfoItem={setSelctedInfoItem}
      />
      {selectedInfoItem === 'owner' && (
        <BusinessOwnerSetting
          business={business}
        />
      )}
    </InfoConatiner>
  )
}
