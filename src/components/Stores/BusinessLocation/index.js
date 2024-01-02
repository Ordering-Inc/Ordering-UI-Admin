import React, { useEffect, useRef, useState } from 'react'
import { GoogleMapsMap, GoogleAutocompleteInput, useConfig, useLanguage } from 'ordering-components-admin'
import { CitySelector } from '../../Shared'
import { Button, TextArea } from '../../../styles'
import {
  Container,
  WrapperMap,
  Section,
  WrapperCitySelector,
  WrapperTimezone,
  WrapperGoogleAutoCompleteInput,
  WrapperAddressnotes
} from './styles'

export const BusinessLocation = (props) => {
  const {
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick
  } = props
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
  const googleMapsApiKey = configs?.google_maps_api_key?.value

  const [location, setLocation] = useState()
  const googleInputRef = useRef(null)

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  }

  const handleChangeBusinessCity = (cityId) => {
    setFormState(prevState => ({ ...prevState, changes: { ...prevState?.changes, city_id: cityId } }))
  }

  const handleChangeAddress = (address) => {
    getTimeZone(address)
    setLocation({ ...address.location })
  }

  const handleChangeInput = (value) => {
    setFormState(prevState => ({ ...prevState, changes: { ...prevState?.changes, address: value } }))
  }

  const handleChangeTextarea = (value) => {
    setFormState(prevState => ({ ...prevState, changes: { ...prevState?.changes, address_notes: value } }))
  }

  const getTimeZone = async (address) => {
    const date = new Date()
    const timestamp = Math.floor(date.getTime() / 1000)
    const timezoneApiKey = googleMapsApiKey === 'AIzaSyBvsSkMYPSDSkdk7YFrSf5FoGonIzr6fJ0' ? 'AIzaSyCYPCOfiTo9jxuxLWnWTup6mmICPxfLegI' : googleMapsApiKey
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${address?.location?.lat},${address?.location?.lng}&timestamp=${timestamp}&key=${timezoneApiKey}`
    const response = await fetch(url, {
      method: 'GET'
    })
    const result = await response.json()
    setFormState(prevState => ({
      ...prevState,
      changes: {
        ...prevState?.changes,
        address: googleInputRef?.current?.value || address?.address,
        location: { ...address?.location, zipcode: address?.zipcode ? address.zipcode : -1, zoom: 15 },
        timezone: result?.timeZoneId
      }
    }))
  }

  const handleChangeCenter = (address) => {
    setFormState(prevState => ({
      ...prevState,
      changes: {
        ...prevState?.changes,
        location: { ...business?.location, lat: address?.lat(), lng: address?.lng(), zoom: 15 }
      }
    }))
  }

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  useEffect(() => {
    setLocation({ ...business?.location })
  }, [business?.location])

  return (
    <Container>
      {location && (
        <WrapperMap>
          <GoogleMapsMap
            apiKey={configs?.google_maps_api_key?.value}
            location={location}
            mapControls={googleMapsControls}
            handleChangeCenter={handleChangeCenter}
            onlyMarkerChangeCenter
          />
        </WrapperMap>
      )}
      <Section>
        <WrapperCitySelector>
          <p>{t('CITY', 'City')}</p>
          <CitySelector
            isDefault
            position='left'
            optionInnerMaxHeight='300px'
            defaultValue={business?.city_id}
            handleChangeCity={handleChangeBusinessCity}
          />
        </WrapperCitySelector>
        <WrapperTimezone>
          <p>{t('TIMEZONE', 'Timezone')}</p>
          <p>{formState.changes?.timezone ?? business?.timezone ?? ''}</p>
        </WrapperTimezone>
      </Section>

      <WrapperGoogleAutoCompleteInput>
        <label>{t('ADDRESS', 'Address')}</label>
        <GoogleAutocompleteInput
          className='input-autocomplete'
          apiKey={googleMapsApiKey}
          placeholder={t('ADDRESS', 'Address')}
          onChangeAddress={(e) => {
            handleChangeAddress(e)
          }}
          onChange={(e) => {
            handleChangeInput(e.target.value)
          }}
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.address
              : formState?.changes?.address ?? business?.address ?? ''
          }
          childRef={(ref) => {
            googleInputRef.current = ref
          }}
          autoComplete='new-password'
          countryCode={configs?.country_autocomplete?.value || '*'}
        />
      </WrapperGoogleAutoCompleteInput>
      <WrapperAddressnotes>
        <label>{t('ADDRESS_NOTES', 'Address notes')}</label>
        <TextArea
          rows={4}
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.address_notes
              : formState?.changes?.address_notes ?? business?.address_notes ?? ''
          }
          onChange={(e) => handleChangeTextarea(e.target.value)}
          placeholder={t('MOBILE_FRONT_VISUALS_APT', 'Write an address note')}
        />
      </WrapperAddressnotes>
      <Button
        color='primary'
        borderRadius='5px'
        disabled={formState.loading || Object.keys(formState?.changes).length === 0}
        onClick={handleUpdateBusinessClick}
      >
        {formState.loading ? t('UPDATING', 'Updating') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
