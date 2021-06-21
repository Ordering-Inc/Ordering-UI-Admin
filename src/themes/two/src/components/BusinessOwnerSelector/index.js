import React, { useState, useEffect } from 'react'
import { useLanguage, UsersList as UsersListController } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'

import { Option } from './styles'

const BusinessOwnerSelectorUI = (props) => {
  const {
    usersList,
    handleSelectBusinessOwner
  } = props

  const [, t] = useLanguage()
  const [usersListOptions, setUsersListOptions] = useState([])

  const placeholder = <Option>{t('SELECT_BUSINESS_OWNER', 'Select business owner')}</Option>

  useEffect(() => {
    if (usersList?.loading) return
    const _usersListOptions = usersList?.users.map(user => {
      return {
        value: user.id,
        content: (
          <Option>
            {user.id}. {user?.name} {user?.lastname}
          </Option>
        )
      }
    })
    setUsersListOptions(_usersListOptions)
  }, [usersList])
  return (
    <Select
      options={usersListOptions}
      placeholder={placeholder}
      onChange={handleSelectBusinessOwner}
    />
  )
}

export const BusinessOwnerSelector = (props) => {
  const businessOwnersProps = {
    ...props,
    UIComponent: BusinessOwnerSelectorUI,
    isBusinessOwners: true,
    deafultUserTypesSelected: [0, 2]
  }
  return <UsersListController {...businessOwnersProps} />
}
