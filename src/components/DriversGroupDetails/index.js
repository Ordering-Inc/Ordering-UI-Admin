import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Switch } from '../../styles'
import { DragScroll } from '../DragScroll'
import { DriversGroupGeneralForm } from '../DriversGroupGeneralForm'
import { DriversGroupBusinesses } from '../DriversGroupBusinesses'
import { DriversGroupPaymethods } from '../DriversGroupPaymethods'
import { DriversGroupLogistics } from '../DriversGroupLogistics'
import { DriversGroupLogs } from '../DriversGroupLogs'

import {
  DetailsContainer,
  Header,
  MenusContainer,
  Tab
} from './styles'

export const DriversGroupDetails = (props) => {
  const {
    curDriversGroup,
    handleParentSidebarMove
  } = props

  const [, t] = useLanguage()
  const [showMenu, setShowMenu] = useState('general')
  const [useAdvanced, setUseAdvanced] = useState(false)

  const [driversGroupMenus, setDriversGroupMenus] = useState([])
  useEffect(() => {
    const _driversGroupMenus = useAdvanced
      ? [
        { key: 'general', value: t('GENERAL', 'General') },
        { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
        { key: 'paymethods', value: t('PAYMENT_METHODS', 'Payment methods') },
        { key: 'advanced_logistics', value: t('ADVANCED_LOGISTICS', 'Advanced logistics') },
        { key: 'logs', value: t('LOGS', 'Logs') }
      ]
      : [
        { key: 'general', value: t('GENERAL', 'General') },
        { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
        { key: 'paymethods', value: t('PAYMENT_METHODS', 'Payment methods') },
        { key: 'logs', value: t('LOGS', 'Logs') }
      ]
    setDriversGroupMenus(_driversGroupMenus)
  }, [useAdvanced])

  useEffect(() => {
    setUseAdvanced(!(curDriversGroup?.autoassign_amount_drivers === 0 && curDriversGroup?.orders_group_max_orders === 0))
  }, [curDriversGroup])

  useEffect(() => {
    handleParentSidebarMove(0)
  }, [showMenu])

  return (
    <>
      <DetailsContainer>
        <Header>
          {curDriversGroup ? (
            <>
              <h1>{curDriversGroup?.name}</h1>
              <Switch
                defaultChecked={curDriversGroup?.enabled}
              />
            </>
          ) : (
            <h1>{t('ADD_NEW_DRIVER_GROUP ', 'Add new driver group')}</h1>
          )}
        </Header>
        {curDriversGroup && (
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
        )}
        {(showMenu === 'general' || !curDriversGroup) && (
          <DriversGroupGeneralForm
            {...props}
            useAdvanced={useAdvanced}
            setUseAdvanced={setUseAdvanced}
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
          <DriversGroupLogs driversGroupId={curDriversGroup?.id} />
        )}
      </DetailsContainer>
    </>
  )
}
