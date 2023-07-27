import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { ThreeDots, Calendar4Event, ArrowsAngleContract, ArrowsAngleExpand } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { useLanguage, useSession, UserDetails as UserDetailsController } from 'ordering-components-admin'
import { Confirm, Personalization, SideBar, Alert } from '../../Shared'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { ProfessionalSchedule } from '../ProfessionalSchedule'
import { ProfessionalBusinessService } from '../ProfessionalBusinessService'
import { UserMetaFields } from '../UserMetaFields'
import { Button, IconButton, Switch } from '../../../styles'
import { addQueryToUrl } from '../../../utils'

import {
  DetailsHeader,
  UserName,
  ActionSelectorWrapper,
  SideBarWrapper,
  CalendarSyncWrapper,
  RightHeader
} from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

export const ProfessionalDetailUI = (props) => {
  const {
    userState,
    occupations,
    setExtraOpen,
    handleSuccessUserUpdate,
    handleDeleteUser,
    handleChangeActiveUser,
    handleGoogleCalendarSync,
    actionStatus
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [adminUserState] = useSession()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')
  const [extraSelected, setExtraSelected] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
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

  const handleOpenExtra = (index) => {
    if (index) {
      setExtraSelected(index)
      setExtraOpen(true)
    } else {
      setExtraSelected(null)
      setExtraOpen(false)
    }
  }

  const expandSidebar = () => {
    const element = document.getElementById('user_lateral_bar')
    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    setExtraOpen(false)
    setExtraSelected(null)
  }, [currentMenuSelected])

  useEffect(() => {
    if (actionStatus.error) {
      setAlertState({
        open: true,
        content: actionStatus.error
      })
    }
  }, [actionStatus.error])

  const handleTabClick = (tab, isInitialRender) => {
    setCurrentMenuSelected(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
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

        <CalendarSyncWrapper>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={handleGoogleCalendarSync}
          >
            <span>{t('CALENDAR_SYNC', 'Calendar sync')}</span>
            <Calendar4Event />
          </Button>
        </CalendarSyncWrapper>
        <RightHeader>
          {width > 576 && (
            <IconButton
              color='black'
              onClick={expandSidebar}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </IconButton>
          )}
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
                {adminUserState?.user?.level === 0 && (
                  <Dropdown.Item onClick={() => onDeleteCustomer()}>
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                )}
              </DropdownButton>
            </ActionSelectorWrapper>
          )}
        </RightHeader>
      </DetailsHeader>
      <UserDetailsMenu
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={handleTabClick}
        isProfessional
      />
      {!userState?.loading && userState?.user && (
        <>
          {currentMenuSelected === 'profile' && (
            <UserProfileForm
              user={userState.user}
              occupations={occupations}
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
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
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
