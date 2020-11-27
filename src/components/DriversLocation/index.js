import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import { WrapperMap, WrapperMapMarker, MapMarkerImg } from './styles'

export const DriversLocation = (props) => {
  const { driversList, driverAvailable } = props

  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: 74.006 })
  const [mapZoom, setMapZoom] = useState(10)
  const [onlineDrivers, setOnlineDrivers] = useState(null)
  const [offlineDrivers, setOfflineDrivers] = useState(null)

  const defaultCenter = { lat: 40.7128, lng: 74.006 }
  const defaultZoom = 10
  const mapRef = useRef(null)

  const mapFit = () => {
    const _onlineDrivers = driversList.drivers.filter(
      (driver) => driver.available
    )
    setOnlineDrivers(_onlineDrivers)

    const _offlineDrivers = driversList.drivers.filter(
      (driver) => !driver.available
    )
    setOfflineDrivers(_offlineDrivers)

    const google = window.google
    const bounds = new google.maps.LatLngBounds()

    if (driverAvailable === 'all') {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location)
        setMapZoom(defaultZoom)
        return
      }
      for (const driver of driversList.drivers) {
        const marker = driver.location
        const newPoint = new google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      }
    }

    if (driverAvailable === 'online') {
      for (const driver of _onlineDrivers) {
        if (driver.available) {
          const marker = driver.location
          const newPoint = new google.maps.LatLng(marker.lat, marker.lng)
          bounds.extend(newPoint)
        }
      }
    }

    if (driverAvailable === 'offline') {
      for (const driver of _offlineDrivers) {
        if (!driver.available) {
          const marker = driver.location
          const newPoint = new google.maps.LatLng(marker.lat, marker.lng)
          bounds.extend(newPoint)
        }
      }
    }

    if (driverAvailable === 'online') {
      if (_onlineDrivers.length === 0) return
      if (_onlineDrivers.length === 1) {
        setMapCenter(_onlineDrivers[0].location)
        setMapZoom(defaultZoom)
        return
      }
    }

    if (driverAvailable === 'offline') {
      if (_offlineDrivers.length === 0) {
        return
      }
      if (_offlineDrivers.length === 1) {
        setMapCenter(_offlineDrivers[0].location)
        setMapZoom(defaultZoom)
        return
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
    setMapCenter(center)
    setMapZoom(zoom)
  }

  // Fit bounds on mount, and when the markers change
  useEffect(() => {
    if (!driversList.loading && driversList.drivers.length !== 0) {
      mapFit()
    }
  }, [driversList, driverAvailable])

  return (
    <WrapperMap ref={mapRef}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
        }}
        defaultCenter={defaultCenter}
        center={mapCenter}
        defaultZoom={defaultZoom}
        zoom={mapZoom}
        options={{ fullscreenControl: false }}
        className='map'
      >
        {driverAvailable === 'all' && driversList.drivers.length !== 0 &&
          driversList.drivers.map((driver) => (
            <WrapperMapMarker
              offline={!driver.available}
              lat={driver.location.lat}
              lng={driver.location.lng}
              key={driver.id}
            >
              {driver.photo ? (
                <MapMarkerImg bgimage={driver.photo} />
              ) : (
                <FaUserAlt />
              )}
            </WrapperMapMarker>
          ))}
        {onlineDrivers !== null &&
          driverAvailable === 'online' &&
          onlineDrivers.map((driver) => (
            <WrapperMapMarker
              offline={!driver.available}
              lat={driver.location.lat}
              lng={driver.location.lng}
              key={driver.id}
            >
              {driver.photo ? (
                <MapMarkerImg bgimage={driver.photo} />
              ) : (
                <FaUserAlt />
              )}
            </WrapperMapMarker>
          ))}
        {driverAvailable === 'offline' &&
          offlineDrivers.length > 0 &&
          offlineDrivers.map((driver) => (
            <WrapperMapMarker
              offline={!driver.available}
              lat={driver.location.lat}
              lng={driver.location.lng}
              key={driver.id}
            >
              {driver.photo ? (
                <MapMarkerImg bgimage={driver.photo} />
              ) : (
                <FaUserAlt />
              )}
            </WrapperMapMarker>
          ))}
      </GoogleMapReact>
    </WrapperMap>
  )
}
