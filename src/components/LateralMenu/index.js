import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useLanguage, useEvent } from 'ordering-components-admin'
import BiChevronDown from '@meronex/icons/bi/BiChevronDown'
import { DropDownCircleImage } from '../Dropdown/style'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsListTask from '@meronex/icons/bs/BsListTask'
import EnUsers from '@meronex/icons/en/EnUsers'
import RiLogoutCircleRLine from '@meronex/icons/ri/RiLogoutCircleRLine'
import HiMenu from '@meronex/icons/hi/HiMenu'
import GrClose from '@meronex/icons/gr/GrClose'
import EnLogin from '@meronex/icons/en/EnLogin'

import {
  LateralMenuContainer,
  MainMenuList,
  MenuBottom,
  LogoHeader,
  UserAvatar,
  UserName,
  MenuItem,
  ItemText,
  LogOutItem,
  MobileHeader,
  MenuContent,
  CloseMenu,
  SidbeBarControl
} from './styles'

export const LateralMenu = (props) => {
  const {
    isCollapse,
    setIsCollapse
  } = props
  const [events] = useEvent()
  const theme = useTheme()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [isMobile, setIsMobile] = useState(false)

  const handleGoToPage = (data) => {
    console.log(data)
    events.emit('go_to_page', data)
  }

  return (
    <>
      <MobileHeader>
        <HiMenu onClick={() => setIsMobile(true)} />
        <img alt='Logotype' src={theme?.images?.logos?.logotype} />
      </MobileHeader>
      <LateralMenuContainer
        isShowMenu={isMobile}
        colapse={isCollapse}
      >
        <MenuContent>
          <MainMenuList>
            <LogoHeader onClick={() => handleGoToPage({ page: 'orders_deliveries' })}>
              {
                isCollapse
                  ? <img alt='Logotype' src={theme?.images?.logos?.logotype} />
                  : <img alt='Logotype' className='isotype' src={theme?.images?.logos?.isotype} />
              }
            </LogoHeader>
            <CloseMenu>
              <GrClose onClick={() => setIsMobile(false)} />
            </CloseMenu>
            <UserAvatar>
              <DropDownCircleImage
                src={sessionState?.user?.photo}
                fallback={<FaUserAlt />}
              />
              {
                (isCollapse || isMobile) && (
                  <UserName>
                    {sessionState?.user?.name} {sessionState?.user?.lastname}
                    <BiChevronDown />
                  </UserName>
                )
              }
            </UserAvatar>
            <MenuItem
              onClick={() => handleGoToPage({ page: 'orders_deliveries' })}
              active={
                window.location.pathname === '/orders-deliveries'
              }
            >
              <BsListTask />
              {
                (isCollapse || isMobile) && <ItemText>{t('ORDERS_MANAGER', 'Orders Manager')}</ItemText>
              }
            </MenuItem>
            <MenuItem
              active={
                window.location.pathname === '/users'
              }
              onClick={() => handleGoToPage({ page: 'users' })}
            >
              <EnUsers />
              {
                (isCollapse || isMobile) && <ItemText>{t('USERS', 'Users')}</ItemText>
              }
            </MenuItem>
          </MainMenuList>
          <MenuBottom>
            <LogOutItem>
              <RiLogoutCircleRLine />
              {
                (isCollapse || isMobile) && <ItemText>{t('LOG_OUT', 'Log out')}</ItemText>
              }
            </LogOutItem>
            {
              !isMobile && (
                <SidbeBarControl colapse={isCollapse}>
                  <EnLogin
                    onClick={() => setIsCollapse(!isCollapse)}
                  />
                </SidbeBarControl>
              )
            }
          </MenuBottom>
        </MenuContent>
      </LateralMenuContainer>
    </>
  )
}

const LogoutActionUI = (props) => {
  const [, t] = useLanguage()

  const handleClick = () => {
    props.handleLogoutClick()
    props.onClose && props.onClose()
  }
  return (
    <PopoverListItem onClick={handleClick}>
      <FaSignOutAlt /> {t('LOGOUT', 'Logout')}
    </PopoverListItem>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return <LogoutActionController {...logoutActionProps} />
}

