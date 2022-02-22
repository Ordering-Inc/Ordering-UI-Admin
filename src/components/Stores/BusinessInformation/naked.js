import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useConfig } from '../../contexts/ConfigContext'
import { useSession, useApi, useConfig } from 'ordering-components-admin'

/**
 * Component to manage business form details behavior without UI component
 */
export const BusinessFormDetails = (props) => {
  const {
    UIComponent,
    business,
    handleSuccessUpdate,
    handleSucessAddBusiness
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [{ configs }] = useConfig()

  const [businessState, setBusinessState] = useState({ loading: false, business: null, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [addressChange, setAddressChange] = useState(null)
  let timeout = null

  const googleMapsApiKey = configs?.google_maps_api_key?.value

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * deafult params to add the business newly
   */
  const defaultAddBusinessParams = {
    minimum: 0,
    delivery_price: 0,
    tax: 0,
    tax_type: 1,
    service_fee: 0,
    enabled: true,
    owner_id: session?.user?.id,
    schedule: [
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] },
      { enabled: true, lapses: [{ open: { hour: 0, minute: 0 }, close: { hour: 23, minute: 59 } }] }
    ]
  }

  /**
   * Default fuction for business profile workflow
   */
  const handleUpdateClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.businesses(business?.id).save(formState.changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: response.content.error ? formState.changes : {},
        result: response.content,
        loading: false
      })

      if (!response.content.error) {
        setBusinessState({
          ...businessState,
          businesses: {
            ...businessState.business,
            ...response.content
          }
        })
        if (handleSuccessUpdate) {
          handleSuccessUpdate(response.content.result)
        }
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
   * Method to add the business
   */
  const handleAddBusiness = async () => {
    try {
      setFormState({ ...formState, loading: true })
      const changes = { ...formState.changes, ...defaultAddBusinessParams }
      const response = await ordering.businesses().save(changes, {
        accessToken: session.token
      })
      setFormState({
        ...formState,
        changes: response.content.error ? formState.changes : {},
        result: response.content,
        loading: false
      })

      if (!response.content.error) {
        setBusinessState({
          ...businessState,
          businesses: {
            ...businessState.business,
            ...response.content
          }
        })

        if (handleSucessAddBusiness) {
          handleSucessAddBusiness(response.content.result)
        }
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
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update business photo data
   * @param {File} file Image to change business photo
   */
  const handlechangeImage = (file, name) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          [name]: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  const handleChangeSwtich = (name, checked) => {
    const changes = { ...formState.changes, [name]: checked }
    setFormState({
      ...formState,
      changes: changes
    })
  }

  const getTimeZone = async (lat, lng) => {
    const date = new Date()
    const timestamp = Math.floor(date.getTime() / 1000)
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${timestamp}&key=${googleMapsApiKey}`
    const response = await fetch(url, {
      method: 'GET'
    })
    const result = await response.json()
    return result?.timeZoneId
  }

  const handleChangeAddress = async (address) => {
    const timezone = await getTimeZone(address?.location?.lat, address?.location?.lng)
    setAddressChange({
      address: address?.address,
      location: { ...address?.location, zipcode: address?.zipcode ? address.zipcode : -1, zoom: 15 },
      timezone: timezone
    })
  }

  const handleChangeCenter = (address) => {
    let timezone

    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      timezone = await getTimeZone(address?.lat(), address?.lng())
      setAddressChange({
        location: {
          lat: address?.lat(),
          lng: address?.lng(),
          zoom: 15,
          zipcode: -1
        },
        timezone: timezone
      })
    }, 200)
  }

  useEffect(() => {
    if (!addressChange) return
    setFormState({
      ...formState,
      changes: {
        ...formState?.changes,
        ...addressChange
      }
    })
  }, [addressChange])

  useEffect(() => {
    if (!business) return
    setBusinessState({ ...businessState, business: business })
  }, [business])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cleanFormState={cleanFormState}
          formState={formState}
          businessState={businessState}
          setFormState={setFormState}
          handleChangeInput={handleChangeInput}
          handleButtonUpdateClick={handleUpdateClick}
          handlechangeImage={handlechangeImage}
          handleAddBusiness={handleAddBusiness}
          handleChangeAddress={handleChangeAddress}
          handleChangeCenter={handleChangeCenter}
          handleChangeSwtich={handleChangeSwtich}
        />
      )}
    </>
  )
}

BusinessFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before business details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessFormDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
