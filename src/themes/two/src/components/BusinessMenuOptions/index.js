import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessMenuOptions as BusinessMenuOptionsController } from './naked'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { BusinessShareMenu } from '../BusinessShareMenu'
import { BusinessMenuBasicOptions } from '../BusinessMenuBasicOptions'

import {
  Container,
  Header,
  ActionBlock,
  TabContainer,
  TabInnerContainer,
  Tab
} from './styles'
import { AutoScroll } from '../AutoScroll'

const BusinessMenuOptionsUI = (props) => {
  const {
    open,
    onClose
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
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('menu_options').style.width = '100vw'
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
          <BusinessShareMenu
            open={openShareMenu}
            onClick={() => setOpenShareMenu(true)}
            onClose={() => setOpenShareMenu(false)}
          />
          <MdcClose
            onClick={() => onClose()}
          />
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
