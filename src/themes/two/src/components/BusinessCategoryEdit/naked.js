import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const BusinessCategoryEdit = (props) => {
  const {
    UIComponent,
    businessState,
    handleUpdateBusinessState,
    category,
    categoryId
  } = props

  const [{ loading }] = useSession()
  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [formState, setFormState] = useState({ loading: false, changes: { enabled: true }, result: { error: false } })

  useEffect(() => {
    if (!category) return
    setFormState({ ...formState, changes: category })
  }, [category])

  useEffect(() => {
    if (businessState?.business?.id && !category && categoryId) {
      const _category = businessState.business.categories.filter(item => parseInt(item.id) === parseInt(categoryId))[0]

      if (_category) setFormState({ ...formState, changes: _category })
    }
  }, [businessState])

  /**
  * Update credential data
  * @param {EventTarget} e Related HTML event
  */
  const handleChangeInput = (e) => {
    const currentChanges = { [e.target.name]: e.target.value }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
* Update credential data
* @param {Boolean} isChecked checkbox status
*/
  const handleChangeCheckBox = (isChecked) => {
    const currentChanges = { enabled: isChecked }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
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
          image: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  /**
  * Default fuction for business profile workflow
  */
  const handleUpdateClick = async () => {
    const id = category?.id || categoryId
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const { content } = await ordering.businesses(businessState?.business.id).categories(parseInt(id)).save(formState.changes)
      if (!content.error) {
        setFormState({
          ...formState,
          changes: content.result,
          result: {
            error: false,
            result: t('CATEGORY_UPDATE', 'Category Updated')
          },
          loading: false
        })
        if (handleUpdateBusinessState) {
          const _categories = businessState.business.categories.map(item => {
            if (item.id === parseInt(id)) {
              return {
                ...item,
                name: content?.result?.name,
                enabled: content?.result?.enabled,
                image: content?.result?.image
              }
            }
            return item
          })
          console.log(_categories)
          const _business = { ...businessState.business, categories: _categories }
          handleUpdateBusinessState(_business)
        }
      } else {
        setFormState({
          ...formState,
          changes: formState.changes,
          result: content,
          loading: false
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          setFormState={setFormState}
          handlechangeImage={handlechangeImage}
          handleChangeInput={handleChangeInput}
          handleUpdateClick={handleUpdateClick}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      )}
    </>
  )
}

BusinessCategoryEdit.propTypes = {
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
  handleUpdateBusinessState: PropTypes.func,
  /**
   * Function to set product creation mode
   */
  setIsAddProduct: PropTypes.func,
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

BusinessCategoryEdit.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
