import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { ImageBox } from './ImageBox'
import {
  CheckSquareFill as CheckedIcon,
  Square as UnCheckedIcon
} from 'react-bootstrap-icons'
import {
  FormControl,
  HideCheckWrapper,
  SelectWrapper,
  Option
} from './styles'
import { ColorPicker } from '../../Shared'
import { Input } from '../../../styles'

export const SettingComponent = (props) => {
  const { settingList, handleUpdateThemeValue, advancedValues, themeStructure } = props

  const [, t] = useLanguage()

  const deepFind = (obj, path) => {
    const paths = path.split('.')
    let current = JSON.parse(JSON.stringify(obj))
    let i

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined
      } else {
        current = current[paths[i]]
      }
    }
    return current
  }

  const getOptions = (path) => {
    const options = deepFind(themeStructure, [path, 'options'].join('.'))
    if (!options) return []
    const updatedOptions = options.map(option => ({ value: option, content: <Option>{t(option.toString().toUpperCase(), option)}</Option> }))
    return updatedOptions
  }

  return (
    <>
      {settingList.map((setting, i) => (
        <React.Fragment key={i}>
          {setting.type === 'hidden' && (
            <FormControl>
              <label>{setting.name}</label>
              <HideCheckWrapper onClick={() => handleUpdateThemeValue(!deepFind(advancedValues, setting?.path), setting?.path)}>
                {deepFind(advancedValues, setting?.path) ? <CheckedIcon className='active' /> : <UnCheckedIcon />}
                <span>{t('HIDDEN', 'Hidden')}</span>
              </HideCheckWrapper>
            </FormControl>
          )}
          {setting.type === 'position' && (
            <FormControl>
              <label>{setting.name}</label>
              <SelectWrapper>
                <Select
                  options={getOptions(setting?.path)}
                  className='select'
                  defaultValue={deepFind(advancedValues, setting?.path)}
                  placeholder={t('SELECT_OPTION', 'Select an option')}
                  onChange={(value) => handleUpdateThemeValue(value, setting?.path)}
                />
              </SelectWrapper>
            </FormControl>
          )}
          {setting.type === 'image' && (
            <ImageBox
              title={setting.name}
              ratio='900 x 200 px'
              photo={deepFind(advancedValues, setting?.path)}
              path={setting?.path}
              handleChangePhoto={handleUpdateThemeValue}
            />
          )}
          {setting.type === 'color' && (
            <FormControl>
              <label>{setting.name}</label>
              <ColorPicker
                defaultColor={deepFind(advancedValues, setting?.path) || '#2C7BE5'}
                onChangeColor={(color) => handleUpdateThemeValue(color, setting?.path)}
              />
            </FormControl>
          )}
          {setting.type === 'input' && (
            <FormControl>
              <label>{setting.name}</label>
              <Input
                defaultValue={deepFind(advancedValues, setting?.path)}
                onChange={(e) => handleUpdateThemeValue(e.target.value, setting?.path)}
                placeholder={setting.name}
              />
            </FormControl>
          )}
        </React.Fragment>
      ))}
    </>
  )
}
