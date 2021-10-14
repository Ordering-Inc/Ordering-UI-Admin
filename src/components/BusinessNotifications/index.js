import React, { useContext, useEffect } from 'react'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useLanguage } from 'ordering-components-admin'
import { BusinessDeliveryPickUp } from '../BusinessDeliveryPickUP'

import {
  BusinessNotificationsContainer,
  Title,
  ToggleItemWrapper,
  AccordionTitle
} from './styles'
import { BusinessEmailAndPhone } from '../BusinessEmailAndPhone'
import { BusinessGprsPrinters } from '../BusinessGprsPrinters'

export const BusinessNotifications = (props) => {
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
    <BusinessNotificationsContainer>
      <Title>{t('NOTIFICATIONS', 'Notifications')}</Title>
      <Accordion>
        <ContextAwareToggle eventKey='0'>
          <AccordionTitle>{t('EMAILS_AND_PHONES', 'Emails and phones')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='0'>
          <BusinessEmailAndPhone {...props} />
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='1'>
          <AccordionTitle>{t('GPRS_PRINTERS', 'Gprs printers')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <BusinessGprsPrinters {...props} />
        </Accordion.Collapse>
      </Accordion>
    </BusinessNotificationsContainer>
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
