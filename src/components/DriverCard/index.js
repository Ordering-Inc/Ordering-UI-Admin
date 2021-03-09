import React, { useState, useEffect } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { getStarWidth } from '../../utils'
// import BsChat from '@meronex/icons/bs/BsChat'
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
    handleSelectedOrderIds,
    handleOpenOrderDetail
  } = props

  const [, t] = useLanguage()
  const [{ getTimeAgo }] = useUtils()

  const [ordersAndDriverModalOpen, setOrdersAndDriverModalOpen] = useState(false)

  const handleOpenDriverOrders = () => {
    if (!offline) {
      setOrdersAndDriverModalOpen(true)
    }
  }

  const closeModal = (e) => {
    if (e.code === 'Escape') setOrdersAndDriverModalOpen(false)
  }

  useEffect(() => {
    if (!ordersAndDriverModalOpen) return
    document.addEventListener('keydown', closeModal)
    return () => document.removeEventListener('keydown', closeModal)
  }, [ordersAndDriverModalOpen])
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
              <p>{getTimeAgo(driver.last_order_assigned_at)}</p>
              <WrapperStar width={getStarWidth(driver.qualification)} />
            </InfoCell>
            {/* <InfoCell>
              <button>
                <BsChat /> {t('CHAT', 'Chat')}
              </button>
            </InfoCell> */}
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
          driversList={driversList}
          handleSelectedOrderIds={handleSelectedOrderIds}
          handleOpenOrderDetail={handleOpenOrderDetail}
        />
      </Modal>
    </>
  )
}
