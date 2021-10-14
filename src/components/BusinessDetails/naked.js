import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const BusinessDetails = (props) => {
  const {
    asDashboard,
    business,
    businessId,
    propsToFetch,
    UIComponent,
    handleSucessUpdateBusiness,
    handleSucessRemoveBusiness,
    handleSucessAddBusiness
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [businessState, setBusinessState] = useState({ business: null, loading: true, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * Clean formState
   */
  const cleanFormState = (values) => setFormState({ ...formState, ...values })

  /**
   * Method to get business from API
   */
  const getBusinesses = async () => {
    try {
      setBusinessState({
        ...businessState,
        loading: true
      })
      const fetchEndpoint = asDashboard
        ? ordering.setAccessToken(session.token).businesses(businessId).asDashboard()
        : ordering.setAccessToken(session.token).businesses(businessId).select(propsToFetch)
      const { content: { result } } = await fetchEndpoint.get()
      const business = Array.isArray(result) ? null : result
      setBusinessState({
        ...businessState,
        loading: false,
        business
      })
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to change business enable/disable
   * @param {Boolean} enabled business enable state
   */

  const handleChangeActiveBusiness = async (enabled) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).businesses(businessId).save({ enabled: enabled })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })

      if (!error) {
        setBusinessState({
          ...businessState,
          business: result
        })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delete business from API
   */
  const handleDeleteBusiness = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}`, requestOptions)
      const content = await response.json()

      setActionStatus({
        ...actionStatus,
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        handleSucessRemoveBusiness && handleSucessRemoveBusiness(businessId)
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to duplicate business from API
   */
  const handleDuplicateBusiness = async () => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/duplicate`, requestOptions)
      const content = await response.json()

      setActionStatus({
        ...actionStatus,
        loading: false,
        error: content.error ? content.result : null
      })

      if (!content.error) {
        handleSucessAddBusiness && handleSucessAddBusiness(content?.result)
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delet the business owner
   */
  const handleDeleteBusinessOwner = async (owners) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).businesses(businessId).save({ owners: owners })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        const _owners = businessState?.business?.owners.filter(owner => owners.includes(owner.id))
        const _business = {
          ...businessState?.business,
          owners: _owners
        }
        setBusinessState({
          ...businessState,
          business: _business
        })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to delet the business owner
   */
  const handleAddBusinessOwner = async (owners, newOwner) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const { content: { error, result } } = await ordering.setAccessToken(session.token).businesses(businessId).save({ owners: owners })
      setActionStatus({
        ...actionStatus,
        loading: false,
        error: error ? result : null
      })
      if (!error) {
        const _owners = [...businessState?.business?.owners, newOwner]
        const _business = {
          ...businessState?.business,
          owners: _owners
        }
        setBusinessState({
          ...businessState,
          business: _business
        })
      }
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  /**
   * Method to update the business from the API
   */
  const handleUpdateBusinessClick = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const response = await ordering.businesses(businessId).save(formState.changes, {
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
          business: {
            ...businessState.business,
            ...response.content.result
          }
        })
        showToast(ToastType.Success, t('BUSINESS_UPDATED', 'Business updated'))
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
   * Method to add the business fields when new busines item is added
   */
  const handleSuccessAddBusinessItem = (name, result) => {
    const params = [...businessState?.business[name], result]
    setBusinessState({
      ...businessState,
      business: {
        ...businessState?.business,
        [name]: params
      }
    })
  }
  /**
   * Method to delete the business item from business
   */
  const handleSuccessDeleteBusinessItem = (name, id) => {
    const params = businessState?.business[name].filter(item => item.id !== id)
    setBusinessState({
      ...businessState,
      business: {
        ...businessState?.business,
        [name]: params
      }
    })
  }

  /**
   * Method to update the business
   */
  const handleUpdateBusinessState = (result) => {
    const business = { ...businessState?.business }
    Object.assign(business, result)
    setBusinessState({
      ...businessState,
      business: business
    })
  }

  useEffect(() => {
    if (!businessState?.business) return
    handleSucessUpdateBusiness && handleSucessUpdateBusiness(businessState?.business)
  }, [businessState?.business])

  useEffect(() => {
    if (business) {
      setBusinessState({
        ...businessState,
        loading: false,
        business: business
      })
    } else {
      getBusinesses()
    }
  }, [businessId, business])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            businessState={businessState}
            formState={formState}
            setFormState={setFormState}
            cleanFormState={cleanFormState}
            handleChangeActiveBusiness={handleChangeActiveBusiness}
            handleDuplicateBusiness={handleDuplicateBusiness}
            handleDeleteBusiness={handleDeleteBusiness}
            handleDeleteBusinessOwner={handleDeleteBusinessOwner}
            handleAddBusinessOwner={handleAddBusinessOwner}
            handleUpdateBusinessClick={handleUpdateBusinessClick}
            handleUpdateBusinessState={handleUpdateBusinessState}
            handleSuccessAddBusinessItem={handleSuccessAddBusinessItem}
            handleSuccessDeleteBusinessItem={handleSuccessDeleteBusinessItem}
          />
        )
      }
    </>
  )
}

BusinessDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
  * This must be contains businessId to fetch
  */
  businessId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
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

BusinessDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'address', 'alcohol', 'city', 'city_id', 'description', 'delivery_price', 'distance', 'delivery_time', 'enabled', 'featured', 'food', 'gallery', 'groceries', 'header', 'laundry', 'logo', 'location', 'metafields', 'name', 'offers', 'open', 'owners', 'pickup_time', 'reviews', 'schedule', 'slug', 'types']
}
