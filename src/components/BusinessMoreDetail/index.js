import React, { useContext, useEffect } from 'react'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useLanguage } from 'ordering-components-admin'
import { BusinessTax } from '../BusinessTax'
import { BusinessDeliveryPickUp } from '../BusinessDeliveryPickUP'
import { BusinessExtension } from '../BusinessExtension'
import { BusinessLogistic } from '../BusinessLogistic'
import { BusinessPreorder } from '../BusinessPreorder'

import {
  BusinessMoreDetailContainer,
  Title,
  ToggleItemWrapper,
  AccordionTitle
} from './styles'

export const BusinessMoreDetail = (props) => {
  const {
    formState,
    handleUpdateBusinessClick
  } = props

  const [, t] = useLanguage()

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  return (
    <BusinessMoreDetailContainer>
      <Title>{t('MORE', 'More')}</Title>
      <Accordion>
        <ContextAwareToggle eventKey='0'>
          <AccordionTitle>{t('TAX_MANAGER', 'Tax manager')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='0'>
          <BusinessTax {...props} />
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='1'>
          <AccordionTitle>{t('DELIVERY_PICKUP_TIMES', 'Delivery/Pickup Times')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <BusinessDeliveryPickUp {...props} />
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='2'>
          <AccordionTitle>{t('EXTENSIONS', 'Extensions')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='2'>
          <BusinessExtension {...props} />
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='3'>
          <AccordionTitle>{t('LOGISTIC', 'Logistic')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='3'>
          <BusinessLogistic {...props} />
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='4'>
          <AccordionTitle>{t('PREORDER', 'Preorder')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='4'>
          <BusinessPreorder {...props} />
        </Accordion.Collapse>
      </Accordion>
    </BusinessMoreDetailContainer>
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
