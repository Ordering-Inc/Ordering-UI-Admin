import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const LanguageTransTable = (props) => {
  const {
    UIComponent,
    translationList,
    handleUpdateTranslationList
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })

  /**
   * Method to update translation text
   * @param {number} id translation id
   * @param {String} key translation key
   * @param {String} text translation text
   */
  const handleChangeText = (id, key, text) => {
    const translations = translationList?.translations.map(translation => {
      if (translation.key === key) {
        return {
          ...translation,
          text: text
        }
      }
      return translation
    })
    handleUpdateTranslationList && handleUpdateTranslationList(translations)
    setFormState({ ...formState, changes: { id: id, key: key, text: text } })
  }

  /**
   * Method to update translation from API
   */
  const updateTranslation = async () => {
    try {
      setFormState({
        ...formState,
        loading: true
      })
      const changes = {
        key: formState?.changes?.key,
        text: formState?.changes?.text
      }

      const { content: { error, result, pagination } } = await ordering.translations(formState?.changes?.id).save(changes)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          changes: {},
          pagination
        })
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setFormState({
        ...formState,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    if (Object.keys(formState?.changes).length > 0) {
      updateTranslation()
    }
  }, [formState?.changes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleChangeText={handleChangeText}
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
