import React, { useState } from 'react'
import { useLanguage } from 'ordering-components'
import { getStarWidth, getAgoMinutes } from '../../utils'
import BsChat from '@meronex/icons/bs/BsChat'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'

import {
  DrirverInfo,
  WrapperDriverImage,
  DriverImage,
  DriverInfoContent,
  InfoBlock,
  InfoCell,
  WrapperStar
} from './styles'

import { Modal } from '../Modal'
import { DriverOrders } from '../DriverOrders'

export const DriverCard = (props) => {
  const {
    offline,
    driver,
    driversList,
    driverOrders,
    updateOrdersSelectedStatus,
    handleChangeDriverOrders
  } = props

  const [, t] = useLanguage()
  const [ordersAndDriverModalOpen, setOrdersAndDriverModalOpen] = useState(false)

  const handleOpenDriverOrders = () => {
    if (!offline) {
      setOrdersAndDriverModalOpen(true)
      handleChangeDriverOrders(driver.id)
    }
  }

  return (
    <>
      <DrirverInfo offline={offline}>
        <WrapperDriverImage>
          {driver.photo ? (
            <DriverImage bgimage={driver.photo} />
          ) : (
            <FaUserAlt />
          )}
        </WrapperDriverImage>
        <DriverInfoContent>
          <InfoBlock>
            <h2>
              {driver.name} {driver.lastname}
            </h2>
            <h2 onClick={() => handleOpenDriverOrders()}>
              {driver.assigned_orders_count} {t('ORDERS', 'Orders')}
            </h2>
          </InfoBlock>
          <InfoBlock>
            <InfoCell>
              <p>{getAgoMinutes(driver.last_order_assigned_at)}</p>
              <WrapperStar width={getStarWidth(driver.qualification)} />
            </InfoCell>
            <InfoCell>
              <button>
                <BsChat /> {t('CHAT', 'Chat')}
              </button>
            </InfoCell>
          </InfoBlock>
        </DriverInfoContent>
      </DrirverInfo>

      <Modal
        width='80%'
        height='80vh'
        padding='30px'
        open={ordersAndDriverModalOpen}
        onClose={() => setOrdersAndDriverModalOpen(false)}
      >
        <DriverOrders
          driver={driver}
          driverOrders={driverOrders}
          driversList={driversList}
          updateOrdersSelectedStatus={updateOrdersSelectedStatus}
        />
      </Modal>
    </>
  )
}
