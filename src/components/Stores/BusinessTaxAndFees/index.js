import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button, Input, Switch } from '../../../styles'

import {
  Container,
  SwitchWrapper,
  FormController
} from './styles'

export const BusinessTaxAndFees = (props) => {
  const {
    formState,
    setFormState,
    business,
    handleUpdateBusinessClick
  } = props

  const [, t] = useLanguage()

  const handleChangeFormState = (newChange) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        ...newChange
      }
    })
  }

  useEffect(() => {
    setFormState({
      ...formState,
      changes: {}
    })
  }, [])

  return (
    <Container>
      <h1>{t('TAX_AND_FEES', 'Tax & fees')}</h1>
      <SwitchWrapper>
        <p>{t('TAX_INCLUDED', 'Tax included on price')}</p>
        <Switch
          defaultChecked={business?.tax_type === 1}
          onChange={checked => handleChangeFormState({ tax_type: checked ? 1 : 2 })}
        />
      </SwitchWrapper>
      <FormController>
        <label>{t('TAX_PERCENTAGE', 'Tax percentage')}</label>
        <Input
          placeholder='0.00%'
          defaultValue={business?.tax}
          onChange={e => handleChangeFormState({ tax: e.target.value })}
        />
      </FormController>
      <FormController>
        <label>{t('SERVICE_FEE_SETTINGS', 'Service fee settings in %')}</label>
        <Input
          placeholder='0.00%'
          defaultValue={business?.service_fee}
          onChange={e => handleChangeFormState({ service_fee: e.target.value })}
        />
      </FormController>
      <Button
        borderRadius='8px'
        color='primary'
        disabled={formState.loading || Object.keys(formState.changes).length === 0}
        onClick={handleUpdateBusinessClick}
      >
        {t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
