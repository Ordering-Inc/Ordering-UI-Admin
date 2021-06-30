import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import { AutoScroll } from '../AutoScroll'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { BusinessDeliveryZoneBasic } from '../BusinessDeliveryZoneBasic'

import {
  Container,
  Header,
  TabContainer,
  TabInnerContainer,
  Tab,
  ActionBlock
} from './styles'

export const BusinessDeliveryZoneSetting = (props) => {
  const {
    open,
    onClose,
    business,
    zone,
    handleZoneType,
    handleChangeZoneData,
    handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone,
    isAddValid
  } = props
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedMenuOption, setSelectedMenuOption] = useState('basic')

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
    document.getElementById('zone_setting').style.width = value
      ? width > 489 ? '500px' : '100vw'
      : '0'
  }

  useEffect(() => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('zone_setting').style.width = '100vw'
      } else {
        document.getElementById('zone_setting').style.width = '500px'
      }
    }
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  return (
    <Container id='zone_setting'>
      <Header>
        <h1>{t('ZONE_DELIVERY_SETTINGS', 'Zone delivery settings')}</h1>
        <ActionBlock>
          <MdcClose
            onClick={() => onClose()}
          />
        </ActionBlock>
      </Header>
      <TabContainer>
        <TabInnerContainer>
          <AutoScroll innerScroll scrollId='zone_setting'>
            <Tab
              active={selectedMenuOption === 'basic'}
              onClick={() => setSelectedMenuOption('basic')}
            >
              {t('BASIC', 'Basic')}
            </Tab>
            <Tab
              active={selectedMenuOption === 'enterprise'}
              onClick={() => setSelectedMenuOption('enterprise')}
            >
              {t('ENTERPRISE', 'Enterprise')}
            </Tab>
          </AutoScroll>
        </TabInnerContainer>
      </TabContainer>

      {selectedMenuOption === 'basic' && (
        <BusinessDeliveryZoneBasic
          business={business}
          zone={zone}
          handleZoneType={handleZoneType}
          handleChangeZoneData={handleChangeZoneData}
          handleUpdateBusinessDeliveryZone={handleUpdateBusinessDeliveryZone}
          handleAddBusinessDeliveryZone={handleAddBusinessDeliveryZone}
          isAddValid={isAddValid}
        />
      )}
    </Container>
  )
}
