import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const BusinessSpreadSheet = (props) => {
  const {
    UIComponent,
    categoryState,
    businessState,
    setBusinessState,
    categoryId,
    categorySelected
  } = props
  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [formState, setFormState] = useState({ products: null, loading: false, result: { error: false } })

  const handleItemChange = (changes, accionHanson, hotTableObj) => {
    if (!changes) return
    const changeProducts = []
    const id = categoryId || categorySelected.id
    if (accionHanson !== 'loadData') {
      changes.forEach(change => {
        const hotProduct = hotTableObj.getSourceData()[change[0]]
        if (hotProduct.id && change[2] !== change[3]) {
          const dumyProduct = {
            id: hotProduct.id,
            name: hotProduct.name,
            description: hotProduct.description,
            price: hotProduct.price,
            category_id: id,
            business_id: businessState?.business.id
          }
          changeProducts.push(dumyProduct)
        }
        if (!hotProduct?.id && change[2] !== change[3]) {
          const newProduct = []
          const dumyProduct = {
            name: hotProduct.name || '',
            description: hotProduct.description || '',
            price: hotProduct.price || 0,
            category_id: id,
            business_id: businessState?.business.id
          }
          newProduct.push(dumyProduct)
          editProducts(newProduct, true, hotTableObj)
        }
      })
      if (changeProducts.length > 0) editProducts(changeProducts, false, hotTableObj)
    }
  }

  const editProducts = async (params, isPost, hotTableObj) => {
    if (loading) return
    try {
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: isPost ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ products: JSON.stringify(params) })
      }

      const functionFetch = `${ordering.root}/bulks/products`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        getProductsByCategoryId(hotTableObj)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
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
   * Method to edit a product
   */
  const getProductsByCategoryId = async (hotTableObj) => {
    if (loading) return
    try {
      const id = categoryId || categorySelected.id
      const params = {
        business_id: businessState?.business.id,
        category_id: parseInt(id)
      }
      const { content: { error, result } } = await ordering.businesses(businessState?.business.id).categories(parseInt(id)).products().parameters(params).get()
      if (!error) {
        const _categories = businessState.business.categories.map(item => {
          if (item.id === parseInt(id)) {
            return {
              ...item,
              products: result
            }
          }
          return item
        })
        setFormState({
          ...formState,
          products: result,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (setBusinessState) {
          setBusinessState({
            ...businessState,
            business: { ...businessState.business, categories: _categories }
          })
        }
        hotTableObj.loadData(result)
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: true,
            result: result
          }
        })
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

  useEffect(() => {
    setFormState({ ...formState, products: categoryState.products })
  }, [categoryState?.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleItemChange={handleItemChange}
          spreadSheetState={formState}
        />
      )}
    </>
  )
}

BusinessSpreadSheet.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before single business card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after single business card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessSpreadSheet.defaultProps = {}
