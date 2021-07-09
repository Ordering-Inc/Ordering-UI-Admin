import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const SingleProductsCategory = (props) => {
  const {
    UIComponent,
    setBusinessState,
    businessState,
    category,
    categorySelected,
    setCategorySelected
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()

  const [createCategory, setCreateCategory] = useState({ category: {}, loading: false, error: null })

  const handelChangeCategoryActive = (isChecked) => {
    const params = { enabled: isChecked }
    editCategory(params)
  }

  const handleUpdateClick = (value) => {
    const params = { name: value }
    editCategory(params)
  }
  /**
 * Update business photo data
 * @param {File} file Image to change business photo
 */
  const handlechangeImage = (file, name) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setCreateCategory({
        ...createCategory,
        category: {
          ...createCategory.category,
          [name]: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
   * Method to edit a category
   */
  const editCategory = async (params) => {
    if (loading) return
    try {
      const { content: { error, result } } = await ordering.businesses(parseInt(businessState?.business.id)).categories(parseInt(category.id)).save(params)
      if (!error) {
        const _categories = businessState.business.categories.map(item => {
          if (item.id === category.id) {
            return {
              ...item,
              ...params
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
 * Method to edit a category
 */
  const deleteCategory = async () => {
    if (loading) return
    try {
      const { content: { error, result } } = await ordering.businesses(parseInt(businessState?.business.id)).categories(parseInt(category.id)).delete()
      if (!error) {
        const _categories = businessState.business.categories.map(item => {
          return item
        })
        const filterItem = businessState.business.categories.filter(cat => cat.id === category.id)[0]
        const index = businessState.business.categories.indexOf(filterItem)
        if (index > -1) _categories.splice(index, 1)
        setBusinessState({
          ...businessState,
          business: { ...businessState.business, categories: _categories }
        })
        if (category.id === categorySelected.id) setCategorySelected(_categories[0])
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
          handelChangeCategoryActive={handelChangeCategoryActive}
          createCategory={createCategory}
          setCreateCategory={setCreateCategory}
          handlechangeImage={handlechangeImage}
          handleUpdateClick={handleUpdateClick}
          deleteCategory={deleteCategory}
        />
      )}
    </>
  )
}

SingleProductsCategory.propTypes = {
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
  category: PropTypes.object,
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

SingleProductsCategory.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
