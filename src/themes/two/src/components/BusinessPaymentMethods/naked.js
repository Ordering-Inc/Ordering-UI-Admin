import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const BusinessPaymentMethods = (props) => {
  const {
    business,
    UIComponent,
    defaultSandboxRequiredGateways
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [businessPaymethodsState, setBusinessPaymethodsState] = useState({ paymethods: [], loading: true, error: null })
  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  const sandboxRequiredGateways = defaultSandboxRequiredGateways || ['paypal', 'stripe_direct', 'paypal_express', 'stripe_connect', 'stripe_redirect', 'carlos_payment', 'ivr']
  const [actionState, setActionState] = useState({ loading: false, result: { error: false } })
  const [changesState, setChangesState] = useState({})

  /**
   * Clean formState
   */
  const cleanChangesState = (values) => setChangesState({ ...values })

  /**
   * Method to get paymethods from API
   */
  const getBusinessPaymethods = async () => {
    try {
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { result } = await response.json()
      setBusinessPaymethodsState({ ...paymethodsList, loading: false, paymethods: result })
    } catch (err) {
      setBusinessPaymethodsState({ ...paymethodsList, loading: false, error: err.message })
    }
  }

  /**
   * Method to get paymethods from API
   */
  const getAllPaymethods = async () => {
    try {
      const response = await fetch(`${ordering.root}/paymethods?where=[{%22attribute%22:%22enabled%22,%22value%22:true}]`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } })
      const { result } = await response.json()
      setPaymethodsList({ ...paymethodsList, loading: false, paymethods: result })
    } catch (err) {
      setPaymethodsList({ ...paymethodsList, loading: false, error: err.message })
    }
  }

  /**
   * Method to create the business paymethod option from API
   * @param {*} paymethodId paymethod id to create
   */
  const handleCreateBusinessPaymentOption = async (paymethodId) => {
    const paymethod = paymethodsList.paymethods.find(_paymethod => _paymethod.id === paymethodId)
    const params = {
      enabled: true,
      paymethod_id: paymethodId,
      sandbox: sandboxRequiredGateways.includes(paymethod.gateway)
    }
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(params)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessPaymethodsState({
          ...businessPaymethodsState,
          paymethods: [
            ...business.paymethods,
            { ...content.result, paymethod: paymethod }
          ]
        })
        setActionState({ loading: false, result: { error: false } })
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to update the business paymethod option
   * @param {Number} paymethodId business paymethod id to delete
   * @param {Object} options parameters to update
   */
  const handleUpdateBusinessPaymethodOpton = async (paymethodId, options) => {
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(options)
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods/${paymethodId}`, requestOptions)
      const content = await response.json()
      setChangesState(content.error ? changesState : {})
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const updatedPaymethods = business.paymethods.filter(paymethod => {
          if (paymethod.id === paymethodId) {
            Object.assign(paymethod, content.result)
          }
          return true
        })
        setBusinessPaymethodsState({ ...businessPaymethodsState, paymethods: updatedPaymethods })
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to delete the business paymethod option from API
   * @param {Number} paymethodId id to delete the business paymethod
   */
  const handleDeleteBusinessPaymethodOption = async (paymethodId) => {
    const businessPaymethodId = business.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId).id
    try {
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${business.id}/paymethods/${businessPaymethodId}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ ...actionState, loading: false })
        const updatedPaymethods = business.paymethods.filter(paymethod => paymethod.paymethod_id !== paymethodId)
        setBusinessPaymethodsState({ ...businessPaymethodsState, paymethods: updatedPaymethods })
      }
    } catch (err) {
      setActionState({ result: { error: true, result: err.message }, loading: false })
    }
  }

  /**
   * Method to handle payment enabled state
   * @param {Number} paymethodId id of payment method
   */
  const handleClickPayment = (paymethodId) => {
    const found = business.paymethods.find(paymethod => paymethod.paymethod_id === paymethodId)
    if (found) {
      const businessPaymethod = business.paymethods.find(paymethod => paymethod.paymethod.id === paymethodId)
      handleUpdateBusinessPaymethodOpton(businessPaymethod.id, {
        enabled: !businessPaymethod.enabled
      })
    } else {
      handleCreateBusinessPaymentOption(paymethodId)
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   * @param {Boolean} sandbox value if sandbox data is or not
   */
  const handleChangeInput = (e, sandbox) => {
    if (sandbox) {
      setChangesState({
        ...changesState,
        data_sandbox: {
          ...changesState?.data_sandbox,
          [e.target.name]: e.target.value
        }
      })
    } else {
      setChangesState({
        ...changesState,
        data: {
          ...changesState?.data,
          [e.target.name]: e.target.value
        }
      })
    }
  }
  /**
   * Method to control the sanbox enable state
   */
  const handleChangeSandbox = () => {
    setChangesState({
      ...changesState,
      sandbox: !changesState?.sandbox
    })
  }

  /**
   * Method to save the form state
   * @param {Number} paymethodId id to save the change state
   */
  const handleSaveClick = (paymethodId) => {
    let changes = { ...changesState }
    if (changes?.data) {
      changes = { ...changes, data: JSON.stringify(changes.data) }
    }
    if (changes?.data_sandbox) {
      changes = { ...changes, data_sandbox: JSON.stringify(changes.data_sandbox) }
    }
    handleUpdateBusinessPaymethodOpton(paymethodId, changes)
  }

  useEffect(() => {
    getAllPaymethods()
    getBusinessPaymethods()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessPaymethodsState={businessPaymethodsState}
          paymethodsList={paymethodsList}
          handleClickPayment={handleClickPayment}
          actionState={actionState}
          handleDeleteBusinessPaymethodOption={handleDeleteBusinessPaymethodOption}
          changesState={changesState}
          cleanChangesState={cleanChangesState}
          handleChangeSandbox={handleChangeSandbox}
          handleChangeInput={handleChangeInput}
          handleSaveClick={handleSaveClick}
        />
      )}
    </>
  )
}

BusinessPaymentMethods.propTypes = {
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

BusinessPaymentMethods.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
