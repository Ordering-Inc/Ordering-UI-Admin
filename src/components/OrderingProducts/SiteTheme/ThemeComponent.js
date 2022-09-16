import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { ThemeOption } from './ThemeOption'
import { Checkbox } from '../../../styles'
import { ThemeImage } from './ThemeImage'

import {
  ComponentContainer,
  ComponentHeader
} from './styles'

export const ThemeComponent = (props) => {
  const {
    name,
    valueObject,
    componentObject,
    path,
    themeValues,
    setThemeValues,
    handleAddThemeGallery
  } = props

  const [, t] = useLanguage()

  const getTitle = (key) => {
    return t(key.toUpperCase, key.replace(/_/g, ' '))
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
    <ComponentContainer>
      <ComponentHeader>
        {componentObject?.value_type === 'boolean' && (
          <Checkbox
            defaultChecked={valueObject}
            onChange={e => handleChangeValue(e.target.checked)}
          />
        )}
        <h4>{getTitle(name)}</h4>
      </ComponentHeader>
      {(name === 'image' || name === 'dummy_image') && componentObject?.value_type === 'string' && (
        <ThemeImage
          key={valueObject}
          valueObject={valueObject}
          handleAddThemeGallery={handleAddThemeGallery}
          handleChangeValue={handleChangeValue}
        />
      )}
      {Object.keys(componentObject).filter(option => option !== 'components' && option !== 'value_type').map(option => {
        const optionObject = componentObject[option]
        return (
          <ThemeOption
            key={option}
            name={option}
            optionObject={optionObject}
            valueObject={valueObject[option]}
            path={path + '.' + option}
            themeValues={themeValues}
            setThemeValues={setThemeValues}
            handleAddThemeGallery={handleAddThemeGallery}
          />
        )
      })}
      {componentObject?.components && (
        <>
          {Object.keys(componentObject?.components).filter(subComponent => subComponent !== 'value_type').map(subComponent => {
            const subComponentObject = componentObject?.components[subComponent]
            return (
              <ThemeComponent
                key={subComponent}
                name={subComponent}
                componentObject={subComponentObject}
                valueObject={valueObject?.components[subComponent]}
                path={path + '.components.' + subComponent}
                themeValues={themeValues}
                setThemeValues={setThemeValues}
                handleAddThemeGallery={handleAddThemeGallery}
              />
            )
          })}
        </>
      )}
    </ComponentContainer>
  )
}
