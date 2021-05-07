import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useSession, useLanguage } from 'ordering-components-admin'
import BiChevronDown from '@meronex/icons/bi/BiChevronDown'
import { DropDownCircleImage } from '../Dropdown/style'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsListTask from '@meronex/icons/bs/BsListTask'
import EnUsers from '@meronex/icons/en/EnUsers'
import EnLogOut from '@meronex/icons/en/EnLogOut'
import HiMenu from '@meronex/icons/hi/HiMenu'
import GrClose from '@meronex/icons/gr/GrClose'

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
  CloseMenu
} from './styles'

export const LateralMenu = () => {
  const theme = useTheme()
  const [, t] = useLanguage()
  const [sessionState] = useSession()
  const [isMobile, setIsMobile] = useState(false)

  return (
    <>
      <MobileHeader>
        <HiMenu onClick={() => setIsMobile(true)} />
        <img alt='Logotype' src={theme?.images?.logos?.logotype} />
      </MobileHeader>
      <LateralMenuContainer isShowMenu={isMobile}>
        <MenuContent>
          <MainMenuList>
            <LogoHeader>
              <img alt='Logotype' src={theme?.images?.logos?.logotype} />
            </LogoHeader>
            <CloseMenu>
              <GrClose onClick={() => setIsMobile(false)} />
            </CloseMenu>
            <UserAvatar>
              <DropDownCircleImage
                src={sessionState?.user?.photo}
                fallback={<FaUserAlt />}
              />
              <UserName>
                {sessionState?.user?.name} {sessionState?.user?.lastname}
                <BiChevronDown />
              </UserName>
            </UserAvatar>
            <MenuItem>
              <BsListTask />
              <ItemText>{t('ORDERS_MANAGER', 'Orders Manager')}</ItemText>
            </MenuItem>
            <MenuItem
              active={
                window.location.pathname === '/users'
              }
            >
              <EnUsers />
              <ItemText>{t('USERS', 'Users')}</ItemText>
            </MenuItem>
          </MainMenuList>
          <MenuBottom>
            <LogOutItem>
              <EnLogOut />
              <ItemText>{t('LOG_OUT', 'Log out')}</ItemText>
            </LogOutItem>
          </MenuBottom>
        </MenuContent>
      </LateralMenuContainer>
    </>
  )
}
