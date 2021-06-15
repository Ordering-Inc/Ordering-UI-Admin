import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from 'ordering-components-admin'
import {
  UserName
} from './styles'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
export const UserDetailsUI = (props) => {
  const {
    userState,
    userId
  } = props

  const [currentMenuSelected, setCurrentMenuSelected] = useState('Profile')

  return (
    <>
      <UserName>
        {userState.loading ? (
          <Skeleton width={150} />
        ) : (
          <span>{userState.user?.name} {userState.user?.lastname}</span>
        )}
      </UserName>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
      />
      {!userState.loading && userState.user && (
        <>
          {currentMenuSelected === 'Profile' && (
            <UserProfileForm
              user={userState.user}
              handleSuccessUpdate={(result) => console.log(result)}
            />
          )}
        </>
      )}
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
