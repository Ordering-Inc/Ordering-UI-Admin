import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Input, DefaultSelect } from '../../../../styles'
import { timezones } from '../../../../config/constants'
import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  InputWrapper
} from './styles'

export const GeneralForm = (props) => {
  const {
    changesState,
    handleChangesState
  } = props

  const [, t] = useLanguage()
  const { register } = useFormContext()
  const [timezoneSearchValue, setTimezoneSearchValue] = useState('')
  const [timezonesOptions, setTimezonesOptions] = useState([])

  const priorityOptions = [
    { value: -1, content: t('LOW', 'Low') },
    { value: 0, content: t('NORMAL', 'Normal') },
    { value: 1, content: t('HIGH', 'High') },
    { value: 2, content: t('URGENT', 'Urgent') }
  ]

  useEffect(() => {
    const _timezonesOptions = timezones
      .filter(timezone => timezone.toLocaleLowerCase().includes(timezoneSearchValue.toLocaleLowerCase()))
      .map(timezone => {
        return {
          value: timezone,
          content: timezone
        }
      })
    setTimezonesOptions(_timezonesOptions)
  }, [timezoneSearchValue])

  return (
    <>
      <FormContainer>
        <h2>{t('GENERAL', 'General')}</h2>
        <InputWrapper>
          <label>{t('NAME', 'Name')}</label>
          <Input
            name='name'
            defaultValue={changesState?.name ?? ''}
            onChange={e => handleChangesState('name', e.target.value)}
            placeholder={t('NAME', 'Name')}
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('NAME', 'Name'))
            })}
            autoComplete='off'
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('LIMIT', 'Limit')}</label>
          <Input
            name='limit'
            defaultValue={changesState?.limit ?? ''}
            onChange={e => handleChangesState('limit', e.target.value)}
            placeholder={t('LIMIT', 'Limit')}
            autoComplete='off'
            onKeyPress={(e) => {
              if (!/^[0-9]$/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('PRIORITY', 'Priority')}</label>
          <DefaultSelect
            placeholder={t('SELECT_PRIORITY', 'Select priority')}
            defaultValue={changesState?.priority}
            options={priorityOptions}
            onChange={val => handleChangesState('priority', val)}
          />
        </InputWrapper>
        <InputWrapper isTimezone>
          <label>{t('TIMEZONE', 'Timezone')}</label>
          <DefaultSelect
            placeholder={t('SELECT_TIMEZONE', 'Select a timezone')}
            defaultValue={changesState?.timezone}
            options={timezonesOptions}
            onChange={val => handleChangesState('timezone', val)}
            optionInnerMaxHeight='60vh'
            isShowSearchBar
            searchBarIsCustomLayout
            searchBarIsNotLazyLoad
            searchValue={timezoneSearchValue}
            handleChangeSearch={setTimezoneSearchValue}
          />
        </InputWrapper>
        <InputWrapper>
          <label>{t('ADDRESS', 'Address')}</label>
          <Input
            name='address'
            defaultValue={changesState?.address ?? ''}
            placeholder={t('ADDRESS', 'Address')}
            onChange={e => handleChangesState('address', e.target.value)}
            ref={register({
              required: t(
                'VALIDATION_ERROR_REQUIRED',
                'Name is required'
              ).replace('_attribute_', t('ADDRESS', 'Address'))
            })}
            autoComplete='off'
          />
        </InputWrapper>
      </FormContainer>
    </>
  )
}
