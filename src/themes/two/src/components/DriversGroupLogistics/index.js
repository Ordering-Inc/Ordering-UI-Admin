import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Circle, RecordCircleFill, ChevronRight } from 'react-bootstrap-icons'
import { Button } from '../../styles'
import { SideBar } from '../SideBar'
import { DriversGroupOrders } from '../DriversGroupOrders'
import { Modal } from '../Modal'
import { useWindowSize } from '../../../../../hooks/useWindowSize'

import {
  LogisticsContainer,
  OrderStatusWrapper,
  RadioButton,
  LogisticsConfigsContainer,
  LogisticsConfigItem
} from './styles'

export const DriversGroupLogistics = (props) => {
  const {
    driversGroup,
    changesState,
    handleChangesState,
    handleParentSidebarMove,
    handleUpdateDriversGroup
  } = props

  const [, t] = useLanguage()
  const { width } = useWindowSize()

  const [showConfig, setShowConfig] = useState(null)
  const [openConfig, setOpenConfig] = useState(false)

  const handleOpenConfig = (option) => {
    setShowConfig(option)
    setOpenConfig(true)
    if (width >= 1200) {
      handleParentSidebarMove(700)
    }
  }

  const handleCloseSidebar = () => {
    handleParentSidebarMove(0)
    setShowConfig(null)
    setOpenConfig(false)
  }

  useEffect(() => {
    if (width < 1200) {
      handleParentSidebarMove(0)
    } else {
      if (openConfig) handleParentSidebarMove(700)
    }
  }, [width, openConfig])

  return (
    <LogisticsContainer>
      <OrderStatusWrapper
        onClick={() => handleChangesState('orders_group_start_in_status', 7)}
      >
        <RadioButton
          active={
            (changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 7) ||
            (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroup?.orders_group_start_in_status === 7)
          }
        >
          {
            ((changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 7) ||
              (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroup?.orders_group_start_in_status === 7)
            )
              ? (
                <RecordCircleFill />
              ) : (
                <Circle />
              )
          }
        </RadioButton>
        <span>{t('ACCEPT_BY_BUSINESS', 'Accepted by Business.')}</span>
      </OrderStatusWrapper>
      <OrderStatusWrapper
        onClick={() => handleChangesState('orders_group_start_in_status', 4)}
      >
        <RadioButton
          active={
            (changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 4) ||
            (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroup?.orders_group_start_in_status === 4)
          }
        >
          {
            ((changesState?.orders_group_start_in_status && changesState?.orders_group_start_in_status === 4) ||
              (typeof changesState?.orders_group_start_in_status === 'undefined' && driversGroup?.orders_group_start_in_status === 4)
            )
              ? (
                <RecordCircleFill />
              ) : (
                <Circle />
              )
          }
        </RadioButton>
        <span>{t('READY_FOR_PICKUP', 'Ready for Pickup')}</span>
      </OrderStatusWrapper>

      <LogisticsConfigsContainer>
        {(changesState?.type === 0 || (typeof changesState?.type === 'undefined' && driversGroup?.type === 0)) && (
          <LogisticsConfigItem
            active={showConfig === 'GROUP_ORDERS'}
            onClick={() => handleOpenConfig('GROUP_ORDERS')}
          >
            <span>{t('GROUP_ORDERS', 'Group Orders')}</span>
            <ChevronRight />
          </LogisticsConfigItem>
        )}
        <LogisticsConfigItem
          active={showConfig === 'AUTOASSIGN_SETTINGS'}
          onClick={() => handleOpenConfig('AUTOASSIGN_SETTINGS')}
        >
          <span>{t('AUTOASSIGN_SETTINGS', 'Autoassign settings')}</span>
          <ChevronRight />
        </LogisticsConfigItem>
        {(changesState?.type === 0 || (typeof changesState?.type === 'undefined' && driversGroup?.type === 0)) && (
          <LogisticsConfigItem
            active={showConfig === 'MARK_DRIVER_BUSY'}
            onClick={() => handleOpenConfig('MARK_DRIVER_BUSY')}
          >
            <span>{t('MARK_DRIVER_BUSY', 'Mark drivers as busy')}</span>
            <ChevronRight />
          </LogisticsConfigItem>
        )}
      </LogisticsConfigsContainer>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={Object.keys(changesState).length === 0}
        onClick={() => handleUpdateDriversGroup(driversGroup.id, changesState)}
      >
        {t('SAVE', 'Save')}
      </Button>

      {width >= 1200 ? (
        <>
          {openConfig && (
            <SideBar
              isBorderShow
              sidebarId='logistic-details'
              defaultSideBarWidth={700}
              open={openConfig}
              onClose={() => handleCloseSidebar()}
            >
              {showConfig === 'GROUP_ORDERS' && (
                <DriversGroupOrders {...props} />
              )}
            </SideBar>
          )}
        </>
      ) : (
        <Modal
          width='70%'
          height='70vh'
          open={openConfig}
          onClose={() => handleCloseSidebar()}
        >
          {showConfig === 'GROUP_ORDERS' && (
            <DriversGroupOrders {...props} />
          )}
        </Modal>
      )}
    </LogisticsContainer>
  )
}
