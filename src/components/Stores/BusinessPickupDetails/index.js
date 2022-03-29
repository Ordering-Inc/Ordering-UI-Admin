import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  BusinessPickupDetails as BusinessPickupDetailsController
} from 'ordering-components-admin'
import { Button, Input } from '../../../styles'

import {
  Container,
  SectionTitle,
  TimeSelectContainer,
  TimeBlock,
  FormControl
} from './styles'

const BusinessPickupDetailsUI = (props) => {
  const {
    business,
    formState,
    handleChangeForm,
    handlePickupStateSave
  } = props

  const [, t] = useLanguage()
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curPickupTime, setCurPickupTime] = useState({})

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

  const handleChangePickupTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
    setCurPickupTime({
      ...curPickupTime,
      [type]: value
    })
    let pickupTime = ''
    if (type === 'hour') pickupTime = value + ':' + curPickupTime?.minute
    else pickupTime = curPickupTime?.hour + ':' + value
    handleChangeForm({
      pickup_time: pickupTime
    })
  }

  useEffect(() => {
    setTimeList()
    setCurPickupTime({
      hour: business?.pickup_time ? (business?.pickup_time?.split(':')[0] * 1) + '' : '0',
      minute: business?.pickup_time ? (business?.pickup_time?.split(':')[1] * 1) + '' : '0'
    })
  }, [])

  return (
    <Container>
      <SectionTitle>{t('PREORDER_STEP_2_TIME', 'Order time')}</SectionTitle>
      <TimeSelectContainer>
        <label>{t('ESTIMATED_PICKUP_TIME', 'Pickup Time')}</label>
        <TimeBlock>
          <select
            value={curPickupTime?.hour}
            name='hour'
            onChange={handleChangePickupTime}
          >
            {
              hours?.map((hour, i) => (
                <option value={hour.hour} key={i}>{hour.text}</option>
              ))
            }
          </select>
          :
          <select
            value={curPickupTime?.minute}
            name='minute'
            onChange={handleChangePickupTime}
          >
            {
              minutes?.map((minute, i) => (
                <option value={minute.minute} key={i}>{minute.text}</option>
              ))
            }
          </select>
        </TimeBlock>
      </TimeSelectContainer>
      <SectionTitle>{t('PURCHASE', 'Purchase')}</SectionTitle>
      <FormControl>
        <label>{t('MINIMUN_PURCHASED', 'Minimum purchase')}</label>
        <Input
          defaultValue={business?.minimum ?? ''}
          placeholder='$0.00'
          onChange={e => handleChangeForm({ minimum: e.target.value })}
        />
      </FormControl>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={formState.loading || Object.keys(formState.changes).length === 0}
        onClick={() => handlePickupStateSave()}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
export const BusinessPickupDetails = (props) => {
  const pickupDetailsProps = {
    ...props,
    UIComponent: BusinessPickupDetailsUI
  }
  return <BusinessPickupDetailsController {...pickupDetailsProps} />
}
