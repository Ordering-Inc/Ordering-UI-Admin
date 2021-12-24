import React, { useState } from 'react'
import { useLanguage, BusinessMenu as BusinessMenuController } from 'ordering-components-admin'
import { Switch } from '../../styles/Switch'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import { useTheme } from 'styled-components'
import { BusinessMenuOptions } from '../BusinessMenuOptions'
import { BusinessMenuCustomFields } from '../BusinessMenuCustomFields'
import { Modal } from '../Modal'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Button } from '../../styles/Buttons'
import { Confirm } from '../Confirm'

import {
  MainContainer,
  MenuContainer,
  Header,
  Title,
  MeunItem,
  MenuName,
  EnableWrapper,
  ActionsWrapper,
  AddMenuButton,
  TabsContainer,
  Tab
} from './styles'

const BusinessMenuUI = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    businessMenusState,
    handleChangeBusinessMenuActiveState,
    handleDeleteBusinessMenu,
    handleSuccessBusinessMenu,

    isSelectedSharedMenus,
    setIsSelectedSharedMenus
  } = props
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
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

  const handleOpenEdit = (e, menu) => {
    const isInvalid = e.target.closest('.business_enable_control') || e.target.closest('.action_wrapper')
    if (isInvalid) return
    handleOpenOptions('option', menu)
  }

  const handleDeleteClick = (menuId) => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_MENU', 'Are you sure that you want to delete this menu?'),
      handleOnAccept: () => {
        handleDeleteBusinessMenu(menuId)
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  return (
    <MainContainer>
      <MenuContainer>
        <Header>
          <Title>{t('MENU_V21', 'Menu')}</Title>
          <Button
            borderRadius='8px'
            color='lightPrimary'
            onClick={() => handleOpenOptions('option', {})}
          >
            {t('ADD_MENU', 'Add menu')}
          </Button>
        </Header>

        <TabsContainer>
          <Tab
            active={!isSelectedSharedMenus}
            onClick={() => {
              handleCloseOption()
              setIsSelectedSharedMenus(false)
            }}
          >
            {t('MENU_V21', 'Menu')}
          </Tab>
          <Tab
            active={isSelectedSharedMenus}
            onClick={() => {
              handleCloseOption()
              setIsSelectedSharedMenus(true)
            }}
          >
            {t('SHARED_MENUS', 'Shared menus')}
          </Tab>
        </TabsContainer>

        {(isSelectedSharedMenus ? businessMenusState?.menusShared : businessMenusState?.menus).map(menu => (
          <MeunItem key={menu.id} onClick={(e) => handleOpenEdit(e, menu)}>
            <MenuName>{menu?.name}</MenuName>
            <EnableWrapper className='business_enable_control'>
              <span>{t('ENABLE', 'Enable')}</span>
              <Switch
                defaultChecked={menu?.enabled}
                onChange={(enabled) => handleChangeBusinessMenuActiveState(menu?.id, enabled)}
              />
            </EnableWrapper>
            <ActionsWrapper className='action_wrapper'>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={ActionIcon}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item onClick={() => handleOpenOptions('option', menu)}>{t('EDIT', 'Edit')}</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOpenOptions('customFields', menu)}>{t('CUSTOM_FIELDS', 'Custom fields')}</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleDeleteClick(menu.id)}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionsWrapper>
          </MeunItem>
        ))}
        {!isSelectedSharedMenus && (
          <AddMenuButton
            onClick={() => handleOpenOptions('option', {})}
          >
            {t('ADD_MENU', 'Add menu')}
          </AddMenuButton>
        )}
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
              isSelectedSharedMenus={isSelectedSharedMenus}
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
                isSelectedSharedMenus={isSelectedSharedMenus}
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
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        width='700px'
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
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
