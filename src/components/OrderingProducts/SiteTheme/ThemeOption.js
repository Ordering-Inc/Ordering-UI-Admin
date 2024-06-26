import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ColorPicker } from '../../Shared'
import { SecondSelect as Select, Checkbox, Input } from '../../../styles'
import { ThemeImage } from './ThemeImage'

import {
  OptionContainer,
  OptionHeader,
  Option,
  ColorPickerContainer
} from './styles'

export const ThemeOption = (props) => {
  const {
    name,
    optionObject,
    valueObject,
    path,
    themeValues,
    setThemeValues,
    handleAddThemeGallery
  } = props

  const [, t] = useLanguage()

  const getOptions = (options) => {
    return options.map(option => {
      return {
        value: option,
        content: <Option>{typeof option === 'string' ? t(option.toUpperCase(), option.replace(/_/g, ' ')) : option}</Option>
      }
    })
  }

  const getTitle = (key) => {
    return t(key.toUpperCase, key.replace(/_/g, ' '))
  }

  const validHexColor = (colorCode) => {
    const RegExp6 = /^#[0-9A-F]{6}$/i
    const RegExp3 = /^#[0-9A-F]{3}$/i
    return RegExp6.test(colorCode) || RegExp3.test(colorCode)
  }

  const updateObject = (object, newValue, path) => {
    const stack = path.split('.')
    while (stack.length > 1) {
      object = object[stack.shift()]
    }
    object[stack.shift()] = newValue
  }

  const handleChangeValue = (value) => {
    const _themeValues = { ...themeValues }
    updateObject(_themeValues, value, path)
    setThemeValues(_themeValues)
  }

  return (
    <OptionContainer>
      <OptionHeader>
        {optionObject?.value_type === 'boolean' && (
          <Checkbox
            defaultChecked={valueObject}
            onChange={e => handleChangeValue(e.target.checked)}
          />
        )}
        <h5>{getTitle(name)}</h5>
      </OptionHeader>
      {((optionObject?.value_type === 'integer' || optionObject?.value_type === 'string' || name === 'borderRadius') && !optionObject?.options && !validHexColor(valueObject)) && (
        <Input
          defaultValue={valueObject}
          onChange={e => handleChangeValue(e.target.value)}
          onInput={(e) => {
            if (name === 'borderRadius') {
            e.target.value = (Number(e.target.value) > 99 || e.target.value === '.' || (e.target.value.match(/\./g) || []).length > 1)
              ? e.target.value.slice(0, -1)
              : e.target.value.match(`^[${e.target.value === '0' ? '1' : '0'}-9/.]{1,9}$`)
            }
          }}
        />
      )}
      {(optionObject?.value_type === 'string' && name !== 'borderRadius' && validHexColor(valueObject)) && (
        <ColorPickerContainer>
          <ColorPicker
            defaultColor={valueObject}
            onChangeColor={color => handleChangeValue(color)}
          />
        </ColorPickerContainer>
      )}
      {optionObject?.options && (
        <Select
          placeholder={<Option isPlaceholder>{t('SELECT_ITEM', 'Select a _attribute_').replace('_attribute_', getTitle(name))}</Option>}
          defaultValue={valueObject}
          options={getOptions(optionObject?.options)}
          onChange={value => handleChangeValue(value)}
        />
      )}
      {(name === 'image' || name === 'dummy_image') && optionObject?.value_type === 'string' && (
        <ThemeImage
          isMarginTop
          valueObject={valueObject}
          handleAddThemeGallery={handleAddThemeGallery}
          handleChangeValue={handleChangeValue}
        />
      )}
      {(!optionObject?.value_type && !optionObject?.components) && Object.keys(optionObject).filter(subOption => subOption !== 'value_type' && subOption !== 'options').map(subOption => (
        <React.Fragment key={subOption}>
          {subOption !== 'components' && (
            <ThemeOption
              name={subOption}
              optionObject={optionObject[subOption]}
              valueObject={valueObject[subOption]}
              path={path + '.' + subOption}
              themeValues={themeValues}
              setThemeValues={setThemeValues}
              handleAddThemeGallery={handleAddThemeGallery}
            />
          )}
        </React.Fragment>
      ))}
        {optionObject?.components && Object?.keys(optionObject?.components)?.map(subOption => (
        <React.Fragment key={subOption}>
            <ThemeOption
              name={subOption}
              optionObject={optionObject?.components[subOption]}
              valueObject={valueObject?.components[subOption]}
              path={path + '.' + subOption}
              themeValues={themeValues}
              setThemeValues={setThemeValues}
              handleAddThemeGallery={handleAddThemeGallery}
            />
        </React.Fragment>
      ))}
    </OptionContainer>
  )
}
