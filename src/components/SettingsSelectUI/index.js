import React, { useEffect, useState } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../styles/Select/FirstSelect'

import {
  SettingsSelectContainer,
  SelectHeader,
  SelectContent,
  Option,
  OptionsError
} from './styles'

export const SettingsSelectUI = (props) => {
  const {
    config,
    handleSelectChange
  } = props

  const [, t] = useLanguage()

  const [options, setOptions] = useState(null)

  useEffect(() => {
    if (!config) return
    if (config.key === 'terms_and_conditions') {
      const selectTypes = [
        { value: 'true', content: <Option>{t('YES', 'Yes')}</Option> },
        { value: 'false', content: <Option>{t('NO', 'No')}</Option> }
      ]
      setOptions(selectTypes)
    } else {
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
          config?.name && (
            <p>{config?.name}</p>
          )
        }
      </SelectHeader>
      {
        options ? (
          <SelectContent>
            <Select
              defaultValue={config?.value}
              options={options}
              className='select'
              onChange={(typeValue) => handleSelectChange(typeValue)}
              placeholder={t('SELECT_A_OPTION', 'Select a option')}
            />
          </SelectContent>
        ) : (
          <OptionsError>{t('NO_OPTIONS_VALUE', 'There is no options value')}</OptionsError>
        )
      }

    </SettingsSelectContainer>
  )
}
