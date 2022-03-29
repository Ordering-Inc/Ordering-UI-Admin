import React, { useState } from 'react'
import {
  useLanguage,
  BusinessDeliveryZone as BusinessDeliveryZoneController
} from 'ordering-components-admin'
import { BusinessDeliveryZoneInformation } from '../BusinessDeliveryZoneInformation'
import { ThreeDots } from 'react-bootstrap-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useTheme } from 'styled-components'
import { Confirm } from '../../Shared'

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
    zoneState,
    formState,
    handleChangeInput,
    handleChangeFormState,
    handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone,
    handleDeleteBusinessDeliveryZone
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [selectedMenuOption, setSelectedMenuOption] = useState('information')
  const tabs = [
    { key: 'information', content: t('INFORMATION', 'Information') }
    // { key: 'channels', content: t('CHANNELS', 'Channels') },
    // { key: 'share_with', content: t('SHARE_WITH', 'Share with') }
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

  return (
    <>
      <Container>
        <Header>
          <h1>
            {zoneState?.zone ? zoneState?.zone?.name : t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')}
          </h1>
          <ActionSelectorWrapper>
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
              onClick={() => setSelectedMenuOption(tab.key)}
            >
              {tab.content}
            </Tab>
          ))}
        </TabContainer>

        {selectedMenuOption === 'information' && (
          <BusinessDeliveryZoneInformation
            business={business}
            zone={zoneState.zone}
            formState={formState}
            handleChangeInput={handleChangeInput}
            handleChangeFormState={handleChangeFormState}
            handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
            handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
          />
        )}
      </Container>
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
