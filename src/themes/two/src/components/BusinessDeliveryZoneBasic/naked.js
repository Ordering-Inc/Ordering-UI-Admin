import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const DrawingGoogleMaps = (props) => {
  const {
    apiKey,
    mapControls,
    clearState,
    location,
    type,
    data,
    fillStyle,
    infoContentString
  } = props

  if (!apiKey) {
    console.warn('Prop `apiKey` is required to use Google Maps components.')
  }

  const divRef = useRef()
  const [googleMap, setGoogleMap] = useState(null)
  const [googleMapMarker, setGoogleMapMarker] = useState(null)
  const [circleZone, setCircleZone] = useState(null)
  const [polygonZone, setPolygonZone] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)
  const center = { lat: location?.lat, lng: location?.lng }
  const [googleReady, setGoogleReady] = useState(false)

  useEffect(() => {
    if (googleReady) {
      const map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom ?? mapControls.defaultZoom,
        center,
        zoomControl: mapControls?.zoomControl,
        streetViewControl: mapControls?.streetViewControl,
        fullscreenControl: mapControls?.fullscreenControl,
        mapTypeControl: mapControls?.mapTypeControl,
        mapTypeId: mapControls?.mapTypeId,
        mapTypeControlOptions: {
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT,
          ...mapControls?.mapTypeControlOptions
        }
      })

      let marker = null
      setGoogleMap(map)
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(center?.lat, center?.lng),
        map,
        draggable: !!mapControls?.isMarkerDraggable
      })
      setGoogleMapMarker(marker)

      // const drawingManager = new window.google.maps.drawing.DrawingManager({
      //   drawingMode: window.google.maps.drawing.OverlayType.CIRCLE,
      //   drawingControl: true,
      //   drawingControlOptions: {
      //     position: window.google.maps.ControlPosition.TOP_CENTER,
      //     drawingModes: [
      //       window.google.maps.drawing.OverlayType.CIRCLE,
      //       window.google.maps.drawing.OverlayType.POLYGON
      //     ]
      //   },
      //   circleOptions: {
      //     fillColor: '#2C7BE5',
      //     strokeColor: '#03459E',
      //     fillOpacity: 0.2,
      //     strokeWeight: 2,
      //     clickable: false,
      //     editable: true,
      //     draggable: true,
      //     zIndex: 1
      //   },
      //   polygonOptions: {
      //     fillColor: '#2C7BE5',
      //     strokeColor: '#03459E',
      //     fillOpacity: 0.2,
      //     strokeWeight: 2,
      //     clickable: false,
      //     editable: true,
      //     draggable: true,
      //     zIndex: 1
      //   }
      // })
      // drawingManager.setMap(map)
    }
  }, [googleReady])

  /**
   * Draw init shap
   */
  useEffect(() => {
    if (googleReady && googleMap) {
      if (type === 1) {
        const circle = new window.google.maps.Circle({
          ...fillStyle,
          draggable: true,
          map: googleMap,
          center: data.center,
          radius: data.radio * 1000
        })
        setCircleZone(circle)

        const _infoWindow = new window.google.maps.InfoWindow({
          content: infoContentString,
          position: data.center
        })
        setInfoWindow(_infoWindow)
        _infoWindow.open(googleMap)
      }
      if (type === 2) {
        const polygon = new window.google.maps.Polygon({
          ...fillStyle,
          draggable: false,
          map: googleMap,
          paths: data
        })
        setPolygonZone(polygon)
      }
    }
  }, [type, data, googleReady, googleMap])

  const onCircleCenterChanged = () => {
    console.log('radius', circleZone.getRadius())
    console.log('lat', circleZone.getCenter().lat())
    console.log('lng', circleZone.getCenter().lng())
  }

  const onCircleRadiusChanged = () => {
    console.log('radius', circleZone.getRadius())
  }

  const onPoygonPathChanged = () => {
    const data = []
    for (const pos of polygonZone.getPath().getArray()) {
      const position = {
        lat: pos.lat(),
        lng: pos.lng()
      }
      data.push(position)
    }
    console.log(data)
  }

  useEffect(() => {
    if (circleZone) {
      window.google.maps.event.addListener(circleZone, 'center_changed', onCircleCenterChanged)
      window.google.maps.event.addListener(circleZone, 'radius_changed', onCircleRadiusChanged)
    }
  }, [circleZone])

  useEffect(() => {
    if (polygonZone) {
      window.google.maps.event.addListener(polygonZone, 'mouseup', onPoygonPathChanged)
    }
  }, [polygonZone])

  /**
   * clear all the shapes
   */
  useEffect(() => {
    if (clearState) {
      if (type === 1) {
        circleZone.setMap(null)
        infoWindow.close()
      }
      if (type === 2) polygonZone.setMap(null)
    }
  }, [clearState, type])

  /**
   * Fit map
   */
  useEffect(() => {
    if (!googleReady) return
    const bounds = new window.google.maps.LatLngBounds()
    if (type === 1 && circleZone) {
      bounds.union(circleZone.getBounds())
      googleMap.fitBounds(bounds)
    }
    if (type === 2 && polygonZone) {
      for (const position of data) {
        bounds.extend(position)
      }
      googleMap.fitBounds(bounds)
    }
  }, [googleReady, data, type, center, googleMap, circleZone, polygonZone])

  useEffect(() => {
    if (googleReady) {
      center.lat = location?.lat
      center.lng = location?.lng
      googleMapMarker && googleMapMarker.setPosition(new window.google.maps.LatLng(center?.lat, center?.lng))
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center?.lat, center?.lng))
    }
  }, [location])

  /**
   * append google map script
   */
  useEffect(() => {
    if (!apiKey) {
      return
    }
    let checker = null
    if (window.document.getElementById('google-maps-sdk-shap')) {
      if (typeof google !== 'undefined') {
        setGoogleReady(true)
      } else {
        checker = setInterval(() => {
          if (typeof google !== 'undefined') {
            setGoogleReady(true)
            clearInterval(checker)
          }
        }, 100)
      }
      return
    }

    window.googleAsyncInit = () => {
      setGoogleReady(true)
    }

    const js = window.document.createElement('script')
    js.id = 'google-maps-sdk-shap'
    js.async = true
    js.defer = true
    js.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=drawing&callback=googleAsyncInit`

    window.document.body.appendChild(js)
    return () => {
      if (checker) {
        clearInterval(checker)
      }
    }
  }, [apiKey])

  return (
    googleReady && (
      <div
        id='map'
        ref={divRef}
        style={{ width: '70%', height: '50%', position: 'absolute' }}
      />
    )
  )
}

DrawingGoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: PropTypes.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DrawingGoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

DrawingGoogleMaps.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: PropTypes.string.isRequired
}
