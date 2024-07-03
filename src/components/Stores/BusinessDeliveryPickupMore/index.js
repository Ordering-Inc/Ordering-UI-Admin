import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { BusinessDeliveryDetails } from '../BusinessDeliveryDetails'
import { BusinessPickupDetails } from '../BusinessPickupDetails'
import { BusinessEta } from '../BusinessEta'
import { DragScroll } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  TabsContainer,
  Tab
} from './styles'
import { DriversGroupsListingDetails } from '../BusinessDeliveryGroupsDetails'

export const BusinessDeliveryPickupMore = (props) => {
  const {
    setIsExtendExtraOpen
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const [selectedTab, setSelectedTab] = useState('delivery')

  const tabs = [
    { key: 'delivery', content: t('DELIVERY', 'Delivery') },
    { key: 'pickup', content: t('PICKUP', 'Pickup') },
    { key: 'driver_delivery_group', content: t('DRIVER_DELIVERY_GROUP', 'Driver Delivery Group') },
    { key: 'advanced_eta', content: t('ADVANCED_ETA', 'Advanced ETA') }
  ]

  useEffect(() => {
    setIsExtendExtraOpen(false)
  }, [selectedTab])

  const handleTabClick = (tab, isInitialRender) => {
    setSelectedTab(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    const tabs = ['delivery', 'pickup', 'driver_delivery_group', 'advanced_eta']
    if (tab && tabs.includes(tab)) {
      handleTabClick(tab, true)
    } else {
      handleTabClick('delivery')
    }
  }, [])

  return (
    <Container>
      <h1>{t('DELIVERY_PICKUP_MORE', 'Delivery, pickup & more')}</h1>
      <TabsContainer>
        <DragScroll>
          {tabs.map(tab => (
            <Tab
              key={tab.key}
              active={tab.key === selectedTab}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.content}
            </Tab>
          ))}
        </DragScroll>
      </TabsContainer>
      {selectedTab === 'delivery' && (
        <BusinessDeliveryDetails {...props} />
      )}
      {selectedTab === 'pickup' && (
        <BusinessPickupDetails {...props} />
      )}
      {selectedTab === 'driver_delivery_group' && (
        <DriversGroupsListingDetails {...props} />
      )}
      {selectedTab === 'advanced_eta' && (
        <BusinessEta {...props} />
      )}
    </Container>
  )
}
