import React from 'react'
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
    business
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
