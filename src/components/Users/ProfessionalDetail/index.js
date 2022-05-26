import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { UserDetails as UserDetailsController, useLanguage, useSession } from 'ordering-components-admin'
import { Confirm, Personalization, SideBar } from '../../Shared'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { ProfessionalSchedule } from '../ProfessionalSchedule'
import { ProfessionalBusinessService } from '../ProfessionalBusinessService'
import { UserMetaFields } from '../UserMetaFields'
import { Switch } from '../../../styles'

import {
  DetailsHeader,
  UserName,
  ActionSelectorWrapper,
  SideBarWrapper
} from './styles'

export const ProfessionalDetailUI = (props) => {
  const {
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
  const [extraSelected, setExtraSelected] = useState(null)
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

  const handleOpenExtra = (index) => {
    if (index) {
      setExtraSelected(index)
      setExtraOpen(true)
    } else {
      setExtraSelected(null)
      setExtraOpen(false)
    }
  }

  useEffect(() => {
    setExtraOpen(false)
    setExtraSelected(null)
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

        {adminUserState.user?.id !== userState.user?.id && (
          <ActionSelectorWrapper>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item onClick={() => handleOpenExtra('custom_fields')}>
                {t('CUSTOM_FIELDS', 'Custom fields')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleOpenExtra('personalization')}>
                {t('PERSONALIZATION', 'Personalization')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => onDeleteCustomer()}>
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
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
              isProfessional
            />
          )}
          {currentMenuSelected === 'schedule' && (
            <ProfessionalSchedule
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
              setExtraOpen={setExtraOpen}
            />
          )}
          {currentMenuSelected === 'business_services' && (
            <ProfessionalBusinessService
              user={userState.user}
              handleSuccessUpdate={handleSuccessUserUpdate}
              setExtraOpen={setExtraOpen}
              extraSelected={extraSelected}
              setExtraSelected={setExtraSelected}
            />
          )}
        </>
      )}
      {extraSelected && (
        <SideBar
          sidebarId='extra_field'
          defaultSideBarWidth={500}
          isBorderShow
          IconTop='30px'
          open={extraSelected}
          onClose={() => handleOpenExtra()}
        >
          <SideBarWrapper>
            {extraSelected === 'custom_fields' && (
              <>
                <h1>{t('CUSTOM_FIELDS', 'Custom fields')}</h1>
                <UserMetaFields
                  userId={userState.user?.id}
                />
              </>
            )}
            {extraSelected === 'personalization' && (
              <>
                <h1>{t('PERSONALIZATION', 'Personalization')}</h1>
                <Personalization />
              </>
            )}
          </SideBarWrapper>
        </SideBar>
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
