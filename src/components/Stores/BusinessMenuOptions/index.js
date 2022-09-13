import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useConfig,
  BusinessMenuOptions as BusinessMenuOptionsController
} from 'ordering-components-admin'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { XLg, ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { IconButton } from '../../../styles'
import { AutoScroll, Confirm, Modal } from '../../Shared'
import { BusinessMenuShare } from '../BusinessMenuShare'
import { BusinessMenuBasicOptions } from '../BusinessMenuBasicOptions'
import { BusinessMenuCustomFields } from '../BusinessMenuCustomFields'
import { BusinessSharedMenuProducts } from '../BusinessSharedMenuProducts'
import { BusinessMenuChannels } from '../BusinessMenuChannels'

import {
  Container,
  Header,
  ActionBlock,
  TabContainer,
  TabInnerContainer,
  Tab,
  ActionSelectorWrapper
} from './styles'

const BusinessMenuOptionsUI = (props) => {
  const {
    open,
    onClose,
    menu,
    business,
    handleUpdateBusinessState,
    isSelectedSharedMenus,
    handleDeleteMenu,
    setIsOpenSharedProduct,
    sitesState
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ configs }] = useConfig()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDisabledShareWith, setIsDisabledShareWith] = useState(false) // false means enabled
  const [selectedMenuOption, setSelectedMenuOption] = useState('basic')
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isCustomFieldsOpen, setIsCustomFieldsOpen] = useState(false)

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('menu_options').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
  }

  const handleDeleteClick = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_MENU', 'Are you sure that you want to delete this menu?'),
      handleOnAccept: () => {
        handleDeleteMenu()
        setConfirm({ ...confirm, open: false })
      }
    })
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('menu_options').style.width = '100%'
      } else {
        document.getElementById('menu_options').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (Object.keys(menu).length === 0) {
      setSelectedMenuOption('basic')
    }
  }, [menu])

  useEffect(() => {
    if (configs && Object.keys(configs).length > 0) {
      const disabledFeature = !Object.keys(configs).includes('shared_menus')
      setIsDisabledShareWith(disabledFeature)
    }
  }, [configs])
  return (
    <>
      <Container id='menu_options'>
        <Header>
          <h1>{t('MENU_SETTINGS', 'Menu settings')}</h1>
          <ActionBlock>
            {Object.keys(menu).length > 0 && (
              <ActionSelectorWrapper>
                <DropdownButton
                  className='product_actions'
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  {!isSelectedSharedMenus && (
                    <Dropdown.Item
                      onClick={() => setIsCustomFieldsOpen(true)}
                    >
                      {t('CUSTOM_FIELDS', 'Custom fields')}
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item
                    onClick={() => handleDeleteClick()}
                  >
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            )}
            <IconButton
              color='black'
              onClick={() => onClose()}
            >
              <XLg />
            </IconButton>
          </ActionBlock>
        </Header>
        {Object.keys(menu).length > 0 && !isSelectedSharedMenus && (
          <TabContainer>
            <TabInnerContainer>
              <AutoScroll innerScroll scrollId='menu_options'>
                <Tab
                  active={selectedMenuOption === 'basic'}
                  onClick={() => setSelectedMenuOption('basic')}
                >
                  {t('BASIC', 'Basic')}
                </Tab>
                {sitesState?.sites?.length > 0 && (
                  <Tab
                    active={selectedMenuOption === 'channels'}
                    onClick={() => setSelectedMenuOption('channels')}
                  >
                    {t('CHANNELS', 'Channels')}
                  </Tab>
                )}
                {Object.keys(menu).length > 0 && (
                  <Tab
                    active={selectedMenuOption === 'share_with'}
                    onClick={() => !isDisabledShareWith && setSelectedMenuOption('share_with')}
                    disabledFeature={isDisabledShareWith}
                    title={isDisabledShareWith ? t('PACKAGE_DOSE_NOT_INCLUDE_FUNCTIONS', 'Your package does not include this function') : ''}
                  >
                    {t('SHARE_WITH', 'Share with')}
                  </Tab>
                )}
              </AutoScroll>
            </TabInnerContainer>
          </TabContainer>
        )}

        {(!isSelectedSharedMenus || Object.keys(menu).length === 0) ? (
          <>
            {selectedMenuOption === 'basic' && (
              <BusinessMenuBasicOptions
                {...props}
              />
            )}
            {selectedMenuOption === 'channels' && (
              <BusinessMenuChannels
                {...props}
              />
            )}
            {selectedMenuOption === 'share_with' && (
              <BusinessMenuShare
                menu={menu}
                business={business}
                handleUpdateBusinessState={handleUpdateBusinessState}
              />
            )}
          </>
        ) : (
          <BusinessSharedMenuProducts
            menu={menu}
            business={business}
            handleUpdateBusinessState={handleUpdateBusinessState}
            setIsOpenSharedProduct={setIsOpenSharedProduct}
          />
        )}
        <Modal
          width='70%'
          open={isCustomFieldsOpen}
          onClose={() => setIsCustomFieldsOpen(false)}
        >
          <BusinessMenuCustomFields
            open={isCustomFieldsOpen}
            onClose={() => setIsCustomFieldsOpen(false)}
            businessId={business?.id}
            menuId={menu.id}
          />
        </Modal>
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
      </Container>
    </>
  )
}

export const BusinessMenuOptions = (props) => {
  const businessMenuOptionFormProps = {
    ...props,
    UIComponent: BusinessMenuOptionsUI
  }
  return <BusinessMenuOptionsController {...businessMenuOptionFormProps} />
}
