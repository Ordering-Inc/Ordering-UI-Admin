import React, { useEffect, useRef, useState } from 'react'
import { useConfig } from 'ordering-components-admin'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { DriverMapMarkerAndInfo } from '../DriverMapMarkerAndInfo'
import { InterActOrderMarker } from '../InterActOrderMarker'
import { SpinnerLoader } from '../../Shared'

import {
  WrapperMap
} from './styles'

export const DriversLocation = (props) => {
  const {
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver,
    selectedOrder,
    assignedOrders
  } = props

  const [configState] = useConfig()
  const googleMapsApiKey = configState?.configs?.google_maps_api_key?.value

  const defaultLatitude = Number(configState?.configs?.location_default_latitude?.value)
  const defaultLongitude = Number(configState?.configs?.location_default_longitude?.value)
  const isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude)
  const defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  }
  const defaultZoom = 10

  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [mapZoom, setMapZoom] = useState(defaultZoom)
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapFitted, setMapFitted] = useState(false)

  const mapRef = useRef(null)

  const [showDrivers, setShowDrivers] = useState([])

  const mapFit = () => {
    const bounds = new window.google.maps.LatLngBounds()

    if (!selectedOrder) {
      if (showDrivers.length === 1 && !selectedOrder && !assignedOrders?.orders?.length) {
        setMapCenter(
          (showDrivers[0].location !== null && typeof showDrivers[0].location === 'object' && showDrivers[0].location?.lat && showDrivers[0].location?.lng)
            ? showDrivers[0].location
            : typeof showDrivers[0].location === 'string'
              ? {
                lat: parseFloat(showDrivers[0]?.location?.split(',')[0].replace(/[^-.0-9]/g, '')),
                lng: parseFloat(showDrivers[0]?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
              }
              : defaultCenter
        )
        setMapZoom(mapZoom)
        return
      }

      for (const driver of showDrivers) {
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

    let marker, newPoint
    if (selectedOrder) {
      marker = selectedOrder?.business?.location !== null ? selectedOrder?.business?.location : defaultCenter
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)

      marker = selectedOrder?.customer?.location !== null && selectedOrder?.customer?.location?.lat ? selectedOrder.customer.location : defaultCenter
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)
    }

    if (selectedOrder?.driver) {
      marker = selectedOrder?.driver?.location !== null && selectedOrder?.driver?.location?.lat ? selectedOrder.driver.location : defaultCenter
      newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
      bounds.extend(newPoint)
    }

    if (selectedDriver && assignedOrders?.orders?.length && !selectedOrder) {
      assignedOrders.orders.forEach(order => {
        marker = order?.business?.location !== null ? order?.business?.location : defaultCenter
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)

        marker = order?.customer?.location !== null && order?.customer?.location?.lat ? order.customer.location : defaultCenter
        newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
        bounds.extend(newPoint)
      })
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
    if (mapLoaded) return
    if (showDrivers.length === 0) {
      setMapZoom(defaultZoom)
      setMapCenter(defaultCenter)
      setMapFitted(false)
      return
    }
    if ((selectedOrder && selectedDriver) || (selectedDriver && assignedOrders?.orders?.length) || (!selectedOrder && !selectedDriver)) {
      mapFit()
      return
    }
    if (!mapFitted) {
      mapFit()
    }
  }, [JSON.stringify(showDrivers), mapLoaded, mapFitted, selectedOrder, assignedOrders?.orders])

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
    setMapFitted(false)
  }, [selectedOrder])

  return (
    <>
      {selectedDriver && assignedOrders?.loading && (
        <SpinnerLoader primary />
      )}
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
            {!selectedOrder && (showDrivers.length !== 0) &&
              showDrivers.map((driver) => (
                <DriverMapMarkerAndInfo
                  key={driver.id}
                  driver={driver}
                  timeStatus={selectedOrder?.time_status || (assignedOrders?.orders?.length && assignedOrders?.orders?.some(order => order.time_status === 'delayed') && 'delayed')}
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
                />
              ))}
            {selectedOrder && (
              <InterActOrderMarker
                customer={selectedOrder?.customer}
                lat={selectedOrder?.customer?.location?.lat ? selectedOrder?.customer?.location?.lat : defaultCenter.lat}
                lng={selectedOrder?.customer?.location?.lng ? selectedOrder?.customer?.location?.lng : defaultCenter.lng}
                image={selectedOrder?.customer?.photo}
              />
            )}
            {selectedOrder && (
              <InterActOrderMarker
                business={selectedOrder?.business}
                lat={selectedOrder?.business?.location?.lat}
                lng={selectedOrder?.business?.location?.lng}
                image={selectedOrder?.business?.logo}
              />
            )}
            {selectedOrder?.driver && (
              <DriverMapMarkerAndInfo
                driver={selectedOrder?.driver}
                timeStatus={selectedOrder?.time_status}
                lat={
                  (selectedOrder?.driver?.location !== null && typeof selectedOrder?.driver?.location === 'object' && selectedOrder?.driver?.location?.lat)
                    ? selectedOrder?.driver?.location.lat
                    : typeof selectedOrder?.driver?.location === 'string'
                      ? parseFloat(selectedOrder?.driver?.location?.split(',')[0].replace(/[^-.0-9]/g, ''))
                      : defaultCenter.lat
                }
                lng={
                  (selectedOrder?.driver?.location !== null && typeof selectedOrder?.driver?.location === 'object' && selectedOrder?.driver?.location?.lng)
                    ? selectedOrder?.driver?.location.lng
                    : typeof selectedOrder?.driver?.location === 'string'
                      ? parseFloat(selectedOrder?.driver?.location?.split(',')[1].replace(/[^-.0-9]/g, ''))
                      : defaultCenter.lng
                }
              />
            )}
            {selectedDriver && assignedOrders?.orders?.length > 0 && !selectedOrder && (
              assignedOrders.orders.map(order => (
                <InterActOrderMarker
                  key={order.id}
                  customer={order?.customer}
                  lat={order?.customer?.location?.lat ? order?.customer?.location?.lat : defaultCenter.lat}
                  lng={order?.customer?.location?.lng ? order?.customer?.location?.lng : defaultCenter.lng}
                  image={order?.customer?.photo}
                />
              ))
            )}
            {selectedDriver && assignedOrders?.orders?.length > 0 && !selectedOrder && (
              assignedOrders.orders.map(order => (
                <InterActOrderMarker
                  key={order.id}
                  business={order?.business}
                  lat={order?.business?.location?.lat}
                  lng={order?.business?.location?.lng}
                  image={order?.business?.logo}
                />
              ))
            )}
          </GoogleMapReact>
        )}
      </WrapperMap>
    </>
  )
}
