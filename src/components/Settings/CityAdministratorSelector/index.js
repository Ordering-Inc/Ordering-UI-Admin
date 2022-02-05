import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { Option } from './styles'

export const CityAdministratorSelector = (props) => {
  const {
    cityManagers,
    defaultValue,
    handleChangeAdministrator
  } = props

  const [, t] = useLanguage()

  const options = cityManagers.map(user => {
    return {
      value: user?.id,
      content: <Option>{user?.name} {user?.lastname}</Option>
    }
  })

  return (
    <Select
      defaultValue={defaultValue}
      placeholder={<Option>{t('SELECT_USER', 'Select a user')}</Option>}
      options={options}
      onChange={val => handleChangeAdministrator(val)}
    />
  )
}
