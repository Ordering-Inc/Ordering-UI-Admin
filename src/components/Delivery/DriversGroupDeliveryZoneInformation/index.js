import React, { useState, useEffect, useRef } from 'react'
import {
  useConfig, useLanguage, useUtils, ExamineClick, BusinessZoneGoogleMaps as DriverGroupZoneGoogleMaps
} from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { Button, Input } from '../../../styles'
import { Alert } from '../../Shared'
import { useForm } from 'react-hook-form'

import {
  FormContainer,
  TypeSelectWrapper,
  WrapperMap,
  ErrorText,
  FormControl,
  Row,
  KmlButtonWrapper
} from './styles'

export const DriverGroupDeliveryZoneInformation = (props) => {
  const {
    zone,
    driverGroupsZones,
    formState,
    handleChangeInput,
    handleChangeFormState,
    handleUpdateDriverGroupDeliveryZone,
    handleAddDriverGroupDeliveryZone,
    handleUploadKmlFiles,
    kmlData
  } = props

  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()
  const [{ parseNumber }] = useUtils()
  const [configState] = useConfig()
  const [clearState, setClearState] = useState(false)
  const [infoContentString, setInfoContentString] = useState('')
  const [zoneType, setZoneType] = useState(zone?.type || 2)
  const [zoneData, setZoneData] = useState(zone?.data)
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isShowMap, setIsShowMap] = useState(false)
  const kmlRef = useRef(null)

  const typeOptions = [
    { value: 1, content: t('CIRCLE', 'Circle') },
    { value: 2, content: t('POLYGON', 'Polygon') },
    { value: 4, content: t('EVERYWHERE', 'Everywhere') },
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
    handleChangeFormState({ type: type })
    setClearState(true)
    setZoneType(type)
  }

  const handleZoneData = (data) => {
    setZoneData(data)
    handleChangeFormState({ data: data })
  }

  const onSubmit = () => {
    if (formState?.changes?.data || zoneType === 4) {
      if (!zone) handleAddDriverGroupDeliveryZone()
      else handleUpdateDriverGroupDeliveryZone()
    } else {
      setAlertState({
        open: true,
        content: t('REQUIRED_POLYGON_CIRCLE', 'Add a distance based or draw a polygon or circle.')
      })
    }
  }

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
    setClearState(false)
    setZoneType(zone?.type || 2)
    setZoneData(zone?.data)
    setIsShowMap(false)
    setTimeout(() => {
      setIsShowMap(true)
    }, [100])
  }, [zone?.id])

  useEffect(() => {
    if (Object?.keys(errors)?.length > 0) {
      setAlertState({
        open: true,
        content: Object?.values(errors)?.map((error) => error?.message)
      })
    }
  }, [errors])

  useEffect(() => {
    if (formState?.error) {
      setAlertState({
        open: true,
        content: formState?.error
      })
    }
  }, [formState])

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <Row>
          <FormControl>
            <label>{t('NAME', 'Name')}</label>
            <Input
              placeholder={t('NAME', 'Name')}
              name='name'
              value={formState?.changes?.name ?? zone?.name ?? ''}
              onChange={handleChangeInput}
              ref={register({
                required: t('NAME_REQUIRED', 'The name is required.')
              })}
            />
          </FormControl>
          <FormControl>
            <label>{t('TYPE', 'Type')}</label>
            <TypeSelectWrapper>
              <Select
                defaultValue={parseInt(formState?.changes?.type || zoneType)}
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
              value={formState?.changes?.minimum ?? zone?.minimum ?? ''}
              onChange={handleChangeInput}
              ref={register({
                required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
              })}
            />
          </FormControl>
          <FormControl>
            <label>{t('DELIVERY_FEE', 'Delivery fee')}</label>
            <Input
              placeholder='$0.00'
              name='price'
              value={formState?.changes?.price ?? zone?.price ?? ''}
              onChange={handleChangeInput}
              ref={register({
                required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
              })}
            />
          </FormControl>
        </Row>
        {zoneType !== 4 && isShowMap && (
          configState?.configs?.google_maps_api_key?.value ? (
            <WrapperMap>
              <button
                type='button'
                onClick={() => setClearState(true)}
              >
                {t('CLEAR', 'Clear')}
              </button>
              <DriverGroupZoneGoogleMaps
                disabled={zoneType === 5}
                distance={formState?.changes?.data?.distance}
                apiKey={configState?.configs?.google_maps_api_key?.value}
                mapControls={googleMapsControls}
                clearState={clearState}
                setClearState={setClearState}
                type={zoneType}
                data={formState?.changes?.data || zoneData}
                handleData={handleZoneData}
                fillStyle={fillStyle}
                infoContentString={infoContentString}
                greenFillStyle={greenFillStyle}
                isAddMode={!zone}
                businessZones={driverGroupsZones}
                kmlData={kmlData}
                isDriverGroup
              />
            </WrapperMap>
          ) : (
            <ErrorText>{t('REQUIRED_GOOGLE_MAP_API_KEY', 'Google Maps api key is required')}</ErrorText>
          )
        )}
        {!zone && (
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
        )}

        <Button
          color='primary'
          borderRadius='8px'
          type='submit'
          disabled={formState?.loading || Object?.keys(formState?.changes)?.length === 0}
        >
          {
            !zone ? t('ADD', 'Add') : t('SAVE', 'Save')
          }
        </Button>
      </FormContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState?.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
