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
  const { placeholder, options, defaultValue, onChange, notAsync, type, noSelected, className } = props

  const [open, setOpen] = useState(false)
  const defaultOption = options?.find(
    (option) => option.value === defaultValue
  )
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    if (e.target.closest('.react-datepicker-wrapper') || e.target.closest('.react-datepicker')) return
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
    if (!open) return
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
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

  const handleChangeOption = (e, option) => {
    if (e.target.closest('.disabled') === null) setOpen(!open)
    if (option.value === null || option.disabled) return
    if (!noSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
  }

  return (
    <SelectInput type={type} className={className}>
      {!selectedOption && (
        <Selected onClick={handleSelectClick}>
          {placeholder || ''}
          <Chevron>
            <EnChevronDown />
          </Chevron>
        </Selected>
      )}
      {selectedOption && (
        <Selected onClick={handleSelectClick}>
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
                onClick={(e) => handleChangeOption(e, option)}
                optionBottomBorder={props.optionBottomBorder}
                disabled={option.disabled}
                className={option.disabled ? 'disabled' : null}
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
