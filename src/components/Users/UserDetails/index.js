import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController, useLanguage } from 'ordering-components-admin'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { AddressList } from '../../Delivery'
import { OrdersManager } from '../../Orders'
import { BusinessManagerBusinesses } from '../BusinessManagerBusinesses'
import { Envelope, Phone } from 'react-bootstrap-icons'

import {
  DetailsHeader,
  VerifiedItem,
  UserName,
  SavedPlaces,
  PersonalizationWrapper
} from './styles'
import { Personalization } from '../../Shared/Personalization'
import { UserMetaFields } from '../UserMetaFields'

export const UserDetailsUI = (props) => {
  const {
    userState,
    setExtraOpen,
    handleSuccessUserUpdate
  } = props

  const [, t] = useLanguage()
  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')

  useEffect(() => {
    setExtraOpen(false)
  }, [currentMenuSelected])

  return (
    <>
      <DetailsHeader>
        <UserName>
          {userState.loading ? (
            <Skeleton width={150} />
          ) : (
            <span>{userState?.user?.name} {userState?.user?.lastname}</span>
          )}
        </UserName>
        {!!userState.user?.phone_verified && (
          <VerifiedItem>
            <Phone />
            {t('VERIFIED', 'Verified')}
          </VerifiedItem>
        )}

        {!!userState.user?.email_verified && (
          <VerifiedItem>
            <Envelope />
            {t('VERIFIED', 'Verified')}
          </VerifiedItem>
        )}
      </DetailsHeader>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
        isBusinessOwner={userState?.user?.level === 2}
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'profile' && (
            <UserProfileForm
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
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
          {currentMenuSelected === 'businesses' && (
            <BusinessManagerBusinesses
              userId={userState?.user?.id}
            />
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
