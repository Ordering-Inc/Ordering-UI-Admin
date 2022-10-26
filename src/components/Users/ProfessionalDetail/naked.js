import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useToast, ToastType } from '../../contexts/ToastContext'
// import { useLanguage } from '../../contexts/LanguageContext'
import { useSession, useApi, useToast, ToastType, useLanguage } from 'ordering-components-admin'

export const UserDetails = (props) => {
  const {
    userId,
    propsToFetch,
    UIComponent,
    handleSuccessUpdate,
    handleSuccessDeleteUser
  } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()
  const accessToken = session.token
  const [scheduleState, setScheduleState] = useState({ loading: false, error: false, change: [] })
  const [userState, setUserState] = useState({ user: null, loading: false, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })

  /**
   * Method to get user from API
   */
  const getUser = async () => {
    try {
      setUserState({
        ...userState,
        loading: true
      })
      const fetchEndpoint = ordering.setAccessToken(session.token).users(userId).select(propsToFetch)
      const { content: { result } } = await fetchEndpoint.get()
      const user = Array.isArray(result) ? null : result
      setUserState({
        ...userState,
        loading: false,
        user
      })
    } catch (err) {
      setUserState({
        ...userState,
        loading: false,
        error: [err.message]
      })
    }
  }

  const handleScheduleState = (scheduleChanges) => {
    scheduleChanges?.length > 0 && setScheduleState({
      ...scheduleState,
      change: scheduleChanges
    })
  }

  /**
   * Method to delete users from API
   */
  const handleDeleteUser = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ loading: true, error: null })
      const { content } = await ordering.setAccessToken(session.token).users(userId).delete()
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
      if (!content.error) {
        showToast(ToastType.Success, t('USER_DELETED', 'User deleted'))
        handleSuccessDeleteUser && handleSuccessDeleteUser(userState.user)
        props.onClose && props.onClose()
      }
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  const handleScheduleUpdateUser = async () => {
    try {
      if (scheduleState?.change?.length > 0 && userState?.user?.id) {
        showToast(ToastType.Info, t('LOADING', 'Loading'))
        setScheduleState({ ...scheduleState, loading: true })

        const _change = { schedule: JSON.stringify(scheduleState?.change) }
        const { content: { error, result } } = await ordering.users(userState?.user?.id).save(_change, {
          accessToken: accessToken
        })

        if (!error) {
          setScheduleState({ ...scheduleState, change: [], loading: false, error: false })
          setUserState({
            ...userState,
            error: false,
            user: Object.assign(userState.user, result)
          })
          showToast(ToastType.Success, t('SCHEDULE_UPDATED', 'Schedule Updated'))
        } else {
          setScheduleState({ ...scheduleState, change: [], loading: false, error: true })
          setUserState({
            ...userState,
            error: true
          })
          showToast(ToastType.Error, t('SCHEDULE_UPDATED_FAILED', 'Schedule Update Failed'))
        }
      } else {
        showToast(ToastType.Info, t('NOT_CHANGED', 'Not Changed'))
      }
    } catch (err) {
      setScheduleState({ ...scheduleState, change: [], loading: false, error: true })
      setUserState({
        ...userState,
        loading: false,
        error: err?.message
      })
      showToast(ToastType.Error, err?.message)
    }
  }
  /**
   * Method to connect with Google calendar
   */
  const handleGoogleCalendarSync = async () => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      setActionStatus({ loading: true, error: null })
      const connect = window.open(`${ordering.root}/users/${userState.user?.id}/google/permissions/request?name=calendar&token=${session.token}`, '_blank', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,clearcache=yes')
      const interval = setInterval(function () {
        if (!connect.closed) {
          connect.postMessage('data', ordering.url)
        } else {
          clearInterval(interval)
        }
      }, 200)
      let timeout = null
      window.addEventListener('message', function (e) {
        console.log(e)
        if (e.origin.indexOf('.ordering.co') === -1) {
          return
        }
        clearInterval(interval)
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(function () {
          connect.postMessage('close', ordering.url)

          if (!e.data.error && e.data.result) {
          } else if (e.data.error) {
          }
        }, 1000)
      })
    } catch (err) {
      setActionStatus({ loading: false, error: [err.message] })
    }
  }

  useEffect(() => {
    if (props.user) {
      setUserState({
        ...userState,
        user: props.user
      })
    } else {
      getUser()
    }
  }, [userId])

  const handleSuccessUserUpdate = (updatedUser) => {
    setUserState({
      ...userState,
      user: Object.assign(userState.user, updatedUser)
    })
    handleSuccessUpdate && handleSuccessUpdate(updatedUser)
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            userState={userState}
            actionStatus={actionStatus}
            handleDeleteUser={handleDeleteUser}
            handleSuccessUserUpdate={handleSuccessUserUpdate}
            handleGoogleCalendarSync={handleGoogleCalendarSync}
            scheduleState={scheduleState}
            handleScheduleState={handleScheduleState}
            handleScheduleUpdateUser={handleScheduleUpdateUser}
          />
        )
      }
    </>
  )
}

UserDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
  * This must be contains userId to fetch
  */
  userId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
  * User, this must be contains an object with all user info
  */
  user: PropTypes.object,
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

UserDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: [
    'name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address',
    'addresses', 'address_notes', 'driver_zone_restriction', 'dropdown_option_id', 'dropdown_option', 'location', 'loyalty_level',
    'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname', 'phone_verified', 'email_verified', 'schedule', 'timezone', 'max_days_in_future',
    'occupation_id', 'occupation', 'session'
  ]
}
