import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
// import { useSession } from '../../contexts/SessionContext'
import { useApi, useSession } from 'ordering-components-admin'

export const ReportsAppIdFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose
  } = props

  const [ordering] = useApi()

  /**
   * This state save the app id info from API
   */
  const [appIdList, setAppIdList] = useState({ loading: true, error: null, appIds: [], pagination: null })
  const [appIds, setAppIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState(false)
  const [{ token, loading }] = useSession()

  /**
   * Method to change app id
   * @param {number} id
   */
  const handleChangeAppId = (id) => {
    const found = appIds?.find(appId => appId === id)
    if (found) {
      const _appIds = appIds?.filter(appId => appId !== id)
      setAppIds(_appIds)
      setIsAllCheck(false)
    } else {
      const _appIds = appIds ? [...appIds] : []
      _appIds.push(id)
      if (_appIds.length === appIdList?.appIds.length) setIsAllCheck(true)
      setAppIds(_appIds)
    }
  }

  /**
   * Method to change filter list
   */
  const handleClickFilterButton = () => {
    const _appIds = appIds ? [...appIds] : null
    handleChangeFilterList({ ...filterList, app_ids: _appIds })
    onClose && onClose()
  }

  /**
   * Method to change all check status
   */
  const handleChangeAllCheck = () => {
    if (isAllCheck) {
      setAppIds(null)
    } else {
      const _appIds = []
      for (const site of appIdList.appIds) {
        _appIds.push(site.id)
      }
      setAppIds(_appIds)
    }
    setIsAllCheck(!isAllCheck)
  }

  /**
   * Method to get app id list
   */
  const getAppIds = async () => {
    if (loading) return
    try {
      setAppIdList({ ...appIdList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const functionFetch = `${ordering.root}/sites?params=${propsToFetch}`

      const response = await fetch(functionFetch, requestOptions)
      const { error, result, pagination } = await response.json()
      if (!error) {
        setAppIdList({
          ...appIdList,
          loading: false,
          appIds: result,
          pagination
        })
      } else {
        setAppIdList({
          ...appIdList,
          loading: false,
          error: result
        })
      }
    } catch (err) {
      setAppIdList({
        ...appIdList,
        loading: false,
        error: err
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getAppIds()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (appIdList?.appIds?.length === 0) return
    const _appIds = appIdList.appIds.reduce((prev, cur) => [...prev, cur.id], [])
    setAppIds([...filterList?.app_ids || _appIds])
    if (!filterList?.app_ids || filterList?.app_ids?.length === appIdList?.appIds.length) setIsAllCheck(true)
  }, [appIdList?.appIds])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          appIdList={appIdList}
          appIds={appIds}
          handleChangeAppId={handleChangeAppId}
          handleClickFilterButton={handleClickFilterButton}
          isAllCheck={isAllCheck}
          handleChangeAllCheck={handleChangeAllCheck}
        />
      )}
    </>
  )
}

ReportsAppIdFilter.propTypes = {
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
  * Method to close app id filter Modal
  */
  onClose: PropTypes.func,
  /**
   * Array of app id props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * Components types before app id filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after app id filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before app id filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after app id filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ReportsAppIdFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'logo', 'description', 'header', 'enabled', 'created_at', 'updated_at']
}
