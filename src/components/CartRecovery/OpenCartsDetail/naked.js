import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
// import { useEvent } from '../../contexts/EventContext'
import { useSession, useApi, useEvent } from 'ordering-components-admin'

export const OpenCartsDetail = (props) => {
  const {
    cartId,
    propsToFetch,
    asDashboard,
    hashKey,
    userCustomerId,
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()
  const [events] = useEvent()

  const [orderState, setOrderState] = useState({ order: null, loading: !props.order, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => price && `$ ${price.toFixed(2)}`

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    const options = {}
    if (hashKey) {
      options.headers = {
        'X-uuid-access-X': hashKey
      }
    }
    if (userCustomerId) {
      options.query = {
        mode: 'dashboard'
      }
    }
    try {
      setOrderState({
        ...orderState,
        loading: true
      })
      let functionFetch
      if (propsToFetch) {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(cartId).asDashboard().select(propsToFetch)
          : ordering.setAccessToken(token).orders(cartId).select(propsToFetch)
      } else {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(cartId).asDashboard()
          : ordering.setAccessToken(token).orders(cartId)
      }
      const { content: { result } } = await functionFetch.get()
      const order = Array.isArray(result) ? null : result
      setOrderState({
        ...orderState,
        loading: false,
        order
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: [e.message]
      })
    }
  }
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  const handleUpdateOrderStatus = async (order) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestsState = {}
      const source = {}
      requestsState.updateOrder = source
      const { content } = await ordering.setAccessToken(token).orders(order.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }
  }, [cartId])

  useEffect(() => {
    const handleCustomerReviewed = (review) => {
      setOrderState({
        ...orderState,
        order: { ...orderState.order, user_review: review }
      })
    }
    events.on('customer_reviewed', handleCustomerReviewed)
    return () => {
      events.off('customer_reviewed', handleCustomerReviewed)
    }
  }, [orderState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          actionStatus={actionStatus}
          formatPrice={formatPrice}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
        />
      )}
    </>
  )
}

OpenCartsDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * This must be contains cartId to fetch
   */
  cartId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
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

OpenCartsDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
