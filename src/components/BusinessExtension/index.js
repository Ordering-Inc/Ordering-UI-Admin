import React, { useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input } from '../../styles/Inputs'
import { Checkbox } from '../../styles'
import { Alert } from '../Confirm'
import {
  BusinessExtensionContainer,
  FormControl,
  Label,
  CheckboxWrapper
} from './styles'

export const BusinessExtension = (props) => {
  const {
    business,
    formState,
    setFormState
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [], success: false })

  const changeMinimunPurchased = (evt) => {
    if (evt.target.value.trim() === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('MINIMUN_PURCHASED_REQUIRED')]
      })
      return
    }
    setFormState({
      ...formState,
      changes: { [evt.target.name]: evt.target.value }
    })
  }

  const changeServiceFee = (evt) => {
    if (evt.target.value.trim() === '') {
      setAlertState({
        ...alertState,
        open: true,
        content: [t('SERVICE_FEE_REQUIRED')]
      })
      return
    }
    setFormState({
      ...formState,
      changes: { [evt.target.name]: evt.target.value }
    })
  }

  const changeFeature = (evt) => {
    setFormState({
      ...formState,
      changes: { [evt.target.name]: evt.target.checked }
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
      <BusinessExtensionContainer>
        <FormControl>
          <Label>{t('MINIMUN_PURCHASED', 'Minimum purchase')}</Label>
          <Input
            type='text'
            name='minimum'
            defaultValue={business?.minimum}
            placeholder={t('MINIMUN_PURCHASED', 'Minimum purchase')}
            onChange={changeMinimunPurchased}
          />
        </FormControl>
        <FormControl>
          <Label>{t('SERVICE_FEE_SETTINGS', 'Service fee settings in %')}</Label>
          <Input
            type='text'
            name='service_fee'
            defaultValue={business?.service_fee}
            placeholder={t('SERVICE_FEE_SETTINGS', 'Service fee settings in %')}
            onChange={changeServiceFee}
          />
        </FormControl>
        <FormControl>
          <Label>{t('BUSINESS_FEATURE', 'Featured Business')}</Label>
          <CheckboxWrapper>
            <Checkbox
              defaultChecked={business?.featured}
              name='featured'
              onChange={e => changeFeature(e)}
            />
            <span>{t('FEATURE', 'Featured')}</span>
          </CheckboxWrapper>
        </FormControl>
      </BusinessExtensionContainer>
      <Alert
        title={t('EXTENSIONS', 'Extensions')}
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
