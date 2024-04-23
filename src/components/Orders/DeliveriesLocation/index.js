import React, { useEffect, useRef, useState } from 'react'
import { useConfig, useLanguage, useApi, useSession } from 'ordering-components-admin'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { DriverMapMarkerAndInfo } from '../DriverMapMarkerAndInfo'
import { InterActOrderMarker } from '../InterActOrderMarker'
import { AutoScroll } from '../../Shared'
import { useTheme } from 'styled-components'

import {
  WrapperMap,
  WrapperOnlineDrivers,
  OnlineDrivers,
  WrapperDriverImage,
  DriverImage,
  WrapDriverInfo,
  DriverInfo
} from './styles'

const DeliveriesLocationPropsAreEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.interActionMapOrder) === JSON.stringify(nextProps.interActionMapOrder) &&
    JSON.stringify(prevProps.driversList) === JSON.stringify(nextProps.driversList)
}

export const DeliveriesLocation = React.memo((props) => {
  const {
    driversList,
    interActionMapOrder
  } = props

  const theme = useTheme()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [session] = useSession()
  const [configState] = useConfig()

  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const defaultLatitude = Number(configState?.configs?.location_default_latitude?.value)
  const defaultLongitude = Number(configState?.configs?.location_default_longitude?.value)
  const isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude)
  const defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  }

  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [mapZoom, setMapZoom] = useState(10)
  const [activeDrivers, setActiveDrivers] = useState([])
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapFitted, setMapFitted] = useState(false)

  const [interActionOrderDriverLocation, setInterActionOrderDriverLocation] = useState(null)
  const defaultZoom = 10
  const mapRef = useRef(null)

  const mapFit = () => {
    const bounds = new window.google.maps.LatLngBounds()

    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        setMapCenter(
          (driversList.drivers[0].location !== null && typeof driversList.drivers[0].location === 'object' && driversList.drivers[0].location?.lat && driversList.drivers[0].location?.lng)
            ? driversList.drivers[0].location
            : typeof driversList.drivers[0].location === 'string'
              ? {
                lat: parseFloat(driversList.drivers[0]?.location?.split(',')[0].replace(/[^-.0-9]/g, '')),
                lng: parseFloat(driversList.drivers[0]?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
              }
              : defaultCenter
        )
        setMapZoom(defaultZoom)
        return
      }
      for (const driver of driversList.drivers) {
        const marker = (driver.location !== null && typeof driver.location === 'object' && driver.location?.lat && driver.location?.lng)
          ? driver.location
          : typeof driver?.location === 'string'
            ? {
              lat: parseFloat(driver?.location?.split(',')[0].replace(/[^-.0-9]/g, '')),
              lng: parseFloat(driver?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
            }
            : defaultCenter
        const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      }
    }

    if (interActionMapOrder !== null) {
      let marker, newPoint
      marker = interActionMapOrder?.business?.location !== null ? interActionMapOrder?.business?.location : defaultCenter
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)

      marker = interActionMapOrder?.customer?.location !== null && interActionMapOrder?.customer?.location?.lat ? interActionMapOrder.customer.location : defaultCenter
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)

      if (interActionMapOrder.driver !== null) {
        marker = (interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object' && interActionOrderDriverLocation?.lat && interActionOrderDriverLocation?.lng) ? interActionOrderDriverLocation : defaultCenter
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      } else {
        for (const activeDriver of activeDrivers) {
          const marker = (activeDriver.location !== null && typeof activeDriver.location === 'object' && activeDriver.location?.lat && activeDriver.location?.lng) ? activeDriver.location : defaultCenter
          const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
          bounds.extend(newPoint)
        }
      }
    }

    const newBounds = {
      ne: {
        lat: bounds.getNorthEast()?.lat?.(),
        lng: bounds.getNorthEast()?.lng?.()
      },
      sw: {
        lat: bounds.getSouthWest()?.lat?.(),
        lng: bounds.getSouthWest()?.lng?.()
      }
    }

    const mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    }
    const { center, zoom } = fitBounds(newBounds, mapSize)
    setMapZoom(zoom)
    setMapCenter(center)
    setMapFitted(true)
  }

  // Fit bounds on mount, and when the markers change
  useEffect(() => {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return
    if (interActionMapOrder !== null) {
      for (const driver of driversList.drivers) {
        if (driver.id === interActionMapOrder?.driver?.id) {
          setInterActionOrderDriverLocation(driver.location)
        }
      }
    }
    if (!mapFitted) {
      mapFit()
    }
  }, [interActionMapOrder, mapLoaded, driversList, mapFitted])

  useEffect(() => {
    if (!interActionMapOrder || interActionMapOrder?.driver) return
    const getControls = async (order) => {
      const { content: { error: errorResponse, result: response } } = await ordering.setAccessToken(session?.token).controls(order?.id).get()
      const error = await errorResponse
      const result = await response
      if (!error) {
        let driversControls = []
        if (Array.isArray(result?.drivers) && result?.drivers.length > 0) {
          driversControls = (result?.drivers?.filter((driver) => driver.available && !driver.busy))
        }
        return driversControls
      }
      return error
    }

    const fetchData = async () => {
      if (interActionMapOrder !== null) {
        setActiveDrivers([])
        const driversControls = await getControls(interActionMapOrder)
        setActiveDrivers(driversControls)
      }
    }

    fetchData()
  }, [interActionMapOrder?.id])

  useEffect(() => {
    if (activeDrivers.length === 0 && interActionMapOrder) return
    const _driverAvailableList = driversList.drivers.filter((driver) => driver.enabled && driver.available && !driver.busy)
    if (!interActionMapOrder) {
      setActiveDrivers(_driverAvailableList)
      return
    }
    const _onlineDrivers = activeDrivers.map((controlDriver) => {
      const matchingDriver = _driverAvailableList.find((driver) => driver.id === controlDriver.id)
      if (matchingDriver?.location) {
        return { ...controlDriver, location: matchingDriver?.location }
      } else {
        return controlDriver
      }
    })
    setActiveDrivers(_onlineDrivers)
  }, [driversList])

  useEffect(() => {
    setMapFitted(false)
  }, [interActionMapOrder])

  const handleMapChange = (data) => {
    if (!data?.zoom) return
    setMapZoom(data?.zoom)
  }

  return (
    <WrapperMap ref={mapRef} className='drivers-location'>
      {googleMapsApiKey && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
            libraries: ['places', 'geometry', 'drawing', 'visualization']
          }}
          onGoogleApiLoaded={() => setMapLoaded(false)}
          defaultCenter={defaultCenter}
          center={mapCenter}
          defaultZoom={defaultZoom}
          zoom={mapZoom}
          options={{ fullscreenControl: true }}
          className='map'
          onChange={(data) => handleMapChange(data)}
          yesIWantToUseGoogleMapApiInternals
        >
          {interActionMapOrder !== null && (
            <InterActOrderMarker
              business={interActionMapOrder?.business}
              lat={interActionMapOrder?.business?.location?.lat}
              lng={interActionMapOrder?.business?.location?.lng}
              image={interActionMapOrder?.business?.logo}
            />
          )}

          {interActionMapOrder !== null && (
            <InterActOrderMarker
              customer={interActionMapOrder?.customer}
              lat={interActionMapOrder?.customer?.location?.lat ? interActionMapOrder?.customer?.location?.lat : defaultCenter.lat}
              lng={interActionMapOrder?.customer?.location?.lng ? interActionMapOrder?.customer?.location?.lng : defaultCenter.lng}
              image={interActionMapOrder?.customer?.photo}
            />
          )}

          {interActionMapOrder !== null && interActionMapOrder?.driver !== null && (
            <InterActOrderMarker
              driver={interActionMapOrder?.driver}
              timeStatus={interActionMapOrder?.time_status}
              lat={
                (interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object' && interActionOrderDriverLocation?.lat)
                  ? interActionOrderDriverLocation.lat
                  : typeof interActionOrderDriverLocation === 'string'
                    ? parseFloat(interActionOrderDriverLocation?.split(',')[0].replace(/[^-.0-9]/g, ''))
                    : defaultCenter.lat
              }
              lng={
                (interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object' && interActionOrderDriverLocation?.lng)
                  ? interActionOrderDriverLocation.lng
                  : typeof interActionOrderDriverLocation === 'string'
                    ? parseFloat(interActionOrderDriverLocation?.split(',')[1].replace(/[^-.0-9]/g, ''))
                    : defaultCenter.lng
              }
              image={interActionMapOrder?.driver?.photo}
            />
          )}

          {interActionMapOrder === null && activeDrivers.length > 0 && (
            activeDrivers.map((driver) => (
              <InterActOrderMarker
                key={driver.id}
                driver={driver}
                timeStatus={interActionMapOrder?.time_status}
                lat={
                  (driver.location !== null && typeof driver.location === 'object' && driver.location?.lat)
                    ? driver.location.lat
                    : typeof driver.location === 'string'
                      ? parseFloat(driver?.location?.split(',')[0].replace(/[^-.0-9]/g, ''))
                      : defaultCenter.lat
                }
                lng={
                  (driver.location !== null && typeof driver.location === 'object' && driver.location?.lng)
                    ? driver.location.lng
                    : typeof driver.location === 'string'
                      ? parseFloat(driver?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
                      : defaultCenter.lng
                }
                image={driver?.photo}
              />
            ))
          )}
        </GoogleMapReact>
      )}

      {interActionMapOrder !== null && interActionMapOrder?.driver === null && activeDrivers.length >= 0 && (
        <WrapperOnlineDrivers>
          <p>{activeDrivers.length === 0 ? t('NO_DRIVERS_AVAILABLE_FOR_ORDER', 'No Drivers Available for Order') : t('ACTIVE_DRIVERS', 'Drivers online')}</p>
          {activeDrivers.length > 0 && (
            <OnlineDrivers>
              <AutoScroll innerScroll>
                {activeDrivers.map(driver => (
                  <WrapDriverInfo key={driver.id}>
                    <WrapperDriverImage>
                      <DriverImage bgimage={driver?.photo || theme?.images?.icons?.noDriver} />
                    </WrapperDriverImage>
                    <DriverInfo>
                      <p>{driver.name} {driver.lastname}</p>
                      <p>{t('DRIVER', 'Driver')}</p>
                    </DriverInfo>
                  </WrapDriverInfo>
                ))}
              </AutoScroll>
            </OnlineDrivers>
          )}
        </WrapperOnlineDrivers>
      )}
    </WrapperMap>
  )
}, DeliveriesLocationPropsAreEqual)
