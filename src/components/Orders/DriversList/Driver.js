import React from 'react'
import { DriverCard, DriverInfo, Image, WrapperImage, WrapperStar } from './styles'
import BsDot from '@meronex/icons/bs/BsDot'
import { LinkButton } from '../../../styles'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'

const DriverPropsAreEqual = (prevProps, nextProps) => {
  return JSON.stringify(prevProps.driver) === JSON.stringify(nextProps.driver) &&
  prevProps?.selectedDriver?.id === nextProps?.selectedDriver?.id
}

export const Driver = React.memo((props) => {
  const {
    driver,
    handleClickDriver,
    selectedDriver,
    hidePhoto,
    onOpenDriverOrdersDetail,
    getStarWidth,
    showCompressedInfo
  } = props

  const theme = useTheme()
  const [{ optimizeImage }] = useUtils()
  const [, t] = useLanguage()

  return (
    <DriverCard
      key={driver.id}
      onClick={(e) => handleClickDriver(e, driver)}
      active={selectedDriver?.id === driver.id}
      showCompressedInfo={showCompressedInfo}
    >
      {!hidePhoto && (
        <WrapperImage>
          <Image bgimage={optimizeImage(driver?.photo || theme.images?.icons?.noDriver, 'h_50,c_limit')} />
        </WrapperImage>
      )}
      <DriverInfo hidePhoto={hidePhoto} showCompressedInfo={showCompressedInfo}>
        <div className='driver-info-container'>
          <p className='name'>{driver.name} {driver.lastname}</p>
          <BsDot />
          <div>
            <LinkButton
              className='driver-orders'
              disabled={!driver?.assigned_orders_count || driver?.assigned_orders_count === 0}
              onClick={() => onOpenDriverOrdersDetail(driver)}
            >
              {driver?.assigned_orders_count} {t('ORDERS', 'Orders')}
            </LinkButton>
            <span className='text-red'>{(driver?.busy && `(${t('BUSY', 'Busy')})`)}</span>
          </div>
        </div>
        {driver?.qualification && (
          <WrapperStar width={getStarWidth(driver?.qualification)} />
        )}
      </DriverInfo>
    </DriverCard>
  )
}, DriverPropsAreEqual)
