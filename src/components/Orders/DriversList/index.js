import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { getStarWidth } from '../../../utils'
import { useWindowSize } from '../../../hooks/useWindowSize'
import {
  DriversListContainer,
  DriverCard,
  WrapperImage,
  DriverInfo,
} from './styles'
import { Driver } from './Driver'

export const DriversList = (props) => {
  const {
    loading,
    driversIsOnline,
    onlineDrivers,
    offlineDrivers,
    selectedDriver,
    handleChangeDriver,
    handleOpenDriverOrders,
    hidePhoto,
    showCompressedInfo
  } = props

  const { width } = useWindowSize()

  const handleClickDriver = (e, driver) => {
    const isInvalid = e.target.closest('.driver-orders')
    if (isInvalid) return
    handleChangeDriver(driver)
    const element = document.getElementById('driverDashboard')
    if (width < 993 && element) element.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const onOpenDriverOrdersDetail = (driver) => {
    if (selectedDriver?.id !== driver.id) {
      handleChangeDriver(driver)
    }
    handleOpenDriverOrders(driver)
  }

  return (
    <DriversListContainer showCompressedInfo={showCompressedInfo}>
      {loading ? (
        <>
          {[...Array(10).keys()].map(i => (
            <DriverCard
              key={i}
            >
              {!hidePhoto && (
                <WrapperImage>
                  <Skeleton width={45} height={45} />
                </WrapperImage>
              )}
              <DriverInfo>
                <div>
                  <Skeleton width={100} />
                </div>
                <Skeleton width={100} />
              </DriverInfo>
            </DriverCard>
          ))}
        </>
      ) : (
        <>
          {(driversIsOnline ? onlineDrivers : offlineDrivers).map(driver => (
            <Driver
              key={driver?.id}
              driver={driver}
              handleClickDriver={handleClickDriver}
              selectedDriver={selectedDriver}
              hidePhoto={hidePhoto}
              onOpenDriverOrdersDetail={onOpenDriverOrdersDetail}
              getStarWidth={getStarWidth}
              showCompressedInfo={showCompressedInfo}
            />
          ))}
        </>
      )}
    </DriversListContainer>
  )
}
