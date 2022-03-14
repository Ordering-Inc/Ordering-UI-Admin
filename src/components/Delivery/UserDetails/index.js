import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { useLanguage, UserDetails as UserDetailsController } from 'ordering-components-admin'
import { OrdersManager } from '../../Orders'
import { AddressList } from '../AddressList'
import { Personalization, Modal } from '../../Shared'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { UserMetaFields } from '../../Users'
import { DriverGroupSetting } from '../DriverGroupSetting'
import { ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'

import {
  UserName,
  SavedPlaces,
  PersonalizationWrapper,
  DetailsHeader,
  ActionSelectorWrapper
} from './styles'

export const UserDetailsUI = (props) => {
  const {
    isDriversPage,
    isDriversManagersPage,
    userState,
    setExtraOpen,
    handleSuccessUserUpdate,
    handleDeleteUser
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')
  const [isCustomField, setIsCustomField] = useState(false)
  const [isPersonalization, setIsPersonalization] = useState(false)

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
        {userState.user?.id && (
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item onClick={() => setIsCustomField(true)}>
                {t('CUSTOM_FIELDS', 'Custom fields')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setIsPersonalization(true)}>
                {t('PERSONALIZATION', 'Personalization')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleDeleteUser(userState.user?.id)}>
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        )}
      </DetailsHeader>

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
        </>
      )}
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('CUSTOM_FIELDS', 'Custom fields')}
        open={isCustomField}
        onClose={() => setIsCustomField(false)}
      >
        <UserMetaFields
          userId={userState.user?.id}
        />
      </Modal>
      <Modal
        width='700px'
        height='80vh'
        padding='30px'
        title={t('PERSONALIZATION', 'Personalization')}
        open={isPersonalization}
        onClose={() => setIsPersonalization(false)}
      >
        <PersonalizationWrapper>
          <Personalization />
        </PersonalizationWrapper>
      </Modal>
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
