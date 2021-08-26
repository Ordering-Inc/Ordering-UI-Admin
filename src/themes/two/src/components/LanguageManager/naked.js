import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage LanguageManager behavior without UI component
 */
export const LanguageManager = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ loading }] = useSession()

  const [translationList, setTranslationList] = useState({ loading: false, translations: [], result: { error: null } })
  const [mainTransList, setMainTransList] = useState(null)
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

  useEffect(() => {
    if (translationList?.translations?.length > 0) {
      const main = []
      for (let i = 0; i < translationList?.translations.length; i++) {
        switch (translationList?.translations[i].key) {
          case 'Panel_Currency':
            main.push({
              i: 0,
              id: translationList?.translations[i].id,
              name: 'CURRENCY',
              key: translationList?.translations[i].key,
              text: translationList?.translations[i].text
            })
            break
          case 'BUSINESS_TYPE_FOOD':
            main.push({
              i: 1,
              id: translationList?.translations[i].id,
              name: 'TYPE_FOOD_WEB_APP',
              key: translationList?.translations[i].key,
              text: translationList?.translations[i].text
            })
            break
          case 'BUSINESS_TYPE_ALCOHOL':
            main.push({
              i: 2,
              id: translationList?.translations[i].id,
              name: 'TYPE_ALCOHOL_WEB_APP',
              key: translationList?.translations[i].key,
              text: translationList?.translations[i].text
            })
            break
          case 'BUSINESS_TYPE_LAUNDRY':
            main.push({
              i: 3,
              id: translationList?.translations[i].id,
              name: 'TYPE_LAUNDRY_WEB_APP',
              key: translationList?.translations[i].key,
              text: translationList?.translations[i].text
            })
            break
          case 'BUSINESS_TYPE_GROCERIES':
            main.push({
              i: 4,
              id: translationList?.translations[i].id,
              name: 'TYPE_GROCERIES_WEB_APP',
              key: translationList?.translations[i].key,
              text: translationList?.translations[i].text
            })
            break
        }
      }
      setMainTransList(main)
    }
  }, [translationList?.translations])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          translationList={translationList}
          handleUpdateTranslationList={handleUpdateTranslationList}
          mainTransList={mainTransList}
          searchValue={searchValue}
          onSearch={setSearchValue}
          handleChangeText={handleChangeText}
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
