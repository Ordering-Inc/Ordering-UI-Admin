import React, { useEffect, useState } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import {
  BusinessPreorderContainer,
  DeliveryTimeWrapper,
  Title,
  TimeBlock
} from './styles'

export const BusinessPreorder = (props) => {
  const {
    business,
    formState,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curPreorderTime, setCurPreorderTime] = useState({})

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

  const handleChangePreorderTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
    console.log(typeof evt.target.value)
    setCurPreorderTime({
      ...curPreorderTime,
      [type]: value
    })
    let preorderTime = 0
    if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime?.minute)
    else preorderTime = parseInt(curPreorderTime?.hour) * 60 + parseInt(value)
    setFormState({
      ...formState,
      changes: { preorder_time: preorderTime }
    })
  }

  useEffect(() => {
    setTimeList()
    setCurPreorderTime({
      hour: business?.preorder_time ? (parseInt(business?.preorder_time / 60)) : '0',
      minute: business?.preorder_time ? (business?.preorder_time % 60) : '0'
    })
  }, [])

  return (
    <BusinessPreorderContainer>
      <DeliveryTimeWrapper>
        <Title>{t('PREORDER_TIME')} ({t('HH_MM')})</Title>
        <TimeBlock>
          <select
            value={curPreorderTime?.hour}
            name='hour'
            onChange={handleChangePreorderTime}
          >
            {
              hours?.map((hour, i) => (
                <option value={hour.hour} key={i}>{hour.text}</option>
              ))
            }
          </select>
          :
          <select
            value={curPreorderTime?.minute}
            name='minute'
            onChange={handleChangePreorderTime}
          >
            {
              minutes?.map((minute, i) => (
                <option value={minute.minute} key={i}>{minute.text}</option>
              ))
            }
          </select>
        </TimeBlock>
      </DeliveryTimeWrapper>
    </BusinessPreorderContainer>
  )
}
