import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useLanguage, BusinessMenu as BusinessMenuController } from 'ordering-components-admin'
import { BusinessMenuOptions } from '../BusinessMenuOptions'
import { Confirm, Modal, SearchBar } from '../../Shared'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Button, Checkbox, LinkButton } from '../../../styles'
import { ChevronRight } from 'react-bootstrap-icons'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  MainContainer,
  MenuContainer,
  Header,
  Title,
  MeunItem,
  MenuName,
  CheckboxWrapper,
  AddMenuButtonWrapper,
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
    sitesState,
    setBusinessMenusState
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [showOption, setShowOption] = useState(null)
  const [currentMenuState, setCurrentMenuState] = useState({ menu: null, loading: false })
  const [isOpenSharedProduct, setIsOpenSharedProduct] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [menuList, setMenuList] = useState([])
  const [initMenuId, setInitMenuId] = useState(null)

  const setCurrentMenu = (data) => {
    setCurrentMenuState({
      ...currentMenuState,
      ...data
    })
  }

  const handleOpenOptions = (name, menu) => {
    setCurrentMenu({ menu })
    setIsExtendExtraOpen(true)
    setShowOption(name)
  }

  const handleCloseOption = (isTab) => {
    setShowOption(null)
    setIsExtendExtraOpen(false)
    setIsOpenSharedProduct(false)
    setCurrentMenu({ menu: null })
    if (!isTab) {
      setInitMenuId(null)
      removeQueryToUrl(['menu', 'product'])
    }
  }

  const handleOpenEdit = (e, menu, isInitialRender) => {
    const isInvalid = e?.target?.closest('.business_checkbox_control')
    if (isInvalid) return
    handleOpenOptions('option', menu)
    if (!isInitialRender) {
      addQueryToUrl({ menu: menu.id })
    }
  }

  useEffect(() => {
    const updatedMenus = [...(isSelectedSharedMenus ? businessMenusState?.menusShared : businessMenusState?.menus)]
    const filteredMenus = updatedMenus.filter(menu => menu?.name?.toLowerCase().includes(searchValue?.toLowerCase()))
    setMenuList(filteredMenus)
  }, [JSON.stringify(businessMenusState.menus), JSON.stringify(businessMenusState.menusShared), searchValue, isSelectedSharedMenus])

  const handleTabClick = (isShared, isInitialRender) => {
    handleCloseOption(true)
    setIsSelectedSharedMenus(isShared)
    if (!isInitialRender) {
      const tab = isShared ? 'shared_menus' : 'menu'
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    if (businessMenusState.loading || !initMenuId) return
    const tab = query.get('tab')
    const updatedMenus = [...(tab === 'shared_menus' ? businessMenusState?.menusShared : businessMenusState?.menus)]
    const selectedMenu = updatedMenus.find(menu => menu.id === Number(initMenuId))
    handleOpenEdit(null, selectedMenu, true)
  }, [initMenuId, businessMenusState.loading])

  useEffect(() => {
    const tab = query.get('tab')
    const menuId = query.get('menu')
    setInitMenuId(menuId)
    if (tab === 'shared_menus') {
      handleTabClick(true, true)
    } else {
      handleTabClick(false, true)
    }
    return () => {
      setInitMenuId(null)
    }
  }, [])

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
            onClick={() => handleTabClick(false)}
          >
            {t('MENU_V21', 'Menu')}
          </Tab>
          <Tab
            active={isSelectedSharedMenus}
            onClick={() => handleTabClick(true)}
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
        {businessMenusState?.loading && (
          [...Array(4).keys()].map(i => (
            <MeunItem key={i}>
              <Skeleton width={120} height={24} />
            </MeunItem>
          ))
        )}
        {!businessMenusState?.loading && menuList.map((menu, index) => (
          <MeunItem
            disabled={currentMenuState?.loading}
            key={menu.id}
            isBorderTop={index === 0}
            active={menu.id === currentMenuState?.menu?.id}
            onClick={(e) => handleOpenEdit(e, menu)}
          >
            <CheckboxWrapper
              className='business_checkbox_control'
            >
              <Checkbox
                checked={menu?.enabled}
                onChange={e => handleChangeBusinessMenuActiveState(menu?.id, e.target.checked)}
              />
            </CheckboxWrapper>
            <MenuName>{menu?.name}</MenuName>
            <ChevronRight />
          </MeunItem>
        ))}
        {!isSelectedSharedMenus && (
          <AddMenuButtonWrapper>
            <LinkButton
              onClick={() => handleOpenOptions('option', {})}
              disabled={businessMenusState?.loading}
            >
              {t('ADD_MENU', 'Add menu')}
            </LinkButton>
          </AddMenuButtonWrapper>
        )}
      </MenuContainer>
      {width >= 1000 ? (
        <>
          {showOption === 'option' && (
            <BusinessMenuOptions
              open={showOption === 'option'}
              business={business}
              menu={currentMenuState?.menu || {}}
              onClose={() => handleCloseOption()}
              handleUpdateBusinessState={handleSuccessBusinessMenu}
              isSelectedSharedMenus={isSelectedSharedMenus}
              isOpenSharedProduct={isOpenSharedProduct}
              setIsOpenSharedProduct={setIsOpenSharedProduct}
              sitesState={sitesState}
              menuList={businessMenusState}
              setMenuList={setBusinessMenusState}
              setCurrentMenu={setCurrentMenu}
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
              padding='20px 0 0 0'
            >
              <BusinessMenuOptions
                open={showOption === 'option'}
                business={business}
                menu={currentMenuState?.menu || {}}
                onClose={() => handleCloseOption()}
                handleUpdateBusinessState={handleSuccessBusinessMenu}
                isSelectedSharedMenus={isSelectedSharedMenus}
                setIsOpenSharedProduct={setIsOpenSharedProduct}
                sitesState={sitesState}
                menuList={businessMenusState}
                setMenuList={setBusinessMenusState}
                setCurrentMenu={setCurrentMenu}
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
