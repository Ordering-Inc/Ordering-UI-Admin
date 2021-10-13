import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import { Input } from '../../styles/Inputs'
import { Alert } from '../Confirm'
import {
  BusinessTaxContainer,
  FormControl,
  Label,
  SelectWrapper
} from './styles'

export const BusinessTax = (props) => {
  const {
    business,
    setFormState,
    formState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const taxTypeList = [
    { value: '1', content: t('TAX_INCLUDED', 'Tax included on price') },
    { value: '2', content: t('TAX_NOT_INCLUDED', 'Tax not included on price') }
  ]

  const handleChangeSelect = (value, type) => {
    setFormState({
      ...formState,
      changes: { [type]: value }
    })
  }

  const handleChangeInput = (evt) => {
    if (evt.target.value === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('TAX_REQUIRED')]
      })
      return
    }
    setFormState({
      ...formState,
      changes: { [evt.target.name]: evt.target.value }
    })
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
      <BusinessTaxContainer>
        <FormControl>
          <Label>{t('TAX_TYPE', 'Tax type')}</Label>
          <SelectWrapper>
            <Select
              defaultValue={business?.tax_type?.toString() ?? ''}
              options={taxTypeList}
              onChange={(value) => handleChangeSelect(value, 'tax_type')}
              placeholder={t('SELECT_A_OPTION', 'Select a option')}
              notAsync
            />
          </SelectWrapper>
        </FormControl>
        <FormControl>
          <Label>{t('TAX_PERCENTAGE', 'Tax percentage')}</Label>
          <Input
            type='text'
            name='tax'
            defaultValue={business?.tax}
            placeholder={t('TAX_PERCENTAGE', 'Tax percentage')}
            onChange={handleChangeInput}
          />
        </FormControl>
      </BusinessTaxContainer>
      <Alert
        title={t('MORE', 'More')}
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
