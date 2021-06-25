import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessMenu as BusinessMenuController } from './naked'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import { useTheme } from 'styled-components'
import { BusinessMenuOptions } from '../BusinessMenuOptions'

import {
  MainContainer,
  MenuContainer,
  Header,
  Title,
  MeunItem,
  MenuName,
  EnableWrapper,
  ActionsWrapper,
  AddMenuButton
} from './styles'

const BusinessMenuUI = (props) => {
  const {
    setIsExtendExtraOpen,
    businessMenusState,
    handleChangeBusinessMenuActiveState,
    handleDeleteBusinessMenu
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const [showOptions, setShowOptions] = useState(null)
  const ActionIcon = <FiMoreVertical />

  const handleOpenOptions = (name) => {
    setIsExtendExtraOpen(true)
    setShowOptions(name)
  }

  const handleCloseOption = () => {
    setShowOptions(null)
    setIsExtendExtraOpen(false)
  }
  return (
    <MainContainer>
      <MenuContainer>
        <Header>
          <Title>{t('MENU', 'Menu')}</Title>
          <BsPlusSquare
            onClick={() => handleOpenOptions('add')}
          />
        </Header>
        {businessMenusState?.menus.map(menu => (
          <MeunItem key={menu.id}>
            <MenuName>{menu?.name}</MenuName>
            <EnableWrapper className='business_enable_control'>
              <span>{t('ENABLE', 'Enable')}</span>
              <Switch
                defaultChecked={menu?.enabled}
                onChange={() => handleChangeBusinessMenuActiveState(menu?.id)}
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
                <Dropdown.Item
                  onClick={() => handleDeleteBusinessMenu(menu.id)}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionsWrapper>
          </MeunItem>
        ))}
        <AddMenuButton
          onClick={() => handleOpenOptions('add')}
        >
          {t('ADD_MENU', 'Add menu')}
        </AddMenuButton>
      </MenuContainer>
      {showOptions === 'add' && (
        <BusinessMenuOptions
          onClose={() => handleCloseOption()}
        />
      )}
    </MainContainer>
  )
}

export const BusinessMenu = (props) => {
  const businessMenuProps = {
    ...props,
    UIComponent: BusinessMenuUI
  }
  return <BusinessMenuController {...businessMenuProps} />
}
