import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import {
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon,
  ChevronUp,
  ChevronDown
} from 'react-bootstrap-icons'
import { Button, Input } from '../../../styles'

import {
  Container,
  Title,
  RadioCheckWrapper,
  ButtonWrapper,
  ArrowIconsWrapper,
  DaysContent,
  DateWrapper,
  TimeContent,
  TimeBlock
} from './styles'
import { CampaignCalendarTime } from '../CampaignCalendarTime'

export const CampaignOpenCartsOption = () => {
  const [, t] = useLanguage()

  const [selectedOption, setSelectedOption] = useState('')
  const [hours, setHours] = useState([])
  const [minutes, setMinutes] = useState([])
  const [curPreorderTime, setCurPreorderTime] = useState({})
  const [curDayTime, setCurDayTime] = useState(0)

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
  }

  const handleChangeDay = (evt) => {
    const day = evt.target.value
    setCurDayTime(day)
  }

  useEffect(() => {
    setTimeList()
  }, [])

  return (
    <>
      <Container>
        <Title>{`${t('OPEN_CARTS', 'Open Carts')} / ${t('CART_RECOVERY', 'Cart recovery')}`}</Title>
        <RadioCheckWrapper onClick={() => setSelectedOption('time')}>
          {selectedOption === 'time' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
          <span>{t('TIME', 'Time')}</span>
        </RadioCheckWrapper>
        {selectedOption === 'time' && (
          <TimeContent>
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
              <span>:</span>
              <select
                value={curPreorderTime?.minute}
                name='minute'
                onChange={handleChangePreorderTime}
              >
                {minutes?.map((minute, i) => (
                  <option value={minute.minute} key={i}>{minute.text}</option>
                ))}
              </select>
            </TimeBlock>
          </TimeContent>
        )}
        <RadioCheckWrapper onClick={() => setSelectedOption('days')}>
          {selectedOption === 'days' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
          <span>{t('DAYS', 'Days')}</span>
        </RadioCheckWrapper>
        {selectedOption === 'days' && (
          <DaysContent>
            <div>
              <Input
                type='number'
                min='0'
                placeholder='00'
                onKeyPress={(e) => {
                  if (!/^[0-9.]$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                value={curDayTime}
                onChange={handleChangeDay}
              />
              <ArrowIconsWrapper>
                <ChevronUp />
                <ChevronDown />
              </ArrowIconsWrapper>
            </div>
          </DaysContent>
        )}
        <RadioCheckWrapper onClick={() => setSelectedOption('date')}>
          {selectedOption === 'date' ? <CheckIcon className='fill' /> : <UnCheckIcon />}
          <span>{t('DATE', 'Date')}</span>
        </RadioCheckWrapper>
        {selectedOption === 'date' && (
          <DateWrapper>
            <CampaignCalendarTime />
          </DateWrapper>
        )}
      </Container>
      <ButtonWrapper>
        <Button color='primary' borderRadius='8px'>{t('DONE', 'Done')}</Button>
      </ButtonWrapper>
    </>
  )
}
