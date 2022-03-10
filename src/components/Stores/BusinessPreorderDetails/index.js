import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../../styles'
import {
  BusinessPreorderContainer,
  PreorderTimeWrapper,
  TimeBlock
} from './styles'

export const BusinessPreorderDetails = (props) => {
  const {
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick
  } = props

  const [, t] = useLanguage()
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curPreorderTime, setCurPreorderTime] = useState({})

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

  const handleChangePreorderTime = (evt) => {
    const type = evt.target.name
    const value = evt.target.value
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
    setFormState({
      ...formState,
      changes: {}
    })
    setTimeList()
    setCurPreorderTime({
      hour: business?.preorder_time ? (parseInt(business?.preorder_time / 60)) : '0',
      minute: business?.preorder_time ? (business?.preorder_time % 60) : '0'
    })
  }, [])

  return (
    <BusinessPreorderContainer>
      <h1>{t('PREORDER_SETTING', 'Preorder')}</h1>
      <PreorderTimeWrapper>
        <p className='name'>{t('PREORDER_TIME', 'Pre order time')}</p>
        <p className='description'>{t('PREORDER_TIME_DESC', 'The anticipation time before activating the pre order')}</p>
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
      </PreorderTimeWrapper>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={formState.loading || Object.keys(formState.changes).length === 0}
        onClick={handleUpdateBusinessClick}
      >
        {t('SAVE', 'Save')}
      </Button>
    </BusinessPreorderContainer>
  )
}
