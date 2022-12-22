import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'

export const PosApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const appInfo = {
    title: t('POINT_OF_SALE', 'Point of Sale'),
    description: t('POS_DESCRIPTION', 'Create orders in your system without the hassle and auto-complete information to give the best customer experience in every order.'),
    images: {
      live: theme.images.myProducts.myPosAppLive,
      brand: theme.images.myProducts.myPosAppBrand
    },
    live_title: t('FREE_TO_USE', 'Free to use'),
    live_description: t('FREE_TO_USE_DESCRIPTION', 'This is a branded Ordering.co product. use it with your project, email, and password for free. features might be limited.'),
    brand_title: t('YOUR_BRANDED_POS', 'Your Branded POS'),
    brand_description: t('POS_BRANDED_DESCRIPTION', 'The POS is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet or device you add it to.'),
    demo_book_message: 'I would like to book a Demo about the POS app , can you assist me?',
    purchase_message: 'I would like to know about the POS app, can you assist me?',
    downloads: [
      { id: 1, icon: theme.images.myProducts.appStoreSmall, link: 'https://apps.apple.com/us/app/ordering-pos-2-0/id1609520468' },
      { id: 2, icon: theme.images.myProducts.playStoreSmall, link: 'https://play.google.com/store/apps/details?id=com.ordering.posv5&hl=en&gl=US' }
    ]
  }

  return (
    <AppLayout appInfo={appInfo} />
  )
}
