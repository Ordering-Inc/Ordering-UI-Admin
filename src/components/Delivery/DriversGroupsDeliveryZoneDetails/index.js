import React, { useState } from 'react'
import {
  useLanguage,
  DriverGroupDeliveryZone as DriverGroupDeliveryZoneController
} from 'ordering-components-admin'
import { DriverGroupDeliveryZoneInformation } from '../DriversGroupDeliveryZoneInformation'
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

const DriverGroupDeliveryZoneDetailsUI = (props) => {
  const {
    drivergroup,
    driverGroupsZones,
    zoneState,
    formState,
    handleChangeInput,
    handleChangeFormState,
    handleUpdateDriverGroupDeliveryZone,
    handleAddDriverGroupDeliveryZone,
    handleDeleteDriverGroupDeliveryZone,
    handleUploadKmlFiles,
    kmlData
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [selectedMenuOption, setSelectedMenuOption] = useState('information')
  const tabs = [
    { key: 'information', content: t('INFORMATION', 'Information') }
  ]

  const onClickDelete = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DELIVERYZONE', 'Are you sure that you want to delete this delivery zone?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteDriverGroupDeliveryZone()
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
          {tabs?.map(tab => (
            <Tab
              key={tab?.key}
              active={selectedMenuOption === tab?.key}
              onClick={() => setSelectedMenuOption(tab?.key)}
            >
              {tab?.content}
            </Tab>
          ))}
        </TabContainer>

        {selectedMenuOption === 'information' && (
          <DriverGroupDeliveryZoneInformation
            drivergroup={drivergroup}
            zone={zoneState?.zone}
            driverGroupsZones={driverGroupsZones?.zones}
            formState={formState}
            handleChangeInput={handleChangeInput}
            handleChangeFormState={handleChangeFormState}
            handleUpdateDriverGroupDeliveryZone={handleUpdateDriverGroupDeliveryZone}
            handleAddDriverGroupDeliveryZone={handleAddDriverGroupDeliveryZone}
            kmlData={kmlData}
            handleUploadKmlFiles={handleUploadKmlFiles}
          />
        )}
      </Container>
      <Confirm
        width='700px'
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm?.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm?.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DriverGroupDeliveryZoneDetails = (props) => {
  const driverGroupDeliveryZoneProps = {
    ...props,
    UIComponent: DriverGroupDeliveryZoneDetailsUI
  }
  return <DriverGroupDeliveryZoneController {...driverGroupDeliveryZoneProps} />
}
