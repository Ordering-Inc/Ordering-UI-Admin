import React, { useRef, useEffect } from 'react'
import { SearchContainer } from './styles'
import IosSearch from '@meronex/icons/ios/IosSearch'

export const SearchBar = ({ onSearch, search, placeholder, isCustomLayout }) => {
  let timeout = null

  const el = useRef()

  const onChangeSearch = (e) => {
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      onSearch(e.target.value)
    }, 1000)
  }

  useEffect(() => {
    el.current.onkeyup = onChangeSearch
  }, [])

  useEffect(() => {
    if (!search) {
      el.current.value = ''
    }
  }, [search])

  return (
    <SearchContainer isCustomLayout={isCustomLayout}>
      <IosSearch />
      <input type='text' ref={el} name='search' placeholder={placeholder} />
    </SearchContainer>
  )
}
