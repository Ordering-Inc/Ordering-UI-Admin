import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import { OrderListing } from '../OrderListing'

import {
  WrapperDriverOrders,
  Header,
  WrapperDriverImage,
  DriverImage,
  DriverInfo,
  WrapperOrderListing
} from './styles'

export const DriverOrders = (props) => {
  const {
    driver,
    driversList,
    driverOrders
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    console.log(driverOrders)
  }, [driverOrders])

  return (
    <WrapperDriverOrders>
      <Header>
        <WrapperDriverImage>
          {driver.photo ? (
            <DriverImage bgimage={driver.photo} />
          ) : (
            <FaUserAlt />
          )}
        </WrapperDriverImage>
        <DriverInfo>
          <h2>
            {driver.name} {driver.lastname}
          </h2>
          <p>
            {driver.assigned_orders_count} {t('ORDERS', 'Orders')}
          </p>
        </DriverInfo>
      </Header>
      <WrapperOrderListing>
        <OrderListing
          orderList={driverOrders}
          driversList={driversList}
          orderListView='big'
        />
      </WrapperOrderListing>
    </WrapperDriverOrders>
  )
}
