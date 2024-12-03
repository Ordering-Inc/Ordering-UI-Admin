import React, { useRef, useEffect, useState } from 'react'
import { usePopper } from 'react-popper'
import { CaretDownFill } from 'react-bootstrap-icons'
import FiChevronDown from '@meronex/icons/fi/FiChevronDown'
import { Pagination, SearchBar } from '../../components/Shared'
import { useSession } from 'ordering-components-admin'

import {
  Selected,
  Options,
  OptionsInner,
  Option,
  Chevron,
  Header,
  SearchBarWrapper
} from '../Selects'

import {
  HeaderItem,
  PopoverBody
} from './styles'
import { PaginationWrapper } from '../MultiSelect/styles'

export const Select = React.memo((props) => {
  const {
    placeholder,
    options,
    defaultValue,
    onChange,
    notAsync,
    noSelected,
    isSecondIcon,
    isShowSearchBar,
    searchValue,
    handleChangeSearch,
    searchBarIsCustomLayout,
    searchBarPlaceholder,
    searchBarIsNotLazyLoad,
    className,
    isShowCustomOption,
    customOptionTitle,
    handleCustomOptionClick,
    pagination,
    handleChangePage,
    handleChangePageSize,
    useLazyPagination,
    isHidePagecontrol
  } = props
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

  const { styles, attributes, update } = popper

  useEffect(() => {
    update && update()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      if (isShowSearchBar) {
        handleChangeSearch('')
      }
      setOpen(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setOpen(false)
    }
  }

  const handlerChangePage = (page) => {
    setOpen(true)
    handleChangePage(page)
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
    if (isShowSearchBar && searchValue) return
    if (!notAsync) {
      const _defaultOption = options?.find(
        (option) => option.value === defaultValue
      )
      if (!(useLazyPagination && pagination)) {
        setSelectedOption(_defaultOption)
      }
      setValue(defaultValue)
    }
  }, [defaultValue, options, searchValue])

  const handleChangeOption = (e, option) => {
    if (e.target.closest('.disabled') === null) setOpen(!open)
    if (option.value === null || option.disabled) return
    if (!noSelected) {
      setSelectedOption(option)
      setValue(option.value)
    }
    onChange && onChange(option.value)
  }

  const handleClickHeader = (e) => {
    if (e.target.closest('.open-disabled')) return
    setOpen(!open)
  }

  const filterFunction = (_, index) => {
    if (!pagination || useLazyPagination) return true
    const validation = pagination?.currentPage === 1
      ? index < (pagination.pageSize * pagination.currentPage)
      : (index >= (pagination.pageSize * (pagination.currentPage - 1))) && (index < (pagination.pageSize * pagination.currentPage))
    return validation
  }

  const popStyle = { ...styles.popper, display: open ? 'block' : 'none', minWidth: referenceElement?.current?.offsetWidth || '100px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }} className={className || 'select-wrapper'}>
      <HeaderItem
        className='select'
        ref={referenceElement}
        onClick={(e) => handleClickHeader(e)}
      >
        {!selectedOption && (
          <Selected>
            {placeholder || ''}
            <Chevron>
              {isSecondIcon ? <FiChevronDown /> : <CaretDownFill />}
            </Chevron>
          </Selected>
        )}
        {selectedOption && (
          <Selected>
            <Header className='header'>
              {selectedOption.showOnSelected || selectedOption.content}
            </Header>
            <Chevron>
              {isSecondIcon ? <FiChevronDown /> : <CaretDownFill />}
            </Chevron>
          </Selected>
        )}
      </HeaderItem>
      <PopoverBody className='list' ref={popperElement} style={popStyle} {...attributes.popper}>
        <Options className='options'>
          {isShowSearchBar && (
            <SearchBarWrapper
              className='search-bar-container'
            >
              <SearchBar
                lazyLoad={!searchBarIsNotLazyLoad}
                isCustomLayout={searchBarIsCustomLayout}
                search={searchValue}
                onSearch={handleChangeSearch}
                placeholder={searchBarPlaceholder || ''}
              />
            </SearchBarWrapper>
          )}
          <OptionsInner
            optionInnerMargin={props.optionInnerMargin}
            optionInnerMaxHeight={props.optionInnerMaxHeight}
          >
            {options.filter(filterFunction).map((option, i) => (
              <Option
                key={i}
                selected={value === option.value}
                color={option.color}
                onClick={(e) => handleChangeOption(e, option)}
                optionBottomBorder={props.optionBottomBorder}
                disabled={option.disabled}
                showDisable={option?.showDisable}
                className={option.disabled ? 'option disabled' : 'option'}
              >
                {option.content}
              </Option>
            ))}
          </OptionsInner>

          {isShowCustomOption && (
            <Option
              className='option custom-option'
              onClick={() => {
                handleCustomOptionClick()
                setOpen(false)
              }}
            >
              {customOptionTitle}
            </Option>
          )}
          {pagination && handleChangePageSize && handleChangePage && (
            <PaginationWrapper>
              <Pagination
                currentPage={pagination?.currentPage}
                totalPages={pagination?.totalPages}
                handleChangePage={handlerChangePage}
                handleChangePageSize={handleChangePageSize}
                defaultPageSize={pagination?.pageSize}
                isHidePagecontrol={isHidePagecontrol}
              />
            </PaginationWrapper>
          )}
        </Options>
      </PopoverBody>
    </div>
  )
}, (prevProps, nextProps) => {
  return prevProps.defaultValue === nextProps.defaultValue &&
    prevProps.options === nextProps.options &&
    prevProps.searchValue === nextProps.searchValue &&
    prevProps.pagination === nextProps.pagination
})

Select.displayName = 'Select'
