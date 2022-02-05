import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  DriversCompanyDetails as DriversCompanyDetailsController
} from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Alert, Confirm, DragScroll } from '../../Shared'

import { DriversCompanyGeneralDetails } from '../DriversCompanyGeneralDetails'
import { DriversCompanyScheduleDetails } from '../DriversCompanyScheduleDetails'
import { DriversCompanyWebhooksDetails } from '../DriversCompanyWebhooksDetails'

import {
  DetailsContainer,
  Header,
  TabsContainer,
  Tab,
  ActionSelectorWrapper
} from './styles'

const DriversCompanyDetailsFormUI = (props) => {
  const {
    driversCompany,
    changesState,
    actionState,
    cleanActionState,
    handleDeleteDriversCompany
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [currentTabItem, setCurrentTabItem] = useState('general')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })

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

  const onDeleteCompany = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DRIVER_COMPANY', 'Are you sure to remove this driver company?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteDriversCompany()
      }
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
          {driversCompany && (
            <ActionSelectorWrapper>
              <DropdownButton
                menuAlign={theme?.rtl ? 'left' : 'right'}
                title={<ThreeDots />}
                id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
              >
                <Dropdown.Item
                  onClick={() => onDeleteCompany()}
                >
                  {t('DELETE', 'Delete')}
                </Dropdown.Item>
              </DropdownButton>
            </ActionSelectorWrapper>
          )}
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
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
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
