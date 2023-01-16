/* eslint-disable camelcase */
import { useLanguage } from 'ordering-components-admin'
import React, { useRef } from 'react'
import { Input, Button } from '../../../styles'
import { SwitchContainer, Section, InputContainer, CateringContainer } from './styles'
export const BusinessCateringDelivery = (props) => {
  const {
    business,
    type,
    changePreorderConfigs
  } = props
  const [, t] = useLanguage()

  const cateringValues = business?.configs?.filter(config => config.key.includes('preorder')).map(config => ({
    name: config.key,
    value: config.value.split('|').find(val => val.includes(type)).split(',')[1],
    id: config.id
  }))
  const ref_preorder_lead_time = useRef()
  const ref_preorder_slot_interval = useRef()
  const ref_preorder_time_range = useRef()
  const ref_preorder_minimum_days = useRef()
  const ref_preorder_maximum_days = useRef()
  let timeout = null
  let previousSearch
  const handleClickDefaultButton = (catering, ref) => {
    if (ref.current.value === catering.value.toString()) return
    ref.current.value = catering.value
    changePreorderConfigs({ value: catering.value, type, id: catering.id })
  }

  const onChange = (catering) => {
    if (previousSearch !== catering.value) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        changePreorderConfigs({ value: catering.value, type, id: catering.id })
      }, 750)
    }
    previousSearch = catering.value
  }

  return (
    <CateringContainer>
      <h1>
        {t(type.toUpperCase(), type.includes('delivery') ? 'Catering delivery' : 'Catering pickup')}
      </h1>
      <Section>
        <SwitchContainer>
          <p>
            {t('LEAD_TIMES_PER_ORDER_TYPE', 'Lead times per order type')}
          </p>
          <p>
            {t('DEFAULT', 'Default')} = 0 ({t('ALLOWS_ASAP_ORDERS', 'allows asap orders')}).
          </p>
        </SwitchContainer>
        <InputContainer>
          <Input
            ref={ref_preorder_lead_time}
            placeholder='MM'
            defaultValue={cateringValues.find(val => val.name === 'preorder_lead_time')?.value}
            onChange={(evt) => onChange({ value: evt.target.value, type, id: cateringValues.find(val => val.name === 'preorder_lead_time')?.id })}
            onFocus={() => { previousSearch = null }}
          />
          <p>({t('MINUTES', 'Minutes')})</p>
          <Button
            onClick={() => handleClickDefaultButton({ value: 0, id: cateringValues.find(val => val.name === 'preorder_lead_time')?.id }, ref_preorder_lead_time)}
          >
            {t('USE_DEFAULT_VALUE', 'Use default value')}
          </Button>
        </InputContainer>
      </Section>
      <Section>
        <SwitchContainer>
          <p>
            {t('SLOT_TIMES', 'Slot times')}
          </p>
          <p>
            {t('DEFAULT', 'Default')} = 30 {t('MINUTES', 'minutes')}.
          </p>
        </SwitchContainer>
        <InputContainer>
          <Input
            ref={ref_preorder_slot_interval}
            placeholder='30'
            defaultValue={cateringValues.find(val => val.name === 'preorder_slot_interval')?.value}
            onChange={(evt) => onChange({ value: evt.target.value, type, id: cateringValues.find(val => val.name === 'preorder_slot_interval')?.id })}
            onFocus={() => { previousSearch = null }}
          />
          <p>({t('MINUTES', 'Minutes')})</p>
          <Button
            onClick={() => handleClickDefaultButton({ value: 30, id: cateringValues.find(val => val.name === 'preorder_slot_interval')?.id }, ref_preorder_slot_interval)}
          >
            {t('USE_DEFAULT_VALUE', 'Use default value')}
          </Button>
        </InputContainer>
      </Section>
      <Section>
        <SwitchContainer>
          <p>
            {t('TIME_RANGE', 'Time range')}
          </p>
          <p>
            {t('DEFAULT', 'Default')} = 30 {t('MINUTES', 'minutes')}.
          </p>
        </SwitchContainer>
        <InputContainer>
          <Input
            placeholder='30'
            defaultValue={cateringValues.find(val => val.name === 'preorder_time_range')?.value}
            onChange={(evt) => onChange({ value: evt.target.value, id: cateringValues.find(val => val.name === 'preorder_time_range')?.id, type })}
            ref={ref_preorder_time_range}
            onFocus={() => { previousSearch = null }}
          />
          <p>({t('MINUTES', 'Minutes')})</p>
          <Button
            onClick={() => handleClickDefaultButton({ value: 30, id: cateringValues.find(val => val.name === 'preorder_time_range')?.id }, ref_preorder_time_range)}
          >
            {t('USE_DEFAULT_VALUE', 'Use default value')}
          </Button>
        </InputContainer>
      </Section>
      <Section>
        <SwitchContainer>
          <p>
            {t('MINIMUM_DAYS_PREORDER_ORDER_TYPE', 'Minimum days to preorder per order type')}
          </p>
          <p>
            {t('DEFAULT', 'Default')} = 0 ({t('ALLOWS_ASAP_ORDERS', 'allows asap orders')}).
          </p>
        </SwitchContainer>
        <InputContainer>
          <Input
            ref={ref_preorder_minimum_days}
            placeholder='0'
            defaultValue={cateringValues.find(val => val.name === 'preorder_minimum_days')?.value}
            onChange={(evt) => onChange({ value: evt.target.value, id: cateringValues.find(val => val.name === 'preorder_minimum_days')?.id, type })}
            onFocus={() => { previousSearch = null }}
          />
          <p>({t('DAYS', 'Days')})</p>
          <Button
            onClick={() => handleClickDefaultButton({ value: 0, id: cateringValues.find(val => val.name === 'preorder_minimum_days')?.id }, ref_preorder_minimum_days)}
          >
            {t('USE_DEFAULT_VALUE', 'Use default value')}
          </Button>
        </InputContainer>
      </Section>
      <Section>
        <SwitchContainer>
          <p>
            {t('MAXIMUM_DAYS', 'Maximum days')}
          </p>
          <p>
            {t('DEFAULT', 'Default')} = 15 {t('DAYS', 'Days')}
          </p>
        </SwitchContainer>
        <InputContainer>
          <Input
            ref={ref_preorder_maximum_days}
            placeholder='15'
            defaultValue={cateringValues.find(val => val.name === 'preorder_maximum_days')?.value}
            onChange={(evt) => onChange({ value: evt.target.value, id: cateringValues.find(val => val.name === 'preorder_maximum_days')?.id, type })}
            onFocus={() => { previousSearch = null }}
          />
          <p>({t('DAYS', 'Days')})</p>
          <Button
            onClick={() => handleClickDefaultButton({ value: 15, id: cateringValues.find(val => val.name === 'preorder_maximum_days')?.id }, ref_preorder_maximum_days)}
          >
            {t('USE_DEFAULT_VALUE', 'Use default value')}
          </Button>
        </InputContainer>
      </Section>
    </CateringContainer>
  )
}
