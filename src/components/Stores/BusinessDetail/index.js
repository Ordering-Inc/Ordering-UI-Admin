import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useLocation } from 'react-router-dom'
import { BusinessInfoSettingList } from '../BusinessInfoSettingList'
import { BusinessOwners } from '../BusinessOwners'
import { BusinessTypes } from '../BusinessTypes'
import { BusinessLocation } from '../BusinessLocation'
import { BusinessImages } from '../BusinessImages'
import { BusinessVideos } from '../BusinessVideos'
import { SeoOptions } from '../SeoOptions'
import { BusinessInformation } from '../BusinessInformation'
import { addQueryToUrl } from '../../../utils'

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

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [selectedInfoItem, setSelctedInfoItem] = useState('information')

  const handleSelectInfoItem = (tab) => {
    setSelctedInfoItem(tab)
    addQueryToUrl({ tab: tab })
  }

  useEffect(() => {
    setIsExtendExtraOpen(false)
  }, [selectedInfoItem])

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      setSelctedInfoItem(tab)
    } else {
      handleSelectInfoItem('information')
    }
  }, [])

  return (
    <>
      <Container>
        <InfoConatiner>
          <h1>{t('STORE_DETAILS', 'Store details')}</h1>
          <BusinessInfoSettingList
            selectedInfoItem={selectedInfoItem}
            handleSelectInfoItem={handleSelectInfoItem}
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
