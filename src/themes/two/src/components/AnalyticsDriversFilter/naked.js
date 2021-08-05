import React, { useState, useEffect } from 'react'
import PropTypes, { string } from 'prop-types'
// import { useApi } from '../../contexts/ApiContext'
import { useApi } from 'ordering-components-admin'

export const AnalyticsDriversFilter = (props) => {
  const {
    UIComponent,
    filterList,
    handleChangeFilterList,
    propsToFetch,
    onClose
  } = props

  const [ordering] = useApi()

  /**
   * This state save the business type info from API
   */
  const [usersList, setUsersList] = useState({ loading: true, error: null, users: [], pagination: null })
  const [groupList, setGroupList] = useState(null)
  const [userIds, setUserIds] = useState(null)
  const [isAllCheck, setIsAllCheck] = useState('all')

  const getGroupList = () => {
    const _groupList = []
    const _userIds = []
    for (const user of usersList?.users) {
      for (const group of user?.drivergroups) {
        const found = _groupList.find(item => item.id === group.id)
        if (!found) _groupList.push({ id: group.id, name: group.name, isCollapse: false, children: [] })
      }
      _userIds.push(user.id)
    }
    const groups = _groupList.map(group => {
      const _children = [...group.children]
      for (const user of usersList?.users) {
        if (isIncluded(user.id, group.id)) _children.push(user)
      }
      return { ...group, children: _children }
    })
    setUserIds(_userIds)
    setGroupList(groups)
  }

  const handleChangeUserId = (id) => {
    const found = userIds?.find(businessId => businessId === id)
    if (found) {
      const _userIds = userIds?.filter(businessId => businessId !== id)
      setUserIds(_userIds)
      setIsAllCheck(false)
    } else {
      const _userIds = userIds ? [...userIds] : []
      _userIds.push(id)
      if (_userIds.length === usersList?.users.length) setIsAllCheck(true)
      setUserIds(_userIds)
    }
  }

  const handleChangeCollapse = (groupId) => {
    const _groupList = groupList?.map((group) => {
      if (group.id === groupId) {
        return { ...group, isCollapse: !group.isCollapse }
      }
      return group
    })
    setGroupList(_groupList)
  }

  const isParentCheck = (groupId) => {
    let isChecked = false
    let isUnChecked = false
    for (const group of groupList) {
      if (group.id === groupId) {
        for (const user of group.children) {
          const found = userIds?.find(userId => userId === user.id)
          if (found) isChecked = true
          else isUnChecked = true
        }
      }
    }
    let completedCheck = 'all'
    if (isChecked && isUnChecked) completedCheck = 'some'
    else if (!isChecked && isUnChecked) completedCheck = 'none'
    return completedCheck
  }

  const parentClick = (groupId) => {
    const checkStatus = isParentCheck(groupId)
    const selectedGroup = groupList?.find(group => group.id === groupId)
    let _userIds = [...userIds]
    for (const user of selectedGroup?.children) {
      const found = userIds.find(userId => userId === user.id)
      if (found && (checkStatus !== 'none')) {
        const temp = _userIds?.filter(userId => userId !== user.id)
        _userIds = [...temp]
      }
      if (!found && (checkStatus === 'none')) _userIds.push(user.id)
    }
    setUserIds(_userIds)
  }

  const isIncluded = (userId, groupId) => {
    let ischecked = false
    for (const user of usersList?.users) {
      for (const group of user.drivergroups) {
        if (user.id === userId && group.id === groupId) ischecked = true
      }
    }
    return ischecked
  }

  const changeAllCheckStatus = (status) => {
    if (status === isAllCheck) return
    setIsAllCheck(status)
    if (status === 'all') {
      const _userIds = []
      for (const user of usersList?.users) {
        _userIds.push(user.id)
      }
      setUserIds(_userIds)
    } else {
      setUserIds([])
    }
  }

  const handleClickFilterButton = () => {
    handleChangeFilterList && handleChangeFilterList({ ...filterList, userIds: userIds })
    onClose && onClose()
  }

  /**
   * Method to get drivers from API
   */
  const getDrivers = async () => {
    try {
      setUsersList({
        ...usersList,
        loading: true
      })
      const where = [{ attribute: 'level', value: '4' }]
      const { content: { error, result, pagination } } = await ordering.users().asDashboard().select(propsToFetch).where(where).get()
      if (!error) {
        setUsersList({
          ...usersList,
          loading: false,
          users: result,
          pagination
        })
      } else {
        setUsersList({
          ...usersList,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setUsersList({
        ...usersList,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    getDrivers()
    return controller.abort()
  }, [])

  useEffect(() => {
    if (usersList?.users.length > 0) getGroupList()
  }, [usersList])

  useEffect(() => {
    if (!userIds || !usersList?.users) return
    if (userIds.length > 0 && (userIds.length === usersList.users.length)) setIsAllCheck('all')
    if (userIds.length > 0 && (userIds.length !== usersList.users.length)) setIsAllCheck('some')
    if (userIds.length === 0) setIsAllCheck('none')
  }, [userIds])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          usersList={usersList}
          groupList={groupList}
          handleChangeCollapse={handleChangeCollapse}
          userIds={userIds}
          handleChangeUserId={handleChangeUserId}
          isParentCheck={isParentCheck}
          parentClick={parentClick}
          isIncluded={isIncluded}
          isAllCheck={isAllCheck}
          changeAllCheckStatus={changeAllCheckStatus}
          handleClickFilterButton={handleClickFilterButton}
        />
      )}
    </>
  )
}

AnalyticsDriversFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
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

AnalyticsDriversFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['name', 'lastname', 'email', 'phone', 'photo', 'cellphone', 'country_phone_code', 'city_id', 'city', 'address', 'addresses', 'address_notes', 'dropdown_option_id', 'dropdown_option', 'location', 'zipcode', 'level', 'enabled', 'middle_name', 'second_lastname']
}
