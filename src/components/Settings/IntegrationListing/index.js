import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { IconButton } from '../../../styles'
import { List as MenuIcon, PuzzleFill, Display, KeyFill } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
import { PluginList } from '../PluginList'
import { WebhookList } from '../WebhookList'
import { ApiKeysList } from '../ApiKeysList'

import {
  IntegrationsContainer,
  Header,
  SettingListContainer,
  SettingItemContainer,
  IconWrapper,
  SettingItemContent
} from './styles'

export const IntegrationListing = (props) => {
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
          <SettingItemContainer
            onClick={() => setShowOption('apiKeys')}
          >
            <IconWrapper>
              <KeyFill />
            </IconWrapper>
            <SettingItemContent>
              <h5>{t('KEYS', 'Api Keys')}</h5>
              <p>{t('APIKEYS_DESCRIPTION', 'These keys serve to obtain a direct connection to the API without the need for authentication.')}</p>
            </SettingItemContent>
          </SettingItemContainer>
        </SettingListContainer>
      </IntegrationsContainer>

      {showOption === 'plugins' && (
        <SideBar
          sidebarId='plugins-integrations'
          defaultSideBarWidth={600}
          open={showOption === 'plugins'}
          onClose={() => setShowOption(null)}
        >
          <PluginList />
        </SideBar>
      )}

      {showOption === 'webhooks' && (
        <SideBar
          sidebarId='webhooks-integrations'
          defaultSideBarWidth={768}
          open={showOption === 'webhooks'}
          onClose={() => setShowOption(null)}
        >
          <WebhookList />
        </SideBar>
      )}

      {showOption === 'apiKeys' && (
        <SideBar
          sidebarId='apikeys-integrations'
          defaultSideBarWidth={700}
          open={showOption === 'apiKeys'}
          onClose={() => setShowOption(null)}
        >
          <ApiKeysList />
        </SideBar>
      )}
    </>
  )
}
