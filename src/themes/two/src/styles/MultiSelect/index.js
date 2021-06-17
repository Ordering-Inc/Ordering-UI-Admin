import React, { useEffect, useRef, useState } from 'react'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import CheckboxBlankCircle from '@meronex/icons/ri/RiCheckboxBlankCircleLine'
import CheckboxMarkedCircle from '@meronex/icons/ri/RiCheckboxCircleLine'

import {
  Select as SelectInput,
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header
} from '../Selects'

import {
  CheckBox
} from './styles'

export const MultiSelect = (props) => {
  const { placeholder, options, onChange, defaultValue } = props

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    setOpen(!open)
  }

  const closeSelect = (e) => {
    if (open) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    const _defaultOption = options?.filter(
      (option) => defaultValue.includes(option.value)
    )
    setSelectedOptions(_defaultOption)
    setValues(defaultValue)
  }, [defaultValue, options])

  useEffect(() => {
    if (!open) return
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [open])

  const handleSelectOption = (option) => {
    if (option.value === null || option.value === 'default') return
    const _selectedOptions = [...selectedOptions]
    const _values = [...values]
    if (!_values.includes(option.value)) {
      _values.push(option.value)
      _selectedOptions.push(option)
    } else {
      for (let i = 0; i < _values.length; i++) {
        if (_values[i] === option.value) {
          _values.splice(i, 1)
          _selectedOptions.splice(i, 1)
          i--
        }
      }
    }
    setSelectedOptions(_selectedOptions)
    setValues(_values)
    onChange && onChange(option.value)
  }

  return (
    <SelectInput>
      {selectedOptions.length === 0 ? (
        <Selected onClick={handleSelectClick}>
          {placeholder || ''}
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      ) : (
        <Selected onClick={handleSelectClick}>
          <Header>
            {selectedOptions.map((selectedOption) => (
              <React.Fragment key={selectedOption.value}>
                {selectedOption.content},
              </React.Fragment>
            ))}
          </Header>
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      )}
      {open && options && (
        <Options
          isAbsolute
          position='right'
          ref={dropdownReference}
        >
          <OptionsInner
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                color={option.color}
                onClick={() => handleSelectOption(option)}
                optionBottomBorder={props.optionBottomBorder}
              >
                {option.value !== 'default' && (
                  <CheckBox>
                    {values.includes(option.value)
                      ? <CheckboxMarkedCircle />
                      : <CheckboxBlankCircle />}
                  </CheckBox>
                )}
                {option.content}
              </Option>
            ))}
          </OptionsInner>
        </Options>
      )}
    </SelectInput>
  )
}
