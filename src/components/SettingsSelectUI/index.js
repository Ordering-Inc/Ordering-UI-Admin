import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'

import {
  SettingsSelectContainer,
  SelectHeader,
  SelectContent,
  Option
} from './styles'

export const SettingsSelectUI = (props) => {
  const {
    config,
    handleSelectChange
  } = props

  const [, t] = useLanguage()

  const [options, setOptions] = useState(null)

  useEffect(() => {
    if (config) {
      const selectedTypes = config?.options?.map(item => {
        return { value: item.value, content: <Option>{t(item.text.toUpperCase())}</Option> }
      })
      setOptions(selectedTypes)
    }
  }, [config])

  return (
    <SettingsSelectContainer>
      <SelectHeader>
        {
          config?.name && options && (
            <p>{config?.name}</p>
          )
        }
      </SelectHeader>
      <SelectContent>
        {
          options && (
            <Select
              defaultValue={config?.value}
              options={options}
              className='select'
              onChange={(typeValue) => handleSelectChange(typeValue)}
            />
          )
        }
      </SelectContent>
    </SettingsSelectContainer>
  )
}
