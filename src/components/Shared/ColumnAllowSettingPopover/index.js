import React, { useRef, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { LayoutThreeColumns } from 'react-bootstrap-icons'
import { IconButton } from '../../../styles'

import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem
} from './styles'

export const ColumnAllowSettingPopover = (props) => {
  const {
    open,
    optionsDefault,
    allowColumns,
    handleChangeAllowColumns
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
      <HeaderItem>
        <IconButton
          color='black'
          ref={referenceElement}
          onClick={props.onClick}
        >
          <LayoutThreeColumns />
        </IconButton>
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
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
