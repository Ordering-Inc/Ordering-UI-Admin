import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useLanguage } from 'ordering-components-admin'
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

export const LateralMenu = () => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [isMobile, setIsMobile] = useState(false)
  const [isText, setIsText] = useState(true)

  return (
    <>
      <MobileHeader>
        <HiMenu onClick={() => setIsMobile(true)} />
        <img alt='Logotype' src={theme?.images?.logos?.logotype} />
      </MobileHeader>
      <LateralMenuContainer
        isShowMenu={isMobile}
        colapse={isText}
      >
        <MenuContent>
          <MainMenuList>
            <LogoHeader>
              {
                isText
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
                (isText || isMobile) && (
                  <UserName>
                    {sessionState?.user?.name} {sessionState?.user?.lastname}
                    <BiChevronDown />
                  </UserName>
                )
              }
            </UserAvatar>
            <MenuItem>
              <BsListTask />
              {
                (isText || isMobile) && <ItemText>{t('ORDERS_MANAGER', 'Orders Manager')}</ItemText>
              }
            </MenuItem>
            <MenuItem
              active={
                window.location.pathname === '/users'
              }
            >
              <EnUsers />
              {
                (isText || isMobile) && <ItemText>{t('USERS', 'Users')}</ItemText>
              }
            </MenuItem>
          </MainMenuList>
          <MenuBottom>
            <LogOutItem>
              <RiLogoutCircleRLine />
              {
                (isText || isMobile) && <ItemText>{t('LOG_OUT', 'Log out')}</ItemText>
              }
            </LogOutItem>
            {
              !isMobile && (
                <SidbeBarControl colapse={isText}>
                  <EnLogin
                    onClick={() => setIsText(!isText)}
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
