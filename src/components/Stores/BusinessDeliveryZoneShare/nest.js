import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'

import { useApi, useSession, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const BusinessDeliveryZoneShare = (props) => {
  const {
    UIComponent,
    business,
    zone,
    businesses,
    busienssesPropsToFetch,
    handleUpdateBusinessDeliveryZone
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessesState, setBusinessesState] = useState({ businesses: [], loading: false, error: null })
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])

  /**
   * Method to get all the business list from API
   */
  const getAllBusinesses = async () => {
    try {
      setBusinessesState({ ...businessesState, loading: true })
      const functionFetch = ordering.setAccessToken(token).businesses().select(busienssesPropsToFetch).asDashboard()
      const { content: { error, result } } = await functionFetch.get()
      if (!error) {
        const _businesses = result.filter(_business => _business.id !== business.id)
        setBusinessesState({ ...businessesState, businesses: _businesses, loading: false })
      }
    } catch (err) {
      setBusinessesState({ ...businessesState, loading: false, error: err.message })
    }
  }

  /**
   * Method to share the business zone
   * @param {Number} businessId business id
   * @param {Boolean} checked checked state
   */
  const handleSelectBusiness = (businessId, checked) => {
    if (checked) {
      setSelectedBusinessIds([...selectedBusinessIds, businessId])
    } else {
      const _selectedBusinessIds = selectedBusinessIds.filter(id => id !== businessId)
      setSelectedBusinessIds(_selectedBusinessIds)
    }
  }

  /**
   * Method to share the business zone
   * @param {Boolean} isAll state if all or none
   */
  const handleSelectAllBusiness = (isAll) => {
    if (isAll) {
      const businessIds = businessesState.businesses?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds)
    } else {
      setSelectedBusinessIds([])
    }
  }

  /**
   * Method to share the business zone
   */
  const handleShareBusinesses = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })

      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      // example fetch: https://apiv4.ordering.co/v400/en/luisv4/business/49/deliveryzones/2?jbusinesses=[3]

      const response = await fetch(`${ordering.root}/business/${business.id}/deliveryzones/${zone.id}?jbusinesses=${selectedBusinessIds}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        const zoneBusinesses = []
        for (const id of selectedBusinessIds) {
          zoneBusinesses.push({
            id: id,
            name: businessesState.businesses.find(_business => _business.id === id)?.name,
            pivot: { business_id: id, zone_id: zone.id }
          })
        }
        const _businessMenu = { ...zone, businesses: zoneBusinesses }
        const zones = business.zones.filter(_zone => {
          if (_zone.id === _businessMenu.id) {
            Object.assign(_zone, _businessMenu)
          }
          return true
        })
        const _business = { ...business, zones: zones }
        handleUpdateBusinessDeliveryZone && handleUpdateBusinessDeliveryZone(_business)
        setActionState({ loading: false, result: { error: false } })
        showToast(ToastType.Success, t('BUSINESS_SAVED', 'Business saved'))
      }
    } catch (err) {
      setActionState({ loading: false, result: { error: false } })
    }
  }

  useEffect(() => {
    if (businesses) {
      setBusinessesState({ ...businessesState, businesses: businesses, loading: false })
    } else {
      getAllBusinesses()
    }
  }, [businesses])

  useEffect(() => {
    if (zone?.businesses) {
      const businessIds = zone.businesses?.reduce((ids, business) => [...ids, business.id], [])
      setSelectedBusinessIds(businessIds)
    }
  }, [zone])

  useEffect(() => {
    console.log('selectedBusinessIds =  ', selectedBusinessIds)
  }, [selectedBusinessIds])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessesState={businessesState}
          actionState={actionState}
          selectedBusinessIds={selectedBusinessIds}
          handleSelectBusiness={handleSelectBusiness}
          handleSelectAllBusiness={handleSelectAllBusiness}
          handleShareBusinesses={handleShareBusinesses}
        />
      )}
    </>
  )
}

BusinessDeliveryZoneShare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessDeliveryZoneShare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  busienssesPropsToFetch: ['id', 'name', 'logo']
}
