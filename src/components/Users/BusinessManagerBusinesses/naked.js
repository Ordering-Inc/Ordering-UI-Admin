import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'

import { useApi, useSession, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const BusinessManagerBusinesses = (props) => {
  const {
    UIComponent,
    userId,
    busienssesPropsToFetch
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [businessesState, setBusinessesState] = useState({ businesses: [], loading: false, error: null })
  const [selectedBusinessIds, setSelectedBusinessIds] = useState([])
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to get the user's businesses from API
   */
  const getDefaultBusinesses = async () => {
    try {
      setActionState({
        ...actionState,
        loading: true
      })
      const fetchEndpoint = ordering.setAccessToken(token).users(userId).select(['businesses'])
      const { content: { error, result } } = await fetchEndpoint.get()
      if (!error) {
        setActionState({ loading: false, error: null })
        const businessIds = result.businesses?.reduce((ids, business) => [...ids, business.id], [])
        setSelectedBusinessIds(businessIds)
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }
  /**
   * Method to get all the business list from API
   */
  const getAllBusinesses = async () => {
    try {
      setBusinessesState({ ...businessesState, loading: true })
      const functionFetch = ordering.setAccessToken(token).businesses().select(busienssesPropsToFetch).asDashboard()
      const { content: { error, result } } = await functionFetch.get()
      if (!error) {
        setBusinessesState({ ...businessesState, businesses: result, loading: false })
      }
    } catch (err) {
      setBusinessesState({ ...businessesState, loading: false, error: err.message })
    }
  }

  /**
   * Method to share the business menu
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
   * Method to share the business menu
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
   * Function to update the business owner's businesses from API
   */
  const handleUpdateBusinesses = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: false, error: null })
      const { content: { error, result } } = await ordering.setAccessToken(token).users(userId).save({ businesses: selectedBusinessIds })
      if (!error) {
        setActionState({ loading: false, error: null })
        showToast(ToastType.Success, t('BUSINESS_SAVED', 'Business saved'))
      } else {
        setActionState({ loading: false, error: result })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (props.businesses) {
      setBusinessesState({ ...businessesState, businesses: props.businesses, loading: false })
    } else {
      getAllBusinesses()
    }
  }, [props.businesses])

  useEffect(() => {
    getDefaultBusinesses()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          actionState={actionState}
          businessesState={businessesState}
          selectedBusinessIds={selectedBusinessIds}
          handleSelectBusiness={handleSelectBusiness}
          handleSelectAllBusiness={handleSelectAllBusiness}
          handleUpdateBusinesses={handleUpdateBusinesses}
        />
      )}
    </>
  )
}

BusinessManagerBusinesses.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Business Manager Businesses
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Manager Businesses
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before select Business Manager Businesses
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after select Business Manager Businesses
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessManagerBusinesses.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  busienssesPropsToFetch: ['id', 'name', 'logo']
}
