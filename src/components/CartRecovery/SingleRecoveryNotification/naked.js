import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const SingleRecoveryNotification = (props) => {
  const {
    action,
    UIComponent,
    handleSuccessAddNotifications
  } = props

  const [, t] = useLanguage()
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [, { showToast }] = useToast()

  /**
   * Clean formState
   */
  const cleanFormState = () => {
    setFormState({ ...formState, changes: {} })
  }

  const handleChangeInput = (evt) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [evt.target.name]: evt.target.value
      }
    })
  }

  const handleChangeSelect = (name, val) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        [name]: val
      }
    })
  }

  /**
   * Default fuction to add a notification
   */
  const handleClickAddBtn = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const changes = { ...formState?.changes }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/event_rules/${action?.id}/channels`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          loading: false,
          error: null
        })
        handleSuccessAddNotifications(content.result)
        showToast(ToastType.Success, t('NOTIFICATION_ADDED', 'Notification added'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Default fuction to update a notification
   */
  const handleUpdateClick = async (channelId, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setFormState({ ...formState, loading: true })
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/event_rules/${action?.id}/channels/${channelId}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          loading: false,
          error: null
        })
        const updatedNotifications = notificationListState.notifications.filter(_notification => {
          if (_notification.id === channelId) {
            Object.assign(_notification, content.result)
          }
          return true
        })
        setNotificationListState({ ...notificationListState, notifications: updatedNotifications })
        cleanFormState()
        showToast(ToastType.Success, t('NOTIFICATION_SAVED', 'Notification saved'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err.message
      })
    }
  }

  /**
   * Default fuction to delete a channel
   */
  const handleDeleteClick = async (channelId) => {
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

      const response = await fetch(`${ordering.root}/event_rules/${action?.id}/channels/${channelId}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setFormState({
          ...formState,
          changes: {},
          loading: false,
          error: null
        })
        const updatedNotifications = notificationListState.notifications.filter(_notification => _notification.id !== channelId)
        setNotificationListState({ ...notificationListState, notifications: updatedNotifications })
        cleanFormState()
        showToast(ToastType.Success, t('NOTIFICATION_DELETED', 'Notification deleted'))
      } else {
        setFormState({
          ...formState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: err.message
      })
    }
  }

  useEffect(() => {
    getNotificationList()
  }, [action])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            notificationListState={notificationListState}
            cleanFormState={cleanFormState}
            handleChangeInput={handleChangeInput}
            handleChangeSelect={handleChangeSelect}
            handleUpdateClick={handleUpdateClick}
            handleDeleteClick={handleDeleteClick}
            handleClickAddBtn={handleClickAddBtn}
          />
        )
      }
    </>
  )
}

SingleRecoveryNotification.propTypes = {
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

SingleRecoveryNotification.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
