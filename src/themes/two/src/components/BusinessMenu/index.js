import React, { useState } from 'react'
import { useLanguage, BusinessMenu as BusinessMenuController } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { BusinessMenuOptions } from '../BusinessMenuOptions'
import { BusinessMenuCustomFields } from '../BusinessMenuCustomFields'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'

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
    business,
    setIsExtendExtraOpen,
    businessMenusState,
    handleChangeBusinessMenuActiveState,
    handleDeleteBusinessMenu,
    handleSuccessBusinessMenu
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [showOption, setShowOption] = useState(null)
  const [currentMenu, setCurrentMenu] = useState(null)
  const ActionIcon = <FiMoreVertical />

  const handleOpenOptions = (name, menu) => {
    setCurrentMenu(menu)
    setIsExtendExtraOpen(true)
    setShowOption(name)
  }

  const handleCloseOption = () => {
    setShowOption(null)
    setIsExtendExtraOpen(false)
  }
  return (
    <MainContainer>
      <MenuContainer>
        <Header>
          <Title>{t('MENU', 'Menu')}</Title>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenOptions('option', {})}
          >
            {t('ADD_MENU', 'Add menu')}
          </Button>
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
                <Dropdown.Item onClick={() => handleOpenOptions('option', menu)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOpenOptions('customFields', menu)}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
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
          onClick={() => handleOpenOptions('option', {})}
        >
          {t('ADD_MENU', 'Add menu')}
        </AddMenuButton>
      </MenuContainer>
      {width >= 1000 ? (
        <>
          {showOption === 'option' && (
            <BusinessMenuOptions
              open={showOption === 'option'}
              business={business}
              menu={currentMenu}
              onClose={() => handleCloseOption()}
              handleUpdateBusinessState={handleSuccessBusinessMenu}
            />
          )}
          {showOption === 'customFields' && (
            <BusinessMenuCustomFields
              open={showOption === 'option'}
              onClose={() => handleCloseOption()}
              businessId={business?.id}
              menuId={currentMenu.id}
            />
          )}
        </>
      ) : (
        <>
          {showOption === 'option' && (
            <Modal
              width='80%'
              open={showOption === 'option'}
              onClose={() => handleCloseOption()}
            >
              <BusinessMenuOptions
                open={showOption === 'option'}
                business={business}
                menu={currentMenu}
                onClose={() => handleCloseOption()}
                handleUpdateBusinessState={handleSuccessBusinessMenu}
              />
            </Modal>
          )}
          {showOption === 'customFields' && (
            <Modal
              width='80%'
              open={showOption === 'customFields'}
              onClose={() => handleCloseOption()}
            >
              <BusinessMenuCustomFields
                open={showOption === 'option'}
                onClose={() => handleCloseOption()}
                businessId={business?.id}
                menuId={currentMenu.id}
              />
            </Modal>
          )}
        </>
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
