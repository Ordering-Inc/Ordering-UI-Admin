import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { AppLayout } from '../AppLayout'

export const CallCenterApp = () => {
  const [, t] = useLanguage()
  const theme = useTheme()

  const appInfo = {
    title: t('ORDERING_CALL_CENTER_APP', 'Ordering Call Center App'),
    description: t('CALL_CENTER_DESCRIPTION', 'Give this tool to your team of agents, capture orders in just a few seconds, and keep offering the best customer experience possible.'),
    images: {
      live: theme.images.myProducts.myCallcenterAppLive,
      brand: theme.images.myProducts.myCallcenterAppBrand
    },
    live_title: t('LIVE_DEMO', 'Live Demo'),
    live_description: t('APP_LIVE_DEMO_DESCRIPTION', 'This is a branded Ordering.co product; play with it and understand how it works'),
    web_url: 'https://callcenter.tryordering.com/search',
    web_link_title: t('CALL_CENTER', 'Call center'),
    brand_title: t('YOUR_BRANDED_KIOSK', 'Your Branded Kiosk'),
    brand_description: t('CALL_CENTER_BRANDED_DESCRIPTION', 'The Call Center is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet or device you add it to.'),
    purchase_link: 'https://www.ordering.co/ordering-sales'
  }

  return (
    <AppLayout appInfo={appInfo} />
  )
}
