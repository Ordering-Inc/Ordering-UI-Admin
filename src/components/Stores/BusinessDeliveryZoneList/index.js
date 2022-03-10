import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessDeliveryZoneDetails } from '../BusinessDeliveryZoneDetails'
import { SideBar } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'

import {
  ZoneContainer,
  DeliveryZonesTable,
  AddDeliveryZoneButton,
  ZoneTbody
} from './styles'

export const BusinessDeliveryZoneList = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    handleSuccessUpdate
  } = props

  const [, t] = useLanguage()
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [curZone, setCurZone] = useState(null)

  const handleCloseOption = () => {
    setIsOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurZone(null)
  }

  const handleOpenZone = (zone) => {
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
              onClick={() => handleOpenZone(zone)}
            >
              <tr>
                <td>{zone?.name}</td>
                <td>{zone?.minimum}</td>
                <td>{zone?.price}</td>
                <td className='arrow'><ChevronRight /></td>
              </tr>
            </ZoneTbody>
          ))}
        </DeliveryZonesTable>

        <AddDeliveryZoneButton
          onClick={() => handleOpenZone(null)}
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
          />
        </SideBar>
      )}
    </>
  )
}
