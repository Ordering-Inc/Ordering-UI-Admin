import React, { useEffect, useState } from 'react'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { MultiSelect } from '../../../styles/MultiSelect'

import {
  Option,
  OptionContent,
  DriverNameContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName,
  DriverText,
  PlaceholderTitle
} from './styles'

const DriverMultiSelectorUI = (props) => {
  const {
    driversList,
    defaultValue,
    small,
    padding,
    handleChangeDriver,
    filterValues,
    useTextStyle,
    hideChevronIcon,
    andText,
    textClassnames,
    pagination,
    handleChangePage,
    handleChangePageSize,
    useDriversByProps,
    setSearchValue,
    searchValue,
    optionsPosition
  } = props

  const [{ dictionary }] = useLanguage()
  const theme = useTheme()
  const [driversMultiOptionList, setDriversMultiOptionList] = useState([])

  const driversLoading = [{
    value: 'default',
    content: <Option small={small}>{dictionary?.LOADING ?? 'loading'}...</Option>,
    showOnSelected: useTextStyle ? dictionary?.LOADING ?? 'loading' : null
  }]

  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: <Option padding='0px'><span>{dictionary?.SELECT_DRIVER ?? 'Select driver'}</span></Option>,
        color: 'primary',
        showDisable: true,
        showOnSelected: useTextStyle ? dictionary?.SELECT_DRIVER ?? 'Select driver' : null
      }
    ]
    if (!driversList.loading) {
      let _driverList
      if (searchValue) {
        _driverList = driversList.drivers.filter(driver => (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _driverList = driversList.drivers
      }
      const _driversOptionListTemp = _driverList.map((driver, i) => {
        return {
          value: driver.id,
          showDisable: true,
          content: (
            <Option small={small} padding={padding}>
              <WrapperDriverImage small={small} className='driver-photo'>
                <DriverImage bgimage={driver.photo || theme.images.icons?.noDriver} small={small} />
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer className='driver-info'>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  <DriverText small={small}>{dictionary?.DRIVER ?? 'Driver'}</DriverText>
                </DriverNameContainer>
              </OptionContent>
            </Option>
          ),
          showOnSelected: useTextStyle ? driver.name : null
        }
      })

      setDriversMultiOptionList(_driversOptionListTemp)

      for (const option of _driversOptionListTemp) {
        _driversOptionList.push(option)
      }
    }
  }, [driversList, defaultValue, searchValue])

  const Placeholder = <PlaceholderTitle>{dictionary?.SELECT_DRIVER ?? 'Select driver'}</PlaceholderTitle>

  return (
    <>
      {!driversList.loading || (!useDriversByProps && pagination) ? (
        <MultiSelect
          isLoading={driversList.loading}
          useLazyPagination={!useDriversByProps}
          searchBarIsNotLazyLoad={useDriversByProps}
          useTextStyle={useTextStyle}
          hideChevronIcon={hideChevronIcon}
          andText={andText}
          textClassnames={textClassnames}
          defaultValue={driversList.loading && !useDriversByProps ? 'loading' : filterValues.driverIds}
          placeholder={Placeholder}
          options={driversList.loading && !useDriversByProps ? driversLoading : driversMultiOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionsPosition={optionsPosition}
          onChange={(driver) => handleChangeDriver(driver)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
          pagination={pagination}
          handleChangePage={handleChangePage}
          handleChangePageSize={handleChangePageSize}
        />
      ) : (
        <MultiSelect
          searchBarIsNotLazyLoad={useDriversByProps}
          useTextStyle={useTextStyle}
          hideChevronIcon={hideChevronIcon}
          andText={andText}
          textClassnames={textClassnames}
          defaultValue='default'
          options={driversLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          className='driver-select'
          isShowSearchBar
          searchBarIsCustomLayout
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      )}
    </>
  )
}

export const DriverMultiSelector = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriverMultiSelectorUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'pages'
    },
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
