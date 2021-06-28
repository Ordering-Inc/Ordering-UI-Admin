import React, { useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
import FiMoreVertical from '@meronex/icons/fi/FiMoreVertical'
import AiFillPlusCircle from '@meronex/icons/ai/AiFillPlusCircle'
import { Switch } from '../../styles/Switch'
import { useTheme } from 'styled-components'
import { DropdownButton, Dropdown } from 'react-bootstrap'

import {
  Container,
  Header,
  DeliveryZonesContainer,
  DeliveryZoneWrapper,
  ZoneName,
  ZoneMin,
  ZonePrice,
  ZoneActions,
  EnableWrapper,
  DropDownWrapper,
  AddDeliveryZoneButton,
  AddButton
} from './styles'
export const BusinessDeliveryZone = (props) => {
  const {
    business
  } = props
  const [, t] = useLanguage()
  const [{ parseNumber }] = useUtils()
  const theme = useTheme()
  const [openAddDeliveryZone, setOpenAddDeliveryZone] = useState(false)
  const ActionIcon = <FiMoreVertical />

  return (
    <>
      <Container>
        <Header>
          <h1>{t('DELIVERY_ZONE', 'Delivery zones')}</h1>
          <BsPlusSquare />
        </Header>
        <DeliveryZonesContainer>
          <DeliveryZoneWrapper>
            <ZoneName>{t('NAME', 'Name')}</ZoneName>
            <ZoneMin>{t('MIN', 'Min')}</ZoneMin>
            <ZonePrice>{t('PRICE', 'Price')}</ZonePrice>
            <ZoneActions>{t('ACTIONS', 'Actions')}</ZoneActions>
          </DeliveryZoneWrapper>
          {business?.zones?.map(zone => (
            <DeliveryZoneWrapper key={zone.id}>
              <ZoneName>{zone?.name}</ZoneName>
              <ZoneMin>{parseNumber(zone?.minimum)}</ZoneMin>
              <ZonePrice>{parseNumber(zone?.price)}</ZonePrice>
              <ZoneActions>
                <EnableWrapper className='business_enable_control'>
                  <span>{t('ENABLE', 'Enable')}</span>
                  <Switch
                    defaultChecked={business?.enabled}
                    onChange={() => console.log('')}
                  />
                </EnableWrapper>
                <DropDownWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={ActionIcon}
                    id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  >
                    <Dropdown.Item>
                      {t('EDIT', 'Edit')}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {t('DELETE', 'Delete')}
                    </Dropdown.Item>
                  </DropdownButton>
                </DropDownWrapper>
              </ZoneActions>
            </DeliveryZoneWrapper>
          ))}
        </DeliveryZonesContainer>
        {!openAddDeliveryZone ? (
          <AddDeliveryZoneButton
            onClick={() => setOpenAddDeliveryZone(true)}
          >
            {t('ADD_DELIVERY_ZONE', 'Add delivery zone')}
          </AddDeliveryZoneButton>
        ) : (
          <DeliveryZoneWrapper>
            <ZoneName>
              <input
                placeholder={t('ZONE_NAME', 'Zone name')}
              />
            </ZoneName>
            <ZoneMin>
              <input
                placeholder={t('MIN', 'Min')}
              />
            </ZoneMin>
            <ZonePrice>
              <input
                placeholder={t('PRICE', 'Price')}
              />
            </ZonePrice>
            <ZoneActions>
              <AddButton>
                <AiFillPlusCircle /> <span>{t('ADD', 'Add')}</span>
              </AddButton>
            </ZoneActions>
          </DeliveryZoneWrapper>
        )}
      </Container>
    </>
  )
}
