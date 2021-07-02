import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'

import {
  SubCategoryMenuContainer,
  InnerContainer,
  Tab
} from './styles'

export const SubCategoryMenu = (props) => {
  const {
    currentMenuSelected,
    handleChangeMenu
  } = props

  const [, t] = useLanguage()
  const menuItems = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'administrator', content: t('ADMINISTRATOR', 'Administrator') },
    { key: 'business', content: t('BUSINESS', 'Business') },
    { key: 'customer', content: t('CUSTOMER', 'Customer') },
    { key: 'driver', content: t('DRIVER', 'Driver') }
  ]
  return (
    <SubCategoryMenuContainer>
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
    </SubCategoryMenuContainer>
  )
}
