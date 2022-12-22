import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'

export const CustomerApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

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
    <AppLayout appInfo={appInfo} />
  )
}
