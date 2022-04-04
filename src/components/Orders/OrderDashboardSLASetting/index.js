import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'
import { Modal, DragScroll } from '../../Shared'
import { useTheme } from 'styled-components'

import {
  SettingContainer,
  SettingHeader,
  SettingControlPanel,
  TabsContainer,
  Tab,
  DeliveryStatusWrapper,
  StatusItems,
  ItemHeader,
  ItemStatus,
  ItemContent,
  IconWrapper,
  Actions,
  TimerInputWrapper,
  OverLine
} from './styles'

export const OrderDashboardSLASetting = (props) => {
  const [, t] = useLanguage()
  const [settingOpen, setSettingOpen] = useState(false)
  const [currentTabItem, setCurrentTabItem] = useState(1)
  const [selectedTabStatus, setSelectedTabStatus] = useState(null)
  const theme = useTheme()

  const defaultOrderTypes = [
    { key: 1, name: t('DELIVERY', 'Delivery') },
    { key: 2, name: t('PICKUP', 'Pickup') },
    { key: 3, name: t('EAT_IN', 'Eat in') },
    { key: 4, name: t('CURBSIDE', 'Curbside') },
    { key: 5, name: t('DRIVE_THRU', 'Drive thru') }
  ]

  const deliveryStatus = [
    {
      key: t('OK', 'Ok'),
      des: t('DELIVERY_OK_STATUS_DESC', 'Get delivery time from the businesses.'),
      timmer: false,
      icon: theme.images.icons?.clock1,
      backColor: '#00D27A'
    },
    {
      key: t('AT_RISK', 'At risk'),
      des: t('DELIVERY_ATRISK_STATUS_DESC', 'Is the time between delivery time of busines and the delayed time.'),
      timmer: false,
      icon: theme.images.icons?.clockRisk,
      backColor: '#FFC700'
    },
    {
      key: t('DELAYED', 'Delayed'),
      des: t('DELIVERY_DELAYED_STATUS_DESC', 'If this time is exceeded, the order will be delayed.'),
      timmer: true,
      icon: theme.images.icons?.clockDelayed,
      backColor: '#E63757'
    }
  ]

  const handleCloseSettings = () => {
    setSettingOpen(false)
  }

  useEffect(() => {
    setSelectedTabStatus(deliveryStatus)
  }, [])

  return (
    <SettingContainer>
      <Button
        color='secundary'
        onClick={() => setSettingOpen(true)}
      >
        {t('SLA_SETTING', 'SLA’s settings')}
      </Button>
      <Modal
        open={settingOpen}
        onClose={() => handleCloseSettings()}
        width='fit-content'
      >
        <SettingControlPanel>
          <SettingHeader>{t('SLA_SETTINGS', 'SLA’s settings')}</SettingHeader>
          <TabsContainer>
            <DragScroll>
              {defaultOrderTypes.map(item => (
                <Tab
                  key={item.key}
                  active={item.key === currentTabItem}
                  onClick={() => setCurrentTabItem(item.key)}
                >
                  {item.name}
                </Tab>
              ))}
            </DragScroll>
          </TabsContainer>
          <DeliveryStatusWrapper>
            {selectedTabStatus && selectedTabStatus.length > 0 && selectedTabStatus.map((item, i) => (
              <StatusBlock key={i} item={item} last={i + 1 === selectedTabStatus.length} />
            ))}
          </DeliveryStatusWrapper>
          <Actions>
            <Button
              color='primary'
            >
              {t('ACCEPT', 'Accept')}
            </Button>
          </Actions>
        </SettingControlPanel>
      </Modal>
    </SettingContainer>
  )
}

export const StatusBlock = (props) => {
  const { item, last } = props
  return (
    <StatusItems className={last ? 'last' : ''}>
      <ItemHeader>
        <IconWrapper>
          <img src={item?.icon} alt='' />
        </IconWrapper>
        <ItemStatus backColor={item?.backColor} />
        <span>{item?.key}</span>
      </ItemHeader>
      <ItemContent>
        <p>{item?.des}</p>
      </ItemContent>
      {item?.timmer && (
        <Timer />
      )}
      {last && (
        <OverLine />
      )}
    </StatusItems>
  )
}

export const Timer = (props) => {
  return (
    <TimerInputWrapper>
      <Input
        placeholder='HH'
        max={2}
      />
      :
      <Input
        placeholder='MM'
        max={2}
      />
    </TimerInputWrapper>
  )
}
