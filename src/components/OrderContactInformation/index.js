import React, { useContext } from 'react'
import { useLanguage } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { DriverSelector } from '../DriverSelector'
import { IconButton } from '../../styles/Buttons'
import { Telephone, ChevronDown } from 'react-bootstrap-icons'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  CustomerInfo,
  DriverInfoContainer,
  DriverInfo,
  DriverSelectorContainer,
  CutsomerDetail,
  CustomerInfoTable,
  ToggleItemWrapper
} from './styles'

export const OrderContactInformation = (props) => {
  const {
    order,
    driversList
  } = props

  const [, t] = useLanguage()

  console.log(order?.business)

  return (
    <>
      <Accordion>
        <ContextAwareToggle eventKey='0'>
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
              <p>{order?.business?.phone}</p>
            </InfoContent>
            <ChevronDown className='down-arrow' />
          </BusinessInfo>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='0'>
          <CutsomerDetail>
            <CustomerInfoTable>
              <tbody>
                {order?.business?.email && (
                  <tr>
                    <td>{t('EMAIL', 'Email')}</td>
                    <td>
                      <a href={`mailto: ${order?.business?.email}`}>{order?.business?.email}</a>
                    </td>
                  </tr>
                )}
                {order?.business?.address && (
                  <tr>
                    <td>{t('FULL_ADDRESS', 'Full address')}</td>
                    <td>{order?.business?.address}</td>
                  </tr>
                )}
                {order?.business?.address_notes && (
                  <tr>
                    <td>{t('NOTES', 'Notes')}</td>
                    <td>{order?.business?.address_notes}</td>
                  </tr>
                )}
                {order?.business?.zipcode && (
                  <tr>
                    <td>{t('ZIPCODE', 'Zipcode')}</td>
                    <td>{order?.business?.zipcode}</td>
                  </tr>
                )}
              </tbody>
            </CustomerInfoTable>
          </CutsomerDetail>
        </Accordion.Collapse>
        <ContextAwareToggle eventKey='1'>
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
                <p>{order?.customer?.name} {order?.customer?.middle_name} {order?.customer?.lastname} {order?.customer?.second_lastname}</p>
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
            <ChevronDown className='down-arrow' />
          </CustomerInfo>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <CutsomerDetail>
            <CustomerInfoTable>
              <tbody>
                {order?.customer?.email && (
                  <tr>
                    <td>{t('EMAIL', 'Email')}</td>
                    <td>
                      <a href={`mailto: ${order?.customer?.email}`}>{order?.customer?.email}</a>
                    </td>
                  </tr>
                )}
                {order?.customer?.address && (
                  <tr>
                    <td>{t('FULL_ADDRESS', 'Full address')}</td>
                    <td>{order?.customer?.address}</td>
                  </tr>
                )}
                {order?.customer?.internal_number && (
                  <tr>
                    <td>{t('INTERNAL_NUMBER', 'Internal number')}</td>
                    <td>{order?.customer?.internal_number}</td>
                  </tr>
                )}
                {order?.customer?.address_notes && (
                  <tr>
                    <td>{t('NOTES', 'Notes')}</td>
                    <td>{order?.customer?.address_notes}</td>
                  </tr>
                )}
                {order?.customer?.zipcode && (
                  <tr>
                    <td>{t('ZIPCODE', 'Zipcode')}</td>
                    <td>{order?.customer?.zipcode}</td>
                  </tr>
                )}
              </tbody>
            </CustomerInfoTable>
          </CutsomerDetail>
        </Accordion.Collapse>
      </Accordion>
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
                  <p>{order?.driver?.name} {order?.driver?.middle_name} {order?.driver?.lastname} {order?.driver?.second_lastname}</p>
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

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext)
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )
  const isCurrentEventKey = currentEventKey === eventKey

  const handleButtonClick = () => {
    decoratedOnClick()
  }
  return (
    <ToggleItemWrapper
      active={isCurrentEventKey}
      onClick={handleButtonClick}
    >
      {children}
    </ToggleItemWrapper>
  )
}
