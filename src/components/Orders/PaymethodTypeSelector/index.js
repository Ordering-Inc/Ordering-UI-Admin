import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { MultiSelect } from '../../../styles/MultiSelect'

import { Option, PlaceholderTitle } from './styles'

export const PaymethodTypeSelector = (props) => {
  const {
    paymethodsList,
    filterValues,
    handleChangePaymethodType
  } = props

  const [, t] = useLanguage()
  const [paymethodsTypes, setPaymethodsTypes] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const placeholder = <PlaceholderTitle>{t('SELECT_PAYMETHOD', 'Select paymethod')}</PlaceholderTitle>
  const paymthodsLoading = [{ value: 'default', content: <Option>{t('PAYMETHODS_LOADING', 'Paymethods loading')}...</Option> }]
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 5,
    totalItems: null,
    totalPages: null
  })

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page
    })
  }

  const handleChangePageSize = (pageSize) => {
    const expectedPage = Math.ceil(((pagination?.currentPage - 1) * pagination?.pageSize + 1) / pageSize)
    setPagination({
      ...pagination,
      currentPage: expectedPage,
      pageSize,
      totalPages: Math.ceil(paymethodsTypes?.length / pageSize)
    })
  }

  useEffect(() => {
    const _paymthodsOptionList = []
    if (!paymethodsList.loading) {
      const _paymthodsOption = paymethodsList.paymethods
        .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        .map((paymethod) => {
          return {
            value: paymethod.id,
            content: (
              <Option>{t(paymethod?.gateway?.toUpperCase(), paymethod.name)}</Option>
            )
          }
        })

      for (const option of _paymthodsOption) {
        _paymthodsOptionList.push(option)
      }
    }

    setPaymethodsTypes(_paymthodsOptionList)
  }, [paymethodsList, searchValue])

  useEffect(() => {
    if (paymethodsTypes?.length) {
      setPagination(prevPagination => ({
        ...prevPagination,
        totalItems: paymethodsTypes?.length,
        totalPages: Math.ceil(paymethodsTypes?.length / prevPagination.pageSize)
      }))
    }
  }, [paymethodsTypes])

  return (
    <>
      {!paymethodsList.loading ? (
        <MultiSelect
          defaultValue={filterValues.paymethodIds}
          placeholder={placeholder}
          options={paymethodsTypes}
          optionBottomBorder
          onChange={(paymethod) => handleChangePaymethodType(paymethod)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
          isHidePagecontrol
          pagination={pagination}
          handleChangePage={handleChangePage}
          handleChangePageSize={handleChangePageSize}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={paymthodsLoading}
          optionBottomBorder
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}
