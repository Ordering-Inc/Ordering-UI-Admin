import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { XLg, ArrowsAngleExpand, ArrowsAngleContract } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { OrdersManager } from '../OrdersManager'
import { IconButton } from '../../../styles/Buttons'

import {
  LateralBarContainer,
  OrdersContainer,
  CloseButtonWrapper,
  Info,
  WrapperImage,
  Image,
  Name
} from './styles'

export const OrdersLateralBar = (props) => {
  const {
    open,
    user,
    business,
    isDriver,
    isCustomer,
    isBusiness
  } = props

  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const theme = useTheme()
  const { width } = useWindowSize()

  const [isExpand, setIsExpand] = useState(false)
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
          document.getElementById('driver_lateral_bar').style.width = '1100px'
        } else {
          document.getElementById('driver_lateral_bar').style.width = '600px'
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
      document.getElementById('driver_lateral_bar').style.width = '1100px'
    } else {
      toggleMainContent()
    }
  }, [isOpenDriverOrderDetails])

  const onCloseSidebar = (e) => {
    if (e.code === 'Escape' && width >= 1000) {
      props.onClose() && props.onClose()
    }
  }

  const expandSideBar = () => {
    const element = document.getElementById('driver_lateral_bar')
    if (!element) return

    if (isExpand) element.style.width = '500px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', onCloseSidebar)
    return () => document.removeEventListener('keydown', onCloseSidebar)
  }, [open])

  return (
    <LateralBarContainer id='driver_lateral_bar'>
      <OrdersContainer>
        <CloseButtonWrapper>
          {width > 576 && (
            <IconButton
              color='black'
              onClick={() => expandSideBar()}
            >
              {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
            </IconButton>
          )}
          <IconButton
            color='black'
            onClick={() => props.onClose()}
          >
            <XLg />
          </IconButton>
        </CloseButtonWrapper>
        <Info>
          <WrapperImage>
            {isBusiness ? (
              <Image bgimage={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} />
            ) : (
              <Image bgimage={optimizeImage(user?.photo || theme.images?.icons?.noDriver, 'h_50,c_limit')} />
            )}
          </WrapperImage>
          <Name>
            <p>
              {isBusiness ? (
                business.name
              ) : (
                <>{user?.name} {user?.lastname}</>
              )}
            </p>
            <p>
              {isDriver && t('DRIVER', 'Driver')}
              {isCustomer && t('CUSTOMER', 'Customer')}
              {isBusiness && t('BUSINESS', 'Business')}
            </p>
          </Name>
        </Info>
        <OrdersManager
          isLateralBar
          isSelectedOrders
          driverId={isDriver ? user.id : null}
          customerId={isCustomer ? user.id : null}
          businessId={isBusiness ? business.id : null}
          handleCustomOrderDetail={handleCustomOrderDetail}
          disableSocketRoomDriver
        />
      </OrdersContainer>
    </LateralBarContainer>
  )
}
