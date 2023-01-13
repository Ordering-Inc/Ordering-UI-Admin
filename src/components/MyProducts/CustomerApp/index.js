import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { useLanguage, OrderingWebsite } from 'ordering-components-admin'
import { AdvancedSettings } from '../AdvancedSettings'
import { BoxLayout } from '../AdvancedSettings/styles'
import { AppResources } from '../AppResources'
import Skeleton from 'react-loading-skeleton'
import { AppLayout } from '../AppLayout'
import {
  SettingsContainer,
  TabWrapper,
  Tabs,
  Tab
} from './styles'

const CustomerAppUI = (props) => {
  const {
    themesList,
    orderingTheme,
    advancedValues,
    setAdvancedValues,
    handleUpdateSiteTheme
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const [selectedSetting, setSelectedSetting] = useState('advanced')

  const settingsList = [
    { key: 'advanced', name: t('ADVANCED_SETTINGS', 'Advanced Settings') },
    { key: 'app_resources', name: t('APP_RESOURCES', 'App Resources') }
  ]

  const appInfo = {
    title: t('CUSTOMER_APP', 'Customer App'),
    description: t('CUSTOMER_APP_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business\'s incoming orders on the go by installing this app on any mobile device they have.'),
    images: {
      live: theme.images.myProducts.multiStoreCustomerApp,
      brand: theme.images.myProducts.singleStoreCustomerApp
    },
    live_title: t('MULTI-STORE-CUSTOMER-APP', 'Multi-store Customer App'),
    live_description: t('FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    demo_book_message: 'I would like to book a Demo for the customer app , can you assist me?',
    brand_title: t('SINGLE_STORE_CUSTOMER_APP', 'Single Store Customer App'),
    brand_description: t('BRANDED_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    purchase_message: 'I would like to know about the customer app, can you assist me?',
    downloads: [
      { id: 1, icon: theme.images.myProducts.appStoreSmall, link: 'https://apps.apple.com/us/app/customer-app-2-0/id1607414555' },
      { id: 2, icon: theme.images.myProducts.playStoreSmall, link: 'https://play.google.com/store/apps/details?id=com.ordering.onlineorderingappv5&hl=en&gl=US' }
    ]
  }

  return (
    <>
      <AppLayout appInfo={appInfo}>
        <SettingsContainer>
          <h2>{t('MORE_SETTINGS_FOR_YOUR', 'More settings for your')} <span>{t('CUSTOMER_APP', 'Customer App')}</span></h2>
          <p>{t('CUSTOMER_APP_SETTING_DESC', 'Change background, colors, fonts, style, branding and all the essentials of your brand.')}</p>
          <TabWrapper>
            <Tabs>
              {settingsList.map(setting => (
                <Tab
                  key={setting.key}
                  active={selectedSetting === setting.key}
                  onClick={() => !orderingTheme?.loading && setSelectedSetting(setting.key)}
                >
                  {setting.name}
                </Tab>
              ))}
            </Tabs>
          </TabWrapper>
          {orderingTheme?.loading && (
            <BoxLayout>
              <h2>
                <Skeleton height={25} width={200} />
              </h2>
              <h2>
                <Skeleton height={25} width={150} />
              </h2>
              <Skeleton width={160} height={160} />
            </BoxLayout>
          )}
          {selectedSetting === 'advanced' && !orderingTheme?.loading && (
            <AdvancedSettings
              isApp
              themesList={themesList}
              advancedValues={advancedValues}
              setAdvancedValues={setAdvancedValues}
              handleUpdateSiteTheme={handleUpdateSiteTheme}
            />
          )}
          {selectedSetting === 'app_resources' && !orderingTheme?.loading && (
            <AppResources
              advancedValues={advancedValues}
              setAdvancedValues={setAdvancedValues}
              handleUpdateSiteTheme={handleUpdateSiteTheme}
            />
          )}
        </SettingsContainer>
      </AppLayout>
    </>
  )
}

export const CustomerApp = (props) => {
  const customerAppProps = {
    ...props,
    appId: 'react-native-app',
    UIComponent: CustomerAppUI
  }
  return <OrderingWebsite {...customerAppProps} />
}
