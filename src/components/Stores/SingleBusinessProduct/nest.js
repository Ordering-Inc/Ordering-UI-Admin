import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'

import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleBusinessProduct = (props) => {
  const {
    UIComponent,
    business,
    handleUpdateBusinessState,
    product,
    businessState,
    setDataSelected
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })
  const [isEditMode, setIsEditMode] = useState(false)

  /**
   * Set enabled property of a product
   * @param {Boolean} isChecked
   */
  const handleChangeProductActive = (isChecked) => {
    const params = { enabled: isChecked }
    editProduct(params)
  }

  /**
   * Set properties of a product
   * @param {EventTarget} evt Related Html element
   */
  const handleChangeInput = (evt) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [evt.target.name]: evt.target.value }
    })
    setIsEditMode(true)
  }

  /**
 * Update business photo data
 * @param {File} file Image to change business photo
 */
  const handlechangeImage = (file) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          images: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
    setIsEditMode(true)
  }

  /**
   * Set name property of a product
   * @param {String} value
   */
  const handleUpdateClick = () => {
    const params = {
      images: formState?.changes?.images,
      name: formState?.changes?.name,
      description: formState?.changes?.description,
      price: formState?.changes?.price,
      fee_fixed: formState?.changes?.fee_fixed,
      fee_percentage: formState?.changes?.fee_percentage
    }
    for (const key in params) {
      if (params[key] === null) {
        delete params[key]
      }
    }
    editProduct(params)
  }

  /**
   * Method to edit a product
   */
  const editProduct = async (params) => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(product?.category_id)).products(product?.id).save(params)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = [...business?.categories]
          _categories.forEach(function iterate(category) {
            if (category.id === product?.category_id) {
              const _products = category.products.map(_product => {
                if (_product.id === product.id) {
                  return {
                    ..._product,
                    ...params
                  }
                }
                return _product
              })
              category.products = [..._products]
            }
            Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        showToast(ToastType.Success, t('PRODUCT_UPDATED', 'Product updated'))
        setIsEditMode(false)
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
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
 * Method to edit a product
 */
  const deleteProduct = async () => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(product?.category_id)).products(product?.id).delete()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (handleUpdateBusinessState) {
          const _categories = [...business?.categories]
          _categories.forEach(function iterate (category) {
            if (category.id === product?.category_id) {
              const _products = category.products.filter(_product => _product.id !== product.id)
              category.products = [..._products]
            }
            Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        showToast(ToastType.Success, t('PRODUCT_DELETED', 'Product deleted'))
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
        loading: false,
        result: {
          error: true,
          result: err
        }
      })
    }
  }

  /**
 * Method to handle drag start
 */
  const handleDragStart = (event, productId) => {
    event.dataTransfer.setData('transferProductId', productId)
    const ghostEle = document.createElement('div')
    ghostEle.classList.add('ghostDragging')
    ghostEle.innerHTML = product?.name
    document.body.appendChild(ghostEle)
    event.dataTransfer.setDragImage(ghostEle, 0, 0)
  }

  /**
   * Method to handle drag over
   */
  const handleDragOver = (event) => {
    event.preventDefault()
    const element = event.target.closest('.draggable-product')
    if (element) {
      setDataSelected(element.dataset.index)
    }
  }

  /**
   * Method to handle drag drop
   */
  const handleDrop = (event) => {
    event.preventDefault()
    const transferProductId = parseInt(event.dataTransfer.getData('transferProductId'))
    const dropProductRank = product?.rank
    // const currentCategory = businessState?.business?.categories.filter(category => category?.id === product?.category_id)[0]
    // const dragStartproduct = currentCategory?.products.filter(p => p.id === transferProductId)[0]
    // console.log('dragStartProduct: ', dragStartproduct)
    // console.log('dragProductRank: ', dragStartproduct?.rank)
    // console.log('dropProduct: ', product)
    // console.log('dropProductRank: ', dropProductRank)
    handleChangeProductRank(transferProductId, { rank: dropProductRank })
  }

  /**
   * Method to change the rank of transfer category
   */
  const handleChangeProductRank = async (transferProductId, params) => {
    if (loading) return
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const { content: { error, result } } = await ordering.businesses(parseInt(business?.id)).categories(parseInt(product?.category_id)).products(transferProductId).save(params)
      if (!error) {
        if (handleUpdateBusinessState) {
          const _categories = [...business?.categories]
          _categories.forEach(function iterate (category) {
            if (category.id === product?.category_id) {
              const _products = category.products.map(_product => {
                if (_product.id === transferProductId) {
                  return {
                    ..._product,
                    rank: result?.rank
                  }
                }
                return _product
              })
              category.products = [..._products]
            }
            Array.isArray(category?.subcategories) && category.subcategories.forEach(iterate)
          })
          handleUpdateBusinessState({ ...business, categories: _categories })
        }
        showToast(ToastType.Success, t('PRODUCT_UPDATED', 'Product updated'))
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
        loading: false,
        result: {
          error: true,
          result: [err.message]
        }
      })
    }
  }

  /**
   * Method to handle drag end
   */
  const handleDragEnd = () => {
    const elements = document.getElementsByClassName('ghostDragging')
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0])
    }
    setDataSelected('')
  }

  useEffect(() => {
    if (product) {
      setFormState({
        ...formState,
        changes: { ...product }
      })
    }
  }, [product, businessState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeProductActive={handleChangeProductActive}
          handleUpdateClick={handleUpdateClick}
          deleteProduct={deleteProduct}
          productFormState={formState}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
          isEditMode={isEditMode}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragEnd={handleDragEnd}
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
  business: PropTypes.object,
  /**
   * Function to set a business state
   */
  handleUpdateBusinessState: PropTypes.func,
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
