import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useApi } from 'ordering-components-admin'
import { useApi, useSession, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const Levels = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [levelList, setLevelList] = useState({ loading: false, levels: [], error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  const handleChangeInput = (evt) => {
    const changes = { ...formState?.changes, [evt.target.name]: evt.target.value }
    setFormState({ ...formState, changes: changes })
  }

  const handleUpdateLevelList = (level) => {
    const levels = [...levelList.levels]
    levels.push(level)
    setLevelList({ ...levelList, levels: levels })
  }

  const handleDeleteLevelList = (level) => {
    const levels = levelList?.levels?.filter(item => item.id !== level.id)
    setLevelList({ ...levelList, levels: levels })
  }

  /**
   * Default fuction to add a level
   */
  const handleUpdateAddClick = async () => {
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
      const fetchEndpoint = `${ordering.root}/loyalty_levels`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('LEVEL_ADDED', 'Level added'))
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        handleUpdateLevelList(result)
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  /**
   * Default fuction to delete a level
   */
  const handleUpdateDeleteClick = async (id) => {
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
      const fetchEndpoint = `${ordering.root}/loyalty_levels/${id}`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        showToast(ToastType.Success, t('LEVEL_DELETED', 'Level deleted'))
        setFormState({ ...formState, loading: false, error: null, changes: {} })
        handleDeleteLevelList(result)
      } else {
        setFormState({ ...formState, loading: false, error: result })
      }
    } catch (error) {
      setFormState({ ...formState, loading: false, error: error.message })
    }
  }

  /**
   * Method to get level list from API
   */
  const getLevelList = async () => {
    try {
      setLevelList({ ...levelList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const fetchEndpoint = `${ordering.root}/loyalty_levels`
      const response = await fetch(fetchEndpoint, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setLevelList({ ...levelList, loading: false, error: null, levels: result })
      } else {
        setLevelList({ ...levelList, loading: false, error: result })
      }
    } catch (error) {
      setLevelList({ ...levelList, loading: false, error: error.message })
    }
  }

  const handleUpdateLevel = (evt, level) => {
    const changes = {
      [evt.target.name]: evt.target.value
    }
    updateLevel(changes, level?.id)
  }

  /**
   * Function to update a webhook
   */
  const updateLevel = async (changes, id) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }
      const response = await fetch(`${ordering.root}/loyalty_levels/${id}`, requestOptions)
      const { error, result } = await response.json()
      if (!error) {
        setActionState({ ...actionState, loading: false, error: null })
        showToast(ToastType.Success, t('LEVEL_UPDATED', 'Level updated'))
      } else {
        setActionState({ ...actionState, loading: false, error: result })
      }
    } catch (error) {
      setActionState({ ...actionState, loading: false, error: error.message })
    }
  }

  useEffect(() => {
    getLevelList()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          levelList={levelList}
          formState={formState}
          actionState={actionState}
          handleChangeInput={handleChangeInput}
          handleUpdateAddClick={handleUpdateAddClick}
          handleUpdateDeleteClick={handleUpdateDeleteClick}
          handleUpdateLevel={handleUpdateLevel}
        />
      )}
    </>
  )
}

Levels.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * filterList, this must be contains an object with filter list
   */
  filterList: PropTypes.object,
  /**
  * Method to change filter list
  */
  handleChangeFilterList: PropTypes.func,
  /**
  * Method to close business filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of business props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
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

Levels.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'header', 'logo', 'name', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
}
