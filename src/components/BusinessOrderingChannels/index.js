import React, { useContext, useEffect, useState } from 'react'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Button } from '../../styles/Buttons'
import { Alert } from '../Confirm'

import {
  BusinessOrderingChannelsContainer,
  Title,
  ToggleItemWrapper,
  AccordionTitle,
  BusinessCustomSlugContainer,
  FormControl,
  Label
} from './styles'

export const BusinessOrderingChannels = (props) => {
  const {
    formState,
    handleUpdateBusinessClick,
    business,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [slug, setSlug] = useState('')
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const changeCustomslug = () => {
    if (slug === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('SLUG_REQUIRED', 'Slug is required')]
      })
      return
    }
    setFormState({
      ...formState,
      changes: { slug: slug }
    })
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (formState.loading || Object.keys(formState?.changes).length === 0) return
    handleUpdateBusinessClick()
  }, [formState])

  useEffect(() => {
    if (business) setSlug(business?.slug)
  }, [business])

  return (
    <>
      <BusinessOrderingChannelsContainer>
        <Title>{t('EXTENSIONS', 'Extensions')}</Title>
        <Accordion>
          <ContextAwareToggle eventKey='0'>
            <AccordionTitle>{t('CUSTOM_SLUG', 'Custom slug')}</AccordionTitle>
          </ContextAwareToggle>
          <Accordion.Collapse eventKey='0'>
            <BusinessCustomSlugContainer>
              <FormControl>
                <Label>{t('SLUG', 'Slug')}</Label>
                <Input
                  type='text'
                  value={slug}
                  placeholder={t('SLUG', 'Slug')}
                  onChange={(e) => setSlug(e.target.value)}
                />
              </FormControl>
              <Button color='primary' onClick={changeCustomslug}>{t('SAVE', 'Save')}</Button>
            </BusinessCustomSlugContainer>
          </Accordion.Collapse>
        </Accordion>
      </BusinessOrderingChannelsContainer>
      <Alert
        title={t('EXTENSION', 'Extension')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
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
