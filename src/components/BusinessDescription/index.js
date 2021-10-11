import React, { useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Button } from '../../styles/Buttons'
import { Input, TextArea } from '../../styles/Inputs'
import {
  Container,
  WrapperShortDescription,
  WrapperDescription
} from './styles'

export const BusinessDescription = (props) => {
  const {
    business,
    formState,
    setFormState,
    handleUpdateBusinessClick
  } = props

  const [, t] = useLanguage()

  const handleChangeInput = (e) => {
    setFormState({
      ...formState,
      changes: { ...formState?.changes, [e.target.name]: e.target.value }
    })
  }

  useEffect(() => {
    setFormState({ ...formState, changes: {} })
  }, [])
  return (
    <Container>
      <WrapperShortDescription>
        <label>{t('SHORT_BUSINESS_ABOUT', 'Short business description')}</label>
        <Input
          name='about'
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.about
              : formState?.changes?.about ?? business?.about ?? ''
          }
          onChange={(e) => handleChangeInput(e)}
          placeholder={t('TYPE_BUSINESS_SHORT_DESCRIPTION', 'Type business short description ')}
        />
      </WrapperShortDescription>
      <WrapperDescription>
        <label>{t('BUSINESS_DESCRITPION', 'Business description')}</label>
        <TextArea
          name='description'
          rows={4}
          defaultValue={
            formState?.result?.result
              ? formState?.result?.result?.description
              : formState?.changes?.description ?? business?.description ?? ''
          }
          onChange={(e) => handleChangeInput(e)}
          placeholder={t('TYPE_BUSINESS_DESCRIPTION', 'Type business description')}
        />
      </WrapperDescription>
      <Button
        color='primary'
        borderRadius='5px'
        disabled={formState.loading || Object.keys(formState?.changes).length === 0}
        onClick={handleUpdateBusinessClick}
      >
        {formState.loading ? t('UPDATING', 'Updating') : t('SAVE', 'Save')}
      </Button>
    </Container>
  )
}
