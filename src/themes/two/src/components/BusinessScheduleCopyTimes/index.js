import React, { useRef, useEffect } from 'react'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import { useLanguage } from 'ordering-components-admin'
import MdcContentCopy from '@meronex/icons/mdc/MdcContentCopy'

import {
  HeaderItem,
  PopoverBody,
  Title,
  PopoverList,
  CopyItem
} from './styles'

export const BusinessScheduleCopyTimes = (props) => {
  const {
    disabled,
    open,
    daysOfWeekIndex,
    selectedCopyDays,
    handleSelectDays,
    cleanSelectedCopyDays
  } = props
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()

  const daysOptions = [
    { value: 0, content: t('SUNDAY', 'Sunday') },
    { value: 1, content: t('MONDAY', 'Monday') },
    { value: 2, content: t('TUESDAY', 'Tuesday') },
    { value: 3, content: t('WEDNESDAU', 'Wednesday') },
    { value: 4, content: t('THURSDAY', 'Thursday') },
    { value: 5, content: t('FRIDAY', 'Friday') },
    { value: 6, content: t('SATUDAY', 'Saturday') }
  ]

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

  useEffect(() => {
    if (!open) return
    cleanSelectedCopyDays()
  }, [open])

  return (
    <div style={{ position: 'relative' }}>
      <HeaderItem
        ref={referenceElement}
        disabled={disabled}
        onClick={() => props.onClick(daysOfWeekIndex)}
      >
        <MdcContentCopy />
      </HeaderItem>
      {open && (
        <PopoverBody ref={popperElement}>
          <Title>{t('Copy times to')}</Title>
          <PopoverList>
            {daysOptions.map(option => (
              <CopyItem
                key={option.value}
                isChecked={selectedCopyDays.includes(option.value)}
                onClick={() => handleSelectDays(option.value)}
              >
                {selectedCopyDays.includes(option.value) ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )}
                <span>
                  {option.content}
                </span>
              </CopyItem>
            ))}
          </PopoverList>
        </PopoverBody>
      )}
    </div>
  )
}
