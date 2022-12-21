import React from 'react'
import { useLanguage, useConfig, GoogleAutocompleteInput, GoogleMapsMap } from 'ordering-components-admin'
import {
  BusinessDetailsContainer,
  ContentWrapper,
  FormControl,
  WrapperMap,
  GoogleMapContainer
} from './styles'
import { Input } from '../../../../styles'
import { stringToSlug } from '../../../../utils'

export const BusinessDetails = (props) => {
  const {
    formState,
    handleChangeAddress,
    handleChangeInput,
    handleChangeCenter
  } = props

  const [, t] = useLanguage()
  const [{ configs }] = useConfig()

  const googleMapsApiKey = configs?.google_maps_api_key?.value
  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const defaultPosition = { lat: 40.77473399999999, lng: -73.9653844 }

  return (
    <BusinessDetailsContainer>
      <h2>{t('BUSINESS_DETAILS', 'Business details')}</h2>
      <ContentWrapper>
        <FormControl>
          <label>{t('BUSINESS_NAME', 'Business Name')}</label>
          <Input
            name='name'
            placeholder={t('NAME', 'Name')}
            defaultValue={formState?.changes?.name ?? ''}
            onChange={e => {
              handleChangeInput([{ name: 'name', value: e.target.value }, { name: 'slug', value: stringToSlug(e.target.value) }], true)
            }}
          />
        </FormControl>
        <FormControl>
          <label>{t('ADDRESS', 'Address')}</label>
          <GoogleAutocompleteInput
            name='address'
            className='input-autocomplete'
            apiKey={googleMapsApiKey}
            placeholder={t('ADDRESS', 'Address')}
            onChangeAddress={(e) => {
              handleChangeAddress(e)
            }}
            onChange={(e) => {
              handleChangeInput(e)
            }}
            defaultValue={formState?.changes?.address ?? ''}
            autoComplete='new-password'
            countryCode={configs?.country_autocomplete?.value || '*'}
          />
        </FormControl>
        <FormControl>
          <label>{t('ZIPCODE', 'Zipcode')}</label>
          <Input
            name='zipcode'
            placeholder={t('ZIPCODE', 'Zipcode')}
            defaultValue={formState?.changes?.zipcode ?? ''}
            onChange={handleChangeInput}
          />
        </FormControl>
        <GoogleMapContainer>
          <label>{t('GOOGLE_PLACE_ID', 'Google place ID')}</label>
          <p>{googleMapsApiKey}</p>
          <WrapperMap>
            <GoogleMapsMap
              apiKey={configs?.google_maps_api_key?.value}
              location={formState?.changes?.location ?? defaultPosition}
              mapControls={googleMapsControls}
              handleChangeCenter={handleChangeCenter}
              isFitCenter
            />
          </WrapperMap>
        </GoogleMapContainer>
        <FormControl noBottom>
          <label>{t('INT_NUMBER', 'Int. number')}</label>
          <Input
            name='cellphone'
            placeholder={t('INT_NUMBER', 'Int. number')}
            defaultValue={formState?.changes?.cellphone ?? ''}
            onChange={handleChangeInput}
          />
        </FormControl>
      </ContentWrapper>
    </BusinessDetailsContainer>
  )
}
