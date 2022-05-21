import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { UserDetails as UserDetailsController, useLanguage, useSession } from 'ordering-components-admin'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { Envelope, Phone, ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../../Shared'
import { Switch } from '../../../styles'

import {
  DetailsHeader,
  VerifiedItem,
  UserName,
  ActionSelectorWrapper,
  VerifiedItemsWrapper
} from './styles'
import { ProfessionalSchedule } from '../ProfessionalSchedule'
import { ProfessionalBusinessService } from '../ProfessionalBusinessService'

export const ProfessionalDetailUI = (props) => {
  const {
    isManagers,
    userState,
    setExtraOpen,
    handleSuccessUserUpdate,
    handleDeleteUser,
    handleChangeActiveUser
  } = props

  const theme = useTheme()
  const [adminUserState] = useSession()
  const [, t] = useLanguage()
  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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

  useEffect(() => {
    setExtraOpen(false)
  }, [currentMenuSelected])

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
                  onChange={enabled => handleChangeActiveUser({ id: userState?.user?.id, enabled: enabled })}
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
          </>
        )}
      </DetailsHeader>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={setCurrentMenuSelected}
        isProfessional
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'profile' && (
            <UserProfileForm
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
            />
          )}
          {currentMenuSelected === 'schedule' && (
            <ProfessionalSchedule
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
            />
          )}
          {currentMenuSelected === 'business_services' && (
            <ProfessionalBusinessService
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
            />
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

export const ProfessionalDetail = (props) => {
  const userDetailsControlProps = {
    ...props,
    UIComponent: ProfessionalDetailUI
  }

  return (
    <>
      <UserDetailsController {...userDetailsControlProps} />
    </>
  )
}
