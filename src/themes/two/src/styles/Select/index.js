import React, { useRef, useEffect, useState } from 'react'
import { useSession } from 'ordering-components-admin'
import { usePopper } from 'react-popper'
import GoTriangleDown from '@meronex/icons/go/GoTriangleDown'
import {
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header
} from '../Selects'

import {
  HeaderItem,
  PopoverBody
} from './styles'

export const Select = (props) => {
  const { placeholder, options, defaultValue, onChange, notAsync, noSelected } = props
  const defaultOption = options?.find(
    (option) => option.value === defaultValue
  )
  const [selectedOption, setSelectedOption] = useState(defaultOption)
  const [value, setValue] = useState(defaultValue)

  const [open, setOpen] = useState(false)
  const [sessionState] = useSession()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('mouseup', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem
        className='select'
        ref={referenceElement}
        onClick={() => setOpen(!open)}
      >
        {!selectedOption && (
          <Selected>
            {placeholder || ''}
            <Chevron>
              <GoTriangleDown />
            </Chevron>
          </Selected>
        )}
        {selectedOption && (
          <Selected>
            <Header>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
            <Chevron>
              <GoTriangleDown />
            </Chevron>
          </Selected>
        )}
      </HeaderItem>
      <PopoverBody className='list' ref={popperElement} style={popStyle} {...attributes.popper}>
        <Options className='options'>
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
                showDisable={option?.showDisable}
                className={option.disabled ? 'disabled' : null}
              >
                {option.content}
              </Option>
            ))}
          </OptionsInner>
        </Options>
      </PopoverBody>
    </div>
  )
}
