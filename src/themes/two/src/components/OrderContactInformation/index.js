import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { DriverSelector } from '../DriverSelector'
import { IconButton } from '../../styles/Buttons'
import { Telephone } from 'react-bootstrap-icons'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo,
  DriverSelectorContainer
} from './styles'

export const OrderContactInformation = (props) => {
  const {
    order,
    driversList
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
            {order?.business?.phone && (
              <IconButton
                onClick={() => window.open(`tel:${order.business.phone}`)}
              >
                <Telephone />
              </IconButton>
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
            {order?.customer?.cellphone && (
              <IconButton
                onClick={() => window.open(`tel:${order?.customer?.cellphone}`)}
              >
                <Telephone />
              </IconButton>
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
                  {order?.driver?.cellphone && (
                    <IconButton
                      onClick={() => window.open(`tel:${order?.driver?.cellphone}`)}
                    >
                      <Telephone />
                    </IconButton>
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
              isFirstSelect
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
