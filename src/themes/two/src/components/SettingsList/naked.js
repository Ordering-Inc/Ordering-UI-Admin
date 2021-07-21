import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
import { useSession, useApi } from 'ordering-components-admin'

/**
 * Component to manage Settings List page behavior without UI component
 */
export const SettingsList = (props) => {
  const {
    UIComponent,
    category
  } = props

  const [formState, setFormState] = useState({ changes: null, loading: false, result: { error: null }, API: false })
  const [configs, setConfigs] = useState(null)
  const [{ loading }] = useSession()
  const [ordering] = useApi()

  /** Method to change checkbox status
   * @param {EventTarget} evt
   * @param {Boolean} index
   */
  const handleCheckBoxChange = (evt, index, value) => {
    const configId = parseInt(evt.target.getAttribute('data-id'))
    let changeValue

    if (index) {
      // type = 3
      const str = value === '' ? [] : value.split('|')
      const position = str.indexOf(evt.target.name)
      if (position === -1 && evt.target.checked) str.push(evt.target.name)
      if (!evt.target.checked && position >= 0) str.splice(position, 1)
      changeValue = str.join('|')
    } else {
      // type = 4
      const array = [...JSON.parse(value)]
      const position = array.indexOf(parseInt(evt.target.name))
      if (position === -1 && evt.target.checked) array.push(parseInt(evt.target.name))
      if (!evt.target.checked && position >= 0) array.splice(position, 1)
      changeValue = JSON.stringify(array)
    }
    saveChanges(changeValue, configId)
  }

  /**
   * Method to save changes from settings items
   */
  const saveChanges = (changeValue, id) => {
    let _configs = []
    const found = formState?.changes?.find(item => item.id === id)
    if (found) {
      _configs = formState?.changes.map(config => {
        if (config.id === id) {
          return { ...config, value: changeValue }
        }
        return config
      })
    } else {
      if (formState?.changes) _configs = [...formState?.changes]
      const item = configs.find(config => config.id === id)
      _configs.push({ ...item, value: changeValue })
    }

    const defaultConfigs = configs.map(config => {
      if (config.id === id) {
        return { ...config, value: changeValue }
      }
      return config
    })
    setFormState({
      ...formState,
      changes: _configs
    })
    setConfigs(defaultConfigs)
  }

  /**
   * Method to update settings items
   */
  const handleClickUpdate = () => {
    if (!formState?.changes || formState?.changes?.length === 0) return
    setFormState({
      ...formState,
      API: true
    })
  }

  /**
   * Method to update settings items
   * @param {Number} id config id to update a config
   * @param {Object} params key and value to change
   */
  const saveConfig = async (id, params) => {
    if (loading) return
    try {
      setFormState({
        ...formState,
        loading: true,
        API: false
      })
      const { content: { error, result } } = await ordering.configs(id).save(params)
      if (!error) {
        const changes = formState?.changes.filter(item => item.id !== result.id)
        changes.length > 0 ? (
          setFormState({
            loading: false,
            changes: changes,
            result: {
              error: false,
              result: result
            },
            API: true
          })
        ) : (
          setFormState({
            loading: false,
            changes: null,
            result: {
              error: false,
              result: 'ok'
            },
            API: false
          })
        )
      } else {
        setFormState({
          ...formState,
          loading: false,
          result: {
            error: false,
            result: result
          },
          API: false
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        result: {
          error: true,
          result: err
        },
        API: false
      })
    }
  }

  useEffect(() => {
    if (category?.configs.length > 0) {
      const _configs = [...category?.configs]
      setConfigs(_configs)
    }
  }, [category?.configs])

  useEffect(() => {
    if (formState?.API && formState?.changes?.length > 0) {
      const params = { key: formState?.changes[0].key, value: formState?.changes[0].value }
      saveConfig(formState?.changes[0].id, params)
    }
  }, [formState?.API])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          settingsState={formState}
          configs={configs}
          handleInputChange={saveChanges}
          handleCheckBoxChange={handleCheckBoxChange}
          handleClickUpdate={handleClickUpdate}
        />
      )}
    </>
  )
}

SettingsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
  * Category of configs
  */
  category: PropTypes.object,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SettingsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
