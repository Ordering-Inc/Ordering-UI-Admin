import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DriverGroupDeliveryZoneDetails } from '../DriversGroupsDeliveryZoneDetails'
import { SideBar } from '../../Shared'
import { ChevronRight } from 'react-bootstrap-icons'
import { Checkbox } from '../../../styles'

import {
  ZoneContainer,
  DeliveryZonesTable,
  AddDeliveryZoneButton,
  ZoneTbody,
  CheckboxWrapper,
  DeliveryZonesTableWrapper,
  CheckSkeleteon,
  InfoBlock
} from './styles'
import Skeleton from 'react-loading-skeleton'

export const DriverGroupDeliveryZoneList = (props) => {
  const {
    drivergroup,
    setIsExtendExtraOpen,
    handleSuccessUpdate,
    zoneListState,
    handleChangeZoneState,
    handleChangeAllZoneState,
    handleParentSidebarMove,
    zoneList,
    setZoneList,
    setIsOpenDetails,
    isOpenDetails
  } = props

  const [, t] = useLanguage()
  const [curZone, setCurZone] = useState(null)

  const handleCloseOption = () => {
    setIsOpenDetails(false)
    setIsExtendExtraOpen(false)
    setCurZone(null)
    handleParentSidebarMove(0)
  }

  const handleOpenZone = (e, zone) => {
    const isInvalid = e.target.closest('.zone-enabled')
    if (isInvalid) return
    setCurZone(zone)
    handleParentSidebarMove(500)
    setIsExtendExtraOpen(true)
    setIsOpenDetails(true)
  }

  return (
    <>
      <ZoneContainer>
        {zoneList.loading ? (
          [...Array(5).keys()].map(i => (
            <DeliveryZonesTableWrapper key={i}>
              <CheckSkeleteon>
                <Skeleton width={18} height={18} />
              </CheckSkeleteon>
              <InfoBlock>
                <Skeleton width='100%' height={18} />
              </InfoBlock>
            </DeliveryZonesTableWrapper>
          ))
        ) : (
          <DeliveryZonesTable>
            <thead>
              <tr>
                <th>
                  <CheckboxWrapper>
                    <Checkbox
                      checked={zoneListState?.isCheckAll}
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
            {zoneList?.zones?.filter(zone => zone?.type !== 3)?.map(zone => (
              <ZoneTbody
                key={zone?.id}
                active={zone?.id === curZone?.id}
                onClick={(e) => handleOpenZone(e, zone)}
              >
                <tr>
                  <td>
                    <CheckboxWrapper className='zone-enabled'>
                      <Checkbox
                        checked={!!zoneListState?.changes[zone.id]}
                        onChange={e => handleChangeZoneState(zone?.id, e?.target?.checked)}
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
        )}
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
          <DriverGroupDeliveryZoneDetails
            zone={curZone}
            setZoneList={setZoneList}
            drivergroup={drivergroup}
            onClose={() => handleCloseOption()}
            handleSuccessUpdate={handleSuccessUpdate}
            driverGroupsZones={zoneList}
          />
        </SideBar>
      )}
    </>
  )
}
