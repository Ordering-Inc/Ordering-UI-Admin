import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController } from 'ordering-components-admin'
import { OrdersManager } from '../../Orders'
import { AddressList } from '../AddressList'
import { Personalization } from '../../Shared'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { UserMetaFields } from '../../Users'
import { DriverGroupSetting } from '../DriverGroupSetting'

import {
  UserName,
  SavedPlaces,
  PersonalizationWrapper
} from './styles'

export const UserDetailsUI = (props) => {
  const {
    isDriversPage,
    isDriversManagersPage,
    userState,
    setExtraOpen,
    handleSuccessUserUpdate
  } = props

  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')

  useEffect(() => {
    setExtraOpen(false)
  }, [currentMenuSelected])

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
        isDriverMenu={isDriversPage}
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'profile' && (
            <UserProfileForm
              isDriversPage={isDriversPage}
              isDriversManagersPage={isDriversManagersPage}
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
            />
          )}
          {currentMenuSelected === 'driver_group' && (
            <DriverGroupSetting
              userId={userState?.user?.id}
            />
          )}
          {currentMenuSelected === 'saved_places' && (
            <>
              {userState?.user?.addresses && (
                <SavedPlaces>
                  <AddressList
                    isSeletectedUserAddresses
                    userId={userState.user?.id}
                    addresses={userState.user?.addresses}
                    setExtraOpen={setExtraOpen}
                    userState={userState}
                    handleSuccessUpdate={handleSuccessUserUpdate}
                  />
                </SavedPlaces>
              )}
            </>
          )}
          {currentMenuSelected === 'orders' && (
            <OrdersManager
              isSelectedOrders
              customerId={userState.user?.id}
              handleCustomOrderDetail={setExtraOpen}
            />
          )}
          {currentMenuSelected === 'metafields' && (
            <UserMetaFields
              userId={userState.user?.id}
            />
          )}
          {currentMenuSelected === 'personalization' && (
            <PersonalizationWrapper>
              <Personalization />
            </PersonalizationWrapper>
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
