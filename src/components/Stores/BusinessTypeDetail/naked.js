import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const BusinessTypeDetail = (props) => {
  const {
    UIComponent,
    setBusinessTypes,
    businessTypes
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [businessTypeState, setBusinessTypeState] = useState({ businessType: props.businessType ?? null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })

  /**
   * Update business type image data
   * @param {File} file Image to change business type image
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
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [e.target.name]: e.target.value
      }
    })
  }

  /**
   * Method to update the product business type from API
   */
  const handleUpdateProductType = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business_types/${businessTypeState?.businessType?.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setBusinessTypeState({ businessType: { ...businessTypeState.businessType, ...content.result } })
        setFormState({
          loading: false,
          changes: {},
          error: null
        })
        if (setBusinessTypes) {
          const updatedBusinessTypes = businessTypes.map(type => {
            if (type.id === content?.result?.id) {
              return { ...type, ...content?.result }
            }
            return type
          })
          setBusinessTypes(updatedBusinessTypes)
        }
        showToast(ToastType.Success, t('CATEGORY_UPDATED', 'Category updated'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to add the pbusiness type from API
   */
  const handleAddProductType = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business_types`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({
          loading: false,
          changes: {},
          error: null
        })
        if (setBusinessTypes) {
          setBusinessTypes([...businessTypes, content.result])
        }
        showToast(ToastType.Success, t('CATEGORY_ADDED', 'Category added'))
        props.onClose && props.onClose()
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to delete the business type from API
   */
  const handleDeleteProductType = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({
        ...formState,
        loading: true
      })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business_types/${businessTypeState.businessType.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setFormState({
          loading: false,
          changes: {},
          error: null
        })
        if (setBusinessTypes) {
          const updatedBusinessTypes = businessTypes.filter(type => type.id !== businessTypeState.businessType.id)
          setBusinessTypes(updatedBusinessTypes)
        }
        showToast(ToastType.Success, t('CATEGORY_DELETED', 'Category deleted'))
        props.onClose && props.onClose()
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    setFormState({
      loading: false,
      changes: {},
      error: null
    })
    setBusinessTypeState({ businessType: props.businessType ?? null })
  }, [props?.businessType])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessTypeState={businessTypeState}
          typeFormState={formState}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
          handleUpdateProductType={handleUpdateProductType}
          handleAddProductType={handleAddProductType}
          handleDeleteProductType={handleDeleteProductType}
        />
      )}
    </>
  )
}

BusinessTypeDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before plugin list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after plugin list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before plugin list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after plugin list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessTypeDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
