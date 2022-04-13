import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useLanguage, CampaignDetail as CampaignDetailController } from 'ordering-components-admin'
import { ThreeDots } from 'react-bootstrap-icons'
import { Confirm, Alert } from '../../Shared'
import { CampaignDetailGeneral } from '../CampaignDetailGeneral'
import { CampaignDetailContent } from '../CampaignDetailContent'

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

const CampaignDetailUI = (props) => {
  const {
    isAddMode,
    formState,
    campaignState,
    handleDeleteCampaign
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedOption, setSelectedOption] = useState('general')

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

  useEffect(() => {
    if (!formState?.error || formState.loading) return
    setAlertState({
      open: true,
      content: formState?.error
    })
  }, [formState?.error])

  return (
    <>
      <CampaignDetailContainer>
        <DetailsHeader>
          <LeftHeader>
            {(formState?.changes?.name || campaignState?.campaign?.name) && (
              <CampaignName>{formState?.changes?.name ?? campaignState?.campaign?.name}</CampaignName>
            )}
          </LeftHeader>
          {!isAddMode && (
            <RightHeader>
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
            </RightHeader>
          )}
        </DetailsHeader>
        <Tabs>
          {contentOptionList.map(option => (
            <Tab
              key={option.key}
              active={selectedOption === option.key}
              onClick={() => setSelectedOption(option.key)}
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
