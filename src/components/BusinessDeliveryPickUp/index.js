import React, { useEffect, useState } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import {
  BusinessDeliveryPickUpContainer,
  DeliveryTimeWrapper,
  Title,
  TimeBlock
} from './styles'

export const BusinessDeliveryPickUp = (props) => {
  const {
    business,
    formState,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curDeliveryTime, setCurDeliveryTime] = useState({})
  const [curPickupTime, setCurPickupTime] = useState({})

  const setTimeList = () => {
    const _hours = []
    const _minutes = []
    for (let i = 0; i < 24; i++) {
      let text = (i < 10 ? '0' : ' ') + i
      if (parseInt(configState?.configs?.time_format?.value) !== 24) {
        if (i === 0) text = '12 ' + t('AM')
        else if (i === 12) text = '12 ' + t('PM')
        else if (i < 12) text = (i < 10 ? '0' : '') + i + ' ' + t('AM')
        else if (i < 24) text = ((i - 12) < 10 ? '0' : '') + (i - 12) + ' ' + t('PM')
      }
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
    setFormState({
      ...formState,
      changes: { delivery_time: deliveryTime }
    })
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
    setFormState({
      ...formState,
      changes: { pickup_time: pickupTime }
    })
  }

  useEffect(() => {
    setTimeList()
    setCurDeliveryTime({
      hour: business?.delivery_time ? (business?.delivery_time?.split(':')[0] * 1) + '' : '0',
      minute: business?.delivery_time ? (business?.delivery_time?.split(':')[1] * 1) + '' : '0'
    })
    setCurPickupTime({
      hour: business?.pickup_time ? (business?.pickup_time?.split(':')[0] * 1) + '' : '0',
      minute: business?.pickup_time ? (business?.pickup_time?.split(':')[1] * 1) + '' : '0'
    })
  }, [])

  return (
    <BusinessDeliveryPickUpContainer>
      <DeliveryTimeWrapper>
        <Title>{t('DELIVERY_TIME')} ({t('HH_MM')})</Title>
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
      </DeliveryTimeWrapper>
      <DeliveryTimeWrapper>
        <Title>{t('PICKUP_TIME')} ({t('HH_MM')})</Title>
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
      </DeliveryTimeWrapper>
    </BusinessDeliveryPickUpContainer>
  )
}
