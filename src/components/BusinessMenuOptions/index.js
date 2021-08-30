import React, { useState, useEffect } from 'react'
import { useLanguage, BusinessMenuOptions as BusinessMenuOptionsController } from 'ordering-components-admin'
import { XLg } from 'react-bootstrap-icons'
import { useWindowSize } from '../../hooks/useWindowSize'
import { BusinessMenuShare } from '../BusinessMenuShare'
import { BusinessMenuBasicOptions } from '../BusinessMenuBasicOptions'
import { AutoScroll } from '../AutoScroll'
import { IconButton } from '../../styles/Buttons'

import {
  Container,
  Header,
  ActionBlock,
  TabContainer,
  TabInnerContainer,
  Tab
} from './styles'

const BusinessMenuOptionsUI = (props) => {
  const {
    open,
    onClose,
    menu,
    business,
    handleUpdateBusinessState
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedMenuOption, setSelectedMenuOption] = useState('basic')
  const [openShareMenu, setOpenShareMenu] = useState(false)

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('menu_options').style.width = value
      ? width > 1000 ? '500px' : '100%'
      : '0'
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

  return (
    <Container id='menu_options'>
      <Header>
        <h1>{t('MENU_SETTINGS', 'Menu settings')}</h1>
        <ActionBlock>
          <BusinessMenuShare
            open={openShareMenu}
            menu={menu}
            businessId={business?.id}
            business={business}
            onClick={() => setOpenShareMenu(true)}
            onClose={() => setOpenShareMenu(false)}
            handleUpdateBusinessState={handleUpdateBusinessState}
          />
          <IconButton
            color='black'
            onClick={() => onClose()}
          >
            <XLg />
          </IconButton>
        </ActionBlock>
      </Header>
      <TabContainer>
        <TabInnerContainer>
          <AutoScroll innerScroll scrollId='menu_options'>
            <Tab
              active={selectedMenuOption === 'basic'}
              onClick={() => setSelectedMenuOption('basic')}
            >
              {t('BASIC', 'Basic')}
            </Tab>
            <Tab
              active={selectedMenuOption === 'enterprise'}
              onClick={() => setSelectedMenuOption('enterprise')}
            >
              {t('ENTERPRISE', 'Enterprise')}
            </Tab>
          </AutoScroll>
        </TabInnerContainer>
      </TabContainer>

      {selectedMenuOption === 'basic' && (
        <BusinessMenuBasicOptions
          {...props}
        />
      )}
    </Container>
  )
}

export const BusinessMenuOptions = (props) => {
  const businessMenuOptionFormProps = {
    ...props,
    UIComponent: BusinessMenuOptionsUI
  }
  return <BusinessMenuOptionsController {...businessMenuOptionFormProps} />
}
