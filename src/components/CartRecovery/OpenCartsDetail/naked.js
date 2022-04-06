import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
// import { useEvent } from '../../contexts/EventContext'
import { useSession, useApi } from 'ordering-components-admin'

export const OpenCartsDetail = (props) => {
  const {
    cart,
    UIComponent
  } = props

  const [{ token }] = useSession()
  const [ordering] = useApi()

  const [cartState, setCartState] = useState({ cart: null, loading: false, error: null })

  const getCartList = async () => {
    try {
      setCartState({ ...cartState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = `${ordering.root}/carts/${cart?.uuid}?user_id=${cart?.user_id}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        const _cart = {
          ...content.result,
          id: cart?.id,
          business: { ...content.result.business, ...cart?.business },
          user: { ...cart?.user, ...(cart?.address?.address && { address: cart.address.address }) },
          updated_at: cart?.updated_at
        }
        setCartState({
          loading: false,
          cart: _cart,
          error: null
        })
      } else {
        setCartState({
          ...cartState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setCartState({
        ...cartState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!cart) return
    getCartList()
  }, [cart])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cartState={cartState}
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
