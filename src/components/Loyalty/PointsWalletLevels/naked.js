import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useApi, useSession, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const PointsWalletLevels = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const [levelList, setLevelList] = useState({ loading: false, levels: [], error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [editFormState, setEditFormState] = useState({ loading: false, error: null, changes: {} })

  /**
   * Update level data
   * @param {EventTarget} evt Related HTML event
   */
  const handleChangeInput = (evt) => {
    const changes = { ...formState?.changes, [evt.target.name]: evt.target.value }
    setFormState({ ...formState, changes: changes })
  }

  /**
   * Add a level
   * @param {Object || Array} level data of level
   */
  const handleAddLevelList = (level) => {
    const levels = [...levelList.levels]
    levels.push(level)
    setLevelList({ ...levelList, levels: levels })
  }

  /**
   * Update a level
   * @param {Object || Array} result data of level
   */
  const handleUpdateLevelList = (result) => {
    const updatedLevels = levelList?.levels.map(level => {
      if (level.id === result.id) return result
      else return level
    })
    setLevelList({ ...levelList, levels: updatedLevels })
  }

  /**
   * Delete a level
   * @param {Object || Array} level data of level
   */
  const handleDeleteLevelList = (level) => {
    const levels = levelList?.levels?.filter(item => item.id !== level.id)
    setLevelList({ ...levelList, levels: levels })
  }

  /**
   * Update a level
   * @param {EventTarget} evt Related HTML event
   * @param {Number} levelId id of level
   */
  const handleUpdateLevel = (evt, levelId) => {
    const changes = levelId === editFormState?.changes?.id
      ? { ...editFormState?.changes, [evt.target.name]: evt.target.value }
      : { [evt.target.name]: evt.target.value, id: levelId }
    setEditFormState({ ...editFormState, changes: changes })
  }

  const handleUpdateBtnClick = () => {
    updateLevel(editFormState?.changes, editFormState?.changes?.id)
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
        handleAddLevelList(result)
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

  /**
   * Function to update a webhook
   */
  const updateLevel = async (changes, id) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setEditFormState({ ...editFormState, loading: true })
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
        setEditFormState({ changes: {}, loading: false, error: null })
        handleUpdateLevelList(result)
        showToast(ToastType.Success, t('LEVEL_UPDATED', 'Level updated'))
      } else {
        setEditFormState({ ...editFormState, loading: false, error: result })
      }
    } catch (error) {
      setEditFormState({ ...editFormState, loading: false, error: error.message })
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
          editFormState={editFormState}
          handleChangeInput={handleChangeInput}
          handleUpdateAddClick={handleUpdateAddClick}
          handleUpdateDeleteClick={handleUpdateDeleteClick}
          handleUpdateLevel={handleUpdateLevel}
          handleUpdateBtnClick={handleUpdateBtnClick}
        />
      )}
    </>
  )
}

PointsWalletLevels.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

PointsWalletLevels.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
