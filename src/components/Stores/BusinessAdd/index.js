import React, { useState, useEffect, useCallback } from 'react'
import { BusinessDetails } from './BusinessDetails'
import { useLanguage, useOrder, useEvent, useConfig, GoogleMapsMap, BusinessAdd as BusinessAddController } from 'ordering-components-admin'
import { List as MenuIcon } from 'react-bootstrap-icons'
import { Images } from './Images'
import { Schedule } from './Schedule'
import { Photos } from './Photos'
import { OrderTypePriceLevel } from './OrderTypePriceLevel'
import { PaymentMethods } from './PaymentMethods'
import { ReceiveOrders } from './ReceiveOrders'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { Button, IconButton } from '../../../styles'
import { DeliveryZone } from './DeliveryZone'
import { useHistory } from 'react-router-dom'
import { Alert } from '../../Shared'
import {
  AddNewBusinessContainer,
  BoxLayout,
  ButtonWrapper,
  HeaderTitleContainer,
  MapWrapper
} from './styles'

const BusinessAddUI = (props) => {
  const {
    formState,
    handleChangeAddress,
    handleChangeInput,
    handleChangeCenter,
    handleChangeSwtich,
    handleChangeGallery,
    changeFormState,
    paymethodsList,
    handleAddBusiness,
    kmlData,
    handleUploadKmlFiles,
    zoneState,
    handleChangeZoneState,
    gallery,
    handleChangePaymethodIds,
    paymethodIds,
    handleChangeSchedule,
    placeId,
    setDetails
  } = props

  const [, t] = useLanguage()
  const [orderStatus] = useOrder()
  const [events] = useEvent()
  const [{ configs }] = useConfig()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleSubmit = () => {
    handleAddBusiness()
  }

  const handleGoToBusinessList = () => {
    events.emit('go_to_page', { page: 'businesses' })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!formState?.loading && formState?.result?.error) {
      setAlertState({
        open: true,
        content: formState?.result?.result
      })
    }
  }, [formState?.result])

  const changeSchedule = useCallback((e) => handleChangeSchedule(e), [])

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

  const defaultPosition = { lat: 40.77473399999999, lng: -73.9653844 }

  return (
    <>
      <AddNewBusinessContainer>
        <HeaderTitleContainer>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('NEW_BUSINESS', 'New business')}</h1>
        </HeaderTitleContainer>
        <BoxLayout>
          <BusinessDetails
            formState={formState}
            handleChangeAddress={handleChangeAddress}
            handleChangeInput={handleChangeInput}
            handleChangeCenter={handleChangeCenter}
            placeId={placeId}
          />
        </BoxLayout>
        <BoxLayout>
          <Images
            formState={formState}
            handleChangeSwtich={handleChangeSwtich}
          />
        </BoxLayout>
        <BoxLayout>
          <Schedule
            handleChangeSchedule={changeSchedule}
            schedule={formState?.changes?.schedule}
          />
        </BoxLayout>
        <BoxLayout>
          <Photos
            gallery={gallery}
            handleChangeGallery={handleChangeGallery}
          />
        </BoxLayout>
        <BoxLayout>
          <OrderTypePriceLevel
            formState={formState}
            changeFormState={changeFormState}
          />
        </BoxLayout>
        {orderStatus?.options?.type === 1 && (
          <BoxLayout>
            <DeliveryZone
              kmlData={kmlData}
              zoneState={zoneState}
              formState={formState}
              handleChangeZoneState={handleChangeZoneState}
              handleUploadKmlFiles={handleUploadKmlFiles}
            />
          </BoxLayout>
        )}
        <BoxLayout>
          <PaymentMethods
            handleChangePaymethodIds={handleChangePaymethodIds}
            paymethodIds={paymethodIds}
            paymethodsList={paymethodsList}
          />
        </BoxLayout>
        <BoxLayout>
          <ReceiveOrders
            formState={formState}
            handleChangeInput={handleChangeInput}
            changeFormState={changeFormState}
          />
        </BoxLayout>
        <ButtonWrapper>
          <Button
            color='primary'
            outline
            onClick={handleGoToBusinessList}
          >
            {t('Cancel', 'Cancel')}
          </Button>
          <Button
            color='primary'
            onClick={handleSubmit}
            disabled={formState?.loading}
          >
            {t('CONFIRM', 'Confirm')}
          </Button>
        </ButtonWrapper>
        <MapWrapper>
          {placeId && configs?.google_maps_api_key?.value && (
            <GoogleMapsMap
              apiKey={configs?.google_maps_api_key?.value}
              location={defaultPosition}
              mapControls={googleMapsControls}
              isFitCenter
              setDetails={setDetails}
              placeId={placeId}
            />
          )}
        </MapWrapper>
      </AddNewBusinessContainer>
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

export const BusinessAdd = (props) => {
  const history = useHistory()
  const addNewBusinessProps = {
    ...props,
    UIComponent: BusinessAddUI,
    handleOpenCategory: (slug) => history.push(`/stores/products/${slug}`)
  }
  return <BusinessAddController {...addNewBusinessProps} />
}
