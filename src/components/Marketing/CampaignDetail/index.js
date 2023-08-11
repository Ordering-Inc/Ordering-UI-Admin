import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useLanguage, CampaignDetail as CampaignDetailController } from 'ordering-components-admin'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { Confirm, Alert } from '../../Shared'
import { CampaignDetailGeneral } from '../CampaignDetailGeneral'
import { CampaignEmail } from '../CampaignEmail'
import { CampaignSMS } from '../CampaignSMS'
import { CampaignWhatsapp } from '../CampaignWhatsapp'
import { CampaignNotification } from '../CampaignNotification'
import { CampaignPopup } from '../CampaignPopup'
import { CampaignWebHook } from '../CampaignWebHook'
import { addQueryToUrl } from '../../../utils'
import { IconButton, Button } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  CampaignDetailContainer,
  DetailsHeader,
  LeftHeader,
  CampaignName,
  RightHeader,
  ActionSelectorWrapper,
  Tabs,
  Tab,
  ContactWrapper
} from './styles'

const CampaignDetailUI = (props) => {
  const {
    isAddMode,
    formState,
    campaignState,
    handleDeleteCampaign,
    contactState
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedOption, setSelectedOption] = useState('general')
  const [isExpand, setIsExpand] = useState(false)

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const contentOptionList = [
    { key: 'general', name: t('GENERAL', 'General') },
    { key: 'content', name: t('CONTENT', 'Content') }
  ]

  const onClickDeteteCampaign = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ITEM', 'Are you sure to delete this _item_?').replace('_item_', t('CAMPAIGN', 'Campaign')),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteCampaign()
      }
    })
  }

  const expandSidebar = () => {
    const element = document.getElementById('campaignDetail')
    if (!element) return
    if (isExpand) element.style.width = '550px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (!formState?.error || formState.loading) return
    setAlertState({
      open: true,
      content: formState?.error
    })
  }, [formState?.error])

  const handleTabClick = (tab, isInitialRender) => {
    setSelectedOption(tab)

    if (!isInitialRender) {
      addQueryToUrl({ tab: tab })
    }
  }

  useEffect(() => {
    const tab = query.get('tab')
    if (tab) {
      handleTabClick(tab, true)
    } else {
      handleTabClick(selectedOption)
    }
  }, [])

  return (
    <>
      <CampaignDetailContainer>
        <DetailsHeader>
          <LeftHeader>
            {(formState?.changes?.name || campaignState?.campaign?.name) && (
              <CampaignName>{formState?.changes?.name ?? campaignState?.campaign?.name}</CampaignName>
            )}
          </LeftHeader>
          <RightHeader>
            {width > 576 && (
              <IconButton
                color='black'
                onClick={expandSidebar}
              >
                {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
              </IconButton>
            )}
            {!isAddMode && (
              <ActionSelectorWrapper>
                <DropdownButton
                  menuAlign={theme?.rtl ? 'left' : 'right'}
                  title={<ThreeDots />}
                  id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                >
                  {/* <Dropdown.Item onClick={() => handleAddCampaign(true)}>
                    {t('DUPLICATE', 'Duplicate')}
                  </Dropdown.Item> */}
                  <Dropdown.Item onClick={onClickDeteteCampaign}>
                    {t('DELETE', 'Delete')}
                  </Dropdown.Item>
                </DropdownButton>
              </ActionSelectorWrapper>
            )}
          </RightHeader>
        </DetailsHeader>
        <Tabs>
          {contentOptionList.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => handleTabClick(option.key)}
            >
              {option.name}
            </Tab>
          ))}
        </Tabs>
        {selectedOption === 'general' && <CampaignDetailGeneral {...props} />}
        {selectedOption === 'content' && (
          <div>
            <ContactWrapper>
              <p>{t('IF_YOU_NEED_HELP_WITH_SETUP_CONTACT_SUPPORT_TEAM', 'If you need help with your setup, contact our support team.')}</p>
              <Button color='primary' outline onClick={() => window.open('https://www.ordering.co/contact-ordering', '_blank')}>{t('TECH_SUPPORT', 'Tech Support')}</Button>
            </ContactWrapper>

            {contactState?.changes?.contact_type === 'email' && <CampaignEmail {...props} />}
            {contactState?.changes?.contact_type === 'sms' && <CampaignSMS {...props} />}
            {contactState?.changes?.contact_type === 'whatsapp' && <CampaignWhatsapp {...props} />}
            {contactState?.changes?.contact_type === 'notification' && <CampaignNotification {...props} />}
            {contactState?.changes?.contact_type === 'popup' && <CampaignPopup {...props} />}
            {contactState?.changes?.contact_type === 'webhook' && <CampaignWebHook {...props} />}
          </div>
        )}
      </CampaignDetailContainer>
      <Alert
        title={t('CAMPAIGN', 'Campaign')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
      <Confirm
        width='700px'
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

export const CampaignDetail = (props) => {
  const campaignDetailProps = {
    ...props,
    UIComponent: CampaignDetailUI
  }
  return <CampaignDetailController {...campaignDetailProps} />
}
