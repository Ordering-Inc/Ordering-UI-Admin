import React, { useEffect, useRef, useState } from 'react'
import { useConfig, useLanguage } from 'ordering-components-admin'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { DriverMapMarkerAndInfo } from '../DriverMapMarkerAndInfo'
import { InterActOrderMarker } from '../InterActOrderMarker'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { AutoScroll } from '../../Shared'

import {
  WrapperMap,
  WrapperOnlineDrivers,
  OnlineDrivers,
  WrapperDriverImage,
  DriverImage,
  WrapDriverInfo,
  DriverInfo
} from './styles'

export const DeliveriesLocation = (props) => {
  const {
    driversList,
    interActionMapOrder
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const [mapCenter, setMapCenter] = useState({ lat: 19.4326, lng: -99.1332 })
  const [mapZoom, setMapZoom] = useState(10)
  const [onlineDrivers, setOnlineDrivers] = useState([])
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapFitted, setMapFitted] = useState(false)

  const [interActionOrderDriverLocation, setInterActionOrderDriverLocation] = useState(null)

  const defaultCenter = { lat: 19.4326, lng: -99.1332 }
  const defaultZoom = 10
  const mapRef = useRef(null)

  const mapFit = () => {
    const _onlineDrivers = driversList.drivers.filter(
      (driver) => driver.enabled && driver.available && !driver.busy
    )
    setOnlineDrivers(_onlineDrivers)

    const bounds = new window.google.maps.LatLngBounds()

    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location)
        setMapZoom(defaultZoom)
        return
      }
      for (const driver of driversList.drivers) {
        const marker = (driver.location !== null && typeof driver.location === 'object') ? driver.location : defaultCenter
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
        marker = (interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object') ? interActionOrderDriverLocation : defaultCenter
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      }
    }

    const newBounds = {
      ne: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      sw: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
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
    setMapFitted(false)
  }, [interActionMapOrder])

  const handleMapChange = (data) => {
    setMapZoom(data?.zoom)
  }

  return (
    <WrapperMap ref={mapRef} className='drivers-location'>
      {googleMapsApiKey && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: googleMapsApiKey
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

          {interActionMapOrder === null && driversList.drivers.length !== 0 &&
            driversList.drivers.filter(driver => driver?.enabled).map((driver) => (
              <DriverMapMarkerAndInfo
                key={driver.id}
                driver={driver}
                lat={(driver.location !== null && typeof driver.location === 'object') ? driver.location.lat : defaultCenter.lat}
                lng={(driver.location !== null && typeof driver.location === 'object') ? driver.location.lng : defaultCenter.lng}
              />
            ))}

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
              lat={(interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object') ? interActionOrderDriverLocation?.lat : defaultCenter.lat}
              lng={(interActionOrderDriverLocation !== null && typeof interActionOrderDriverLocation === 'object') ? interActionOrderDriverLocation?.lng : defaultCenter.lng}
              image={interActionMapOrder?.driver?.photo}
            />
          )}
        </GoogleMapReact>
      )}

      {interActionMapOrder !== null && interActionMapOrder?.driver === null && onlineDrivers.length > 0 && (
        <WrapperOnlineDrivers>
          <p>{t('ACTIVE_DRIVERS', 'Drivers online')}</p>
          <OnlineDrivers>
            <AutoScroll innerScroll>
              {onlineDrivers.length > 0 && (
                <>
                  {onlineDrivers.map(driver => (
                    <WrapDriverInfo key={driver.id}>
                      <WrapperDriverImage>
                        {driver?.photo ? (
                          <DriverImage bgimage={driver?.photo} />
                        ) : (
                          <FaUserAlt />
                        )}
                      </WrapperDriverImage>
                      <DriverInfo>
                        <p>{driver.name} {driver.lastname}</p>
                        <p>{t('DRIVER', 'Driver')}</p>
                      </DriverInfo>
                    </WrapDriverInfo>
                  ))}
                </>
              )}
            </AutoScroll>
          </OnlineDrivers>
        </WrapperOnlineDrivers>
      )}
    </WrapperMap>
  )
}
