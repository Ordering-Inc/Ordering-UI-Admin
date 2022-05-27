import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'

import {
  UserDetailsMenuContainer,
  Tab
} from './styles'

export const UserDetailsMenu = (props) => {
  const {
    currentMenuSelected,
    handleChangeMenu,
    isBusinessOwner,
    isProfessional
  } = props

  const [, t] = useLanguage()

  const businessMenuList = [
    { key: 'profile', content: t('PROFILE', 'Profile') },
    { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
    { key: 'businesses', content: t('BUSINESSES', 'Businesses') },
    { key: 'orders', content: t('ORDERS', 'Orders') },
    { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
    { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ]

  const userMenuList = [
    { key: 'profile', content: t('PROFILE', 'Profile') },
    { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
    { key: 'orders', content: t('ORDERS', 'Orders') },
    { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
    { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ]

  const professionalMenuList = [
    { key: 'profile', content: t('PROFILE', 'Profile') },
    { key: 'schedule', content: t('Schedule', 'Schedule') },
    { key: 'business_services', content: t('BUSINESS_AND_SERVICES', 'Business & Services') }
  ]

  const getMenuList = () => {
    if (isBusinessOwner) return businessMenuList
    if (isProfessional) return professionalMenuList
    return userMenuList
  }
  const menuItems = getMenuList()

  return (
    <UserDetailsMenuContainer>
      <DragScroll>
        {menuItems.map(menu => (
          <Tab
            key={menu.key}
            active={menu.key === currentMenuSelected}
            onClick={() => handleChangeMenu(menu.key)}
          >
            {menu.content}
          </Tab>
        ))}
      </DragScroll>
    </UserDetailsMenuContainer>
  )
}
