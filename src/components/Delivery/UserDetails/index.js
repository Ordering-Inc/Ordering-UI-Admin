import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useSession, useConfig, useLanguage, UserDetails as UserDetailsController } from 'ordering-components-admin'
import { OrdersManager } from '../../Orders/OrdersManager'
import { AddressList } from '../AddressList'
import { Personalization, Modal, Schedule, PushTokens } from '../../Shared'
import { UserDetailsMenu } from '../UserDetailsMenu'
import { UserProfileForm } from '../UserProfileForm'
import { UserMetaFields } from '../../Users'
import { DriversLogs } from '../DriversLogs'
import { DriversGroupLogsUI } from '../DriversGroupLogs'
import { DriverGroupSetting } from '../DriverGroupSetting'
import { DriversAdvancedLogs } from '../DriversAdvancedLogs'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { Switch, Button, IconButton } from '../../../styles'
import { ActionsForm } from '../UserFormDetails/styles'
import { addQueryToUrl } from '../../../utils'

import {
  UserName,
  SavedPlaces,
  ScheduleSection,
  PersonalizationWrapper,
  DetailsHeader,
  ActionSelectorWrapper,
  RightHeader
} from './styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

export const UserDetailsUI = (props) => {
  const {
    isDriversPage,
    isDriversManagersPage,
    userState,
    setExtraOpen,
    handleSuccessUserUpdate,
    handleDeleteUser,
    handleChangeActiveUser,
    scheduleState,
    handleScheduleState,
    handleScheduleUpdateUser,
    actionDisabled
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [{ user }] = useSession()
  const [currentMenuSelected, setCurrentMenuSelected] = useState('profile')
  const [isCustomField, setIsCustomField] = useState(false)
  const [isPersonalization, setIsPersonalization] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const [{ configs }] = useConfig()
  const viewOnly = user?.readOnlyAdmin || user?.readOnlyDeliveryManager
  const disableSchedule = (configs?.allow_driver_manager_update_driver_schedule?.value === '0' && user?.level === 5) || viewOnly
  const isWhiteLabel = configs?.white_label_module?.value
  const expandSidebar = () => {
    const element = document.getElementById('user_lateral_bar')
    if (!element) return
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
            <span>{userState.user?.name} {userState.user?.lastname}</span>
          )}
          {userState?.loading ? (
            <Skeleton width={50} style={{ margin: '0px 5px' }} />
          ) : (
            <>
              {handleChangeActiveUser && (
                <Switch
                  disabled={actionDisabled}
                  defaultChecked={userState?.user?.enabled || false}
                  onChange={enabled => handleChangeActiveUser({ id: userState?.user?.id, enabled: enabled })}
                />
              )}
            </>
          )}
        </UserName>
        <RightHeader>
          {width > 576 && (
            <IconButton
              color='black'
              onClick={expandSidebar}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </IconButton>
          )}
          {userState.user?.id && (
            <ActionSelectorWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item onClick={() => setIsCustomField(true)} disabled={actionDisabled}>
                  {t('CUSTOM_FIELDS', 'Custom fields')}
                </Dropdown.Item>
                {!isWhiteLabel && (
                  <Dropdown.Item onClick={() => setIsPersonalization(true)} disabled={actionDisabled}>
                    {t('PERSONALIZATION', 'Personalization')}
                  </Dropdown.Item>
                )}
                <Dropdown.Item onClick={() => handleDeleteUser(userState.user?.id)} disabled={actionDisabled}>
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionSelectorWrapper>
          )}
        </RightHeader>
      </DetailsHeader>

      <UserDetailsMenu
        isDriverMenu={isDriversPage}
        currentMenuSelected={currentMenuSelected}
        handleChangeMenu={handleTabClick}
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
              isDriverManager={userState?.user?.level === 5}
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
          {currentMenuSelected === 'schedule' && (
            <ScheduleSection>
              <Schedule
                isShowDate={!!isDriversPage}
                scheduleList={userState?.user?.schedule}
                handleChangeScheduleState={handleScheduleState}
                disableSchedule={disableSchedule}
              />
              {!disableSchedule && (
                <ActionsForm>
                  <Button
                    id='form-btn'
                    color='primary'
                    borderRadius='5px'
                    disabled={scheduleState.loading || scheduleState?.change?.length === 0}
                    style={{ marginTop: 20 }}
                    onClick={() => handleScheduleUpdateUser()}
                  >
                    {scheduleState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')}
                  </Button>
                </ActionsForm>
              )}
            </ScheduleSection>
          )}
          {currentMenuSelected === 'logs' && (
            <DriversLogs
              userId={userState.user?.id}
              UIComponent={DriversGroupLogsUI}
            />
          )}
          {currentMenuSelected === 'advanced_logs' && (
            <DriversAdvancedLogs
              userId={userState.user?.id}
              UIComponent={DriversGroupLogsUI}
            />
          )}
          {currentMenuSelected === 'orders' && (
            <OrdersManager
              isSelectedOrders
              customerId={userState.user?.id}
              handleCustomOrderDetail={setExtraOpen}
            />
          )}
          {currentMenuSelected === 'push_tokens' && (
            <PushTokens
              userId={userState?.user?.id}
              pushTokens={userState?.user?.push_tokens || []}
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
