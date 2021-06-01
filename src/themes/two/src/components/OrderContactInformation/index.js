import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BsBell from '@meronex/icons/bs/BsBell'
import BsChat from '@meronex/icons/bs/BsChat'
import HiOutlinePhone from '@meronex/icons/hi/HiOutlinePhone'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { DriverSelector } from '../DriverSelector'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  NotificationIcon,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo,
  DriverSelectorContainer,
  ButtonLink
} from './styles'

export const OrderContactInformation = (props) => {
  const {
    order,
    driversList,
    unreadAlert,
    handleOpenMessages
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <BusinessInfo>
        <PhotoWrapper>
          {order?.business?.logo ? (
            <Photo bgimage={order?.business?.logo} />
          ) : (
            <BisBusiness />
          )}
        </PhotoWrapper>
        <InfoContent>
          <div>
            <p>{order?.business?.name}</p>
            <ButtonLink
              onClick={() => handleOpenMessages('business')}
            >
              <BsChat />
            </ButtonLink>
            {order?.unread_count > 0 && unreadAlert.business && (
              <NotificationIcon>
                <BsBell />
              </NotificationIcon>
            )}
            {order?.business?.phone && (
              <ButtonLink
                onClick={() => window.open(`tel:${order.business.phone}`)}
              >
                <HiOutlinePhone />
              </ButtonLink>
            )}
          </div>
          <p>{order?.business?.address}</p>
        </InfoContent>
      </BusinessInfo>
      <CustomerInfo>
        <PhotoWrapper>
          {order?.business?.photo ? (
            <Photo bgimage={order?.customer?.photo} />
          ) : (
            <FaUserAlt />
          )}
        </PhotoWrapper>
        <InfoContent>
          <div>
            <p>{order?.customer?.name} {order?.customer?.lastname}</p>
            <ButtonLink
              onClick={() => handleOpenMessages('customer')}
            >
              <BsChat />
            </ButtonLink>
            {order?.unread_count > 0 && unreadAlert.customer && (
              <NotificationIcon>
                <BsBell />
              </NotificationIcon>
            )}
            {order?.customer?.cellphone && (
              <ButtonLink
                onClick={() => window.open(`tel:${order?.customer?.cellphone }`)}
              >
                <HiOutlinePhone />
              </ButtonLink>
            )}
          </div>
          <p>{order?.customer?.cellphone}</p>
        </InfoContent>
      </CustomerInfo>
      {order?.delivery_type === 1 && (
        <DriverInfoContainer>
          <DriverInfo>
            <PhotoWrapper>
              {order?.driver?.photo ? (
                <Photo bgimage={order?.driver?.photo} />
              ) : (
                <FaUserAlt />
              )}
            </PhotoWrapper>
            {order.driver_id ? (
              <InfoContent>
                <div>
                  <p>{order?.driver?.name} {order?.driver?.lastname}</p>
                  <ButtonLink
                    onClick={() => handleOpenMessages('driver')}
                  >
                    <BsChat />
                  </ButtonLink>
                  {order?.unread_count > 0 && unreadAlert.driver && (
                    <NotificationIcon>
                      <BsBell />
                    </NotificationIcon>
                  )}
                  {order?.driver?.cellphone && (
                    <ButtonLink
                      onClick={() => window.open(`tel:${order?.driver?.cellphone }`)}
                    >
                      <HiOutlinePhone />
                    </ButtonLink>
                  )}
                </div>
                <p>{t('DRIVER', 'Driver')}</p>
              </InfoContent>
            ) : (
              <InfoContent>
                <div>
                  <p>{t('NO_DRIVER', 'No driver')}</p>
                </div>
              </InfoContent>
            )}
          </DriverInfo>
          <DriverSelectorContainer>
            <DriverSelector
              drivers={driversList.drivers}
              isPhoneView
              defaultValue={order?.driver?.id ? order.driver.id : 'default'}
              order={order}
            />
          </DriverSelectorContainer>
        </DriverInfoContainer>
      )}
    </>
  )
}
