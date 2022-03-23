import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessDeliveryDetails } from '../BusinessDeliveryDetails'
import { BusinessPickupDetails } from '../BusinessPickupDetails'

import {
  Container,
  TabsContainer,
  Tab
} from './styles'

export const BusinessDeliveryPickupMore = (props) => {
  const {
    setIsExtendExtraOpen
  } = props

  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('delivery')

  const tabs = [
    { key: 'delivery', content: t('DELIVERY', 'Delivery') },
    { key: 'pickup', content: t('PICKUP', 'Pickup') }
  ]

  useEffect(() => {
    setIsExtendExtraOpen(false)
  }, [selectedTab])

  return (
    <Container>
      <h1>{t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')}</h1>
      <TabsContainer>
        {tabs.map(tab => (
          <Tab
            key={tab.key}
            active={tab.key === selectedTab}
            onClick={() => setSelectedTab(tab.key)}
          >
            {tab.content}
          </Tab>
        ))}
      </TabsContainer>
      {selectedTab === 'delivery' && (
        <BusinessDeliveryDetails {...props} />
      )}
      {selectedTab === 'pickup' && (
        <BusinessPickupDetails {...props} />
      )}
    </Container>
  )
}
