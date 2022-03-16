import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useLanguage } from 'ordering-components-admin'
import { ThreeDots } from 'react-bootstrap-icons'
import { Confirm } from '../../Shared'
import { CampaignDetail as CampaignDetailController } from './naked'

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
import { CampaignDetailGeneral } from '../CampaignDetailGeneral'

const CampaignDetailUI = (props) => {
  const {
    isAddMode,
    formState,
    campaignState
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()

  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [selectedOption, setSelectedOption] = useState('general')

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
        // handleDeleteRecoveryAction()
      }
    })
  }

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
                  {/* <Dropdown.Item>
                    {t('CUSTOM_FIELDS', 'Custom fields')}
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
        {selectedOption === 'general' && (
          <CampaignDetailGeneral
            {...props}
          />
        )}
      </CampaignDetailContainer>
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
