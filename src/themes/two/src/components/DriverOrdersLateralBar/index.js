import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useTheme } from 'styled-components'
import { OrdersManager } from '../OrdersManager'

import {
  LateralBarContainer,
  DriverOrdersContainer,
  CloseButton,
  DriverInfo,
  WrapperImage,
  Image,
  DriverName
} from './styles'

export const DriverOrdersLateralBar = (props) => {
  const {
    open,
    driver
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()

  const { width } = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpenDriverOrderDetails, setIsOpenDriverOrderDetails] = useState(false)

  const actionSidebar = (value) => {
    if (!value) {
      props.onClose()
    }
    setIsMenuOpen(value)
  }

  const handleDriverOrderDetail = (open) => {
    setIsOpenDriverOrderDetails(open)
  }

  const toggleMainContent = () => {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('driver_lateral_bar').style.width = '100vw'
      } else {
        if (isOpenDriverOrderDetails && width >= 1000) {
          document.getElementById('driver_lateral_bar').style.width = '1000px'
        } else {
          document.getElementById('driver_lateral_bar').style.width = '500px'
        }
      }
    }
  }

  useEffect(() => {
    toggleMainContent()
  }, [width])

  useEffect(() => {
    if (!open) return
    actionSidebar(true)
  }, [open])

  useEffect(() => {
    if (width < 1000) return
    if (isOpenDriverOrderDetails) {
      document.getElementById('driver_lateral_bar').style.width = '1000px'
    } else {
      toggleMainContent()
    }
  }, [isOpenDriverOrderDetails])

  return (
    <LateralBarContainer id='driver_lateral_bar'>
      <DriverOrdersContainer>
        <CloseButton
          onClick={() => props.onClose()}
        >
          <MdcClose />
        </CloseButton>
        <DriverInfo>
          <WrapperImage>
            <Image bgimage={optimizeImage(driver?.photo || theme.images?.icons?.noDriver, 'h_200,c_limit')} />
          </WrapperImage>
          <DriverName>
            <p>{driver.name} {driver.lastname}</p>
            <p>{t('DRIVER', 'Driver')}</p>
          </DriverName>
        </DriverInfo>
        <OrdersManager
          isSelectedOrders
          driverId={driver.id}
          handleDriverOrderDetail={handleDriverOrderDetail}
        />
      </DriverOrdersContainer>
    </LateralBarContainer>
  )
}
