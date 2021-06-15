import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from 'ordering-components-admin'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { AddressList } from '../AddressList'

import {
  UserName,
  SavedPlaces
} from './styles'

export const UserDetailsUI = (props) => {
  const {
    userState,
    userId,
    setExtraOpen
  } = props

  const [currentMenuSelected, setCurrentMenuSelected] = useState('Profile')

  return (
    <>
      <UserName>
        {userState.loading ? (
          <Skeleton width={150} />
        ) : (
          <span>{userState?.user?.name} {userState?.user?.lastname}</span>
        )}
      </UserName>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'Profile' && (
            <UserProfileForm
              user={userState.user}
              handleSuccessUpdate={(result) => console.log(result)}
            />
          )}
          {currentMenuSelected === 'Saved_places' && (
            <>
              {userState?.user?.addresses && (
                <SavedPlaces>
                  <AddressList
                    isSeletectedUserAddresses
                    userId={userState.user?.id}
                    addresses={userState.user?.addresses}
                    setExtraOpen={setExtraOpen}
                  />
                </SavedPlaces>
              )}
            </>
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
