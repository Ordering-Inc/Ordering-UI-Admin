import React, { useState, useEffect } from 'react'
import { useLanguage, CityList as CityListController } from 'ordering-components-admin'
import { Select } from '../../../styles/Select/FirstSelect'
import { MultiSelect } from '../../../styles/MultiSelect'
import Skeleton from 'react-loading-skeleton'
import {
  PlaceholderTitle,
  Option
} from './styles'

const CitySelectorUI = (props) => {
  const {
    isAddMode,
    citiesList,
    isDefault,
    filterValues,
    defaultValue,
    handleChangeCity,
    position,
    optionInnerMaxHeight
  } = props

  const [, t] = useLanguage()

  const [cityOptions, setCityOptions] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const placeholder = <PlaceholderTitle isDefault={isDefault}>{t('SELECT_CITY', 'Select City')}</PlaceholderTitle>
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
      totalPages: Math.ceil(cityOptions?.length / pageSize)
    })
  }

  useEffect(() => {
    if (citiesList?.loading) return
    const _cityOptions = citiesList?.cities
      .filter(option => option?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      .map(city => {
        return {
          value: city.id,
          content: <Option noPadding isDefault={isDefault}>{city?.name}</Option>,
          showOnSelected: <Option isDefault={isDefault}>{city?.name}</Option>
        }
      })
    setCityOptions(_cityOptions)
  }, [citiesList, isDefault, searchValue])

  useEffect(() => {
    if (!isAddMode) return
    if (cityOptions.length === 1) {
      handleChangeCity(citiesList?.cities[0]?.id)
    }
  }, [cityOptions, isAddMode])

  useEffect(() => {
    if (cityOptions?.length) {
      setPagination(prevPagination => ({
        ...prevPagination,
        totalItems: cityOptions?.length,
        totalPages: Math.ceil(cityOptions?.length / prevPagination.pageSize)
      }))
    }
  }, [cityOptions])

  return (
    <>
      {citiesList?.loading ? (
        <div>
          <Skeleton style={{ height: '100%', lineHeight: 'normal' }} />
        </div>
      ) : (
        <>
          {isDefault ? (
            <Select
              position={position}
              optionInnerMaxHeight={optionInnerMaxHeight}
              placeholder={placeholder}
              defaultValue={defaultValue}
              options={cityOptions}
              onChange={(city) => handleChangeCity(city)}
            />
          ) : (
            <MultiSelect
              placeholder={placeholder}
              defaultValue={filterValues?.cityIds}
              options={cityOptions}
              onChange={(city) => handleChangeCity(city)}
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
          )}
        </>
      )}
    </>
  )
}

export const CitySelector = (props) => {
  const cityListProps = {
    ...props,
    UIComponent: CitySelectorUI
  }
  return <CityListController {...cityListProps} />
}
