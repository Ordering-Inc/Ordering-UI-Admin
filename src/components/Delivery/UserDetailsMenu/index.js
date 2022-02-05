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
    isDelivery
  } = props

  const [, t] = useLanguage()
  const menuItems = isDelivery
    ? [
      { key: 'profile', content: t('PROFILE', 'Profile') },
      { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
      { key: 'metafields', content: t('METAFIELDS', 'Metafields') },
      { key: 'personalization', content: t('PERSONALIZATION', 'Personalization') }
    ]
    : [
      { key: 'profile', content: t('PROFILE', 'Profile') },
      { key: 'saved_places', content: t('SAVED_PLACES', 'Saved places') },
      { key: 'orders', content: t('ORDERS', 'Orders') },
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
