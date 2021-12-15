import React, { useState } from 'react'
import { useLanguage, useConfig } from 'ordering-components-admin'
import { Input, DefaultSelect, Checkbox, Button } from '../../styles'
import { Alert } from '../Confirm'
import { DriversGroupDrivers } from '../DriversGroupDrivers'
import { DriversGroupCompanies } from '../DriversGroupCompanies'
import { DriversGroupBusinesses } from '../DriversGroupBusinesses'

import {
  Container,
  InputWrapper,
  CheckboxContainer
} from './styles'

export const DriversGroupGeneralForm = (props) => {
  const {
    driversGroupState,
    driversManagers,
    changesState,
    handleChangesState,
    useAdvanced,
    setUseAdvanced,
    handleUpdateDriversGroup,
    handleAddDriversGroup
  } = props

  const [, t] = useLanguage()
  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [configState] = useConfig()

  const autoAssignType = configState?.configs?.autoassign_type?.value

  const typeOptions = [
    { value: 0, content: t('IN_HOUSE_DRIVERS', 'In house drivers') },
    { value: 1, content: t('DRIVER_COMPANIES', 'Driver companies') }
  ]

  const driversManagersOptions = driversManagers.map(manager => {
    return {
      value: manager.id,
      content: <div>{manager?.name} {manager?.lastname}</div>
    }
  })

  const priorityOptions = [
    { value: -1, content: t('LOW', 'Low') },
    { value: 0, content: t('NORMAL', 'Normal') },
    { value: 1, content: t('HIGH', 'High') },
    { value: 2, content: t('URGENT', 'Urgent') }
  ]

  const handleLogistic = (checked) => {
    setUseAdvanced(checked)
    if (checked) return
    const changes = {
      autoassign_amount_drivers: 0,
      orders_group_max_orders: 0
    }
    if (!driversGroupState.driversGroup) return
    handleUpdateDriversGroup(changes)
  }

  return (
    <Container>
      <InputWrapper>
        <label>{t('NAME', 'Name')}</label>
        <Input
          name='name'
          value={changesState?.name ?? driversGroupState.driversGroup?.name ?? ''}
          onChange={e => handleChangesState({ name: e.target.value })}
          placeholder={t('NAME', 'Name')}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('DRIVER_MANAGER', 'Driver manager')}</label>
        <DefaultSelect
          placeholder={t('SELECT_MANAGER', 'Select driver manager')}
          options={driversManagersOptions}
          defaultValue={changesState?.administrator_id ?? driversGroupState.driversGroup?.administrator_id}
          optionInnerMaxHeight='60vh'
          onChange={val => handleChangesState({ administrator_id: val })}
        />
      </InputWrapper>
      <InputWrapper>
        <label>{t('TYPE', 'Type')}</label>
        <DefaultSelect
          placeholder={t('SELECT_TYPE', 'Select type')}
          options={typeOptions}
          defaultValue={changesState?.type ?? driversGroupState.driversGroup?.type}
          onChange={val => handleChangesState({ type: val })}
        />
      </InputWrapper>

      {
        (changesState?.type === 0 || (typeof changesState?.type === 'undefined' && driversGroupState.driversGroup?.type === 0))
          ? <DriversGroupDrivers {...props} />
          : <DriversGroupCompanies {...props} />
      }

      <InputWrapper>
        <label>{t('PRIORITY', 'Priority')}</label>
        <DefaultSelect
          placeholder={t('SELECT_PRIORITY', 'Select priority')}
          options={priorityOptions}
          defaultValue={changesState?.priority ?? driversGroupState.driversGroup?.priority}
          onChange={val => handleChangesState({ priority: val })}
        />
      </InputWrapper>
      {!driversGroupState.driversGroup && (
        <DriversGroupBusinesses {...props} />
      )}
      {driversGroupState.driversGroup && autoAssignType !== 'basic' && (
        <CheckboxContainer>
          <Checkbox
            checked={useAdvanced}
            onChange={e => handleLogistic(e.target.checked)}
          />
          <p>{t('USE_ADVANCED_LOGISTIC', 'Use advanced logistic')}</p>
        </CheckboxContainer>
      )}
      <Button
        borderRadius='8px'
        color='primary'
        disabled={Object.keys(changesState).length === 0}
        onClick={() => driversGroupState.driversGroup ? handleUpdateDriversGroup(changesState) : handleAddDriversGroup()}
      >
        {driversGroupState.driversGroup ? t('SAVE', 'Save') : t('ADD', 'Add')}
      </Button>
      <Alert
        title={t('WEB_APPNAME', 'Ordering')}
        content={alertState.content}
        acceptText={t('ACCEPT', 'Accept')}
        open={alertState.open}
        onClose={() => setAlertState({ open: false, content: [] })}
        onAccept={() => setAlertState({ open: false, content: [] })}
        closeOnBackdrop={false}
      />
    </Container>
  )
}
