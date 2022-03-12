import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useLanguage } from '../../contexts/LanguageContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
import { useSession, useApi, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const RecoveryNotificationList = (props) => {
  const {
    action,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [{ token }] = useSession()

  const [notificationListState, setNotificationListState] = useState({ loading: false, notifications: [], error: null })
  const [actionState, setActionState] = useState({ loading: false, error: null })

  /**
   * Method to change multi orders status from API
   */
  const getNotificationList = async () => {
    try {
      setNotificationListState({ ...notificationListState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const response = await fetch(`${ordering.root}/event_rules/${action?.id}/channels`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setNotificationListState({
          loading: false,
          notifications: content.result,
          error: null
        })
      } else {
        setNotificationListState({
          ...notificationListState,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setNotificationListState({
        ...notificationListState,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Method to add the notification in the notification list
   * @param {Object} result notification to add
   */
  const handleAddNotifications = (result) => {
    const notifications = [...notificationListState.notifications, result]
    setNotificationListState({ ...notificationListState, notifications })
  }

  /**
   * Method to update the notification in the notification list
   * @param {Object} result notification to update
   */
  const handleUpdateNotifications = (result) => {
    const updatedNotifications = notificationListState.notifications.filter(_notification => {
      if (_notification.id === result.id) {
        Object.assign(_notification, result)
      }
      return true
    })
    setNotificationListState({ ...notificationListState, notifications: updatedNotifications })
  }

  /**
   * Method to delete the notification in the notification list
   * @param {Object} result notification to delete
   */
  const handleDeleteNotifications = (result) => {
    const updatedNotifications = notificationListState.notifications.filter(_notification => _notification.id !== result.id)
    setNotificationListState({ ...notificationListState, notifications: updatedNotifications })
  }

  /**
   * Default fuction to update a notification
   */
  const handleUpdateClick = async (channelId, changes) => {
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

      const response = await fetch(`${ordering.root}/event_rules/${action?.id}/channels/${channelId}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        setActionState({ loading: false, error: null })
        handleUpdateNotifications && handleUpdateNotifications(content.result)
        showToast(ToastType.Success, t('NOTIFICATION_SAVED', 'Notification saved'))
      } else {
        setActionState({ loading: false, error: content.result })
      }
    } catch (err) {
      setActionState({ loading: false, error: err.message })
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
            actionState={actionState}
            notificationListState={notificationListState}
            handleAddNotifications={handleAddNotifications}
            handleUpdateNotifications={handleUpdateNotifications}
            handleDeleteNotifications={handleDeleteNotifications}
            handleUpdateClick={handleUpdateClick}
          />
        )
      }
    </>
  )
}

RecoveryNotificationList.propTypes = {
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

RecoveryNotificationList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
