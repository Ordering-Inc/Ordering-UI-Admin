import React, { useEffect, useRef, useState } from 'react'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { DriverMapMarkerAndInfo } from '../DriverMapMarkerAndInfo'

import { WrapperMap } from './styles'

export const DriversLocation = (props) => {
  const {
    disableUI,
    driversList,
    driverAvailable
  } = props

  const [mapCenter, setMapCenter] = useState({ lat: 19.4326, lng: -99.1332 })
  const [mapZoom, setMapZoom] = useState(10)
  const [onlineDrivers, setOnlineDrivers] = useState([])
  const [offlineDrivers, setOfflineDrivers] = useState([])
  const [mapLoaded, setMapLoaded] = useState(true)

  const defaultCenter = { lat: 19.4326, lng: -99.1332 }
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

    const bounds = new window.google.maps.LatLngBounds()

    if (driverAvailable === 'all') {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location)
        setMapZoom(defaultZoom)
        return
      }
      for (const driver of driversList.drivers) {
        const marker = driver.location !== null ? driver.location : defaultCenter
        const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      }
    }

    if (driverAvailable === 'online') {
      for (const driver of _onlineDrivers) {
        if (driver.available) {
          const marker = driver.location !== null ? driver.location : defaultCenter
          const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
          bounds.extend(newPoint)
        }
      }
    }

    // if (driverAvailable === 'offline') {
    //   for (const driver of _offlineDrivers) {
    //     if (!driver.available) {
    //       const marker = driver.location !== null ? driver.location : defaultCenter
    //       const newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
    //       bounds.extend(newPoint)
    //     }
    //   }
    // }

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
      } else {
        setMapCenter(defaultCenter)
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
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return
    mapFit()
  }, [driversList, driverAvailable, mapLoaded])

  return (
    <WrapperMap ref={mapRef} className='drivers-location' disableUI={disableUI}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
        }}
        onGoogleApiLoaded={() => setMapLoaded(false)}
        defaultCenter={defaultCenter}
        center={mapCenter}
        defaultZoom={defaultZoom}
        zoom={mapZoom}
        options={{ fullscreenControl: false }}
        className='map'
        yesIWantToUseGoogleMapApiInternals
      >
        {driverAvailable === 'all' && driversList.drivers.length !== 0 &&
          driversList.drivers.map((driver) => (
            <DriverMapMarkerAndInfo
              key={driver.id}
              driver={driver}
              lat={driver.location !== null ? driver.location.lat : defaultCenter.lat}
              lng={driver.location !== null ? driver.location.lng : defaultCenter.lng}
            />
          ))}
        {onlineDrivers !== null &&
          driverAvailable === 'online' &&
          onlineDrivers.map((driver) => (
            <DriverMapMarkerAndInfo
              key={driver.id}
              driver={driver}
              lat={driver.location !== null ? driver.location.lat : defaultCenter.lat}
              lng={driver.location !== null ? driver.location.lng : defaultCenter.lng}
            />
          ))}
        {driverAvailable === 'offline' &&
          offlineDrivers.length > 0 &&
          offlineDrivers.map((driver) => (
            <DriverMapMarkerAndInfo
              key={driver.id}
              driver={driver}
              lat={driver.location !== null ? driver.location.lat : defaultCenter.lat}
              lng={driver.location !== null ? driver.location.lng : defaultCenter.lng}
            />
          ))}
      </GoogleMapReact>
    </WrapperMap>
  )
}
