import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'
import {
  InvoiceGeneralDetailContainer,
  FormControl,
  Label,
  Option,
  CalendarWrapper,
  ActionBtnWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'

export const InvoiceGeneral = (props) => {
  const {
    driverList,
    selectedInvoice
  } = props

  const [, t] = useLanguage()
  const [options, setOptions] = useState(null)

  const handleSelectChange = (value) => {
    console.log(value)
  }

  const handleChangeDate = (date1, date2) => {
    // handleChangeFilterList({ ...filterList, lapse: `${date1},${date2}` })
    console.log(date1, date2)
  }

  useEffect(() => {
    const selectedTypes = driverList?.drivers?.map(item => {
      return { value: item.id, content: <Option>{item.name}</Option> }
    })
    setOptions(selectedTypes)
  }, [driverList?.drivers])

  return (
    <InvoiceGeneralDetailContainer className='row'>
      {
        selectedInvoice === 'driver' && (
          <FormControl className='col-md-12'>
            <Label>{t('SELECT_TYPE_INVOICE', 'Select type invoice')}</Label>
            {
              selectedInvoice === 'driver' && (
                driverList?.loading ? (
                  <Skeleton height={35} />
                ) : (
                  <Select
                    options={options}
                    className='select'
                    placeholder={t('CHARGE_BUSINESS_COMMISION_AND_FEES', 'Charge the business a commision and fees')}
                    onChange={(typeValue) => handleSelectChange(typeValue)}
                  />
                )
              )
            }
          </FormControl>
        )
      }
      <FormControl className='col-md-6'>
        <Label>{t('DATE_RANGE', 'Date range')}</Label>
        <CalendarWrapper>
          <AnalyticsCalendar
            handleChangeDate={handleChangeDate}
          />
        </CalendarWrapper>
      </FormControl>
      <FormControl className='col-md-6'>
        <Label>{t('BUSINESS', 'Business')}</Label>
        {
          selectedInvoice === 'driver' && (
            driverList?.loading ? (
              <Skeleton height={35} />
            ) : (
              <Select
                options={options}
                className='select'
                placeholder={t('BUSINESS', 'Business')}
                onChange={(typeValue) => handleSelectChange(typeValue)}
              />
            )
          )
        }
      </FormControl>
      <FormControl className='col-md-6'>
        <Label>{t('PERCENTAGE_FEE', 'Percentage Fee')}</Label>
        <input
          type='number'
          placeholder='0%'
        />
      </FormControl>
      <FormControl className='col-md-6'>
        <Label>{t('FIXED_FEE', 'Fixed Fee')}</Label>
        <input
          type='number'
          placeholder='00'
        />
      </FormControl>
      <FormControl className='col-md-6'>
        <Label>{t('TAX', 'Tax')}</Label>
        <input
          type='number'
          placeholder='00'
        />
      </FormControl>
      <FormControl className='col-md-6'>
        <Label>{t('MISC_AMOUNT', 'MISC amount')}</Label>
        <input
          type='number'
          placeholder='00'
        />
      </FormControl>
      <FormControl className='col-md-12'>
        <Label>{t('MISC_DESCRIPTION', 'MISC description')}</Label>
        <textarea
          placeholder={t('WRITE_A_NOTES', 'Write a Notes')}
        />
      </FormControl>
      <FormControl className='col-md-12'>
        <Label>{t('NOTES', 'Notes')}</Label>
        <textarea
          placeholder={t('WRITE_MISC_DESCRIPTION', 'Write a MISC description')}
        />
      </FormControl>
      <ActionBtnWrapper className='col-md-12'>
        <Button
          type='submit'
          borderRadius='7.6px'
          color='primary'
        >
          {t('SAVE', 'Save')}
        </Button>
      </ActionBtnWrapper>

    </InvoiceGeneralDetailContainer>
  )
}
