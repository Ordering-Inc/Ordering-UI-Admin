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
    cart
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
                  {cart?.business?.logo ? (
                    <Photo bgimage={optimizeImage(cart?.business?.logo, 'h_50,c_limit')} />
                  ) : (
                    <BisBusiness />
                  )}
                </PhotoWrapper>
                <InfoContent>
                  <div>
                    <p className='name'>{cart?.business?.name}</p>
                    {(cart?.business?.phone || cart?.business?.cellphone) && (
                      <IconButton
                        onClick={() => window.open(`tel:${cart?.business?.phone || cart?.business?.cellphone}`)}
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
                <p>{cart?.business?.phone || cart?.business?.cellphone}</p>
                <p>{cart?.business?.email}</p>
                <p>{cart?.business?.address}</p>
              </CutsomerDetail>
            </Accordion.Collapse>
          </>
        )}
        <ContextAwareToggle eventKey='1'>
          <CustomerInfo>
            <PhotoWrapper>
              {cart?.user?.photo ? (
                <Photo bgimage={optimizeImage(cart?.user?.photo, 'h_50,c_limit')} />
              ) : (
                <FaUserAlt />
              )}
            </PhotoWrapper>
            <InfoContent>
              <div>
                <p className='name'>{cart?.user?.name} {cart?.user?.middle_name} {cart?.user?.lastname} {cart?.user?.second_lastname}</p>
                {(cart?.user?.cellphone || cart?.user?.phone) && (
                  <IconButton
                    onClick={() => window.open(`tel:${cart?.user?.cellphone || cart?.user?.phone}`)}
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
            {(cart?.user?.cellphone || cart?.user?.phone) && <p>{cart?.user?.cellphone || cart?.user?.phone}</p>}
            {cart?.user?.email && <p>{cart?.user?.email}</p>}
            {cart?.user?.address && <p>{cart?.user?.address}</p>}
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
