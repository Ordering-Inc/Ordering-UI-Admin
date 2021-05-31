import React, { useRef, useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components-admin'
import { usePopper } from 'react-popper'
import BsLayoutThreeColumns from '@meronex/icons/bs/BsLayoutThreeColumns'
import RiCheckboxBlankLine from '@meronex/icons/ri/RiCheckboxBlankLine'
import RiCheckboxFill from '@meronex/icons/ri/RiCheckboxFill'
import {
  HeaderItem,
  PopoverBody,
  PopoverList,
  AllowItem,
  CheckBox
} from './styles'

export const ColumnAllowSettingPopover = (props) => {
  const {
    open,
    allowColumns,
    handleChangeAllowColumns
  } = props
  const [sessionState] = useSession()
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()

  const optionsDefault = [
    {
      value: 'orderNumber',
      content: t('NUMBER_OF_ORDER', 'Number of order')
    },
    {
      value: 'dateTime',
      content: t('DATE_TIME', 'Date and time')
    },
    {
      value: 'business',
      content: t('BUSINESS', 'Business')
    },
    {
      value: 'customer',
      content: t('CUSTOMER', 'Customer')
    },
    {
      value: 'driver',
      content: t('DRIVER', 'Driver')
    },
    {
      value: 'advanced',
      content: t('ADVANCED_LOGISTICS', 'Advance Logistics')
    },
    {
      value: 'total',
      content: t('TOTAL', 'Total')
    },
    {
      value: 'status',
      content: t('STATUS', 'Status')
    },
    {
      value: 'deliveryType',
      content: t('DELIVERY_TYPE', 'Delivery type')
    },
  ]

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

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      {props.beforeElements?.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>))
      }
      {props.beforeComponents?.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />))
      }
      <HeaderItem
        ref={referenceElement}
        onClick={props.onClick}
      >
        <BsLayoutThreeColumns  />
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          {optionsDefault.map(option => (
            <AllowItem
              key={option.value}
              onClick={() => handleChangeAllowColumns(option.value)}
            >
              <CheckBox isChecked={allowColumns[option.value]}>
                {allowColumns[option.value] ? (
                  <RiCheckboxFill />
                ) : (
                  <RiCheckboxBlankLine />
                )}
              </CheckBox>
              <span>
                {option.content}
              </span>
            </AllowItem>
          ))}
        </PopoverList>
      </PopoverBody>
      {props.afterComponents?.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />))
      }
      {props.afterElements?.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>))
      }
    </div>
  )
}
