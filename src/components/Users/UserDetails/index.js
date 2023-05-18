import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController, useLanguage, useSession } from 'ordering-components-admin'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { AddressList } from '../../Delivery'
import { OriginalOrdersManager as OrdersManager } from '../../Orders/OrdersManager/Layouts/OriginalOrdersManager'
import { BusinessManagerBusinesses } from '../BusinessManagerBusinesses'
import { ArrowsAngleContract, ArrowsAngleExpand, Envelope, Phone, ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../../Shared'
import { Personalization } from '../../Shared/Personalization'
import { UserMetaFields } from '../UserMetaFields'
import { IconButton, Switch } from '../../../styles'

import {
  DetailsHeader,
  VerifiedItem,
  UserName,
  SavedPlaces,
  PersonalizationWrapper,
  OrdersWrapper,
  ActionSelectorWrapper,
  VerifiedItemsWrapper,
  RightHeader
} from './styles'

export const UserDetailsUI = (props) => {
  const {
    isManagers,
    userState,
    setExtraOpen,
    handleSuccessUserUpdate,
    handleDeleteUser,
    handleChangeActiveUser
  } = props

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [adminUserState] = useSession()
  const [, t] = useLanguage()
  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isExpand, setIsExpand] = useState(false)

  const onDeleteCustomer = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_USER', 'Are you sure that you want to delete this user?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteUser()
      }
    })
  }

  const expandSidebar = () => {
    const element = document.getElementById('user_lateral_bar')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    setExtraOpen(false)
  }, [currentMenuSelected])

  const handleTabClick = (tab, isInitialRender) => {
    setCurrentMenuSelected(tab)
    if (!isInitialRender) {
      const enabled = query.get('enabled')
      const id = query.get('id')
      const section = query.get('section')
      if (section) {
        history.replace(`${location.pathname}?enabled=${enabled}&id=${id}&section=${section}&tab=${tab}`)
      } else {
        history.replace(`${location.pathname}?enabled=${enabled}&id=${id}&tab=${tab}`)
      }
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(currentMenuSelected)
    }
  }, [])

  return (
    <>
      <DetailsHeader>
        <UserName>
          {userState?.loading ? (
            <Skeleton width={150} />
          ) : (
            <span className='customer-name'>{userState.user?.name} {userState.user?.lastname}</span>
          )}
          {userState?.loading ? (
            <Skeleton width={50} style={{ margin: '0px 5px' }} />
          ) : (
            <>
              {handleChangeActiveUser && (
                <Switch
                  defaultChecked={userState?.user?.enabled || false}
                  onChange={enabled => handleChangeActiveUser({ ...userState?.user, enabled: enabled })}
                />
              )}
            </>
          )}
        </UserName>
        {isManagers && (
          <>
            <VerifiedItemsWrapper>
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
            </VerifiedItemsWrapper>
            <RightHeader isLoginUser={adminUserState.user?.id === userState.user?.id}>
              <IconButton
                color='black'
                onClick={expandSidebar}
                className='expand'
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
              {adminUserState.user?.id !== userState.user?.id && (
                <ActionSelectorWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={<ThreeDots />}
                    id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  >
                    <Dropdown.Item onClick={() => onDeleteCustomer()}>
                      {t('DELETE', 'Delete')}
                    </Dropdown.Item>
                  </DropdownButton>
                </ActionSelectorWrapper>
              )}
            </RightHeader>
          </>
        )}
      </DetailsHeader>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={tab => handleTabClick(tab)}
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
            <OrdersWrapper>
              <OrdersManager
                isSelectedOrders
                customerId={userState.user?.id}
                handleCustomOrderDetail={setExtraOpen}
              />
            </OrdersWrapper>
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
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
