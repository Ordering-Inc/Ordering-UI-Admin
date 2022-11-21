import React, { cloneElement, useEffect, useState } from 'react'

import { SpinnerLoader } from '../../../src/components/Shared'
import settings from '../../config.json'
import theme from '../../theme.json'

export const AutologinParams = (props) => {
  const [userState, setUserState] = useState({ loading: true, result: null, error: null })

  const allowedLevels = [0, 2, 5]
  const search = window.location.search

  let queryProject
  let queryToken

  if (search) {
    const query = new URLSearchParams(search)
    queryProject = query.get('project')
    queryToken = query.get('token')
  }

  const setUser = async () => {
    if (!queryProject || !queryToken) {
      setUserState({ ...userState, loading: false })
      return
    }
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('project')
    try {
      setUserState({ ...userState, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${queryToken}`
        }
      }
      const response = await fetch(`${settings.api.url}/${settings.api.version}/${settings.api.language}/${queryProject}/users/me`, requestOptions)
      const { error, result } = await response.json()
      if (!error && allowedLevels.includes(result.level)) {
        window.localStorage.setItem('token', queryToken)
        window.localStorage.setItem('user', JSON.stringify(result))
        window.localStorage.setItem('project', queryProject)
      }
      setUserState({
        ...userState,
        loading: false,
        error: result
      })
    } catch (e) {
      setUserState({
        ...userState,
        loading: false,
        error: e?.message
      })
    }
  }

  useEffect(() => {
    setUser()
  }, [])

  return (
    userState.loading
      ? <SpinnerLoader content={theme?.defaultLanguages?.LOADING_DELICIOUS_FOOD} />
      : cloneElement(props.children, {
        settings: {
          ...settings,
          ...props.configFile,
          project: settings?.use_project_domain
            ? '_'
            : queryProject ?? window.localStorage.getItem('project') !== null
              ? window.localStorage.getItem('project')
              : props.configFile?.project ?? null
        }
      })
  )
}
