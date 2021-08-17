import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { IconButton } from '../../styles/Buttons'
import { List as MenuIcon, PuzzleFill, Display } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../../../contexts/InfoShareContext'
import { SideBar } from '../SideBar'
import { PluginList } from '../PluginList'

import {
  IntegrationsContainer,
  Header,
  SettingListContainer,
  SettingItemContainer,
  IconWrapper,
  SettingItemContent
} from './styles'

export const Integrations = (props) => {
  const [, t] = useLanguage()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showOption, setShowOption] = useState(null)

  return (
    <>
      <IntegrationsContainer>
        <Header>
          {isCollapse && (
            <IconButton
              color='black'
              onClick={() => handleMenuCollapse(false)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>{t('INTEGRATIONS', 'Integrations')}</h1>
        </Header>
        <SettingListContainer>
          <SettingItemContainer
            onClick={() => setShowOption('plugins')}
          >
            <IconWrapper>
              <PuzzleFill />
            </IconWrapper>
            <SettingItemContent>
              <h5>{t('PLUGINS', 'Plugins')}</h5>
              <p>{t('PLUGIN_DESCRIPTION', 'This functionality serves to extend the Ordering API functionalities to anything you want without any restriction.')}</p>
            </SettingItemContent>
          </SettingItemContainer>
          <SettingItemContainer
            onClick={() => setShowOption('webhooks')}
          >
            <IconWrapper>
              <Display />
            </IconWrapper>
            <SettingItemContent>
              <h5>{t('WEBHOOKS', 'Webhooks')}</h5>
              <p>{t('WEBHOOK_DESCRIPTION', 'Unlike business webhooks, global webhooks listen to the events of the entire project.')}</p>
            </SettingItemContent>
          </SettingItemContainer>
        </SettingListContainer>
      </IntegrationsContainer>

      <SideBar
        sidebarId='settings-integrations'
        open={showOption === 'plugins' || showOption === 'webhooks'}
        onClose={() => setShowOption(null)}
      >
        {showOption === 'plugins' && (
          <PluginList />
        )}
      </SideBar>
    </>
  )
}
