import React, { useEffect, useState } from 'react'
import {
  useLanguage,
  useConfig,
  DriversGroupDetails as DriversGroupDetailsController
} from 'ordering-components-admin'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ArrowsAngleContract, ArrowsAngleExpand, ThreeDots } from 'react-bootstrap-icons'
import { useTheme } from 'styled-components'
import { IconButton, Switch } from '../../../styles'
import { Alert, Confirm, DragScroll } from '../../Shared'
import { DriversGroupGeneralForm } from '../DriversGroupGeneralForm'
import { DriversGroupBusinesses } from '../DriversGroupBusinesses'
import { DriversGroupPaymethods } from '../DriversGroupPaymethods'
import { DriversGroupLogistics } from '../DriversGroupLogistics'
import { DriversGroupLogs } from '../DriversGroupLogs'
import { DriverGroupDeliveryDetails } from '../DriversGroupDeliveryDetails'
import { useWindowSize } from '../../../hooks/useWindowSize'

import {
  DetailsContainer,
  Header,
  MenusContainer,
  Tab,
  ActionSelectorWrapper,
  RightHeader
} from './styles'

const DriversGroupDetailsUI = (props) => {
  const {
    driversGroupState,
    actionState,
    handleParentSidebarMove,
    handleDeleteDriversGroup,
    handleNextTour,
    handleUpdateDriversGroup,
    setIsExtendExtraOpen
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const { width } = useWindowSize()
  const [configState] = useConfig()

  const autoAssignType = configState?.configs?.autoassign_type?.value

  const [showMenu, setShowMenu] = useState('general')
  const [useAdvanced, setUseAdvanced] = useState(false)
  const [driversGroupMenus, setDriversGroupMenus] = useState([])
  const [confirm, setConfirm] = useState({ open: false, content: null, handleOnAccept: null })
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [isExpand, setIsExpand] = useState(false)

  useEffect(() => {
    const _driversGroupMenus = !driversGroupState.driversGroup
      ? [
        { key: 'general', value: t('GENERAL', 'General') },
        { key: 'businesses', value: t('BUSINESSES', 'Businesses') }
      ]
      : (useAdvanced && autoAssignType !== 'basic')
        ? [
          { key: 'general', value: t('GENERAL', 'General') },
          { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
          { key: 'delivery_zones', value: t('DELIVERY_ZONES', 'Delivery Zones') },
          { key: 'paymethods', value: t('PAYMENT_METHODS', 'Payment methods') },
          { key: 'advanced_logistics', value: t('ADVANCED_LOGISTICS', 'Advanced logistics') },
          { key: 'logs', value: t('LOGS', 'Logs') }
        ]
        : [
          { key: 'general', value: t('GENERAL', 'General') },
          { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
          { key: 'delivery_zones', value: t('DELIVERY_ZONES', 'Delivery Zones') },
          { key: 'paymethods', value: t('PAYMENT_METHODS', 'Payment methods') },
          { key: 'logs', value: t('LOGS', 'Logs') }
        ]
    setDriversGroupMenus(_driversGroupMenus)
  }, [useAdvanced, driversGroupState?.driversGroup])

  const onDeleteGroup = () => {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_DRIVER_GROUP', 'Are you sure to remove this driver group?'),
      handleOnAccept: () => {
        setConfirm({ ...confirm, open: false })
        handleDeleteDriversGroup()
      }
    })
  }

  useEffect(() => {
    if (width > 1000) setIsExtendExtraOpen(false)
  }, [width])

  const handleNextClick = () => {
    setShowMenu('businesses')
    handleNextTour()
  }

  const expandSidebar = () => {
    const element = document.getElementById('driver_group_details')
    if (!element) return
    if (isExpand) element.style.width = '540px'
    else element.style.width = '100vw'
    setIsExpand(prev => !prev)
  }

  useEffect(() => {
    setUseAdvanced(!(driversGroupState.driversGroup?.autoassign_amount_drivers === 0 && driversGroupState.driversGroup?.orders_group_max_orders === 0))
  }, [driversGroupState.driversGroup])

  useEffect(() => {
    handleParentSidebarMove(0)
    setIsOpenDetails(false)
    setIsExtendExtraOpen(false)
  }, [showMenu, driversGroupState.driversGroup?.id])

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  return (
    <>
      <DetailsContainer>
        <Header>
          {driversGroupState.driversGroup ? (
            <>
              <div>
                <h1>{driversGroupState.driversGroup?.name}</h1>
                <Switch
                  defaultChecked={driversGroupState.driversGroup?.enabled}
                  onChange={enabled => handleUpdateDriversGroup({ enabled: enabled })}
                />
              </div>
              <RightHeader>
                {width > 576 && (
                  <IconButton
                    color='black'
                    onClick={expandSidebar}
                  >
                    {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                  </IconButton>
                )}
                <ActionSelectorWrapper>
                  <DropdownButton
                    menuAlign={theme?.rtl ? 'left' : 'right'}
                    title={<ThreeDots />}
                    id={theme?.rtl ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'}
                  >
                    <Dropdown.Item
                      onClick={() => onDeleteGroup()}
                    >
                      {t('DELETE', 'Delete')}
                    </Dropdown.Item>
                  </DropdownButton>
                </ActionSelectorWrapper>
              </RightHeader>
            </>
          ) : (
            <>
              <div>
                <h1>{t('ADD_NEW_DRIVER_GROUP', 'Add new driver group')}</h1>
              </div>
              {width > 576 && (
                <IconButton
                  color='black'
                  onClick={expandSidebar}
                >
                  {isExpand ? <ArrowsAngleContract /> : <ArrowsAngleExpand />}
                </IconButton>
              )}
            </>
          )}
        </Header>
        <MenusContainer>
          <DragScroll>
            {driversGroupMenus.map(menu => (
              <Tab
                key={menu.key}
                active={menu.key === showMenu}
                onClick={() => setShowMenu(menu.key)}
              >
                {menu.value}
              </Tab>
            ))}
          </DragScroll>
        </MenusContainer>
        {(showMenu === 'general') && (
          <DriversGroupGeneralForm
            {...props}
            useAdvanced={useAdvanced}
            setUseAdvanced={setUseAdvanced}
            handleNextClick={handleNextClick}
          />
        )}
        {showMenu === 'businesses' && (
          <DriversGroupBusinesses {...props} />
        )}
        {showMenu === 'paymethods' && (
          <DriversGroupPaymethods {...props} />
        )}
        {showMenu === 'advanced_logistics' && (
          <DriversGroupLogistics {...props} />
        )}
        {showMenu === 'logs' && (
          <DriversGroupLogs driversGroupId={driversGroupState.driversGroup?.id} />
        )}
        {showMenu === 'delivery_zones' && (
          <DriverGroupDeliveryDetails
            {...props}
            handleParentSidebarMove={handleParentSidebarMove}
            drivergroup={driversGroupState.driversGroup}
            setIsExtendExtraOpen={setIsExtendExtraOpen}
            setIsOpenDetails={setIsOpenDetails}
            isOpenDetails={isOpenDetails}
          />
        )}
      </DetailsContainer>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
      <Confirm
        title={t('WEB_APPNAME', 'Ordering')}
        content={confirm.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={confirm.open}
        onClose={() => setConfirm({ ...confirm, open: false })}
        onCancel={() => setConfirm({ ...confirm, open: false })}
        onAccept={confirm.handleOnAccept}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const DriversGroupDetails = (props) => {
  const driversGroupDetailsProps = {
    ...props,
    UIComponent: DriversGroupDetailsUI
  }
  return <DriversGroupDetailsController {...driversGroupDetailsProps} />
}
