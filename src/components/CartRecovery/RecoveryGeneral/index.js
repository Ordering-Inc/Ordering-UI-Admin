import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, TextArea, Switch, Button } from '../../../styles'
import {
  X as CloseIcon,
  Circle as UnCheckIcon,
  RecordCircleFill as CheckIcon
} from 'react-bootstrap-icons'

import {
  Container,
  InputWrapper,
  AddCouponSwitchWrapper,
  CuponCodeWrapper,
  LastTimeWrapper,
  TypeWrapper,
  ParentCheckBoxWrapper,
  TimeContent,
  ButtonWrapper,
  TimeBlock
} from './styles'

export const RecoveryGeneral = (props) => {
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
    // let preorderTime = 0
    // if (type === 'hour') preorderTime = parseInt(value) * 60 + parseInt(curPreorderTime?.minute)
    // else preorderTime = parseInt(curPreorderTime?.hour) * 60 + parseInt(value)
    // setFormState({
    //   ...formState,
    //   changes: { preorder_time: preorderTime }
    // })
  }

  useEffect(() => {
    setTimeList()
    // setCurPreorderTime({
    //   hour: business?.preorder_time ? (parseInt(business?.preorder_time / 60)) : '0',
    //   minute: business?.preorder_time ? (business?.preorder_time % 60) : '0'
    // })
  }, [])

  return (
    <>
      <Container>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            type='text'
            placeholder={t('NAME', 'Name')}
            name='name'
            // value={(typeof formState?.changes?.redemption_rate !== 'undefined')
            //   ? formState?.changes?.redemption_rate
            //   : walletData?.redemption_rate ?? ''}
            // onChange={handleChangeInput}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('DESCRIPTION', 'Description')}</label>
          <TextArea
            placeholder={t('WRITE_LITTLE_DESCRIPTION', 'Write a little description')}
            name='description'
            rows={3}
            // value={(typeof formState?.changes?.redemption_rate !== 'undefined')
            //   ? formState?.changes?.redemption_rate
            //   : walletData?.redemption_rate ?? ''}
            // onChange={handleChangeInput}
          />
        </InputWrapper>
        <AddCouponSwitchWrapper>
          <span>{t('ADD_COUPON', 'Add coupon')}</span>
          <Switch
            defaultChecked={false}
            onChange={(value) => console.log(value)}
          />
        </AddCouponSwitchWrapper>
        <CuponCodeWrapper>
          <label>{t('COUPON_CODE', 'Coupon code')}</label>
          <div>
            <Button
              color='secundaryDark'
            >
              <span>CVDF89E</span>
              <CloseIcon />
            </Button>
            <Button
              color='secundaryDark'
            >
              <span>CVDF89E</span>
              <CloseIcon />
            </Button>
            <Button
              color='secundaryDark'
            >
              <span>EIDT43</span>
              <CloseIcon />
            </Button>
            <Button
              color='secundaryDark'
            >
              <span>RE44RGR6</span>
              <CloseIcon />
            </Button>
            <Button
              color='secundaryDark'
            >
              <span>EFEF45</span>
              <CloseIcon />
            </Button>
            <Button
              color='secundaryDark'
            >
              <span>H55ED3GE</span>
              <CloseIcon />
            </Button>
            <Input
              type='text'
              placeholder={t('WRITE_A_WORD', 'Write a word')}
            />
          </div>
        </CuponCodeWrapper>
        <LastTimeWrapper>
          <h3>{t('LAST_TIME_CART_WAS_OPENED', 'Last time the cart was opened')}</h3>
          <TypeWrapper>
            <ParentCheckBoxWrapper>
              <CheckIcon className='checked-icon' />
              <span>{t('TIME', 'Time')}</span>
            </ParentCheckBoxWrapper>
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
                  {
                    minutes?.map((minute, i) => (
                      <option value={minute.minute} key={i}>{minute.text}</option>
                    ))
                  }
                </select>
              </TimeBlock>
            </TimeContent>
          </TypeWrapper>
          <TypeWrapper>
            <ParentCheckBoxWrapper>
              <UnCheckIcon />
              <span>{t('DAYS', 'Days')}</span>
            </ParentCheckBoxWrapper>
          </TypeWrapper>
          <TypeWrapper>
            <ParentCheckBoxWrapper>
              <UnCheckIcon />
              <span>{t('Date', 'Date')}</span>
            </ParentCheckBoxWrapper>
          </TypeWrapper>
        </LastTimeWrapper>
      </Container>
      <ButtonWrapper>
        <Button
          color='primary'
          type='submit'
        >
          {t('SAVE', 'Save')}
        </Button>
      </ButtonWrapper>
    </>
  )
}
