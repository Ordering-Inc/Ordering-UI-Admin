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
    live_purchase_link: 'https://www.ordering.co/ordering-sales',
    brand_title: t('SINGLE_STORE_CUSTOMER_APP', 'Single Store Customer App'),
    brand_description: t('BRANDED_APP_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, removing all ordering.co presence to give your brand more awareness.'),
    purchase_link: 'https://www.ordering.co/ordering-sales'
  }

  return (
    <AppLayout appInfo={appInfo} />
  )
}
