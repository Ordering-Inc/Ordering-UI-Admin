import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'

import {
  MenuContainer,
  Title,
  MeunItem,
  MenuName,
  EnableWrapper,
  ActionsWrapper
} from './styles'

export const BusinessMenu = (props) => {
  const {
    business
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const ActionIcon = <FiMoreVertical />
  return (
    <>
      <MenuContainer>
        <Title>{t('MENU', 'Menu')}</Title>
        {business?.menus.map(menu => (
          <MeunItem key={menu.id}>
            <MenuName>{menu?.name}</MenuName>
            <EnableWrapper className='business_enable_control'>
              <span>{t('ENABLE', 'Enable')}</span>
              <Switch
                defaultChecked={menu?.enabled}
                // onChange={handleChangeActiveBusiness}
              />
            </EnableWrapper>
            <ActionsWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={ActionIcon}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item onClick={() => console.log('edit')}>{t('EDIT', 'Edit')}</Dropdown.Item>
                <Dropdown.Item>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                <Dropdown.Item>{t('DELETE', 'Delete')}</Dropdown.Item>
              </DropdownButton>
            </ActionsWrapper>
          </MeunItem>
        ))}
      </MenuContainer>
    </>
  )
}
