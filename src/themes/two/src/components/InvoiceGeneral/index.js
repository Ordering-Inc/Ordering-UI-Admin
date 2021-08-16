import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'
import { Checkbox } from '../../styles/Checkbox'
import { Alert } from '../Confirm'
import {
  InvoiceGeneralDetailContainer,
  FormControl,
  Label,
  Option,
  CalendarWrapper,
  ActionBtnWrapper,
  CheckBoxWrapper
} from './styles'
import Skeleton from 'react-loading-skeleton'
import { AnalyticsCalendar } from '../AnalyticsCalendar'
import { Button } from '../../styles/Buttons'

export const InvoiceGeneral = (props) => {
  const {
    driverList,
    businessList,
    selectedInvoice,
    invocing,
    handleChangeInvocing
  } = props

  const [, t] = useLanguage()
  const [typeInvoiceOptions, setTypeInvoiceOptions] = useState(null)
  const [businessOptions, setBusinessOptions] = useState(null)
  const [driverOptions, setDriverOptions] = useState(null)
  const [formState, setformState] = useState(null)
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const handleChangeFormState = (type, value) => {
    setformState({ ...formState, [type]: value })
  }

  const saveFormData = () => {
    if (businessList && formState?.business === '') {
      setAlertState({
        open: true,
        content: t('SELECTED_BUSINESS_INVALID', 'The selected Business is invalid')
      })
    } else if (driverList && formState?.driver === '') {
      setAlertState({
        open: true,
        content: t('SELECTED_DRIVER_INVALID', 'The selected Driver is invalid')
      })
    } else {
      handleChangeInvocing({ ...invocing, ...formState })
    }
  }

  const handleChangeDate = (date1, date2) => {
    setformState({ ...formState, from: date1, to: date2 })
  }

  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (driverList) {
      const selectedTypes = driverList?.drivers?.map(item => {
        return { value: item.id, content: <Option>{item.name}</Option> }
      })
      setDriverOptions(selectedTypes)
    }
    if (businessList) {
      const types = businessList?.businesses?.map(business => {
        return { value: business.id, content: <Option>{business.name}</Option> }
      })
      const typeIvoiceList = [
        { value: 'charge', content: <Option>{t('CHARGE_BUSINESS_COMMISION_AND_FEES', 'Charge the business a commision and fees')}</Option> },
        { value: 'payout', content: <Option>{t('PAYOUT_BUSINESS', 'Payout the business')}</Option> }
      ]
      setTypeInvoiceOptions(typeIvoiceList)
      setBusinessOptions(types)
    }
  }, [driverList?.drivers, businessList?.businesses])

  useEffect(() => {
    setformState(invocing)
  }, [])

  return (
    <>
      <InvoiceGeneralDetailContainer className='row'>
        {
          selectedInvoice === 'business' && (
            <FormControl className='col-md-12'>
              <Label>{t('SELECT_TYPE_INVOICE', 'Select type invoice')}</Label>
              {
                driverList?.loading ? (
                  <Skeleton height={35} />
                ) : (
                  <Select
                    options={typeInvoiceOptions}
                    className='select'
                    defaultValue={formState?.type}
                    onChange={(value) => handleChangeFormState('type', value)}
                  />
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
        {
          selectedInvoice === 'business' && (
            <FormControl className='col-md-6'>
              <Label>{t('BUSINESS', 'Business')}</Label>
              {
                businessList?.loading ? (
                  <Skeleton height={35} />
                ) : (
                  <Select
                    options={businessOptions}
                    className='select'
                    defaultValue={formState?.business}
                    placeholder={t('BUSINESS_NAME', 'Business name')}
                    onChange={(value) => handleChangeFormState('business', value)}
                  />
                )
              }
            </FormControl>
          )
        }
        {
          selectedInvoice === 'driver' && (
            <FormControl className='col-md-6'>
              <Label>{t('DRIVER', 'Driver')}</Label>
              {
                selectedInvoice === 'driver' && (
                  driverList?.loading ? (
                    <Skeleton height={35} />
                  ) : (
                    <Select
                      options={driverOptions}
                      className='select'
                      defaultValue={formState?.driver}
                      placeholder={t('SELECT_DRIVER', 'Select a driver')}
                      onChange={(value) => handleChangeFormState('driver', value)}
                    />
                  )
                )
              }
            </FormControl>
          )
        }
        {
          selectedInvoice === 'driver' && (
            <CheckBoxWrapper>
              <Checkbox
                id='cancelled'
                defaultChecked={formState?.cancelled || false}
                onClick={(e) => handleChangeFormState('cancelled', e.target.checked)}
              />
              <label htmlFor='cancelled'>{t('INCLUDE_CANCELED_ORDERS', 'Include canceled orders')}</label>
            </CheckBoxWrapper>
          )
        }

        <FormControl className='col-md-6'>
          <Label>{t('PERCENTAGE_FEE', 'Percentage Fee')}</Label>
          <input
            type='number'
            placeholder='0%'
            min='0'
            defaultValue={formState?.percentage_fee}
            onChange={(e) => handleChangeFormState('percentage_fee', e.target.value)}
          />
        </FormControl>
        <FormControl className='col-md-6'>
          <Label>{t('FIXED_FEE', 'Fixed Fee')}</Label>
          <input
            type='number'
            placeholder='00'
            min='0'
            defaultValue={formState?.fixed_fee}
            onChange={(e) => handleChangeFormState('fixed_fee', e.target.value)}
          />
        </FormControl>
        <FormControl className='col-md-6'>
          <Label>{t('TAX', 'Tax')}</Label>
          <input
            type='number'
            placeholder='00'
            min='0'
            defaultValue={formState?.tax}
            onChange={(e) => handleChangeFormState('tax', e.target.value)}
          />
        </FormControl>
        <FormControl className='col-md-6'>
          <Label>{t('MISC_AMOUNT', 'MISC amount')}</Label>
          <input
            type='number'
            placeholder='00'
            min='0'
            defaultValue={formState?.misc_amount}
            onChange={(e) => handleChangeFormState('misc_amount', e.target.value)}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('NOTES', 'Notes')}</Label>
          <textarea
            placeholder={t('WRITE_A_NOTES', 'Write a Notes')}
            defaultValue={formState?.notes}
            onChange={(e) => handleChangeFormState('notes', e.target.value)}
          />
        </FormControl>
        <FormControl className='col-md-12'>
          <Label>{t('MISC_DESCRIPTION', 'MISC description')}</Label>
          <textarea
            placeholder={t('WRITE_MISC_DESCRIPTION', 'Write a MISC description')}
            defaultValue={formState?.misc_description}
            onChange={(e) => handleChangeFormState('misc_description', e.target.value)}
          />
        </FormControl>
        <ActionBtnWrapper className='col-md-12'>
          <Button
            borderRadius='7.6px'
            color='primary'
            disabled={driverList?.loading || businessList?.loading}
            onClick={saveFormData}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ActionBtnWrapper>
      </InvoiceGeneralDetailContainer>
      <Alert
        title={t('GENERAL', 'General')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}
