import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import {
  BusinessLogisticContainer,
  FormControl,
  Label,
  SelectWrapper
} from './styles'

export const BusinessLogistic = (props) => {
  const {
    business,
    setFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })
  let timeout = null
  const priorityList = [
    { value: '2', content: t('URGENT', 'Urgent') },
    { value: '1', content: t('HIGH', 'High') },
    { value: '0', content: t('NORMAL', 'Normal') },
    { value: '-1', content: t('LOW', 'Low') }
  ]

  const changeOrderDefaultPriority = (value, type) => {
    setFormState({
      ...formState,
      changes: { [type]: parseInt(value) }
    })
  }

  const changeExpireOrderAfterMinutes = (e) => {
    e.persist()
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      if (e.target.value === '') return
      setFormState({
        ...formState,
        changes: { [e.target.name]: parseInt(e.target.value) }
      })
    }, 500)
  }

  const closeAlert = () => {
    setAlertState({
      ...alertState,
      open: false,
      content: []
    })
  }

  return (
    <>
      <BusinessLogisticContainer>
        <FormControl>
          <Label>{t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes')}</Label>
          <Input
            type='text'
            name='cancel_order_after_minutes'
            defaultValue={business?.cancel_order_after_minutes ?? ''}
            placeholder={t('EXPIRE_ORDER_AFTER_MINUTES', 'Expire order after minutes')}
            onChange={changeExpireOrderAfterMinutes}
          />
        </FormControl>
        <FormControl>
          <Label>{t('ORDER_DEFAULT_PRIORITY', 'Order default priority')}</Label>
          <SelectWrapper>
            <Select
              defaultValue={business?.order_default_priority?.toString() ?? ''}
              options={priorityList}
              onChange={(value) => changeOrderDefaultPriority(value, 'order_default_priority')}
              placeholder={t('SELECT_PRIORITY')}
              notAsync
            />
          </SelectWrapper>
        </FormControl>
      </BusinessLogisticContainer>
      <Alert
        title={t('LOGISTIC', 'Logistic')}
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
