import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

/**
 * Component to manage BusinessBrandGENDetail behavior without UI component
 */
export const BusinessBrandGENDetail = (props) => {
  const {
    UIComponent,
    brand,
    handleUpdateBrandList,
    brandListState,
    onSelectedBrand
  } = props

  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [{ token }] = useSession()

  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * Method to update or create a brand
   */
  const handleUpdateClick = async () => {
    if (brand) {
      updateBrand()
    } else {
      createBrand()
    }
  }

  /**
   * Method to create brand from API
   */
  const createBrand = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/franchises`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleUpdateBrandList) {
          handleUpdateBrandList([...brandListState?.brands, content.result])
        }
        onSelectedBrand && onSelectedBrand(content.result)
        showToast(ToastType.Success, t('BRAND_ADDED', 'Brand added'))
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

  /**
   * Method to update a brand
   */
  const updateBrand = async () => {
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/franchises/${brand?.id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        if (handleUpdateBrandList) {
          const _brands = brandListState?.brands.map(item => {
            if (item.id === content.result.id) {
              return {
                ...item,
                name: content.result.name,
                logo: content.result.logo
              }
            }
            return item
          })
          handleUpdateBrandList(_brands)
        }
        showToast(ToastType.Success, t('BRAND_UPDATED', 'Brand updated'))
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

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    const currentChanges = {
      [e.target.name]: e.target.value
    }

    setFormState({
      ...formState,
      changes: { ...formState.changes, ...currentChanges }
    })
  }

  /**
   * Update business brand logo data
   * @param {File} file Image to change business brand logo
   */
  const handlechangeImage = (file, name) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFormState({
        ...formState,
        changes: {
          ...formState.changes,
          [name]: reader.result
        }
      })
    }
    reader.onerror = error => console.log(error)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          brandFormState={formState}
          handleUpdateClick={handleUpdateClick}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
        />
      )}
    </>
  )
}

BusinessBrandGENDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for a brand
   */
  brand: PropTypes.object,
  /**
   * Object for brand list
   */
  brandListState: PropTypes.object,
  /**
  * Function to set a business state
  */
  handleUpdateBrandList: PropTypes.func,
  /**
   * Function to set selected brand
   */
  onSelectedBrand: PropTypes.func,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessBrandGENDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
