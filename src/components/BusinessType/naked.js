import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const BusinessType = (props) => {
  const {
    UIComponent,
    businessType,
    setBusinessTypes,
    businessTypes
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()

  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: false } })

  /**
   * Default fuction for business profile workflow
   */
  const handleUpdateClick = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formState.changes)
      }
      const response = await fetch(`${ordering.root}/business_types/${businessType.id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        const _businessTypes = businessTypes?.map(type => {
          if (type.id === content?.result.id) {
            return {
              ...type,
              name: content?.result?.name,
              image: content?.result?.image
            }
          }
          return type
        })
        setBusinessTypes && setBusinessTypes(_businessTypes)
        showToast(ToastType.Success, t('BUSINESS_TYPE_UPDATED', 'Business type updated'))
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
   * fuction to delete a businessType
   */
  const deleteBusinessType = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/business_types/${businessType.id}`, requestOptions)
      const content = await response.json()
      if (!content?.error) {
        setFormState({
          ...formState,
          changes: {},
          result: content,
          loading: false
        })
        const _businessTypes = businessTypes.filter(type => type.id !== businessType?.id)
        setBusinessTypes && setBusinessTypes(_businessTypes)
        showToast(ToastType.Success, t('BUSINESS_TYPE_DELETED', 'Business type deleted'))
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessTypeFormState={formState}
          handleUpdateClick={handleUpdateClick}
          handleChangeInput={handleChangeInput}
          handlechangeImage={handlechangeImage}
          deleteBusinessType={deleteBusinessType}
        />
      )}
    </>
  )
}

BusinessType.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  businessTypes: PropTypes.arrayOf(PropTypes.object),
  /**
   * Default business type to show
   */
  defaultBusinessType: PropTypes.string,
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

BusinessType.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
