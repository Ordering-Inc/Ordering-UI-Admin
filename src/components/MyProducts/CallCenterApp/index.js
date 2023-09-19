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
      brand: theme.images.myProducts.myCallcenterAppBrand
    },
    brand_title: t('YOUR_BRANDED_CALL_CENTER', 'Your Branded Call Center'),
    brand_description: t('CALL_CENTER_BRANDED_DESCRIPTION', 'The Call Center is delivered in less than five working days, fully branded with your guidelines, and ready to be used on any tablet or device you add it to.'),
    demo_book_message: 'I would like to book a Demo about the Call center , can you assist me?',
    purchase_message: 'I would like to know about the Call center, can you assist me?',
    demo_link: 'https://www.ordering.co/platform-demo-and-pricing'
  }

  return (
    <AppLayout appInfo={appInfo} />
  )
}
