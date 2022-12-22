import React, { useState, useEffect } from 'react'
import { useConfig, useLanguage, useUtils, BusinessZoneGoogleMaps } from 'ordering-components-admin'
import { Select } from '../../../../styles/Select/FirstSelect'
import { Input } from '../../../../styles'
import { Alert } from '../../../Shared'

import {
  DeliveryZoneContainer,
  TypeSelectWrapper,
  WrapperMap,
  ErrorText,
  FormControl,
  Row
} from './styles'

export const DeliveryZone = (props) => {
  const {
    formState,
    zoneState,
    handleChangeZoneState,
    // handleUploadKmlFiles,
    kmlData
  } = props

  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const [configState] = useConfig()
  const [clearState, setClearState] = useState(false)
  const [infoContentString, setInfoContentString] = useState('')
  const [zoneType, setZoneType] = useState(2)
  const [zoneData, setZoneData] = useState()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isShowMap, setIsShowMap] = useState(false)
  // const kmlRef = useRef(null)

  const typeOptions = [
    { value: 1, content: t('CIRCLE', 'Circle') },
    { value: 2, content: t('POLYGON', 'Polygon') },
    { value: 4, content: t('EVERYWHERE', 'Everywhere') },
    { value: 5, content: t('DISTANCE_BASED', 'Distance based') }
  ]

  const googleMapsControls = {
    defaultZoom: 8,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap', // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: false,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: false,
    defaultPosition: { lat: 40.77473399999999, lng: -73.9653844 }
  }

  const fillStyle = {
    fillColor: '#2C7BE5',
    strokeColor: '#03459E',
    fillOpacity: 0.2,
    strokeWeight: 2,
    editable: true
  }

  const greenFillStyle = {
    fillColor: '#008000',
    fillOpacity: 0.3,
    strokeColor: '#008000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  }

  const handleChangeType = (type) => {
    handleChangeZoneState({ type: type }, true)
    setClearState(true)
    setZoneType(type)
  }

  const handleZoneData = (data) => {
    setZoneData(data)
    handleChangeZoneState({ data: data }, true)
  }

  // const onSubmit = () => {
  //   if (zoneState.changes?.data || zoneType === 4) {
  //     handleAddBusinessDeliveryZone()
  //   } else {
  //     setAlertState({
  //       open: true,
  //       content: t('REQUIRED_POLYGON_CIRCLE', 'Add a distance based or draw a polygon or circle.')
  //     })
  //   }
  // }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (clearState) {
      handleZoneData(null)
    }
  }, [clearState])

  useEffect(() => {
    if (zoneType === 2 || zoneType === 4) return
    let content = '<div style="width: 90px; height: 30px">' + '<span>Radius: </span>'
    content += parseNumber(zoneData?.radio || zoneData?.distance)
    content += `<span>${zoneType === 5 ? configState?.configs?.distance_unit?.value : 'km'}</span>` + '</div>'
    setInfoContentString(content)
  }, [zoneData, zoneType])

  useEffect(() => {
    if (zoneType === 4) setIsShowMap(false)
    else setIsShowMap(true)
  }, [zoneType])

  return (
    <>
      <DeliveryZoneContainer autoComplete='off'>
        <h2>{t('LETS_CREATE_YOUR_FIRST_DELIVERY_ZONE', 'Let’s create your first Delivery Zone')}</h2>
        <Row>
          <FormControl>
            <label>{t('NAME', 'Name')}</label>
            <Input
              placeholder={t('NAME', 'Name')}
              name='name'
              value={zoneState?.name ?? ''}
              onChange={(e) => handleChangeZoneState(e)}
            />
          </FormControl>
          <FormControl>
            <label>{t('TYPE', 'Type')}</label>
            <TypeSelectWrapper>
              <Select
                defaultValue={parseInt(zoneState?.type || zoneType)}
                options={typeOptions}
                onChange={handleChangeType}
              />
            </TypeSelectWrapper>
          </FormControl>
        </Row>
        <Row>
          <FormControl>
            <label>{t('MINIMUN_PURCHASED', 'Minimum purchase')}</label>
            <Input
              placeholder='$0.00'
              name='minimum'
              value={zoneState?.minimum ?? ''}
              onChange={(e) => handleChangeZoneState(e)}
            />
          </FormControl>
          <FormControl>
            <label>{t('DELIVERY_FEE', 'Delivery fee')}</label>
            <Input
              placeholder='$0.00'
              name='price'
              value={zoneState?.price ?? ''}
              onChange={(e) => handleChangeZoneState(e)}
            />
          </FormControl>
        </Row>
        {zoneType === 5 &&
          <Row>
            <FormControl>
              <label>{t('DISTANCE_FROM_STORE', 'Distance from store')}</label>
              <Input
                placeholder={`1 - 99 ${configState?.configs?.distance_unit?.value}`}
                name='distance'
                maxLength={2}
                value={zoneState?.data?.distance ?? ''}
                onInput={(e) => {
                  e.target.value = e.target.value.match('^[1-9]{1,2}$')
                }}
                onChange={e => handleChangeZoneState(e, false, configState?.configs?.distance_unit?.value)}
              />
            </FormControl>
          </Row>}
        <FormControl>
          <label>{t('BUSINESS_ADDRESS', 'Business address')}</label>
          <Input
            name='address'
            defaultValue={formState?.changes?.address}
            disabled
          />
        </FormControl>
        {zoneType !== 4 && isShowMap && (
          configState?.configs?.google_maps_api_key?.value ? (
            <WrapperMap>
              {zoneType !== 5 &&
                <button
                  type='button'
                  onClick={() => setClearState(true)}
                >
                  {t('CLEAR', 'Clear')}
                </button>}
              <BusinessZoneGoogleMaps
                distance={zoneState?.data?.distance}
                disabled
                apiKey={configState?.configs?.google_maps_api_key?.value}
                mapControls={googleMapsControls}
                clearState={clearState}
                setClearState={setClearState}
                type={zoneType}
                data={zoneState?.data || zoneData}
                handleData={handleZoneData}
                fillStyle={fillStyle}
                infoContentString={infoContentString}
                greenFillStyle={greenFillStyle}
                kmlData={kmlData}
              />
            </WrapperMap>
          ) : (
            <ErrorText>{t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required')}</ErrorText>
          )
        )}
        {/* {(zoneType !== 5) && (
          <KmlButtonWrapper>
            <Button
              color='primary'
              borderRadius='8px'
              type='button'
              onClick={() => kmlRef.current.click()}
            >
              <ExamineClick
                onFiles={files => handleUploadKmlFiles(files)}
                childRef={e => { kmlRef.current = e }}
                accept='.kml,.kmz'
              >
                <span>{t('UPLOAD_KML', 'Upload KML')}</span>
              </ExamineClick>
            </Button>
          </KmlButtonWrapper>
        )} */}
      </DeliveryZoneContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
