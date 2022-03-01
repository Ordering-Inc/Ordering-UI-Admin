import React, { useRef, useEffect } from 'react'
import BsLayoutThreeColumns from '@meronex/icons/bs/BsLayoutThreeColumns'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem,
  Title
} from './styles'

export const ColumnAllowSettingPopover = (props) => {
  const {
    open,
    optionsDefault,
    allowColumns,
    handleChangeAllowColumns,
    title
  } = props
  const referenceElement = useRef()
  const popperElement = useRef()

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.onClose && props.onClose()
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

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem
        ref={referenceElement}
        onClick={props.onClick}
      >
        <BsLayoutThreeColumns />
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          {title && <Title>{title}</Title>}
          <PopoverList>
            {optionsDefault.map(option => (
              <AllowItem
                key={option.value}
                isChecked={allowColumns[option.value]}
                onClick={() => handleChangeAllowColumns(option.value)}
              >
                {allowColumns[option.value] ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <span>
                  {option.content}
                </span>
              </AllowItem>
            ))}
          </PopoverList>
        </PopoverBody>
      )}
    </div>
  )
}
