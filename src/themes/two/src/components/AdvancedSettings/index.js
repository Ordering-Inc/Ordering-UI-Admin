import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { List as MenuIcon, Window, PuzzleFill, Display, Globe } from 'react-bootstrap-icons'
import { IconButton } from '../../styles/Buttons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { SideBar } from '../SideBar'
import { StaticPageList } from '../StaticPageList'

import {
  AdvancedSettingsContainer,
  SettingHeader,
  ContentWrapper,
  SettingItemWrapper,
  IconWrapper,
  SettingItemContent
} from './styles'

export const AdvancedSettings = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()

  const [isDetailsShow, setIsDetailsShow] = useState(false)
  const [showOption, setShowOption] = useState(null)

  const settingList = [
    {
      id: 1,
      icon: <Window />,
      title: t('PAGES_MANAGER', 'Static Pages Manager'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
      option: 'static_manager'
    },
    {
      id: 2,
      icon: <PuzzleFill />,
      title: t('TITLE_PLUGINS', 'Plugins'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
      option: ''
    },
    {
      id: 3,
      icon: <Display />,
      title: t('TITLE_WEBHOOKS', 'Webhooks'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
      option: ''
    },
    {
      id: 4,
      icon: <Globe />,
      title: t('LANGUAGE_MANAGER', 'Language manager'),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor ut diam id sit phasellus dolor.',
      option: ''
    }
  ]

  const handleOpenOption = (option) => {
    setIsDetailsShow(true)
    setShowOption(option)
  }

  return (
    <AdvancedSettingsContainer>
      <SettingHeader>
        {isCollapse && (
          <IconButton
            color='black'
            onClick={() => handleMenuCollapse(false)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <h1>{t('ADVANCED_SETTINGS', 'Advance settings')}</h1>
      </SettingHeader>

      <ContentWrapper>
        {settingList.map(setting => (
          <SettingItemWrapper
            key={setting.id}
            onClick={() => handleOpenOption(setting.option)}
          >
            <IconWrapper>
              {setting.icon}
            </IconWrapper>
            <SettingItemContent>
              <h5>{setting.title}</h5>
              <p>{setting.content}</p>
            </SettingItemContent>
          </SettingItemWrapper>
        ))}
      </ContentWrapper>

      {isDetailsShow && (
        <SideBar
          id='advanced-settings'
          open={isDetailsShow}
          onClose={() => setIsDetailsShow(false)}
        >
          {showOption === 'static_manager' && (
            <StaticPageList />
          )}
        </SideBar>
      )}
    </AdvancedSettingsContainer>
  )
}
