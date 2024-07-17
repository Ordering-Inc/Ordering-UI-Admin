import React, { useEffect, useRef, useState } from 'react'
import EnChevronDown from '@meronex/icons/en/EnChevronDown'
import { CheckSquareFill, Square } from 'react-bootstrap-icons'
import MdClose from '@meronex/icons/md/MdClose'
import { Button } from '../Buttons'
import { Pagination, SearchBar } from '../../components/Shared'

import {
  Select as SelectInput,
  Selected,
  Options,
  OptionsInner,
  MultiOption,
  Chevron,
  Header,
  MultiSelectOption,
  SearchBarWrapper
} from '../Selects'

import {
  CheckBox,
  TextFormatted,
  PaginationWrapper
} from './styles'

export const MultiSelect = (props) => {
  const {
    placeholder,
    options,
    onChange,
    defaultValue,
    className,
    isShowSearchBar,
    searchBarIsNotLazyLoad,
    searchBarPlaceholder,
    searchBarIsCustomLayout,
    searchValue,
    handleChangeSearch,
    useTextStyle,
    textClassnames,
    hideChevronIcon,
    andText,
    pagination,
    handleChangePage,
    handleChangePageSize,
    useLazyPagination,
    isLoading,
    optionsPosition,
    isHidePagecontrol
  } = props

  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const dropdownReference = useRef()

  const handleSelectClick = (e) => {
    const isInvalid = e.target.closest('.remove_option')
    if (isInvalid) return
    setOpen(!open)
  }

  const closeSelect = (e) => {
    if (open && !isLoading) {
      const outsideDropdown = !dropdownReference.current?.contains(e.target)
      if (outsideDropdown) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    if (isShowSearchBar && searchValue) return

    const _defaultOption = options?.filter(
      (option) => defaultValue.includes(option.value)
    )
    if (!(useLazyPagination && pagination)) {
      setSelectedOptions(_defaultOption)
    }
    setValues(defaultValue)
  }, [defaultValue, options, searchValue])

  useEffect(() => {
    if (!open) {
      handleChangeSearch && handleChangeSearch('')
      return
    }
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [open])

  const handlerChangePage = (page) => {
    setOpen(true)
    handleChangePage(page)
  }

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

  const optionsTextFormatted = (selectedOption, index) => {
    if (index <= 2) {
      return `${selectedOption.showOnSelected || selectedOption.content}${index + 1 !== selectedOptions?.length && index <= 2 ? ', ' : ' '}`
    }
    if (index + 1 === selectedOptions?.length && selectedOptions?.length >= 4) {
      return `${andText || 'And'} ${index - 2} +`
    }
    return null
  }

  const filterFunction = (_, index) => {
    if (!pagination || useLazyPagination) return true
    const validation = pagination?.currentPage === 1
      ? index < (pagination.pageSize * pagination.currentPage)
      : (index >= (pagination.pageSize * (pagination.currentPage - 1))) && (index < (pagination.pageSize * pagination.currentPage))
    return validation
  }

  return (
    <SelectInput useTextStyle={useTextStyle} className={className || 'multi-select'}>
      {selectedOptions.length === 0 ? (
        <Selected useTextStyle={useTextStyle} onClick={(e) => handleSelectClick(e)}>
          {useTextStyle ? (
            <Header>
              <TextFormatted className={textClassnames}>
                {placeholder || ''}
              </TextFormatted>
            </Header>
          ) : (
            <>
              {placeholder || ''}
            </>
          )}
          {!hideChevronIcon && (
            <Chevron>
              <EnChevronDown />
            </Chevron>
          )}
        </Selected>
      ) : (
        <Selected onClick={(e) => handleSelectClick(e)}>
          <Header useTextStyle={useTextStyle}>
            {selectedOptions.map((selectedOption, index) => (
              <React.Fragment key={selectedOption.value}>
                {
                  useTextStyle ? (
                    <TextFormatted className={textClassnames} primary>
                      {optionsTextFormatted(selectedOption, index)}
                    </TextFormatted>
                  ) : (
                    <MultiSelectOption>
                      {selectedOption.showOnSelected || selectedOption.content}
                      {selectedOption?.value !== 'default' && (
                        <Button
                          circle
                          outline
                          color='primary'
                          type='reset'
                          className='remove_option'
                          onClick={() => onChange && onChange(selectedOption.value)}
                        >
                          <MdClose />
                        </Button>
                      )}
                    </MultiSelectOption>
                  )
                }
              </React.Fragment>
            ))}
          </Header>
          {!hideChevronIcon && (
            <Chevron>
              <EnChevronDown />
            </Chevron>
          )}
        </Selected>
      )}
      {open && options && (
        <Options
          isAbsolute
          position={optionsPosition ?? 'right'}
          ref={dropdownReference}
          minWidth='330px'
        >
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
              <MultiOption
                key={i}
                color={option.color}
                onClick={() => handleSelectOption(option)}
                optionBottomBorder={props.optionBottomBorder}
              >
                {option.value !== 'default' && (
                  <CheckBox>
                    {values.includes(option.value)
                      ? <CheckSquareFill />
                      : <Square />}
                  </CheckBox>
                )}
                {option.content}
              </MultiOption>
            ))}
          </OptionsInner>
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
      )}
    </SelectInput>
  )
}
