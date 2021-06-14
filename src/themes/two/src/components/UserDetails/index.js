import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from './naked'
import {
  UserName
} from './styles'
export const UserDetailsUI = (props) => {
  const {
    userState
  } = props
  return (
    <>
      <UserName>
        {userState.loading ? (
          <Skeleton width={150} />
        ) : (
          <span>{userState.user?.name} {userState.user?.lastname}</span>
        )}
      </UserName>
    </>
  )
}

export const UserDetails = (props) => {
  const userDetailsControlProps = {
    ...props,
    UIComponent: UserDetailsUI
  }

  return (
    <>
      <UserDetailsController {...userDetailsControlProps} />
    </>
  )
}
