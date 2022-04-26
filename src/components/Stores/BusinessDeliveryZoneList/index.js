import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessDeliveryZoneDetails } from '../BusinessDeliveryZoneDetails'
import { SideBar } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'
import { Checkbox } from '../../../styles'

import {
  ZoneContainer,
  DeliveryZonesTable,
  AddDeliveryZoneButton,
  ZoneTbody,
  CheckboxWrapper
} from './styles'

export const BusinessDeliveryZoneList = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    handleSuccessUpdate,
    zoneListState,
    handleChangeZoneState,
    handleChangeAllZoneState
  } = props

  const [, t] = useLanguage()
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [curZone, setCurZone] = useState(null)

  const handleCloseOption = () => {
    setIsOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurZone(null)
  }

  const handleOpenZone = (e, zone) => {
    const isInvalid = e.target.closest('.zone-enabled')
    if (isInvalid) return
    setCurZone(zone)
    setIsExtendExtraOpen(true)
    setIsOpenDetails(true)
  }

  return (
    <>
      <ZoneContainer>
        <DeliveryZonesTable>
          <thead>
            <tr>
              <th>
                <CheckboxWrapper>
                  <Checkbox
                    checked={zoneListState.isCheckAll}
                    onChange={e => handleChangeAllZoneState(e.target.checked)}
                  />
                </CheckboxWrapper>
              </th>
              <th>{t('NAME', 'Name')}</th>
              <th>{t('MINIMUM', 'Minimum')}</th>
              <th>{t('PRICE', 'Price')}</th>
              <th />
            </tr>
          </thead>
          {business?.zones?.filter(zone => zone?.type !== 3).map(zone => (
            <ZoneTbody
              key={zone.id}
              active={zone.id === curZone?.id}
              onClick={(e) => handleOpenZone(e, zone)}
            >
              <tr>
                <td>
                  <CheckboxWrapper className='zone-enabled'>
                    <Checkbox
                      checked={!!zoneListState.changes[zone.id]}
                      onChange={e => handleChangeZoneState(zone.id, e.target.checked)}
                    />
                  </CheckboxWrapper>
                </td>
                <td>{zone?.name}</td>
                <td>{zone?.minimum}</td>
                <td>{zone?.price}</td>
                <td className='arrow'><ChevronRight /></td>
              </tr>
            </ZoneTbody>
          ))}
        </DeliveryZonesTable>

        <AddDeliveryZoneButton
          onClick={(e) => handleOpenZone(e, null)}
        >
          {t('ADD_DELIVERY_ZONE', 'Add delivery zone')}
        </AddDeliveryZoneButton>
      </ZoneContainer>
      {isOpenDetails && (
        <SideBar
          isBorderShow
          open={isOpenDetails}
          onClose={() => handleCloseOption()}
        >
          <BusinessDeliveryZoneDetails
            zone={curZone}
            business={business}
            onClose={() => handleCloseOption()}
            handleSuccessUpdate={handleSuccessUpdate}
            businessZones={business?.zones}
          />
        </SideBar>
      )}
    </>
  )
}
