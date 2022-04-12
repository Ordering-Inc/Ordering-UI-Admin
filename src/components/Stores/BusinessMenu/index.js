import React, { useEffect, useState } from 'react'
import { useLanguage, BusinessMenu as BusinessMenuController } from 'ordering-components-admin'
import { BusinessMenuOptions } from '../BusinessMenuOptions'
import { Confirm, Modal, SearchBar } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Checkbox } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'

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
  Tab,
  SearchBarWrapper
} from './styles'

const BusinessMenuUI = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    businessMenusState,
    handleChangeBusinessMenuActiveState,
    handleSuccessBusinessMenu,
    isSelectedSharedMenus,
    setIsSelectedSharedMenus,
    sitesState
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [showOption, setShowOption] = useState(null)
  const [currentMenu, setCurrentMenu] = useState(null)
  const [isOpenSharedProduct, setIsOpenSharedProduct] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [menuList, setMenuList] = useState([])

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

  useEffect(() => {
    const updatedMenus = [...(isSelectedSharedMenus ? businessMenusState?.menusShared : businessMenusState?.menus)]
    const filteredMenus = updatedMenus.filter(menu => menu?.name.toLowerCase().includes(searchValue.toLowerCase()))
    setMenuList(filteredMenus)
  }, [JSON.stringify(businessMenusState.menus), JSON.stringify(businessMenusState.menusShared), searchValue, isSelectedSharedMenus])

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
        <SearchBarWrapper>
          <SearchBar
            isCustomLayout
            lazyLoad
            placeholder={t('SEARCH', 'Search')}
            search={searchValue}
            onSearch={val => setSearchValue(val)}
          />
        </SearchBarWrapper>
        {/* <SelectButtonGroup>
          <Button
            color='secundaryDark'
            // onClick={() => handleSelectAllTags()}
          >
            {t('SELECT_ALL', 'Select all')}
          </Button>
          <Button
            color='secundaryDark'
            // onClick={() => handleSelectNoneTags()}
          >
            {t('SELECT_NONE', 'Select none')}
          </Button>
        </SelectButtonGroup> */}

        {menuList.map((menu, index) => (
          <MeunItem
            key={menu.id}
            isBorderTop={index === 0}
            active={menu.id === currentMenu?.id}
            onClick={(e) => handleOpenEdit(e, menu)}
          >
            <CheckboxWrapper
              className='business_checkbox_control'
            >
              <Checkbox
                defaultChecked={menu?.enabled}
                onChange={e => handleChangeBusinessMenuActiveState(menu?.id, e.target.checked)}
              />
            </CheckboxWrapper>
            <MenuName>{menu?.name}</MenuName>
            <ChevronRight />
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
              sitesState={sitesState}
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
                sitesState={sitesState}
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
