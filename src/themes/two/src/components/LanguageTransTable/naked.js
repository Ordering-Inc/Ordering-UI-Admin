import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

/**
 * Component to manage LanguageTransTable behavior without UI component
 */
export const LanguageTransTable = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })

  /**
   * Method to save Updated new translation key and text
   * @param {string} type translation field name
   * @param {EventTarget} evt Related HTML event
   */
  const handleChangeInput = (type, evt) => {
    setFormState({ ...formState, changes: { ...formState?.changes, [type]: evt.target.value } })
  }

  const handleUpdateClick = () => {
    createTranslation()
  }

  /**
   * Method to update translation from API
   */
  const createTranslation = async () => {
    try {
      setFormState({
        ...formState,
        loading: true
      })

      const { content: { error, result } } = await ordering.translations().save(formState?.changes)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          changes: {},
          result: {
            error: false,
            result: result
          }
        })
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          creationFormState={formState}
          handleChangeInput={handleChangeInput}
          handleUpdateClick={handleUpdateClick}
        />
      )}
    </>
  )
}

LanguageTransTable.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object for translations
   */
  translationList: PropTypes.object,
  /**
    * Function to update translations
    */
  handleUpdateTranslationList: PropTypes.func,
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

LanguageTransTable.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
