import React, { useState, useEffect } from 'react'
import {
  useLanguage,
  DriversCompanyDetails as DriversCompanyDetailsController
} from 'ordering-components-admin'
import { useForm, FormProvider } from 'react-hook-form'
import { Alert } from '../../Shared'
import { Button } from '../../../styles'
import { GeneralForm } from './GeneralForm'
import { ScheduleForm } from './ScheduleForm'
import { WebhooksForm } from './WebhooksForm'

import {
  Container,
  SectionContainer,
  ButtonsContainer
} from './styles'

const DriversCompanyAddFormUI = (props) => {
  const {
    changesState,
    actionState,
    cleanActionState,
    handleAddDriversCompany
  } = props

  const [, t] = useLanguage()
  const formMethods = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })

  const closeAlert = () => {
    cleanActionState()
    setAlertState({
      open: false,
      content: []
    })
  }

  useEffect(() => {
    if (!actionState.loading && actionState.error) {
      setAlertState({
        open: true,
        content: actionState.error || [t('ERROR')]
      })
    }
  }, [actionState])

  useEffect(() => {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map((error) => error.message)
      })
    }
  }, [formMethods.errors])

  const onSubmit = () => {
    if (!(changesState?.timezone)) {
      setAlertState({
        open: true,
        content: t(
          'VALIDATION_ERROR_REQUIRED',
          'Name is required'
        ).replace('_attribute_', t('TIMEZONE', 'Timezone'))
      })
      return
    }
    handleAddDriversCompany()
  }

  return (
    <FormProvider {...formMethods}>
      <Container onSubmit={formMethods.handleSubmit(onSubmit)}>
        <SectionContainer>
          <GeneralForm {...props} />
        </SectionContainer>
        <SectionContainer>
          <ScheduleForm {...props} />
        </SectionContainer>
        <SectionContainer>
          <WebhooksForm {...props} />
        </SectionContainer>
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
        title={t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </FormProvider>
  )
}

export const DriversCompanyAddForm = (props) => {
  const driversCompanyDetailsProps = {
    ...props,
    UIComponent: DriversCompanyAddFormUI
  }
  return <DriversCompanyDetailsController {...driversCompanyDetailsProps} />
}
