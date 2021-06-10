import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select'
import {
  Option
} from './styles'

export const UserTypeSelector = (props) => {
  const {
    userId,
    defaultUserType,
    handleChangeUserType
  } = props
  const [, t] = useLanguage()

  const userTypes = [
    { value: 0, content: <Option>{t('USERS', 'Admintrator')}</Option> },
    { value: 1, content: <Option>{t('CITY_MANAGER', 'City manager')}</Option> },
    { value: 2, content: <Option>{t('BUSINESS_OWNER', 'Business owner')}</Option> },
    { value: 3, content: <Option>{t('USER', 'User')}</Option> }
  ]
  const placeholder=<Option>{t('TYPE', 'Type')}</Option>

  const onUpdateUserType = (type) => {
    handleChangeUserType && handleChangeUserType({ id: userId, level: type })
  }

  return (
    <Select
      noSelected
      placeholder={placeholder}
      options={userTypes}
      defaultValue={defaultUserType}
      onChange={type => onUpdateUserType(type)}
    />
  )
}
