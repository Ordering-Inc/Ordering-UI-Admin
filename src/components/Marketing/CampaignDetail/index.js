import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useLanguage, CampaignDetail as CampaignDetailController } from 'ordering-components-admin'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { Confirm, Alert } from '../../Shared'
import { CampaignDetailGeneral } from '../CampaignDetailGeneral'
import { CampaignDetailContent } from '../CampaignDetailContent'
import { addQueryToUrl } from '../../../utils'

import {
  CampaignDetailContainer,
  DetailsHeader,
  LeftHeader,
  CampaignName,
  RightHeader,
  ActionSelectorWrapper,
  Tabs,
  Tab
} from './styles'
import { IconButton } from '../../../styles'
import { useWindowSize } from '../../../hooks/useWindowSize'

const CampaignDetailUI = (props) => {
  const {
    isAddMode,
    formState,
    campaignState,
    handleDeleteCampaign
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
        {selectedOption === 'content' && <CampaignDetailContent {...props} />}
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
