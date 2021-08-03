import React, { useState, useEffect } from 'react'
import { useConfig, useSession, useLanguage } from 'ordering-components-admin'
import { AnalyticsMap as AnalyticsMapController } from './naked'
import { GoogleMapsMap } from './GoogleMaps'
import {
  Container,
  WrapperMap
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../../styles/Buttons'

const AnalyticsMapUI = (props) => {
  const {
    locationList
  } = props
  const [configState] = useConfig()
  const [{ user }] = useSession()
  const [, t] = useLanguage()
  const [isHeat, setIsHeat] = useState(false)

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

  useEffect(() => {
    setIsHeat(false)
  }, [locationList])

  return (
    <Container>
      {locationList?.loading ? (
        <Skeleton height={300} />
      ) : (
        <WrapperMap>
          {
            configState?.configs?.google_maps_api_key?.value && (
              <>
                <GoogleMapsMap
                  apiKey={configState?.configs?.google_maps_api_key?.value}
                  location={user?.location}
                  locations={locationList?.locations}
                  mapControls={googleMapsControls}
                  isHeatMap
                  isHeat={isHeat}
                />
                <Button
                  borderRadius='7.6px'
                  color='primary'
                  disabled={locationList.loading}
                  onClick={() => setIsHeat(!isHeat)}
                >
                  {isHeat ? t('GROUPED', 'Grouped') : t('HEAT_MAP', 'Heatmap')}
                </Button>
              </>
            )
          }
        </WrapperMap>
      )}
    </Container>
  )
}

export const AnalyticsMap = (props) => {
  const analyticsMapProps = {
    ...props,
    UIComponent: AnalyticsMapUI
  }
  return (
    <AnalyticsMapController {...analyticsMapProps} />
  )
}
