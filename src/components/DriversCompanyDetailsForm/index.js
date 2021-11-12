import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../DragScroll'
import { DriversCompanyGeneralDetails } from '../DriversCompanyGeneralDetails'
import { DriversCompanyScheduleDetails } from '../DriversCompanyScheduleDetails'
import { DriversCompanyWebhooksDetails } from '../DriversCompanyWebhooksDetails'

import {
  DetailsContainer,
  Header,
  TabsContainer,
  Tab
} from './styles'

export const DriversCompanyDetailsForm = (props) => {
  const {
    driversCompany,
    changesState
  } = props

  const [, t] = useLanguage()
  const [currentTabItem, setCurrentTabItem] = useState('general')

  const tabItems = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'schedule', content: t('SCHEDULE', 'Schedule') },
    { key: 'webhooks', content: t('WEBHOOKS', 'Webhooks') }
  ]

  return (
    <DetailsContainer>
      <Header>
        <h1>
          {
            driversCompany
              ? changesState?.name ?? driversCompany?.name ?? ''
              : t('DRIVER_COMPANY_SETTINGS', 'Driver company settings')
          }
        </h1>
      </Header>
      <TabsContainer>
        <DragScroll>
          {tabItems.map(item => (
            <Tab
              key={item.key}
              active={item.key === currentTabItem}
              onClick={() => setCurrentTabItem(item.key)}
            >
              {item.content}
            </Tab>
          ))}
        </DragScroll>
      </TabsContainer>
      {currentTabItem === 'general' && (
        <DriversCompanyGeneralDetails {...props} />
      )}
      {currentTabItem === 'schedule' && (
        <DriversCompanyScheduleDetails {...props} />
      )}
      {currentTabItem === 'webhooks' && (
        <DriversCompanyWebhooksDetails {...props} />
      )}
    </DetailsContainer>
  )
}
