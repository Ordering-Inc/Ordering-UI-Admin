import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  useConfig,
  DriversGroupDetails as DriversGroupDetailsController
} from 'ordering-components-admin'
import { useForm, FormProvider } from 'react-hook-form'
import { Alert } from '../../Shared'
import { Button } from '../../../styles'
import { GeneralForm } from './GeneralForm'
import { BusinessesForm } from './BusinessesForm'
import { PaymethodsForm } from './PaymethodsForm'
import { AdvancedLogisticsForm } from './AdvancedLogisticsForm'

import {
  Container,
  SectionContainer,
  ButtonsContainer
} from './styles'

const DriversGroupAddFormUI = (props) => {
  const {
    actionState,
    changesState,
    handleAddDriversGroup
  } = props

  const [, t] = useLanguage()
  const [configState] = useConfig()
  const formMethods = useForm()
  const autoAssignType = configState?.configs?.autoassign_type?.value
  const [alertState, setAlertState] = useState({ open: false, content: [] })

  useEffect(() => {
    if (!actionState?.error) return
    setAlertState({
      open: true,
      content: actionState?.error
    })
  }, [actionState?.error])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map((error) => error.message)
      })
    }
  }, [formMethods.errors])

  const onSubmit = () => {
    if (changesState?.type === 0 && !changesState?.drivers) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The drivers is required.').replace('_attribute_', t('DRIVERS', 'Drivers'))]
      })
      return
    }
    if (changesState?.type === 1 && !changesState?.driver_companies) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The Driver company is required.').replace('_attribute_', t('DRIVER_COMPANY', 'Driver company'))]
      })
      return
    }
    if (!changesState?.business) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_REQUIRED', 'The drivers is required.').replace('_attribute_', t('BUSINESSES', 'Businesses'))]
      })
      return
    }
    handleAddDriversGroup()
  }

  console.log(changesState)

  return (
    <FormProvider {...formMethods}>
      <Container onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SectionContainer>
          <GeneralForm {...props} />
        </SectionContainer>
        <SectionContainer>
          <BusinessesForm {...props} />
        </SectionContainer>
        <SectionContainer>
          <PaymethodsForm {...props} />
        </SectionContainer>
        {autoAssignType !== 'basic' && (
          <SectionContainer>
            <AdvancedLogisticsForm {...props} />
          </SectionContainer>
        )}
        <ButtonsContainer>
          <Button
            color='secundary'
            onClick={() => props.onClose()}
            type='button'
          >
            {t('CANCEL', 'Cancel')}
          </Button>
          <Button
            borderRadius='8px'
            color='primary'
            type='submit'
            disabled={Object.keys(changesState).length === 0}
          >
            {t('SAVE', 'Save')}
          </Button>
        </ButtonsContainer>
      </Container>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </FormProvider>
  )
}

export const DriversGroupAddForm = (props) => {
  const driversGroupAddFormProps = {
    ...props,
    UIComponent: DriversGroupAddFormUI
  }
  return <DriversGroupDetailsController {...driversGroupAddFormProps} />
}
