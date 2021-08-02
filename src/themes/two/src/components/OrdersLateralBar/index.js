import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useWindowSize } from '../../../../../hooks/useWindowSize'
import MdcClose from '@meronex/icons/mdc/MdcClose'
import { useTheme } from 'styled-components'
import { OrdersManager } from '../OrdersManager'

import {
  LateralBarContainer,
  OrdersContainer,
  CloseButton,
  Info,
  WrapperImage,
  Image,
  Name
} from './styles'

export const OrdersLateralBar = (props) => {
  const {
    open,
    user,
    isDriver,
    isCustomer
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

  const handleCustomOrderDetail = (open) => {
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
      <OrdersContainer>
        <CloseButton
          onClick={() => props.onClose()}
        >
          <MdcClose />
        </CloseButton>
        <Info>
          <WrapperImage>
            <Image bgimage={optimizeImage(user?.photo || theme.images?.icons?.noDriver, 'h_200,c_limit')} />
          </WrapperImage>
          <Name>
            <p>{user?.name} {user?.lastname}</p>
            <p>
              {isDriver && t('DRIVER', 'Driver')}
              {isCustomer && t('CUSTOMER', 'Customer')}
            </p>
          </Name>
        </Info>
        <OrdersManager
          isSelectedOrders
          driverId={isDriver ? user.id : null}
          customerId={isCustomer ? user.id : null}
          handleCustomOrderDetail={handleCustomOrderDetail}
        />
      </OrdersContainer>
    </LateralBarContainer>
  )
}
