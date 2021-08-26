import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi, useLanguage, useSession, useToast, ToastType } from 'ordering-components-admin'

export const LanguageTransSpread = (props) => {
  const {
    UIComponent,
    translationList,
    handleUpdateTranslationList,
    getTranslations
  } = props

  const [ordering] = useApi()
  const [{ token, loading }] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [formState, setFormState] = useState({ loading: false, changes: {}, result: { error: null } })
  const [curCell, setCurCell] = useState({
    row: -1,
    col: -1
  })

  const handleItemChange = (b, accionHanson, hotTableObj) => {
    // if (removing) {
    //   removing = false
    //   return
    // }
    b = !b ? [] : b
    const changes = []
    const itemToAdd = []
    const itemToUpdate = []
    const errors = []
    for (var i = 0; i < b.length; i++) {
      const error = {
        key: false,
        text: false
      }
      if (b[i][2] !== b[i][3]) {
        let valid = true
        for (var j = 0; j < changes.length; j++) {
          if (changes[j] === b[i][0]) {
            valid = false
            break
          }
        }
        if (valid) {
          changes.push(b[i][0])
          var row = hotTableObj.getSourceDataAtRow(b[i][0])
          hotTableObj.validateRows(changes, function (res) {})
          if (!row.key) {
            error.key = true
            if (errors.indexOf(t('KEY_REQUIRED')) === -1) errors.push(t('KEY_REQUIRED'))
          }
          if (!row.text) {
            error.text = true
            if (errors.indexOf(t('TEXT_REQUIRED')) === -1) errors.push(t('TEXT_REQUIRED'))
          }
          if (!row.id) {
            if (error.key || error.text) continue
            row.row = b[i][0]
            itemToAdd.push(row)
          } else {
            if (error.text || error.text) continue
            itemToUpdate.push(row)
          }
        }
      }
    }
    if (errors.length > 0) {
      setFormState({ ...formState, result: { error: true, result: errors } })
    }
    if (itemToUpdate.length > 0) {
      createBulkTranslations(itemToUpdate, false, hotTableObj)
    }
    if (itemToAdd.length > 0) {
      createBulkTranslations(itemToAdd, true, hotTableObj)
    }
  }

  /**
   * Method to remove a row from spreadSheet table
   * @param {Number} row Number of selected row
   * @param {Number} col Number of selected col
   * @param {Number} row1 Number of selected row
   * @param {Number} col1 Number of selected col
   * @param {Object} hotTableObj Object for spreadSheet mode table
   */
  const handleAfterSectionEnd = (row, col, row1, col1, hotTableObj) => {
    if ((curCell.row === row && curCell.col === col) || (row !== row1 || col !== col1)) return
    setCurCell({
      row: row,
      col: col
    })
    hotTableObj.deselectCell()
    hotTableObj.selectCell(row, col)
  }

  const handleoutsideClickDeselects = () => {
    setCurCell({
      row: -1,
      col: -1
    })
    return false
  }

  /**
   * Method to update translation from API
   */
  const createBulkTranslations = async (params, isPost, hotTableObj) => {
    if (loading) return
    try {
      setFormState({ ...formState, loading: true })
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: isPost ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ translations: JSON.stringify(params) })
      }

      const functionFetch = `${ordering.root}/bulks/translations`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          }
        })
        if (!isPost) {
          const translations = translationList?.translations.map(translation => {
            for (const item of params) {
              if (item.id === translation.id) {
                return {
                  ...translation,
                  key: item.key,
                  text: item.text
                }
              }
            }
            return translation
          })
          handleUpdateTranslationList(translations)
        } else {
          getTranslations()
        }
        showToast(ToastType.Success, isPost ? t('WEB_APP_LANG_ADDED', 'Language item added') : t('WEB_APP_LANG_SAVED', 'Language change saved'))
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
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
      if (isPost) {
        for (var i = params.length - 1; i >= 0; i--) {
          hotTableObj.alter('remove_row', params[i].row)
        }
      }
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          creationFormState={formState}
          handleItemChange={handleItemChange}
          handleAfterSectionEnd={handleAfterSectionEnd}
          handleoutsideClickDeselects={handleoutsideClickDeselects}
        />
      )}
    </>
  )
}

LanguageTransSpread.propTypes = {
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

LanguageTransSpread.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
