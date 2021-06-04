import React from 'react'
import { useUtils, useLanguage } from 'ordering-components-admin'
import Skeleton from 'react-loading-skeleton'
import BsDot from '@meronex/icons/bs/BsDot'
import { useTheme } from 'styled-components'
import { getStarWidth } from '../../../../../utils'
import {
  DriversListContainer,
  DriverCard,
  WrapperImage,
  Image,
  DriverInfo,
  WrapperStar
} from './styles'

export const DriversList = (props) => {
  const { drivers, loading } = props.driversList
  
  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  
  return (
    <DriversListContainer>
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          {drivers.map(driver => (
            <DriverCard
              key={driver.id}
            >
              <WrapperImage>
                <Image bgimage={optimizeImage(driver?.photo || theme.images?.icons?.noDriver, 'h_200,c_limit')} />
              </WrapperImage>
              <DriverInfo>
                <div>
                  <p>{driver.name} {driver.lastname}</p>
                  <BsDot />
                  <span>
                    {driver.assigned_orders_count} {t('ORDERS', 'Orders')}
                  </span>
                </div>
                {driver?.qualification && (
                  <WrapperStar width={getStarWidth(driver?.qualification)} />
                )}
              </DriverInfo>
            </DriverCard>
          ))}
        </>
      )}
    </DriversListContainer>
  )
}
