import React from 'react'
import { UserTypeFilter as UserTypeFilterController } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { DragScroll } from '../DragScroll'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  UserTypeFilterContainer
} from './styles'

export const UserTypeFilterUI = (props) => {
  const {
    handleChangeUserType,
    userTypes,
    currentTypesSelected
  } = props

  const handleChangeUserRole = (type) => {
    handleChangeUserType && handleChangeUserType(type)
  }

  return (
    <UserTypeFilterContainer>
      <DragScroll>
        {userTypes && userTypes.length > 0 && userTypes.map(type => (
          <Button
            key={type.value}
            color={currentTypesSelected.includes(type.value) ? 'primary' : 'secundaryDark'}
            onClick={() => handleChangeUserRole(type.value)}
          >
            {type.key}
            {currentTypesSelected.includes(type.value) && <MdClose />}
          </Button>
        ))}
      </DragScroll>
    </UserTypeFilterContainer>
  )
}

export const UserTypeFilter = (props) => {
  const userTypeFilterProps = {
    ...props,
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [
      { key: 'Users', value: 3 },
      { key: 'Business owner', value: 2 },
      { key: 'City manager', value: 1 },
      { key: 'Administrators', value: 0 }
    ],
    defaultUserTypes: props.defaultUserTypes || [0, 1, 2, 3],
    onChangeUserType: props.handleChangeUserType
  }

  return (
    <UserTypeFilterController {...userTypeFilterProps} />
  )
}
