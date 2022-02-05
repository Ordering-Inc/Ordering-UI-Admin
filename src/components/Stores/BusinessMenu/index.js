import React, { useState } from 'react'
import { useLanguage, BusinessMenu as BusinessMenuController } from 'ordering-components-admin'
import { BusinessMenuOptions } from '../BusinessMenuOptions'
import { Confirm, Modal } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Checkbox } from '../../../styles'

import {
  MainContainer,
  MenuContainer,
  Header,
  Title,
  MeunItem,
  MenuName,
  CheckboxWrapper,
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
    handleSuccessBusinessMenu,

    isSelectedSharedMenus,
    setIsSelectedSharedMenus
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [showOption, setShowOption] = useState(null)
  const [currentMenu, setCurrentMenu] = useState(null)
  const [isOpenSharedProduct, setIsOpenSharedProduct] = useState(false)

  const handleOpenOptions = (name, menu) => {
    setCurrentMenu(menu)
    setIsExtendExtraOpen(true)
    setShowOption(name)
  }

  const handleCloseOption = () => {
    setShowOption(null)
    setIsExtendExtraOpen(false)
    setIsOpenSharedProduct(false)
    setCurrentMenu(null)
  }

  const handleOpenEdit = (e, menu) => {
    const isInvalid = e.target.closest('.business_checkbox_control')
    if (isInvalid) return
    handleOpenOptions('option', menu)
  }

  return (
    <MainContainer>
      <MenuContainer isHide={isOpenSharedProduct}>
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
          <MeunItem
            key={menu.id}
            active={menu.id === currentMenu?.id}
            onClick={(e) => handleOpenEdit(e, menu)}
          >
            <CheckboxWrapper
              className='business_checkbox_control'
            >
              <Checkbox
                disabled={!!currentMenu}
                defaultChecked={menu?.enabled}
                onChange={e => handleChangeBusinessMenuActiveState(menu?.id, e.target.checked)}
              />
            </CheckboxWrapper>
            <MenuName>{menu?.name}</MenuName>
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
              isOpenSharedProduct={isOpenSharedProduct}
              setIsOpenSharedProduct={setIsOpenSharedProduct}
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
                setIsOpenSharedProduct={setIsOpenSharedProduct}
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
