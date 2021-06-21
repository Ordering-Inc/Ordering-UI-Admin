import React, { useEffect } from 'react'
import { GoogleMapsMap, useConfig, useLanguage } from 'ordering-components-admin'
import { CitySelector } from '../CitySelector'
import {
  Container,
  WrapperMap,
  Section,
  WrapperCitySelector,
  WrapperTimezone
} from './styles'

export const BusinessLocationSetting = (props) => {
  const {
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick
  } = props
  const [{ configs }] = useConfig()
  const [, t] = useLanguage()
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

  const handleChangeBusinessCity = (cityId) => {
    setFormState({ ...formState, changes: { city_id: cityId } })
  }

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])

  return (
    <Container>
      {business?.location && (
        <WrapperMap>
          <GoogleMapsMap
            apiKey={configs?.google_maps_api_key?.value}
            location={business.location}
            mapControls={googleMapsControls}
          />
        </WrapperMap>
      )}
      <Section>
        <WrapperCitySelector>
          <p>{t('CITY', 'City')}</p>
          <CitySelector
            isDefault
            defaultValue={business?.city_id}
            handleChangeCity={handleChangeBusinessCity}
          />
        </WrapperCitySelector>
        <WrapperTimezone>
          <p>{t('TIMEZONE', 'Timezone')}</p>
          <p>{business?.timezone}</p>
        </WrapperTimezone>
      </Section>
    </Container>
  )
}
