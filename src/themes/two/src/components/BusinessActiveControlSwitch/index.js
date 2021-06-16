import React from 'react'
import { Switch } from '../../styles/Switch'
export const BusinessActiveControlSwitch = (props) => {
  const {
    defaultChecked,
    businessId,
    handleChangeActiveBusiness
  } = props
  const onChangeActiveBusiness = (enabled) => {
    handleChangeActiveBusiness({ id: businessId, enabled: enabled })
  }
  return (
    <Switch
      defaultChecked={defaultChecked}
      onChange={onChangeActiveBusiness}
    />
  )
}
