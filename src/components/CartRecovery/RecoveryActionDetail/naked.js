import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const RecoveryActionDetail = (props) => {
  const {
    action,
    recoveryActionList,
    UIComponent,
    handleSuccessUpdateRecoveryAction,
    handleSuccessAddRecoveryAction,
    handleSuccessDeleteRecoveryAction
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()

  const [recoveryActionState, setRecoveryActionState] = useState({ action: action, loading: false, error: null })
  const [formState, setFormState] = useState({ loading: false, changes: {} })
  const [actionState, setActionState] = useState({ loading: false, error: null })
  const [isAddMode, setIsAddMode] = useState(false)

  /**
   * Clean formState
   */
  const cleanFormState = () => setFormState({ loading: false, changes: {} })

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState.changes, [e.target.name]: e.target.value }
    })
  }

  /**
   * Update parameter data
   * @param {changes} changes parameters to change
   */
  const handleChangeItem = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        ...changes
      }
    })
  }

  /**
   * Method to remove the key of changes
   * @param {String} key
   */
  const handleRemoveKey = (key) => {
    const _changes = { ...formState?.changes }
    delete _changes[key]
    setFormState({
      ...formState,
      changes: _changes
    })
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleUpdateClick = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const changes = { ...formState?.changes }
      for (const key in changes) {
        if ((typeof changes[key] === 'object' && changes[key] !== null) || Array.isArray(changes[key])) {
          changes[key] = JSON.stringify(changes[key])
        }
      }
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/event_rules/${action.id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setRecoveryActionState({
          ...recoveryActionState,
          action: content.result
        })
        setActionState({ loading: false, error: null })
        if (handleSuccessUpdateRecoveryAction) {
          const updatedActions = recoveryActionList?.actions.filter(_action => {
            if (_action.id === action.id) {
              Object.assign(_action, content.result)
            }
            return true
          })
          handleSuccessUpdateRecoveryAction(updatedActions)
        }
        cleanFormState()
        showToast(ToastType.Success, t('RECOVERY_ACTION_SAVED', 'Recovery action saved'))
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to add new recovery action from API
   */
  const handleAddRecoveryAction = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ loading: true, error: null })
      const changes = { ...formState?.changes }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/event_rules`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setActionState({ error: null, loading: false })
        handleSuccessAddRecoveryAction && handleSuccessAddRecoveryAction(content.result)
        showToast(ToastType.Success, t('RECOVERY_ACTION_ADDED', 'Recovery action added'))
        props.onClose && props.onClose()
      } else {
        setActionState({
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setActionState({
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Method to delete the recovery action
   */
  const handleDeleteRecoveryAction = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionState({ ...actionState, loading: true })
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/event_rules/${action.id}`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        handleSuccessDeleteRecoveryAction && handleSuccessDeleteRecoveryAction(action.id)
        showToast(ToastType.Success, t('RECOVERY_ACTION_DELETED', 'Recovery action deleted'))
        props.onClose && props.onClose()
      }
    } catch (err) {
      setActionState({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (Object.keys(action).length === 0) {
      setIsAddMode(true)
      setFormState({
        ...formState,
        changes: {
          enabled: true,
          launch_type: 'times',
          name: '',
          type: 'abandoned_cart'
        }
      })
    } else {
      setIsAddMode(false)
      cleanFormState()
    }
    setRecoveryActionState({ ...recoveryActionState, action: action })
  }, [action])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            isAddMode={isAddMode}
            recoveryActionState={recoveryActionState}
            formState={formState}
            actionState={actionState}
            handleChangeItem={handleChangeItem}
            handleChangeInput={handleChangeInput}
            handleAddRecoveryAction={handleAddRecoveryAction}
            handleDeleteRecoveryAction={handleDeleteRecoveryAction}
            handleUpdateClick={handleUpdateClick}
            handleRemoveKey={handleRemoveKey}
          />
        )
      }
    </>
  )
}

RecoveryActionDetail.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before enterprise promotion details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Components types after enterprise promotion details
  * Array of type components, the parent props will pass to these components
  */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
  * Elements before enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
  * Elements after enterprise promotion details
  * Array of HTML/Components elements, these components will not get the parent props
  */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

RecoveryActionDetail.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
