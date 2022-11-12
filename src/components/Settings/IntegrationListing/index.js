import React, { useState, useEffect } from 'react'
import { useLanguage, useEvent } from 'ordering-components-admin'
import { IconButton } from '../../../styles'
import { useLocation } from 'react-router-dom'
import { List as MenuIcon, PuzzleFill, Display, KeyFill } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
import { PluginList } from '../PluginList'
import { WebhookList } from '../WebhookList'
import { ApiKeysList } from '../ApiKeysList'
import { DoordashConnect } from '../DoordashConnect'

import {
  IntegrationsContainer,
  Header,
  SettingListContainer,
  SettingItemContainer,
  IconWrapper,
  SettingItemContent
} from './styles'
import { useTheme } from 'styled-components'

export const IntegrationListing = (props) => {
  const [, t] = useLanguage()
  const { search } = useLocation()
  const [events] = useEvent()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showOption, setShowOption] = useState(null)

  let settingParams

  if (search) {
    const data = search.substring(1).split('&')
    settingParams = data[0]
  }

  const settingId = settingParams && settingParams.split('=')[1]

  const onBasicSettingsRedirect = ({ id }) => {
    if (!id) {
      return events.emit('go_to_page', { page: 'integrations', replace: true })
    }
    if (id) {
      events.emit('go_to_page', {
        page: 'integrations',
        search: `?id=${id}`,
        replace: true
      })
    }
  }

  const handleOpenSetting = (id) => {
    onBasicSettingsRedirect({ id })
    setShowOption(id)
  }

  const handleCloseSettings = () => {
    onBasicSettingsRedirect({ id: null })
    setShowOption(null)
  }

  useEffect(() => {
    if (settingId) {
      onBasicSettingsRedirect({ id: settingId })
      setShowOption(settingId)
    }
  }, [])

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
            onClick={() => handleOpenSetting('plugins')}
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
            onClick={() => handleOpenSetting('webhooks')}
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
            onClick={() => handleOpenSetting('apiKeys')}
          >
            <IconWrapper>
              <KeyFill />
            </IconWrapper>
            <SettingItemContent>
              <h5>{t('KEYS', 'Api Keys')}</h5>
              <p>{t('APIKEYS_DESCRIPTION', 'These keys serve to obtain a direct connection to the API without the need for authentication.')}</p>
            </SettingItemContent>
          </SettingItemContainer>
          <SettingItemContainer
            onClick={() => handleOpenSetting('doordash')}
          >
            <IconWrapper>
              <img src={theme.images.general.doordash} />
            </IconWrapper>
            <SettingItemContent>
              <h5>{t('CONNECT_WITH_DOORDASH', 'Connect with Doordash')}</h5>
              <p>{t('CONNECT_DOORDASH_DESCRIPTION', 'Send orders directly to your driver in Doordash and keep customers happy with their deliveries.')}</p>
            </SettingItemContent>
          </SettingItemContainer>
        </SettingListContainer>
      </IntegrationsContainer>

      {showOption === 'plugins' && (
        <SideBar
          sidebarId='plugins-integrations'
          defaultSideBarWidth={600}
          open={showOption === 'plugins'}
          onClose={() => handleCloseSettings()}
        >
          <PluginList />
        </SideBar>
      )}

      {showOption === 'webhooks' && (
        <SideBar
          sidebarId='webhooks-integrations'
          defaultSideBarWidth={768}
          open={showOption === 'webhooks'}
          onClose={() => handleCloseSettings()}
        >
          <WebhookList />
        </SideBar>
      )}

      {showOption === 'apiKeys' && (
        <SideBar
          sidebarId='apikeys-integrations'
          defaultSideBarWidth={700}
          open={showOption === 'apiKeys'}
          onClose={() => handleCloseSettings()}
        >
          <ApiKeysList />
        </SideBar>
      )}

      {showOption === 'doordash' && (
        <DoordashConnect
          onClose={() => handleCloseSettings()}
        />
      )}
    </>
  )
}
