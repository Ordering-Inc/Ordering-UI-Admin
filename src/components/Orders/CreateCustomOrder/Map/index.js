import React, { useMemo, useRef, useState, useEffect } from 'react'
import { useConfig } from 'ordering-components-admin'
import GoogleMapReact, { fitBounds } from 'google-map-react'
import { InterActOrderMarker } from '../../InterActOrderMarker'

import { Container } from './styles'

export const Map = (props) => {
  const {
    business,
    customer,
    customerLocation
  } = props
  const [{ configs }] = useConfig()

  const mapRef = useRef(null)
  const googleMapsApiKey = useMemo(() => configs?.google_maps_api_key?.value, [configs])
  const defaultLatitude = Number(configs?.location_default_latitude?.value)
  const defaultLongitude = Number(configs?.location_default_longitude?.value)
  const isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude)
  const defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  }

  const greenFillStyle = {
    fillColor: '#008000',
    fillOpacity: 0.3,
    strokeColor: '#008000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  }

  const units = {
    mi: 1609,
    km: 1000
  }

  const defaultZoom = 10
  const [mapLoaded, setMapLoaded] = useState(true)
  const [mapCenter, setMapCenter] = useState(defaultCenter)
  const [mapZoom, setMapZoom] = useState(10)
  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)
  const [circleZones, setCircleZones] = useState([])
  const [polygonZones, setPolygonZones] = useState([])

  const handleMapChange = (data) => {
    if (!data?.zoom) return
    setMapZoom(data?.zoom)
  }

  const mapFit = () => {
    const bounds = new window.google.maps.LatLngBounds()

    if (!business?.location) {
      setMapCenter(customerLocation)
      setMapZoom(defaultZoom)
      return
    }

    let marker, newPoint
    marker = business?.location
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
    bounds.extend(newPoint)

    marker = customerLocation
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng)
    bounds.extend(newPoint)

    // drwa delivery zones
    circleZones.forEach(circle => circle.setMap(null))
    polygonZones.forEach(polygon => polygon.setMap(null))
    const _circleZones = []
    const _polygonZones = []
    if (map && maps && business?.zones) {
      const center = business?.location
      for (const deliveryZone of business.zones) {
        if (deliveryZone.type === 1 && deliveryZone?.data?.center && deliveryZone?.data?.radio) {
          const newCircleZone = new window.google.maps.Circle({
            ...greenFillStyle,
            editable: false,
            center: deliveryZone?.data.center,
            radius: deliveryZone?.data.radio * 1000
          })
          newCircleZone.setMap(map)
          bounds.union(newCircleZone.getBounds())
          map.fitBounds(bounds)
          _circleZones.push(newCircleZone)
        }
        if (deliveryZone.type === 5 && deliveryZone?.data?.distance) {
          const newCircleZone = new window.google.maps.Circle({
            ...greenFillStyle,
            editable: false,
            center: center,
            radius: deliveryZone?.data.distance * units[deliveryZone?.data?.unit]
          })
          newCircleZone.setMap(map)
          bounds.union(newCircleZone.getBounds())
          map.fitBounds(bounds)
          _circleZones.push(newCircleZone)
        }
        if (deliveryZone?.type === 2 && Array.isArray(deliveryZone?.data)) {
          const newPolygonZone = new window.google.maps.Polygon({
            ...greenFillStyle,
            editable: false,
            paths: deliveryZone?.data
          })
          newPolygonZone.setMap(map)
          if (Array.isArray(deliveryZone?.data)) {
            for (const position of deliveryZone?.data) {
              bounds.extend(position)
            }
            map.fitBounds(bounds)
          }
          _polygonZones.push(newPolygonZone)
        }
      }
    }
    setCircleZones(_circleZones)
    setPolygonZones(_polygonZones)

    // fit map center and zoone
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
  }

  useEffect(() => {
    if (mapLoaded) return
    mapFit()
  }, [customerLocation, business?.location, mapLoaded, map, maps, business?.zones])

  const onMapLoaded = (map, maps) => {
    setMapLoaded(false)
    setMap(map)
    setMaps(maps)
  }

  return (
    <Container ref={mapRef}>
      {googleMapsApiKey && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
            libraries: ['places', 'geometry', 'drawing', 'visualization']
          }}
          onGoogleApiLoaded={({ map, maps }) => onMapLoaded(map, maps)}
          defaultCenter={defaultCenter}
          center={mapCenter}
          defaultZoom={defaultZoom}
          zoom={mapZoom}
          options={{ fullscreenControl: true }}
          className='map'
          onChange={(data) => handleMapChange(data)}
          yesIWantToUseGoogleMapApiInternals
        >
          {business?.location && (
            <InterActOrderMarker
              business={business}
              lat={business?.location?.lat}
              lng={business?.location?.lng}
              image={business?.logo}
            />
          )}
          <InterActOrderMarker
            customer={customer}
            lat={customerLocation?.lat}
            lng={customerLocation?.lng}
            image={customer?.photo}
          />
        </GoogleMapReact>
      )}
    </Container>
  )
}
