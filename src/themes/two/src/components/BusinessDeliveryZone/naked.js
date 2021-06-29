import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessDeliveryZone = (props) => {
  const {
    business,
    UIComponent,
    handleSuccessUpdate
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [businessDeliveryZonesState, setBusinessDeliveryZonesState] = useState({ zones: [], loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [zoneId, setZoneId] = useState(null)
  const [businessZones, setBusinessZones] = useState([])
  const [errors, setErrors] = useState({})
  /**
   * Method to update the business delivery zone from API
   */
  const handleUpdateBusinessDeliveryZone = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones/${zoneId}`, requestOptions)
      const content = await response.json()
      setFormState({
        ...formState,
        changes: content.error ? formState.changes : {},
        result: content.result,
        loading: false
      })
      if (!content.error) {
        const zones = businessDeliveryZonesState.zones.filter(zone => {
          if (zone.id === zoneId) {
            Object.assign(zone, content.result)
          }
          return true
        })
        setBusinessDeliveryZonesState({
          ...businessDeliveryZonesState,
          loading: false,
          zones: zones
        })
        const _business = { ...business, zones: zones }
        handleSuccessUpdate && handleSuccessUpdate(_business)
      } else {
        setBusinessDeliveryZonesState({
          ...setBusinessDeliveryZonesState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Method to delete the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleDeleteBusinessDeliveryZone = async (zoneId) => {
    try {
      setBusinessDeliveryZonesState({ ...businessDeliveryZonesState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones/${zoneId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const zones = businessDeliveryZonesState.zones.filter(zone => zone.id !== zoneId)
        setBusinessDeliveryZonesState({
          ...businessDeliveryZonesState,
          loading: false,
          zones: zones
        })
        const _business = { ...business, zones: zones }
        handleSuccessUpdate && handleSuccessUpdate(_business)
      } else {
        setBusinessDeliveryZonesState({
          ...setBusinessDeliveryZonesState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setBusinessDeliveryZonesState({
        ...setBusinessDeliveryZonesState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to change the business delivery zone
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleChangeActiveState = (zoneId) => {
    setZoneId(zoneId)
    const businessZone = businessDeliveryZonesState.zones.find(zone => zone.id === zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        enabled: !businessZone.enabled
      }
    })
  }

  /**
   * Method to change the business dleivey zone name, price, minimum
   * @param {EventTarget} e Related HTML event
   * @param {Number} zoneId id of business dleivery zone
   */
  const handleChangeInput = (e, zoneId) => {
    const _businessZones = businessZones.filter(zone => {
      if (zone.id === zoneId) {
        zone[e.target.name] = e.target.value
      }
      return true
    })

    setBusinessZones(_businessZones)

    setZoneId(zoneId)
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    if (!Object.keys(formState.changes).length) return
    const businessZone = businessZones.find(zone => zone.id === zoneId)
    if (businessZone?.name === '' || businessZone?.minimum === '' || businessZone?.price === '') {
      setErrors({
        name: businessZone?.name === '',
        minimum: businessZone?.minimum === '',
        price: businessZone?.price === ''
      })
    } else {
      handleUpdateBusinessDeliveryZone()
    }
  }, [formState.changes])

  useEffect(() => {
    if (business?.zones) {
      setBusinessDeliveryZonesState({ ...businessDeliveryZonesState, zones: business?.zones })
      setBusinessZones(business?.zones)
    }
  }, [business])
  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            businessDeliveryZonesState={businessDeliveryZonesState}
            handleChangeInput={handleChangeInput}
            handleChangeActiveState={handleChangeActiveState}
            handleDeleteBusinessDeliveryZone={handleDeleteBusinessDeliveryZone}
            errors={errors}
            cleanErrors={() => setErrors({})}
          />
        )
      }
    </>
  )
}

BusinessDeliveryZone.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Business, this must be contains an object with all business info
  */
  business: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after order details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after order details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessDeliveryZone.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
