import React, { useRef, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import MdcShareVariantOutline from '@meronex/icons/mdc/MdcShareVariantOutline'
import { Button } from '../../styles/Buttons'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem
} from './styles'

export const BusinessShareMenu = (props) => {
  const {
    open
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
    <div style={{ position: 'relative' }}>
      <HeaderItem
        ref={referenceElement}
        onClick={props.onClick}
      >
        <Button
          color='secundary'
          borderRadius='5px'
        >
          <MdcShareVariantOutline />
        </Button>
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          <PopoverList>
            <AllowItem
              isChecked
            >
              <RiCheckboxFill />
              <span>
                Business name
              </span>
            </AllowItem>
          </PopoverList>
        </PopoverBody>
      )}
    </div>
  )
}
