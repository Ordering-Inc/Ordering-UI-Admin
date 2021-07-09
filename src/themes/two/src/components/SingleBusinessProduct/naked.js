import React from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleBusinessProduct = (props) => {
  const {
    UIComponent,
    businessState,
    setBusinessState,
    product
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()

  /**
   * Set enabled property of a product
   * @param {Boolean} isChecked
   */
  const handleChangeProductActive = (isChecked) => {
    const params = { enabled: isChecked }
    editProduct(params)
  }

  /**
   * Set name property of a product
   * @param {String} value
   */
  const handleUpdateClick = (value) => {
    const params = { name: value }
    editProduct(params)
  }

  /**
   * Method to edit a product
   */
  const editProduct = async (params) => {
    if (loading) return
    try {
      const { content: { error, result } } = await ordering.businesses(parseInt(businessState?.business.id)).categories(parseInt(product?.category_id)).products(product?.id).save(params)
      if (!error) {
        const _categories = businessState.business.categories.map(item => {
          if (item.id === product?.category_id) {
            const _products = item.products.map(prod => {
              if (prod.id === product.id) {
                return {
                  ...prod,
                  ...params
                }
              }
              return prod
            })
            return {
              ...item,
              products: _products
            }
          }
          return item
        })
        setBusinessState({
          ...businessState,
          business: { ...businessState.business, categories: _categories }
        })
      } else {
        setBusinessState({
          ...businessState,
          error: result
        })
      }
    } catch (err) {
      setBusinessState({
        ...businessState,
        error: err
      })
    }
  }

  /**
 * Method to edit a product
 */
  const deleteProduct = async () => {
    if (loading) return
    try {
      const { content: { error, result } } = await ordering.businesses(parseInt(businessState?.business.id)).categories(parseInt(product?.category_id)).products(product?.id).delete()
      if (!error) {
        const _categories = businessState.business.categories.map(item => {
          if (item.id === product?.category_id) {
            const _products = [...item.products]
            const filterItem = item.products.filter(prod => prod.id === product.id)[0]
            const index = item.products.indexOf(filterItem)
            if (index > -1) _products.splice(index, 1)
            return {
              ...item,
              products: _products
            }
          }
          return item
        })
        setBusinessState({
          ...businessState,
          business: { ...businessState.business, categories: _categories }
        })
      } else {
        setBusinessState({
          ...businessState,
          error: result
        })
      }
    } catch (err) {
      setBusinessState({
        ...businessState,
        error: err
      })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeProductActive={handleChangeProductActive}
          handleUpdateClick={handleUpdateClick}
          deleteProduct={deleteProduct}
        />
      )}
    </>
  )
}

SingleBusinessProduct.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a business
   */
  businessState: PropTypes.object,
  /**
   * Function to set a business state
   */
  setBusinessState: PropTypes.func,
  /**
   * Object for a product
   */
  product: PropTypes.object,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleBusinessProduct.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
