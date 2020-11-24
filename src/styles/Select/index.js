import React, { useEffect, useRef, useState } from 'react'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'

import {
  Select as SelectInput,
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header
} from '../Selects'

export const Select = (props) => {
  const { placeholder, options, defaultValue, onChange, notAsync, type } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(
    (option) => option.value === defaultValue
  )
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    if (e.target.name !== 'date') {
      setOpen(!open)
    }
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
    document.addEventListener('mouseup', closeSelect)
    return () => document.removeEventListener('mouseup', closeSelect)
  }, [open])

  useEffect(() => {
    if (!notAsync) {
      const _defaultOption = options?.find(
        (option) => option.value === defaultValue
      )
      setSelectedOption(_defaultOption)
      setValue(defaultValue)
    }
  }, [defaultValue, options])

  const handleChangeOption = (option) => {
    setSelectedOption(option)
    setValue(option.value)
    setTimeout(() => {
      onChange && onChange(option.value)
    }, 100)
  }

  return (
    <SelectInput onClick={handleSelectClick} type={type}>
      {!selectedOption && (
        <Selected>
          {placeholder || ''}
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      )}
      {selectedOption && (
        <Selected>
          <Header>
            {selectedOption.showOnSelected || selectedOption.content}
          </Header>
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      )}
      {open && options && (
        <Options position='right' ref={dropdownReference}>
          <OptionsInner
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight}
          >
            {options.map((option, i) => (
              <Option
                key={i}
                selected={value === option.value}
                color={option.color}
                onClick={() => handleChangeOption(option)}
                optionBottomBorder={props.optionBottomBorder}
              >
                {option.content}
              </Option>
            ))}
          </OptionsInner>
        </Options>
      )}
    </SelectInput>
  )
}
