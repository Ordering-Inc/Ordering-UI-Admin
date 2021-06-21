import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import { BusinessOwnerSetting } from '../BusinessOwnerSetting'
import { BusinessTypeSetting } from '../BusinessTypeSetting'
import { BusinessLocationSetting } from '../BusinessLocationSetting'
import {
  InfoConatiner
} from './styles'

export const BusinessInfoSetting = (props) => {
  const {
    business,
    handleDeleteBusinessOwner,
    handleAddBusinessOwner,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    businessTypes
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
          handleDeleteBusinessOwner={handleDeleteBusinessOwner}
          handleAddBusinessOwner={handleAddBusinessOwner}
        />
      )}
      {selectedInfoItem === 'type' && (
        <BusinessTypeSetting
          business={business}
          businessTypes={businessTypes}
          formState={formState}
          setFormState={setFormState}
          handleUpdateBusinessClick={handleUpdateBusinessClick}
        />
      )}
      {selectedInfoItem === 'location' && (
        <BusinessLocationSetting
          business={business}
          formState={formState}
          setFormState={setFormState}
          handleUpdateBusinessClick={handleUpdateBusinessClick}
        />
      )}
    </InfoConatiner>
  )
}
