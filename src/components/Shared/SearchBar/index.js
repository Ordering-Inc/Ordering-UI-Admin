import React, { useRef, useEffect } from 'react'
import { Search, XCircle } from 'react-bootstrap-icons'
import {
  SearchContainer
} from './styles'

export const SearchBar = (props) => {
  const {
    onSearch,
    search,
    placeholder,
    lazyLoad,
    customClass,
    hideSearchIcon,
    CustomInput
  } = props

  let timeout = null
  let previousSearch
  const el = useRef()

  const onChangeSearch = (e) => {
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      onSearch(e.target.value)
    }, 750)

    if (previousSearch !== e.target.value) {
      if (!lazyLoad) {
        onSearch(e.target.value)
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          onSearch(e.target.value)
        }, 750)
      }
    }
    previousSearch = e.target.value
  }

  const handleClear = () => {
    onSearch('')
    el.current.value = ''
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  const inputProps = {
    type: 'text',
    ref: el,
    name: 'search',
    placeholder: placeholder,
    autoComplete: 'off'
  }
  return (
    <SearchContainer className={customClass || ''} isCustomInput={!!CustomInput}>
      {CustomInput ? (
        <CustomInput {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
      {el.current?.value
        ? <XCircle className='close' onClick={handleClear} />
        : !hideSearchIcon && <Search />}
    </SearchContainer>
  )
}
