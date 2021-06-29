import React, { useState } from 'react'
import { useConfig, useLanguage } from 'ordering-components-admin'
import { DrawingGoogleMaps } from './naked'

import { Select } from '../../styles/Select/FirstSelect'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'

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
  const [clearState, setClearState] = useState(false)

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

  const fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true,
    draggable: true
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
        <Button
          onClick={() => setClearState(true)}
        >
          {t('CLEAR', 'Clear')}
        </Button>
        <WrapperMap>
          <DrawingGoogleMaps
            apiKey={configState?.configs?.google_maps_api_key?.value}
            mapControls={googleMapsControls}
            location={business?.location}
            clearState={clearState}
            type={zone.type}
            data={zone.data}
            fillStyle={fillStyle}
          />
        </WrapperMap>
      </BasicContainer>
    </>
  )
}
