import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { DriversDashboard } from '../DriversDashboard'
import { OrdersLateralBar } from '../OrdersLateralBar'
import { SearchBar } from '../SearchBar'
import { OrderNotification } from '../OrderNotification'
import {
  DriversHeader,
  DriversContainer,
  DriversContent
} from './styles'

const DriversManagerUI = (props) => {
  const {
    onDriverRedirect,
    handleChangeSearch,
    searchValue
  } = props

  const { drivers, loading } = props.driversList

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDriverOrders, setIsOpenDriverOrders] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState(null)
  const [openDriver, setOpenDriver] = useState(null)

  const handleBackRedirect = () => {
    setIsOpenDriverOrders(false)
    onDriverRedirect()
  }

  const handleChangeDriver = (driver) => {
    if (selectedDriver?.id === driver.id) {
      setSelectedDriver(null)
    } else {
      setSelectedDriver(driver)
    }
  }

  const handleOpenDriverOrders = (driver) => {
    onDriverRedirect(driver?.id)
    setOpenDriver(driver)
    setIsOpenDriverOrders(true)
  }

  useEffect(() => {
    if (loading) return
    const id = query.get('id')
    if (id === null) setIsOpenDriverOrders(false)
    else {
      const driver = drivers.find(_driver => _driver.id === parseInt(id))
      setOpenDriver(driver)
      setIsOpenDriverOrders(true)
    }
  }, [drivers, loading])

  return (
    <>
      <DriversContainer>
        <DriversHeader>
          <h1>{t('DRIVERS_DASHBOARD', 'Drivers dashboard')}</h1>
          <SearchBar
            isCustomLayout
            onSearch={handleChangeSearch}
            search={searchValue}
            placeholder={t('SEARCH', 'Search')}
          />
        </DriversHeader>
        <DriversContent>
          <DriversDashboard
            {...props}
            selectedDriver={selectedDriver}
            handleChangeDriver={handleChangeDriver}
            handleOpenDriverOrders={handleOpenDriverOrders}
          />
        </DriversContent>

        {isOpenDriverOrders && openDriver && (
          <OrdersLateralBar
            isDriver
            open={isOpenDriverOrders}
            user={openDriver}
            onClose={() => handleBackRedirect()}
          />
        )}

        <OrderNotification />
      </DriversContainer>
    </>
  )
}

export const DriversManager = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriversManagerUI
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
