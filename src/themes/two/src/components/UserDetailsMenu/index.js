import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'

import {
  UserDetailsMenuContainer,
  InnerContainer,
  Tab
} from './styles'

export const UserDetailsMenu = (props) => {
  const {
    currentMenuSelected,
    handleChangeMenu
  } = props

  const [, t] = useLanguage()
  const menuItems = [
    { key: 'Profile', content: t('PROFILE', 'Profile') },
    { key: 'Saved_places', content: t('SAVED_PLACES', 'Saved places') },
    { key: 'Orders', content: t('ORDERS', 'Orders') },
    { key: 'Metafields', content: t('METAFIELDS', 'Metafields') },
    { key: 'Personalization', content: t('PERSONALIZATION', 'Personalization') }
  ]
  return (
    <UserDetailsMenuContainer>
      <InnerContainer>
        <AutoScroll innerScroll scrollId='userDetailsMenu'>
          {menuItems.map(menu => (
            <Tab
              key={menu.key}
              active={menu.key === currentMenuSelected}
              onClick={() => handleChangeMenu(menu.key)}
            >
              {menu.content}
            </Tab>
          ))}
        </AutoScroll>
      </InnerContainer>
    </UserDetailsMenuContainer>
  )
}
