import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'
import { removeIntercom } from '../../../utils'

export const KioskApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const appInfo = {
    title: t('ORDERING_SELF_KIOSK', 'Ordering Self Ordering Kiosk'),
    description: t('KIOS_DESCRIPTION', 'This tool will help your store complete that final step on each sale with innovative and intuitive software and hardware inside your locations.'),
    images: {
      live: theme.images.myProducts.myKioskAppLive,
      brand: theme.images.myProducts.myKioskAppBrand
    },
    live_title: t('LIVE_DEMO', 'Live Demo'),
    live_description: t('APP_LIVE_DEMO_DESCRIPTION', 'This is a branded Ordering.co product. play with it and understand how it works'),
    brand_title: t('YOUR_BRANDED_KIOSK', 'Your Branded Kiosk'),
    brand_description: t('KIOSK_BRANDED_DESCRIPTION', 'This App is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet you add it to.'),
    demo_book_message: 'I would like to book a Demo about the Kiosk app, can you assist me?',
    purchase_message: 'I would like to know about the Kiosk app, can you assist me?',
    downloads: [
      { id: 1, icon: theme.images.myProducts.appStoreSmall, link: 'https://apps.apple.com/us/app/ordering-kiosk-2-0/id1615828153' },
      { id: 2, icon: theme.images.myProducts.playStoreSmall, link: 'https://play.google.com/store/apps/details?id=com.ordering.orderingkioskv5&hl=en&gl=US' }
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
