import React from 'react'
import { GoogleMapsMap, useConfig } from 'ordering-components-admin'
import { AnalyticsMap as AnalyticsMapController } from './naked'
import {
  Container,
  WrapperMap
} from './styles'
import Skeleton from 'react-loading-skeleton'

const AnalyticsMapUI = (props) => {
  const {
    locationList
  } = props
  const [configState] = useConfig()

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
      {locationList?.loading ? (
        <Skeleton height={200} />
      ) : (
        <WrapperMap>
          <GoogleMapsMap
            apiKey={configState?.configs?.google_maps_api_key?.value}
            location={locationList?.locations[0]}
            locations={locationList?.locations}
            mapControls={googleMapsControls}
          />
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
