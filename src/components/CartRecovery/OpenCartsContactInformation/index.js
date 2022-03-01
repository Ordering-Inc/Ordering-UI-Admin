import React, { useContext } from 'react'
import { useSession, useUtils } from 'ordering-components-admin'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
import BisBusiness from '@meronex/icons/bi/BisBusiness'
import { IconButton } from '../../../styles'
import { Telephone, CaretDownFill } from 'react-bootstrap-icons'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'

import {
  BusinessInfo,
  PhotoWrapper,
  Photo,
  InfoContent,
  CustomerInfo,
  CutsomerDetail,
  ToggleItemWrapper
} from './styles'

export const OpenCartsContactInformation = (props) => {
  const {
    order
  } = props

  const [{ user }] = useSession()
  const [{ optimizeImage }] = useUtils()

  return (
    <>
      <Accordion>
        {user?.level !== 2 && (
          <>
            <ContextAwareToggle eventKey='0'>
              <BusinessInfo>
                <PhotoWrapper>
                  {order?.business?.logo ? (
                    <Photo bgimage={optimizeImage(order?.business?.logo, 'h_50,c_limit')} />
                  ) : (
                    <BisBusiness />
                  )}
                </PhotoWrapper>
                <InfoContent>
                  <div>
                    <p className='name'>{order?.business?.name}</p>
                    {order?.business?.phone && (
                      <IconButton
                        onClick={() => window.open(`tel:${order.business.phone}`)}
                        className='btn-phone'
                      >
                        <Telephone />
                      </IconButton>
                    )}
                  </div>
                </InfoContent>
                <CaretDownFill className='down-arrow' />
              </BusinessInfo>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey='0'>
              <CutsomerDetail>
                <p>{order?.business?.phone}</p>
                <p>{order?.business?.email}</p>
                <p>{order?.business?.address}</p>
              </CutsomerDetail>
            </Accordion.Collapse>
          </>
        )}
        <ContextAwareToggle eventKey='1'>
          <CustomerInfo>
            <PhotoWrapper>
              {order?.customer?.photo ? (
                <Photo bgimage={optimizeImage(order?.customer?.photo, 'h_50,c_limit')} />
              ) : (
                <FaUserAlt />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p className='name'>{order?.customer?.name} {order?.customer?.middle_name} {order?.customer?.lastname} {order?.customer?.second_lastname}</p>
                {order?.customer?.cellphone && (
                  <IconButton
                    onClick={() => window.open(`tel:${order?.customer?.cellphone}`)}
                    className='btn-phone'
                  >
                    <Telephone />
                  </IconButton>
                )}
              </div>
            </InfoContent>
            <CaretDownFill className='down-arrow' />
          </CustomerInfo>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <CutsomerDetail>
            {order?.customer?.cellphone && <p>{order?.customer?.cellphone}</p>}
            {order?.customer?.email && <p>{order?.customer?.email}</p>}
            {order?.customer?.address && <p>{order?.customer?.address}</p>}
          </CutsomerDetail>
        </Accordion.Collapse>
      </Accordion>
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
