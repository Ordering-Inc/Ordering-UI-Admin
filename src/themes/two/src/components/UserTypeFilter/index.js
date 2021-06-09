import React from 'react'
import { UserTypeFilter as UserTypeFilterController } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { AutoScroll } from '../AutoScroll'
import MdClose from '@meronex/icons/ios/MdClose'

import {
  UserTypeFilterContainer,
  InnerContainer
} from './styles'

export const UserTypeFilterUI = (props) => {
  const {
    handleChangeUserType,
    userTypes,
    currentTypeSelected
  } = props

  const handleChangeUserRole = (types) => {
    handleChangeUserType && handleChangeUserType(types)
  }

  return (
    <UserTypeFilterContainer>
      <InnerContainer>
        <AutoScroll innerScroll scrollId={`users_subFilter`}>
          {userTypes && userTypes.length > 0 && userTypes.map(type => (
            <Button
              key={type.value}
              color={type.value === currentTypeSelected ? 'primary': 'secundary'}
              onClick={() => handleChangeUserRole(type.value)}
            >
              {type.key}
              {type.value === currentTypeSelected && <MdClose />}
            </Button>
          ))}
        </AutoScroll>
      </InnerContainer>
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
      { key: 'Admintrators', value: 0 }
    ],
    defaultUserType: props.defaultUserType || 3,
    onChangeUserType: props.handleChangeUserType
  }

  return (
    <UserTypeFilterController {...userTypeFilterProps} />
  )
}
