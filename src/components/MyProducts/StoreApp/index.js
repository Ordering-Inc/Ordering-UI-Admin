import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'

export const StoreApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const appInfo = {
    title: t('STORE_APP', 'Store App'),
    description: t('STORE_APP_DESCRIPTION', 'Give your business owners or managers a tool to manage their whole business\'s incoming orders on the go by installing this app on any mobile device they have.'),
    images: {
      live: theme.images.myProducts.storeAppFree,
      brand: theme.images.myProducts.storeAppBrand
    },
    live_title: t('FREE_TO_USE', 'Free to use'),
    live_description: t('FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    apple_store_link: 'https://apps.apple.com/us/app/store-app-2-0/id1608192050',
    google_play_link: 'https://play.google.com/store/apps/details?id=com.ordering.storeappv5&pli=1',
    brand_title: t('YOUR_BRANDED_APP', 'Your Branded App'),
    brand_description: t('BRANDED_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    purchase_link: 'https://www.ordering.co/ordering-sales'
  }

  return (
    <AppLayout appInfo={appInfo} />
  )
}
