import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import Skeleton from 'react-loading-skeleton'
import BsArrowUp from '@meronex/icons/bs/BsArrowUp'

import { DriverCard } from '../DriverCard'

import {
  WrapperDriverAvailable,
  WrapperSkeleton,
  SkeletonCard,
  SkeletonBlock,
  SkeletonCell
} from './styles'

import { Button } from '../../styles/Buttons'

export const DriversModal = (props) => {
  const {
    driversList,
    driverOrders,
    updateOrdersSelectedStatus,
    handleChangeDriverAvailable,
    handleChangeDriverOrders
  } = props

  const [, t] = useLanguage()
  const [driverAvailable, setDriverAvailable] = useState('online')

  const handleDriverAvailable = () => {
    if (driverAvailable === 'online') setDriverAvailable('offline')
    else setDriverAvailable('online')
  }

  useEffect(() => {
    handleChangeDriverAvailable(driverAvailable)
  }, [driverAvailable])

  useEffect(() => {
    console.log('driverlist', driversList)
  }, [driversList])

  return (
    <>
      {!driversList.loading ? (
        <>
          <WrapperDriverAvailable>
            <Button
              color={driverAvailable === 'online' ? 'darkBlue' : 'offline'}
              onClick={() => handleDriverAvailable()}
            >
              <BsArrowUp />
              {driverAvailable === 'online'
                ? t('ONLINE', 'Online')
                : t('OFFLINE', 'Offline')}
            </Button>
          </WrapperDriverAvailable>
          {driversList.drivers.map((driver) => (
            <React.Fragment key={driver.id}>
              {driverAvailable === 'online'
                ? driver.available && (
                  <DriverCard
                    driver={driver}
                    driversList={driversList}
                    driverOrders={driverOrders}
                    updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                    handleChangeDriverOrders={handleChangeDriverOrders}
                  />
                ) : (
                  !driver.available && (
                    <DriverCard
                      offline
                      driver={driver}
                      driversList={driversList}
                      driverOrders={driverOrders}
                      updateOrdersSelectedStatus={updateOrdersSelectedStatus}
                      handleChangeDriverOrders={handleChangeDriverOrders}
                    />
                  )
                )}
            </React.Fragment>
          ))}
        </>
      ) : (
        <WrapperSkeleton>
          {[...Array(6)].map((item, i) => (
            <SkeletonCard key={i}>
              <SkeletonCell>
                <Skeleton width={60} height={60} />
              </SkeletonCell>
              <SkeletonCell>
                <SkeletonBlock>
                  <Skeleton height={20} width={100} />
                  <Skeleton height={20} width={80} />
                </SkeletonBlock>
                <SkeletonBlock>
                  <SkeletonCell>
                    <Skeleton width={50} height={10} />
                    <Skeleton width={40} height={10} />
                  </SkeletonCell>
                  <SkeletonCell>
                    <Skeleton width={50} height={30} />
                  </SkeletonCell>
                </SkeletonBlock>
              </SkeletonCell>
            </SkeletonCard>
          ))}
        </WrapperSkeleton>
      )}
    </>
  )
}
