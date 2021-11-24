import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  DriversCompanyDetails as DriversCompanyDetailsController
} from 'ordering-components-admin'
import { Alert } from '../Confirm'
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

const DriversCompanyDetailsFormUI = (props) => {
  const {
    driversCompany,
    changesState,
    actionState,
    cleanActionState
  } = props

  const [, t] = useLanguage()
  const [currentTabItem, setCurrentTabItem] = useState('general')
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const tabItems = [
    { key: 'general', content: t('GENERAL', 'General') },
    { key: 'schedule', content: t('SCHEDULE', 'Schedule') },
    { key: 'webhooks', content: t('WEBHOOKS', 'Webhooks') }
  ]

  const closeAlert = () => {
    cleanActionState()
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!actionState.loading && actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error || [t('ERROR')]
      })
    }
  }, [actionState])

  return (
    <>
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
      <Alert
        title={t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DriversCompanyDetailsForm = (props) => {
  const driversCompanyDetailsProps = {
    ...props,
    UIComponent: DriversCompanyDetailsFormUI
  }
  return <DriversCompanyDetailsController {...driversCompanyDetailsProps} />
}
