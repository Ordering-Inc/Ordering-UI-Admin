import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import { BusinessOwners } from '../BusinessOwners'
import { BusinessTypes } from '../BusinessTypes'
import { BusinessLocation } from '../BusinessLocation'
import { BusinessDescription } from '../BusinessDescription'
import { BusinessImages } from '../BusinessImages'
import { BusinessVideos } from '../BusinessVideos'

import {
  InfoConatiner
} from './styles'

export const BusinessInformation = (props) => {
  const {
    business,
    handleDeleteBusinessOwner,
    handleAddBusinessOwner,
    formState,
    setFormState,
    handleUpdateBusinessClick,
    businessTypes,
    setBusinessTypes,
    handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem
  } = props

  const [, t] = useLanguage()
  const [selectedInfoItem, setSelctedInfoItem] = useState('owner')
  return (
    <>
      <InfoConatiner>
        <h1>{t('INFORMATION', 'Information')}</h1>
        <BusinessInfoSettingList
          selectedInfoItem={selectedInfoItem}
          handleSelectInfoItem={setSelctedInfoItem}
        />
        {selectedInfoItem === 'owner' && (
          <BusinessOwners
            business={business}
            handleDeleteBusinessOwner={handleDeleteBusinessOwner}
            handleAddBusinessOwner={handleAddBusinessOwner}
          />
        )}
        {selectedInfoItem === 'type' && (
          <BusinessTypes
            business={business}
            businessTypes={businessTypes}
            formState={formState}
            setFormState={setFormState}
            handleUpdateBusinessClick={handleUpdateBusinessClick}
            setBusinessTypes={setBusinessTypes}
          />
        )}
        {selectedInfoItem === 'location' && (
          <BusinessLocation
            business={business}
            formState={formState}
            setFormState={setFormState}
            handleUpdateBusinessClick={handleUpdateBusinessClick}
          />
        )}
        {selectedInfoItem === 'description' && (
          <BusinessDescription
            business={business}
            formState={formState}
            setFormState={setFormState}
            handleUpdateBusinessClick={handleUpdateBusinessClick}
          />
        )}
        {selectedInfoItem === 'images' && (
          <BusinessImages
            business={business}
            handleSucessAddBusinessGallery={(result) => handleSuccessAddBusinessItem('gallery', result)}
            handleSucessDeleteBusinessGallery={(id) => handleSuccessDeleteBusinessItem('gallery', id)}
          />
        )}
        {selectedInfoItem === 'videos' && (
          <BusinessVideos
            business={business}
            handleSucessAddBusinessGallery={(result) => handleSuccessAddBusinessItem('gallery', result)}
            handleSucessDeleteBusinessGallery={(id) => handleSuccessDeleteBusinessItem('gallery', id)}
          />
        )}
      </InfoConatiner>
    </>
  )
}
