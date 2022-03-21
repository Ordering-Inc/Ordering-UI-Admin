import React, { useEffect, useRef, useState } from 'react'
import { useConfig } from 'ordering-components-admin'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { DriverMapMarkerAndInfo } from '../DriverMapMarkerAndInfo'

import {
  WrapperMap
} from './styles'

export const DriversLocation = (props) => {
  const {
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver
  } = props

  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const [mapCenter, setMapCenter] = useState({ lat: 19.4326, lng: -99.1332 })
  const [mapZoom, setMapZoom] = useState(10)
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapFitted, setMapFitted] = useState(false)

  const defaultCenter = { lat: 19.4326, lng: -99.1332 }
  const defaultZoom = 10
  const mapRef = useRef(null)

  const [showDrivers, setShowDrivers] = useState([])

  const mapFit = () => {
    const bounds = new window.google.maps.LatLngBounds()

    if (showDrivers.length === 1) {
      setMapCenter((showDrivers[0].location !== null && typeof showDrivers[0].location === 'object') ? showDrivers[0].location : defaultCenter)
      setMapZoom(mapZoom)
      return
    }

    for (const driver of showDrivers) {
      const marker = (driver.location !== null && typeof driver.location === 'object') ? driver.location : defaultCenter
      const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)
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
    if (showDrivers.length === 0 || mapLoaded) return
    if (!mapFitted) {
      mapFit()
    }
  }, [showDrivers, mapLoaded, mapFitted])

  useEffect(() => {
    if (selectedDriver) {
      setShowDrivers([selectedDriver])
    } else {
      if (driversIsOnline) {
        setShowDrivers(onlineDrivers)
      } else {
        setShowDrivers(offlineDrivers)
      }
    }
  }, [onlineDrivers, offlineDrivers, driversIsOnline, selectedDriver])

  const handleMapChange = (data) => {
    setMapZoom(data?.zoom)
  }

  useEffect(() => {
    if (!selectedDriver?.id) return
    setMapFitted(false)
  }, [selectedDriver?.id])

  return (
    <WrapperMap ref={mapRef} className='drivers-location'>
      {googleMapsApiKey && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
            libraries: ['places', 'geometry', 'drawing', 'visualization']
          }}
          id='test_map'
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
          {showDrivers.length !== 0 &&
            showDrivers.map((driver) => (
              <DriverMapMarkerAndInfo
                key={driver.id}
                driver={driver}
                lat={(driver.location !== null && typeof driver.location === 'object') ? driver.location.lat : defaultCenter.lat}
                lng={(driver.location !== null && typeof driver.location === 'object') ? driver.location.lng : defaultCenter.lng}
              />
            ))}
        </GoogleMapReact>
      )}
    </WrapperMap>
  )
}
