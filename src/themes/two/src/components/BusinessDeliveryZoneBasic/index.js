import React from 'react'
import { useConfig, useLanguage } from 'ordering-components-admin'
import { DrawingGoogleMaps } from './naked'

import { Select } from '../../styles/Select/FirstSelect'
import { Input } from '../../styles/Inputs'

import {
  BasicContainer,
  FieldName,
  TypeSelectWrapper,
  WrapperMap
} from './styles'

export const BusinessDeliveryZoneBasic = (props) => {
  const {
    business,
    zone
  } = props
  const [, t] = useLanguage()
  const [configState] = useConfig()

  const typeOptions = [
    { value: 1, content: t('CIRCLE', 'Circle') },
    { value: 2, content: t('POLYGON', 'Polygon') }
  ]

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
    isMarkerDraggable: false
  }

  return (
    <>
      <BasicContainer>
        <FieldName>{t('TYPE', 'Type')}</FieldName>
        <TypeSelectWrapper>
          <Select
            defaultValue={parseInt(zone.type)}
            options={typeOptions}
            onChange={id => console.log(id)}
          />
        </TypeSelectWrapper>
        <FieldName>{t('BUSINESS_ADDRESS', 'Business address')}</FieldName>
        <Input
          name='address'
          defaultValue={zone?.address}
          disabled
        />
        <WrapperMap>
          <DrawingGoogleMaps
            apiKey={configState?.configs?.google_maps_api_key?.value}
            mapControls={googleMapsControls}
            location={business?.location}
            businessMap
          />
        </WrapperMap>
      </BasicContainer>
    </>
  )
}
