import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'
import { removeIntercom } from '../../../utils'

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
    demo_book_message: 'I would like to book a Demo about the Store app , can you assist me?',
    brand_title: t('YOUR_BRANDED_APP', 'Your Branded App'),
    brand_description: t('BRANDED_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    purchase_message: 'I would like to know about the Store app, can you assist me?',
    downloads: [
      { id: 1, icon: theme.images.myProducts.appStoreSmall, link: 'https://apps.apple.com/us/app/store-app-2-0/id1608192050' },
      { id: 2, icon: theme.images.myProducts.playStoreSmall, link: 'https://play.google.com/store/apps/details?id=com.ordering.storeappv5&pli=1' }
    ]
  }

  useEffect(() => {
    return () => {
      removeIntercom()
    }
  }, [])

  return (
    <AppLayout appInfo={appInfo} />
  )
}
