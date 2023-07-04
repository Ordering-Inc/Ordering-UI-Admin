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
    isPhoneView,
    small,
    padding,
    handleChangeDriver,
    filterValues
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [driversMultiOptionList, setDriversMultiOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const driversLoading = [{ value: 'default', content: <Option small={small}>{t('LOADING', 'loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: <Option padding='0px'><span>{t('SELECT_DRIVER', 'Select driver')}</span></Option>,
        color: 'primary',
        showDisable: true
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
            <Option small={small} isPhoneView={isPhoneView} padding={padding}>
              <WrapperDriverImage small={small} className='driver-photo'>
                <DriverImage bgimage={driver.photo || theme.images.icons?.noDriver} small={small} />
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer className='driver-info'>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  <DriverText small={small}>{t('DRIVER', 'Driver')}</DriverText>
                </DriverNameContainer>
              </OptionContent>
            </Option>
          )
        }
      })

      setDriversMultiOptionList(_driversOptionListTemp)

      for (const option of _driversOptionListTemp) {
        _driversOptionList.push(option)
      }
    }
  }, [driversList, defaultValue, searchValue])

  const Placeholder = <PlaceholderTitle>{t('SELECT_DRIVER', 'Select driver')}</PlaceholderTitle>

  return (
    <>
      {!driversList.loading ? (
        <MultiSelect
          defaultValue={filterValues.driverIds}
          placeholder={Placeholder}
          options={driversMultiOptionList}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          onChange={(driver) => handleChangeDriver(driver)}
          isShowSearchBar
          searchBarIsCustomLayout
          searchBarIsNotLazyLoad
          searchValue={searchValue}
          handleChangeSearch={(val) => setSearchValue(val)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={driversLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          className='driver-select'
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

export const DriverMultiSelector = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriverMultiSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
