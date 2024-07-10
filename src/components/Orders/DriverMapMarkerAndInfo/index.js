import React, { useRef, useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'

import {
  WrapperMapMarker,
  MapMarkerImg,
  DriverInfo,
  TextContainer,
  Text
} from './styles'

const DriverMapMarkerPropsAreEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.driver) === JSON.stringify(nextProps.driver) &&
  prevProps.timeStatus === nextProps.timeStatus
}

export const DriverMapMarkerAndInfo = React.memo((props) => {
  const {
    driver,
    timeStatus
  } = props
  const [, t] = useLanguage()
  const theme = useTheme()
  const [{ parseDate, optimizeImage }] = useUtils()
  const [infoShow, setInfoShow] = useState(false)
  const infoRef = useRef(null)
  const [infoTop, setInfoTop] = useState('0px')

  useEffect(() => {
    if (!infoShow) return
    setInfoTop(`-${infoRef.current.scrollHeight + 55}px`)
  }, [infoShow])

  return (
    <>
      {infoShow && (
        <DriverInfo ref={infoRef} style={{ transform: `translate(-50%, ${infoTop})` }}>
          <TextContainer>
            <Text fontWeight='bold'>
              {t('NAME', 'Name')}:
            </Text>
            <Text>{driver.name} {driver.lastname}</Text>
          </TextContainer>
          {driver?.last_order_assigned_at && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('LAST_ORDER_AT', 'Last order at')}:
              </Text>
              <Text>{parseDate(driver.last_order_assigned_at)}</Text>
            </TextContainer>
          )}
          {driver?.drivergroups?.length > 0 && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('DRIVER_GROUP', 'Driver group')}:
              </Text>
              {driver.drivergroups.map(group => (
                <Text key={group.id}>{group.name},</Text>
              ))}
            </TextContainer>
          )}
          {driver?.last_location_at && (
            <TextContainer>
              <Text fontWeight='bold'>
                {t('LAST_LOCATION', 'Last location')}:
              </Text>
              <Text>{parseDate(driver.last_location_at)}</Text>
            </TextContainer>
          )}
        </DriverInfo>
      )}
      <WrapperMapMarker
        offline={!(driver.enabled && driver.available && !driver.busy)}
        onMouseOver={() => setInfoShow(true)}
        onMouseLeave={() => setInfoShow(false)}
        borderColor={timeStatus === 'delayed'
          ? '#E63757'
          : !driver?.available
            ? '#6c757d'
            : driver.busy
              ? '#007bff'
              : '#28a745'}
      >
        {driver.photo ? (
          <MapMarkerImg bgimage={optimizeImage(driver.photo, 'h_50,c_limit')} />
        ) : (
          <MapMarkerImg bgimage={theme?.images?.icons?.noDriver} />
        )}
      </WrapperMapMarker>
    </>
  )
}, DriverMapMarkerPropsAreEqual)
