import React, { useState, useEffect } from 'react'
import { useConfig, useLanguage, GoogleMapsMap } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  Container,
  WrapperMap
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../../styles'

export const AnalyticsMap = (props) => {
  const {
    locationList
  } = props
  const [configState] = useConfig()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isHeat, setIsHeat] = useState(false)

  const defaultCenter = {
    lat: Number(configState.configs?.location_default_latitude?.value) || 40.77473399999999,
    lng: Number(configState.configs?.location_default_longitude?.value) || -73.9653844
  }

  const googleMapsControls = {
    defaultZoom: 15,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    }
  }

  const validLocations = locationList?.locations && Array.isArray(locationList.locations)
    ? locationList.locations.filter(location =>
      location &&
        typeof location.lat !== 'undefined' &&
        typeof location.lng !== 'undefined' &&
        !isNaN(Number(location.lat)) &&
        !isNaN(Number(location.lng))
    )
    : []

  useEffect(() => {
    setIsHeat(false)
  }, [locationList])

  return (
    <Container>
      {locationList?.loading ? (
        <Skeleton height={320} />
      ) : (
        <WrapperMap>
          {
            configState?.configs?.google_maps_api_key?.value && (
              <>
                <GoogleMapsMap
                  apiKey={configState?.configs?.google_maps_api_key?.value}
                  location={defaultCenter}
                  locations={validLocations}
                  mapControls={googleMapsControls}
                  isHeatMap
                  isHeat={isHeat}
                  markerIcon={theme?.images?.icons?.mapMarker}
                  onError={(error) => console.error('Google Maps error:', error)}
                />
                <Button
                  borderRadius='7.6px'
                  color='primary'
                  disabled={locationList.loading || validLocations.length === 0}
                  onClick={() => setIsHeat(!isHeat)}
                >
                  {isHeat ? t('GROUPED', 'Grouped') : t('HEATMAP', 'Heatmap')}
                </Button>
              </>
            )
          }
        </WrapperMap>
      )}
    </Container>
  )
}
