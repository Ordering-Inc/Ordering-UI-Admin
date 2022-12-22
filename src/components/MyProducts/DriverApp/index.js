import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'

export const DriverApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const appInfo = {
    title: t('DRIVER_APP', 'Driver App'),
    description: t('DRIVER_APP_DESCRIPTION', 'Your fleet\'s best companion gives drivers a tool to receive orders, follow optimal routes, add delivery evidence, set orders\' timing, and control their busy times.'),
    images: {
      live: theme.images.myProducts.driverAppFree,
      brand: theme.images.myProducts.driverAppBrand
    },
    live_title: t('FREE_TO_USE', 'Free to use'),
    live_description: t('FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    brand_title: t('YOUR_BRANDED_APP', 'Your Branded App'),
    brand_description: t('BRANDED_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    demo_book_message: 'I would like to book a Demo about the Driver app , can you assist me?',
    purchase_message: 'I would like to know about the Driver app, can you assist me?',
    downloads: [
      { id: 1, icon: theme.images.myProducts.appStoreSmall, link: 'https://apps.apple.com/us/app/driver-app-2-0/id1606257815' },
      { id: 2, icon: theme.images.myProducts.playStoreSmall, link: 'https://play.google.com/store/apps/details?id=com.ordering.deliveryv5' }
    ]
  }

  return (
    <AppLayout appInfo={appInfo} isDriver />
  )
}
