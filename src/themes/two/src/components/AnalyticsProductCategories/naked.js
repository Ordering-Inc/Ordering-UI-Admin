import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession, useApi } from 'ordering-components-admin'

export const AnalyticsProductCategories = (props) => {
  const {
    UIComponent,
    isProducts
  } = props
  const [{ token, loading }] = useSession()
  const [ordering] = useApi()

  const [productCategoryList, setProductCategoryList] = useState({ loading: false, data: [], error: null })

  /**
   * Method to get location List
   */
  const getProductOrCategories = async () => {
    if (loading) return
    try {
      setProductCategoryList({ ...productCategoryList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const rootUrl = isProducts ? `${ordering.root}/reports/top_selling` : `${ordering.root}/reports/top_categories`
      const functionFetch = `${rootUrl}?lapse=yesterday&app_id=ordering-react`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setProductCategoryList({
          ...productCategoryList,
          loading: false,
          data: result
        })
      } else {
        setProductCategoryList({
          ...productCategoryList,
          loading: true,
          error: result
        })
      }
    } catch (err) {
      setProductCategoryList({
        ...productCategoryList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getProductOrCategories()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          productCategoryList={productCategoryList}
        />
      )}
    </>
  )
}

AnalyticsProductCategories.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Flag to check products
   */
  isProducts: PropTypes.bool,
  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AnalyticsProductCategories.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
