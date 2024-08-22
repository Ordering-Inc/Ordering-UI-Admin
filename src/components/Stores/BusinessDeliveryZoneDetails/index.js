import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useLanguage,
  BusinessDeliveryZone as BusinessDeliveryZoneController
} from 'ordering-components-admin'
import { BusinessDeliveryZoneInformation } from '../BusinessDeliveryZoneInformation'
import { BusinessDeliveryZoneShare } from '../BusinessDeliveryZoneShare'
import { SnoozeComponent } from '../SnoozeComponent'
import { ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Button } from '../../../styles'
import { Confirm, Modal } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  Container,
  Header,
  TabContainer,
  Tab,
  ActionSelectorWrapper
} from './styles'

const BusinessDeliveryZoneDetailsUI = (props) => {
  const {
    business,
    businessZones,
    zoneState,
    formState,
    handleChangeInput,
    handleChangeFormState,
    handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone,
    handleDeleteBusinessDeliveryZone,
    kmlData,
    handleUploadKmlFiles,
    handleSuccessUpdate
  } = props

  const query = new URLSearchParams(useLocation().search)
  const theme = useTheme()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [isDeliveryZoneSnooze, setIsDeliveryZoneSnooze] = useState(false)
  const [selectedMenuOption, setSelectedMenuOption] = useState('information')
  const tabs = [
    { key: 'information', content: t('INFORMATION', 'Information') },
    { key: 'share_with', content: t('SHARE_WITH', 'Share with') }
    // { key: 'channels', content: t('CHANNELS', 'Channels') },
  ]

  const onClickDelete = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DELIVERYZONE', 'Are you sure that you want to delete this delivery zone?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteBusinessDeliveryZone()
      }
    })
  }

  const handleTabClick = (zoneTab, isInitialRender) => {
    setSelectedMenuOption(zoneTab)
    if (!isInitialRender) {
      addQueryToUrl({ zone_tab: zoneTab })
    }
  }

  useEffect(() => {
    const zoneTab = query.get('zone_tab')
    if (zoneTab) {
      handleTabClick(zoneTab, true)
    } else {
      handleTabClick('information')
    }
  }, [])

  return (
    <>
      <Container>
        <Header>
          <h1>
            {zoneState?.zone ? zoneState?.zone?.name : t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')}
          </h1>
          <ActionSelectorWrapper>
            <Button
              className='snooze'
              color='lightGreen'
              borderRadius='8px'
              onClick={() => setIsDeliveryZoneSnooze(true)}
            >
              {t('SNOOZE', 'Snooze')}
            </Button>
            <DropdownButton
              menuAlign={theme?.rtl ? 'left' : 'right'}
              title={<ThreeDots />}
              id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
            >
              <Dropdown.Item
                onClick={() => onClickDelete()}
              >
                {t('DELETE', 'Delete')}
              </Dropdown.Item>
            </DropdownButton>
          </ActionSelectorWrapper>
        </Header>
        <TabContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.key}
              active={selectedMenuOption === tab.key}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.content}
            </Tab>
          ))}
        </TabContainer>

        {selectedMenuOption === 'information' && (
          <BusinessDeliveryZoneInformation
            business={business}
            zone={zoneState.zone}
            businessZones={businessZones}
            formState={formState}
            handleChangeInput={handleChangeInput}
            handleChangeFormState={handleChangeFormState}
            handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
            handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
            kmlData={kmlData}
            handleUploadKmlFiles={handleUploadKmlFiles}
          />
        )}

        {selectedMenuOption === 'share_with' && (
          <BusinessDeliveryZoneShare
            business={business}
            zone={zoneState.zone}
            handleSuccessUpdate={handleSuccessUpdate}
          />
        )}
      </Container>
      <Modal
        width='85%'
        maxWidth='1000px'
        open={isDeliveryZoneSnooze}
        onClose={() => setIsDeliveryZoneSnooze(false)}
        closeOnBackdrop={false}
      >
        <SnoozeComponent
          dataState={zoneState?.zone}
          handleUpdate={handleUpdateBusinessDeliveryZone}
          handleChangeFormState={handleChangeFormState}
          formState={formState}
          onClose={() => setIsDeliveryZoneSnooze(false)}
        />
      </Modal>
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

export const BusinessDeliveryZoneDetails = (props) => {
  const businessDeliveryZoneProps = {
    ...props,
    UIComponent: BusinessDeliveryZoneDetailsUI
  }
  return <BusinessDeliveryZoneController {...businessDeliveryZoneProps} />
}
