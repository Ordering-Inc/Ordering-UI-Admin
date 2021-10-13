import React, { useContext } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { BusinessMoreDetail as BusinessMoreDetailController } from './naked'
import { Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'
import { Select } from '../../styles/Select'
import { Input } from '../../styles/Inputs'
import {
  BusinessMoreDetailContainer,
  Title,
  ToggleItemWrapper,
  AccordionTitle,
  ContentWrapper,
  TaxManagerWrapper,
  FormControl,
  Label,
  SelectWrapper
} from './styles'

const BusinessMoreDetailUI = (props) => {
  const {
    business,
    formState,
    handleChangeFormState
  } = props

  const [, t] = useLanguage()

  const taxTypeList = [
    { value: '1', content: t('TAX_INCLUDED', 'Tax included on price') },
    { value: '2', content: t('TAX_NOT_INCLUDED', 'Tax not included on price') }
  ]

  const handleChangeTaxType = (value) => {
    console.log(value)
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
      handleChangeFormState(null)
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

  return (
    <BusinessMoreDetailContainer>
      <Title>{t('MORE', 'More')}</Title>
      <Accordion>
        <ContextAwareToggle eventKey='0'>
          <AccordionTitle>{t('TAX_MANAGER', 'Tax manager')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='0'>
          <TaxManagerWrapper>
            <FormControl>
              <Label>{t('TAX_TYPE', 'Tax type')}</Label>
              <SelectWrapper>
                <Select
                  defaultValue={business?.taxType ?? ''}
                  options={taxTypeList}
                  onChange={(value) => handleChangeTaxType(value)}
                  placeholder={t('SELECT_A_OPTION', 'Select a option')}
                  notAsync
                />
              </SelectWrapper>
            </FormControl>
            <FormControl>
              <Label>{t('TAX_PERCENTAGE', 'Tax percentage')}</Label>
              <Input
                type='text'
                placeholder={t('TAX_PERCENTAGE', 'Tax percentage')}
              />
            </FormControl>
          </TaxManagerWrapper>
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='1'>
          <AccordionTitle>{t('DELIVERY_PICKUP_TIMES', 'Tax manager')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='1'>
          <ContentWrapper>
          DELIVERY_PICKUP_TIMES
          </ContentWrapper>
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='2'>
          <AccordionTitle>{t('EXTENSIONS', 'Extensions')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='2'>
          <ContentWrapper>
          EXTENSIONS
          </ContentWrapper>
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='3'>
          <AccordionTitle>{t('LOGISTIC', 'Logistic')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='3'>
          <ContentWrapper>
          LOGISTIC
          </ContentWrapper>
        </Accordion.Collapse>

        <ContextAwareToggle eventKey='4'>
          <AccordionTitle>{t('PREORDER', 'Preorder')}</AccordionTitle>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey='4'>
          <ContentWrapper>
          PREORDER
          </ContentWrapper>
        </Accordion.Collapse>
      </Accordion>
    </BusinessMoreDetailContainer>
  )
}

export const BusinessMoreDetail = (props) => {
  const businessMoreDetailProps = {
    ...props,
    UIComponent: BusinessMoreDetailUI
  }
  return <BusinessMoreDetailController {...businessMoreDetailProps} />
}
