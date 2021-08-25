import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

export const LanguageManager = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [translationList, setTranslationList] = useState({ loading: false, translations: [], result: { error: null } })
  const [mainTransList, setMainTransList] = useState(null)

  const handleUpdateTranslationList = (translations) => {
    setTranslationList({ ...translationList, translations: translations })
  }

  /**
   * Method to get translation list from API
   */
  const getTranslations = async () => {
    if (loading) return
    try {
      setTranslationList({ ...translationList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const functionFetch = `${ordering.root}/translations`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
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
