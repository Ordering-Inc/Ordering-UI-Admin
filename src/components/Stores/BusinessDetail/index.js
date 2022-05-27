import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import { BusinessOwners } from '../BusinessOwners'
import { BusinessTypes } from '../BusinessTypes'
import { BusinessLocation } from '../BusinessLocation'
import { BusinessImages } from '../BusinessImages'
import { BusinessVideos } from '../BusinessVideos'
import { SeoOptions } from '../SeoOptions'
import { BusinessInformation } from '../BusinessInformation'
import {
  InfoConatiner,
  Container
} from './styles'

export const BusinessDetail = (props) => {
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
    handleSuccessDeleteBusinessItem,
    handleSucessUpdateBusiness,
    setIsExtendExtraOpen,
    isExtendExtraOpen,
    handleUpdateBusinessState
  } = props

  const [, t] = useLanguage()
  const [selectedInfoItem, setSelctedInfoItem] = useState('information')

  useEffect(() => {
    setIsExtendExtraOpen(false)
  }, [selectedInfoItem])

  return (
    <>
      <Container>
        <InfoConatiner>
          <h1>{t('STORE_DETAILS', 'Store details')}</h1>
          <BusinessInfoSettingList
            selectedInfoItem={selectedInfoItem}
            handleSelectInfoItem={setSelctedInfoItem}
          />
          {selectedInfoItem === 'information' && (
            <BusinessInformation
              business={business}
              handleSuccessUpdate={handleSucessUpdateBusiness}
              handleUpdateBusinessState={handleUpdateBusinessState}
            />
          )}
          {selectedInfoItem === 'owner' && (
            <BusinessOwners
              business={business}
              handleDeleteBusinessOwner={handleDeleteBusinessOwner}
              handleAddBusinessOwner={handleAddBusinessOwner}
            />
          )}
          {selectedInfoItem === 'categories' && (
            <BusinessTypes
              business={business}
              businessTypes={businessTypes}
              formState={formState}
              setFormState={setFormState}
              handleUpdateBusinessClick={handleUpdateBusinessClick}
              setBusinessTypes={setBusinessTypes}
              setIsExtendExtraOpen={setIsExtendExtraOpen}
              isExtendExtraOpen={isExtendExtraOpen}
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
          {selectedInfoItem === 'seo_options' && (
            <SeoOptions
              data={business}
              formState={formState}
              setFormState={setFormState}
              handleUpdateClick={handleUpdateBusinessClick}
              isBusinessSeo
            />
          )}
        </InfoConatiner>
      </Container>
    </>
  )
}
