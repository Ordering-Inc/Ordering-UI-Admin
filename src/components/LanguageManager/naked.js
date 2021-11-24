import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

/**
 * Component to manage LanguageManager behavior without UI component
 */
export const LanguageManager = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [{ loading }] = useSession()
  const [, { showToast }] = useToast()

  const [translationList, setTranslationList] = useState({ loading: false, translations: [], result: { error: null } })
  const [searchValue, setSearchValue] = useState(null)
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

  const handleUpdateTranslationList = (translations) => {
    setTranslationList({ ...translationList, translations: translations })
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
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const changes = {
        key: formState?.changes?.key,
        text: formState?.changes?.text
      }

      const { content: { error, result } } = await ordering.translations(formState?.changes?.id).save(changes)
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          changes: {}
        })
        showToast(ToastType.Success, t('WEB_APP_LANG_SAVED', 'Language change saved'))
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

  /**
   * Method to get translation list from API
   */
  const getTranslations = async () => {
    if (loading) return
    try {
      setTranslationList({ ...translationList, loading: true })

      const { content: { error, result } } = await ordering.translations().get()
      if (!error) {
        setTranslationList({
          ...translationList,
          loading: false,
          translations: result
        })
      } else {
        setTranslationList({
          ...translationList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setTranslationList({
        ...translationList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    getTranslations()
  }, [])

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
          translationList={translationList}
          handleUpdateTranslationList={handleUpdateTranslationList}
          searchValue={searchValue}
          onSearch={setSearchValue}
          handleChangeText={handleChangeText}
          getTranslations={getTranslations}
        />
      )}
    </>
  )
}

LanguageManager.propTypes = {
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

LanguageManager.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
