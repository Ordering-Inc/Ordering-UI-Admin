import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useLanguage,
  DriversCompanyDetails as DriversCompanyDetailsController
} from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { Alert, Confirm, DragScroll } from '../../Shared'

import { DriversCompanyGeneralDetails } from '../DriversCompanyGeneralDetails'
import { DriversCompanyScheduleDetails } from '../DriversCompanyScheduleDetails'
import { DriversCompanyWebhooksDetails } from '../DriversCompanyWebhooksDetails'
import { addQueryToUrl } from '../../../utils'

import {
  DetailsContainer,
  Header,
  TabsContainer,
  Tab,
  ActionSelectorWrapper,
  RightHeader
} from './styles'
import { IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

const DriversCompanyDetailsFormUI = (props) => {
  const {
    companyState,
    changesState,
    actionState,
    cleanActionState,
    handleDeleteDriversCompany
  } = props

  const query = new URLSearchParams(useLocation().search)
  const [, t] = useLanguage()
  const theme = useTheme()
  const { width } = useWindowSize()
  const [currentTabItem, setCurrentTabItem] = useState('general')
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isExpand, setIsExpand] = useState(false)

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

  const expandSidebar = () => {
    const element = document.getElementById('city-details')
    if (!element) return
    if (isExpand) element.style.width = '550px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (!actionState.loading && actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error || [t('ERROR')]
      })
    }
  }, [actionState])

  const handleTabClick = (tab, isInitialRender) => {
    setCurrentTabItem(tab)
    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(currentTabItem)
    }
  }, [])

  return (
    <>
      <DetailsContainer>
        <Header>
          <h1>
            {
              companyState.company
                ? changesState?.name ?? companyState.company?.name ?? ''
                : t('DRIVER_COMPANY_SETTINGS', 'Driver company settings')
            }
          </h1>
          <RightHeader>
            {width > 576 && (
              <IconButton
                color='black'
                onClick={expandSidebar}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
            {companyState.company && (
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
          </RightHeader>
        </Header>
        <TabsContainer>
          <DragScroll>
            {tabItems.map(item => (
              <Tab
                key={item.key}
                active={item.key === currentTabItem}
                onClick={() => handleTabClick(item.key)}
              >
                {item.content}
              </Tab>
            ))}
          </DragScroll>
        </TabsContainer>

        {currentTabItem === 'general' && (
          <DriversCompanyGeneralDetails
            {...props}
            driversCompany={companyState.company}
          />
        )}
        {currentTabItem === 'schedule' && (
          <DriversCompanyScheduleDetails
            {...props}
            driversCompany={companyState.company}
          />
        )}
        {currentTabItem === 'webhooks' && (
          <DriversCompanyWebhooksDetails
            {...props}
            driversCompany={companyState.company}
          />
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
