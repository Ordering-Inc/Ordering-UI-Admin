import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  BusinessDeliveryDetails as BusinessDeliveryDetailsController
} from 'ordering-components-admin'
import { BusinessDeliveryZoneList } from '../BusinessDeliveryZoneList'
import { Select } from '../../../styles/Select'
import { Button, Input } from '../../../styles'

import {
  Container,
  SectionTitle,
  TimeSelectContainer,
  TimeBlock,
  SelectWrapper,
  AdvancedLogisticsSettingsContainer,
  FormControl
} from './styles'

const BusinessDeliveryDetailsUI = (props) => {
  const {
    business,
    setIsExtendExtraOpen,
    handleUpdateBusinessState,
    formState,
    handleChangeForm,
    handleDeliveryStateSave
  } = props

  const [, t] = useLanguage()
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curDeliveryTime, setCurDeliveryTime] = useState({})

  const priorityList = [
    { value: '2', content: t('URGENT', 'Urgent') },
    { value: '1', content: t('HIGH', 'High') },
    { value: '0', content: t('NORMAL', 'Normal') },
    { value: '-1', content: t('LOW', 'Low') }
  ]

  const setTimeList = () => {
    const _hours = []
    const _minutes = []
    for (let i = 0; i < 24; i++) {
      const text = (i < 10 ? '0' : ' ') + i
      _hours.push({
        text: text,
        hour: i
      })
    }
    for (let i = 0; i < 60; i++) {
      const text = (i < 10 ? '0' : '') + i
      _minutes.push({
        text: text,
        minute: i
      })
    }
    setHours(_hours)
    setMinutes(_minutes)
  }

  const handleChangeDeliveryTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
    setCurDeliveryTime({
      ...curDeliveryTime,
      [type]: value
    })
    let deliveryTime = ''
    if (type === 'hour') deliveryTime = value + ':' + curDeliveryTime?.minute
    else deliveryTime = curDeliveryTime?.hour + ':' + value
    handleChangeForm({
      delivery_time: deliveryTime
    })
  }

  useEffect(() => {
    setTimeList()
    setCurDeliveryTime({
      hour: business?.delivery_time ? (business?.delivery_time?.split(':')[0] * 1) + '' : '0',
      minute: business?.delivery_time ? (business?.delivery_time?.split(':')[1] * 1) + '' : '0'
    })
  }, [])

  return (
    <Container>
      <SectionTitle>{t('PREORDER_STEP_2_TIME', 'Order time')}</SectionTitle>
      <TimeSelectContainer>
        <label>{t('DELIVERY_TIME', 'Delivery time')}</label>
        <TimeBlock>
          <select
            value={curDeliveryTime?.hour}
            name='hour'
            onChange={handleChangeDeliveryTime}
          >
            {
              hours?.map((hour, i) => (
                <option value={hour.hour} key={i}>{hour.text}</option>
              ))
            }
          </select>
          :
          <select
            value={curDeliveryTime?.minute}
            name='minute'
            onChange={handleChangeDeliveryTime}
          >
            {
              minutes?.map((minute, i) => (
                <option value={minute.minute} key={i}>{minute.text}</option>
              ))
            }
          </select>
        </TimeBlock>
      </TimeSelectContainer>
      <BusinessDeliveryZoneList
        business={business}
        setIsExtendExtraOpen={setIsExtendExtraOpen}
        onClose={() => setIsExtendExtraOpen(false)}
        handleSuccessUpdate={handleUpdateBusinessState}
      />
      <SectionTitle>{t('ADVANCED_LOGISTICS_SETTINGS', 'Advance logistics settings')}</SectionTitle>
      <AdvancedLogisticsSettingsContainer>
        <FormControl>
          <label>{t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes')}</label>
          <Input
            type='text'
            name='cancel_order_after_minutes'
            defaultValue={business?.cancel_order_after_minutes ?? ''}
            placeholder={t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes')}
            onChange={e => handleChangeForm({ cancel_order_after_minutes: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <label>{t('ORDER_DEFAULT_PRIORITY', 'Order default priority')}</label>
          <SelectWrapper>
            <Select
              isSecondIcon
              notAsync
              placeholder={t('SELECT_PRIORITY', 'Select priority')}
              defaultValue={business?.order_default_priority?.toString() ?? ''}
              options={priorityList}
              onChange={val => handleChangeForm({ order_default_priority: val })}
            />
          </SelectWrapper>
        </FormControl>
      </AdvancedLogisticsSettingsContainer>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={formState.loading || Object.keys(formState.changes).length === 0}
        onClick={() => handleDeliveryStateSave()}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}

export const BusinessDeliveryDetails = (props) => {
  const businessDeliveryProps = {
    ...props,
    UIComponent: BusinessDeliveryDetailsUI
  }
  return <BusinessDeliveryDetailsController {...businessDeliveryProps} />
}
