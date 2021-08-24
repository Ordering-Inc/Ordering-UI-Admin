import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Switch } from '../../styles'
import { DragScroll } from '../DragScroll'
import { DriversGroupGeneralForm } from '../DriversGroupGeneralForm'
import { DriversGroupBusinesses } from '../DriversGroupBusinesses'

import {
  DetailsContainer,
  Header,
  MenusContainer,
  Tab
} from './styles'

export const DriversGroupDetails = (props) => {
  const {
    driversGroup
  } = props

  const [, t] = useLanguage()
  const [showMenu, setShowMenu] = useState('general')
  const [useAdvanced, setUseAdvanced] = useState(true)
  const [driversGroupMenus, setDriversGroupMenus] = useState([])
  useEffect(() => {
    const _driversGroupMenus = useAdvanced
      ? [
        { key: 'general', value: t('GENERAL', 'General') },
        { key: 'drivers', value: t('DRIVERS', 'Drivers') },
        { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
        { key: 'payment_methods', value: t('PAYMENT_METHODS', 'Payment methods') },
        { key: 'advanced_logistics', value: t('ADVANCED_LOGISTICS', 'Advanced logistics') }
      ]
      : [
        { key: 'general', value: t('GENERAL', 'General') },
        { key: 'drivers', value: t('DRIVERS', 'Drivers') },
        { key: 'businesses', value: t('BUSINESSES', 'Businesses') },
        { key: 'payment_methods', value: t('PAYMENT_METHODS', 'Payment methods') }
      ]
    setDriversGroupMenus(_driversGroupMenus)
  }, [useAdvanced])

  return (
    <>
      <DetailsContainer>
        <Header>
          <h1>{driversGroup?.name}</h1>
          <Switch
            defaultChecked={driversGroup?.enabled}
          />
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
        {showMenu === 'general' && (
          <DriversGroupGeneralForm
            {...props}
            useAdvanced={useAdvanced}
            setUseAdvanced={setUseAdvanced}
          />
        )}
        {showMenu === 'businesses' && (
          <DriversGroupBusinesses {...props} />
        )}
      </DetailsContainer>
    </>
  )
}
