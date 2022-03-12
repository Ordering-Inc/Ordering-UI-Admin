import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useSession } from '../../contexts/SessionContext'
// import { useApi } from '../../contexts/ApiContext'
// import { useWebsocket } from '../../contexts/WebsocketContext'
import { useApi, useSession, useLanguage, useToast, ToastType } from 'ordering-components-admin'

export const RecoveryActionListing = (props) => {
  const {
    UIComponent,
    paginationSettings,
    isSearchByName,
    isSearchByDescription
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [, { showToast }] = useToast()
  const [, t] = useLanguage()

  const [searchValue, setSearchValue] = useState(null)
  const [recoveryActionList, setRecoveryActionList] = useState({ actions: [], loading: false, error: null })
  const [filterValues, setFilterValues] = useState({ clear: false, changes: {} })
  const [paginationProps, setPaginationProps] = useState({
    currentPage: (paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1) ? paginationSettings.initialPage - 1 : 0,
    pageSize: paginationSettings.pageSize ?? 10,
    totalItems: null,
    totalPages: null
  })

  /**
   * Change text to search
   * @param {string} search Search value
   */
  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  /**
   * Method to get the sites from API
   */
  const getRecoveryList = async (page, pageSize) => {
    try {
      setRecoveryActionList({ ...recoveryActionList, loading: true })
      let where = null
      const conditions = []
      if (searchValue) {
        const searchConditions = []
        if (isSearchByName) {
          searchConditions.push(
            {
              attribute: 'name',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        if (isSearchByDescription) {
          searchConditions.push(
            {
              attribute: 'description',
              value: {
                condition: 'ilike',
                value: encodeURI(`%${searchValue}%`)
              }
            }
          )
        }
        conditions.push({
          conector: 'OR',
          conditions: searchConditions
        })
      }

      if (conditions.length) {
        where = {
          conditions,
          conector: 'AND'
        }
      }
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }

      const fetchEndpoint = where
        ? `${ordering.root}/event_rules?page=${page}&page_size=${pageSize}&&where=${JSON.stringify(where)}`
        : `${ordering.root}/event_rules?page=${page}&page_size=${pageSize}`

      const response = await fetch(fetchEndpoint, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setRecoveryActionList({
          loading: false,
          actions: content.result,
          error: null
        })
        setPaginationProps({
          ...paginationProps,
          currentPage: content.pagination.current_page,
          totalPages: content.pagination.total_pages,
          totalItems: content.pagination.total,
          from: content.pagination.from,
          to: content.pagination.to
        })
      } else {
        setRecoveryActionList({
          ...recoveryActionList,
          loading: false,
          error: content.result
        })
      }
    } catch (err) {
      setRecoveryActionList({
        ...recoveryActionList,
        loading: false,
        error: [err.message]
      })
    }
  }

  /**
   * Default fuction for recovery action workflow
   */
  const handleUpdateAction = async (id, changes) => {
    try {
      showToast(ToastType.Info, t('LOADING', 'Loading'))
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(changes)
      }

      const response = await fetch(`${ordering.root}/event_rules/${id}`, requestOptions)
      const content = await response.json()

      if (!content.error) {
        if (handleSuccessUpdateRecoveryAction) {
          const updatedActions = recoveryActionList?.actions.filter(_action => {
            if (_action.id === id) {
              Object.assign(_action, content.result)
            }
            return true
          })
          handleSuccessUpdateRecoveryAction(updatedActions)
        }
        showToast(ToastType.Success, t('RECOVERY_ACTION_SAVED', 'Recovery action saved'))
      } else {
        setRecoveryActionList({
          ...recoveryActionList,
          error: content.result
        })
      }
    } catch (err) {
      setRecoveryActionList({
        ...recoveryActionList,
        error: err.message
      })
    }
  }

  /**
   * Method to add the recovery action in the recovery action list
   * @param {Object} action recovery action to add
   */
  const handleSuccessAddRecoveryAction = (action) => {
    const actions = [...recoveryActionList.actions, action]
    setPaginationProps({
      ...paginationProps,
      to: paginationProps?.to + 1,
      total: paginationProps?.total + 1
    })
    setRecoveryActionList({ ...recoveryActionList, actions })
  }

  /**
   * Method to update the recovery action list
   */
  const handleSuccessUpdateRecoveryAction = (updatedActions) => {
    setRecoveryActionList({
      ...recoveryActionList,
      actions: updatedActions
    })
  }

  /**
   * Method to delete the recovery action in the recovery action list
   * @param {Number} actionId recovery action to delete
   */
  const handleSuccessDeleteRecoveryAction = (actionId) => {
    const actions = recoveryActionList.actions.filter(action => action.id !== actionId)
    setPaginationProps({
      ...paginationProps,
      total: paginationProps?.total - 1
    })
    setRecoveryActionList({ ...recoveryActionList, actions: actions })
  }

  useEffect(() => {
    if (recoveryActionList.loading) return
    getRecoveryList(1, paginationProps.pageSize)
  }, [searchValue])

  useEffect(() => {
    if ((Object.keys(filterValues?.changes).length > 0 || filterValues.clear) && !recoveryActionList.loading) getRecoveryList(1, paginationProps.pageSize)
  }, [filterValues])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          searchValue={searchValue}
          paginationProps={paginationProps}
          recoveryActionList={recoveryActionList}
          getRecoveryList={getRecoveryList}
          setFilterValues={setFilterValues}
          setPaginationProps={setPaginationProps}
          handleChangeSearch={handleChangeSearch}
          handleUpdateAction={handleUpdateAction}
          handleSuccessAddRecoveryAction={handleSuccessAddRecoveryAction}
          handleSuccessUpdateRecoveryAction={handleSuccessUpdateRecoveryAction}
          handleSuccessDeleteRecoveryAction={handleSuccessDeleteRecoveryAction}
        />
      )}
    </>
  )
}

RecoveryActionListing.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

RecoveryActionListing.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: { initialPage: 1, pageSize: 10, controlType: 'infinity' }
}
