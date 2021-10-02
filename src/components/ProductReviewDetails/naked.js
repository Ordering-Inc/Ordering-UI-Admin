import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const ProductReview = (props) => {
  const {
    UIComponent,
    businessId,
    productId
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [productReviewList, setProductReviewList] = useState({ reviews: [], loading: false, error: null })

  /**
   * Method to get the product reviews from API
   */
  const getProductReviews = async () => {
    try {
      setProductReviewList({ ...productReviewList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business/${businessId}/product_reviews/${productId}/reviews`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setProductReviewList({
          ...productReviewList,
          loading: false,
          reviews: content.result
        })
      } else {
        setProductReviewList({
          ...productReviewList,
          loading: false,
          error: content.error
        })
      }
    } catch (err) {
      setProductReviewList({
        ...productReviewList,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    getProductReviews()
  }, [productId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productReviewList={productReviewList}
        />
      )}
    </>
  )
}

ProductReview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * Components types before product review
    * Array of type components, the parent props will pass to these components
    */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product review
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product review
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product review
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductReview.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
