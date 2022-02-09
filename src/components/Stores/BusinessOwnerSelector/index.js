import React, { useState, useEffect } from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'

import { Option } from './styles'

const BusinessOwnerSelectorUI = (props) => {
  const {
    usersList,
    selectedOwnerIds,
    handleSelectBusinessOwner,
    selectedOwner
  } = props

  const [, t] = useLanguage()
  const [usersListOptions, setUsersListOptions] = useState([])
  const [searchValue, setSearchValue] = useState(null)

  const placeholder = <Option>{t('SELECT_BUSINESS_OWNER', 'Select business owner')}</Option>

  const onSelectBusinessOwner = (id) => {
    const selectedOwner = usersList?.users.find(user => user.id === id)
    handleSelectBusinessOwner(selectedOwner)
  }

  useEffect(() => {
    if (usersList?.loading) return

    let _userLists
    if (searchValue) {
      _userLists = usersList?.users.filter(user => (user?.id + user?.name + user?.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
    } else {
      _userLists = usersList?.users
    }

    const _usersListOptions = _userLists.map(user => {
      return {
        value: user?.id,
        content: (
          <Option>
            {user.id}. {user?.name} {user?.lastname}
          </Option>
        ),
        showDisable: selectedOwnerIds.includes(user.id)
      }
    })
    setUsersListOptions(_usersListOptions)
  }, [usersList, selectedOwnerIds, searchValue])

  const handleChangeSearch = (searchVal) => {
    setSearchValue(searchVal)
  }

  return (
    <Select
      options={usersListOptions}
      defaultValue={selectedOwner?.id}
      placeholder={placeholder}
      onChange={onSelectBusinessOwner}
      isShowSearchBar
      searchBarIsCustomLayout
      handleChangeSearch={handleChangeSearch}
    />
  )
}

export const BusinessOwnerSelector = (props) => {
  const businessOwnersProps = {
    ...props,
    UIComponent: BusinessOwnerSelectorUI,
    isBusinessOwners: true,
    deafultUserTypesSelected: [2]
  }
  return <UsersListController {...businessOwnersProps} />
}
