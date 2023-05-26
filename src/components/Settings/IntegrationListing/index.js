import React, { useState, useEffect } from 'react'
import { useLanguage, useEvent } from 'ordering-components-admin'
import { Button, IconButton } from '../../../styles'
import { useLocation } from 'react-router-dom'
import { List as MenuIcon, PuzzleFill, Display, KeyFill } from 'react-bootstrap-icons'
import { useInfoShare } from '../../../contexts/InfoShareContext'
import { SideBar } from '../../Shared'
import { PluginList } from '../PluginList'
import { WebhookList } from '../WebhookList'
import { ApiKeysList } from '../ApiKeysList'
import { DoordashConnect } from '../DoordashConnect'
import { useTheme } from 'styled-components'
import { LalaMoveConnect } from '../LalaMoveConnect'
import { Deliverect } from '../Deliverect'
import { ItsaCheckmate } from '../ItsaCheckmate'

import {
  IntegrationsContainer,
  Header,
  SettingItemContainer,
  IconWrapper,
  SettingItemContent,
  CategorySection,
  CategorGroup,
  SettingList,
  SpecialPartnerWrapper
} from './styles'
import { PickerExpress } from '../PickerExpress'
import { PaymentGateway } from './PaymentGateway'
import { Analytics } from './Analytics'

export const IntegrationListing = (props) => {
  const [, t] = useLanguage()
  const { search } = useLocation()
  const [events] = useEvent()
  const theme = useTheme()
  const [{ isCollapse }, { handleMenuCollapse }] = useInfoShare()
  const [showOption, setShowOption] = useState(null)

  const deliveryPlatformList = [
    { key: 'doordash', title: t('CONNECT_WITH_DOORDASH', 'Connect with Doordash'), icon: <img src={theme.images.general.doordash} />, description: t('CONNECT_DOORDASH_DESCRIPTION', 'Send orders directly to your driver in Doordash and keep customers happy with their deliveries.') },
    { key: 'lalamove', title: t('CONNECT_WITH_LALAMOVE', 'Connect with Lalamove'), icon: <img src={theme.images.general.lalamove} />, description: t('CONNECT_LALAMOVE_DESCRIPTION', 'Send orders directly to your drivers in LalaMove and keep customers happy with their deliveries.') },
    { key: 'picker_express', title: t('CONNECT_WITH_PICKER_EXPRESS', 'Connect with Picker Express'), icon: <img src={theme.images.general.pickerExpress} />, description: t('CONNECT_PICKER_EXPRESS_DESCRIPTION', 'Picker express connect you with +200 hundred thousand driver from +10 delivery companies from your city.') }
  ]

  const orderingDevelopers = [
    { key: 'plugins', title: t('PLUGINS', 'Plugins'), icon: <PuzzleFill />, description: t('PLUGIN_DESCRIPTION', 'This functionality serves to extend the Ordering API functionalities to anything you want without any restriction.') },
    { key: 'webhooks', title: t('WEBHOOKS', 'Webhooks'), icon: <Display />, description: t('WEBHOOK_DESCRIPTION', 'Unlike business webhooks, global webhooks listen to the events of the entire project.') },
    { key: 'apiKeys', title: t('KEYS', 'Api Keys'), icon: <KeyFill />, description: t('APIKEYS_DESCRIPTION', 'These keys serve to obtain a direct connection to the API without the need for authentication.') }
  ]

  let settingParams

  if (search) {
    const data = search.substring(1).split('&')
    settingParams = data[0]
  }

  const settingId = settingParams && settingParams.split('=')[1]

  const onBasicSettingsRedirect = ({ id }, isInitialRender) => {
    if (!id) {
      return events.emit('go_to_page', { page: 'integrations', replace: true })
    }
    if (id && !isInitialRender) {
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
      onBasicSettingsRedirect({ id: settingId }, true)
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
        <CategorGroup>
          <CategorySection>
            <h2>{t('ORDERING_DEVELOPERS', 'Ordering developers')}</h2>
            <SettingList>
              {orderingDevelopers.map((item, i) => (
                <SettingItemContainer
                  key={i}
                  onClick={() => handleOpenSetting(item.key)}
                >
                  <IconWrapper>
                    {item?.icon}
                  </IconWrapper>
                  <SettingItemContent>
                    <h5>{item?.title}</h5>
                    <p>{item?.description}</p>
                  </SettingItemContent>
                </SettingItemContainer>
              ))}
            </SettingList>
          </CategorySection>
          <CategorySection>
            <h2>{t('DELIVERY_PLATFORM', 'Delivery Platform')}</h2>
            <SpecialPartnerWrapper>
              <Button color='primary'>{t('LOOKING_FOR_SPECIFIC_PARTNER', 'Looking for a specific partner?')}</Button>
            </SpecialPartnerWrapper>
            <SettingList>
              {deliveryPlatformList.map((item, i) => (
                <SettingItemContainer
                  key={i}
                  onClick={() => handleOpenSetting(item.key)}
                >
                  <IconWrapper>
                    {item?.icon}
                  </IconWrapper>
                  <SettingItemContent>
                    <h5>{item?.title}</h5>
                    <p>{item?.description}</p>
                  </SettingItemContent>
                </SettingItemContainer>
              ))}
            </SettingList>
          </CategorySection>
          <CategorySection>
            <h2>{t('POS_INTEGRATIONS', 'POS Integrations')}</h2>
            <SettingList>
              <SettingItemContainer
                onClick={() => handleOpenSetting('deliverect')}
              >
                <IconWrapper>
                  <img src={theme.images.general.deliverect} />
                </IconWrapper>
                <SettingItemContent>
                  <h5>{t('DELIVERECT', 'Deliverect')}</h5>
                  <p>{t('SYNC_DEC_FIRST', 'The easiest way to manage all your online orders.')}</p>
                </SettingItemContent>
              </SettingItemContainer>
              <SettingItemContainer
                onClick={() => handleOpenSetting('itsacheckmate')}
              >
                <IconWrapper>
                  <img src={theme.images.general.ItsaCheckmateLogo} />
                </IconWrapper>
                <SettingItemContent>
                  <h5>{t('ITSACHECKMATE', 'ItsaCheckmate')}</h5>
                  <p dangerouslySetInnerHTML={{ __html: t('ITSACHECKMATE_SUB_HEADER', 'Take control of all your <strong>Ordering Platform Menus</strong> in one place!') }} />
                </SettingItemContent>
              </SettingItemContainer>
            </SettingList>
          </CategorySection>
          <PaymentGateway />
          <Analytics />
        </CategorGroup>
      </IntegrationsContainer>

      {showOption === 'plugins' && (
        <SideBar
          sidebarId='plugins-integrations'
          defaultSideBarWidth={600}
          open={showOption === 'plugins'}
          onClose={() => handleCloseSettings()}
          showExpandIcon
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
          showExpandIcon
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
          showExpandIcon
        >
          <ApiKeysList />
        </SideBar>
      )}

      {showOption === 'doordash' && <DoordashConnect onClose={() => handleCloseSettings()} />}

      {showOption === 'lalamove' && <LalaMoveConnect onClose={() => handleCloseSettings()} />}

      {showOption === 'picker_express' && <PickerExpress onClose={() => handleCloseSettings()} />}

      {showOption === 'deliverect' && <Deliverect onClose={() => handleCloseSettings()} />}

      {showOption === 'itsacheckmate' && <ItsaCheckmate onClose={() => handleCloseSettings()} />}
    </>
  )
}
