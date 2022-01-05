import React, { useState, useEffect } from 'react'
import { useConfig, useSession, useLanguage, GoogleMapsMap } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import {
  Container,
  WrapperMap
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'

export const AnalyticsMap = (props) => {
  const {
    locationList
  } = props
  const [configState] = useConfig()
  const [{ user }] = useSession()
  const [, t] = useLanguage()
  const theme = useTheme()
  const [isHeat, setIsHeat] = useState(false)
  const defaultCenter = { lat: 37.775, lng: -122.434 }

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
                  location={user?.location || defaultCenter}
                  locations={locationList?.locations}
                  mapControls={googleMapsControls}
                  isHeatMap
                  isHeat={isHeat}
                  markerIcon={theme?.images?.icons?.mapMarker}
                />
                <Button
                  borderRadius='7.6px'
                  color='primary'
                  disabled={locationList.loading}
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
