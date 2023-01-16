import React from 'react'
import { useLanguage, useUtils, BusinessEta as BusinessEtaController } from 'ordering-components-admin'
import { Button, Input } from '../../../styles'
import { Select } from '../../../styles/Select/FirstSelect'

import {
  Container,
  SectionTitle,
  SelectWrapper,
  TimeItemContainer,
  TimeWrapper,
  TimesContainer
} from './styles'

const BusinessEtaUI = (props) => {
  const {
    selectedOption,
    setSelectedOption,
    formState,
    handleChangeInput,
    hanldeUpdateBusinessEtaTimes
  } = props

  const [, t] = useLanguage()
  const [{ getOrderState }] = useUtils()

  const statusTimeOptions = [
    { value: 'status', content: t('ESTIMATED_TIMES_BY_STATUS', 'Estimated times by status') },
    { value: 'status_penalty', content: t('ESTIMATED_PENALTY_TIMES_BY_STATUS', 'Estimated penalty times by status') }
  ]

  return (
    <Container>
      <SectionTitle>{t('STATUS_TIME', 'Status time')}</SectionTitle>
      <SelectWrapper>
        <Select
          placeholder={t('SELECT_TIME', 'Select time')}
          defaultValue={selectedOption}
          options={statusTimeOptions}
          onChange={val => setSelectedOption(val)}
        />
      </SelectWrapper>
      <TimesContainer>
        {[...Array(24).keys()].map(index => (
          <TimeItemContainer key={`${selectedOption}:${index}`}>
            <span>{getOrderState(index)}</span>
            <TimeWrapper>
              <Input
                type='number'
                name={`${selectedOption}:${index}`}
                defaultValue={formState.changes?.[`${selectedOption}:${index}`] || 0}
                onChange={handleChangeInput}
                onKeyPress={(e) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
              />
              <span>{t('MINUTES', 'Minutes')}</span>
            </TimeWrapper>
          </TimeItemContainer>
        ))}
      </TimesContainer>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={formState.loading}
        onClick={hanldeUpdateBusinessEtaTimes}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}

export const BusinessEta = (props) => {
  const businessEtaProps = {
    ...props,
    UIComponent: BusinessEtaUI
  }
  return <BusinessEtaController {...businessEtaProps} />
}
