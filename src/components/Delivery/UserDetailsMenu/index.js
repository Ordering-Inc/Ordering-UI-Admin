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
    isDriverMenu
  } = props

  const [, t] = useLanguage()
  const menuItems = isDriverMenu ? [
    { key: 'profile', content: t('PROFILE', 'Profile') },
    { key: 'driver_group', content: t('DRIVER_GROUP', 'Driver group') },
    { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
    { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
    { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ] : [
    { key: 'profile', content: t('PROFILE', 'Profile') },
    { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
    { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
    { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
  ]
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
