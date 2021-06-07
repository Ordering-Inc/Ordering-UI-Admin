import React, { useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'
import { OrdersSearch } from './styles'

export const SearchBar = ({ onSearch, search, placeholder }) => {
  const theme = useTheme()
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
    <OrdersSearch>
      <img src={theme?.images?.icons?.search} alt='search' />
      <input type='text' ref={el} name='search' placeholder={placeholder} />
    </OrdersSearch>
  )
}
