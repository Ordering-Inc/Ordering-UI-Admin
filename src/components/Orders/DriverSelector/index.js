import React, { useEffect, useState } from 'react'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Select } from '../../../styles/Select'
import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'
import FaUserAlt from '@meronex/icons/fa/FaUserAlt'
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

const DriverSelectorUI = (props) => {
  const {
    isFirstSelect,
    order,
    driversList,
    defaultValue,
    isPhoneView,
    isFilterView,
    small,
    padding,
    orderView,
    handleAssignDriver,
    handleChangeDriver,
    filterValues,
    isTourOpen,
    setCurrentTourStep,
    handleOpenMessages
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOption, setDefaultOption] = useState(null)
  const [driversOptionList, setDriversOptionList] = useState([])
  const [driversMultiOptionList, setDriversMultiOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const driversLoading = [{ value: 'default', content: <Option small={small}>{t('LOADING', 'loading')}...</Option> }]
  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: (
          <Option padding={padding}>
            {orderView ? (
              <>
                <WrapperDriverImage small={small}>
                  <DriverImage bgimage={theme?.images?.icons?.noDriver} small={small} />
                </WrapperDriverImage>
                <OptionContent>
                  <DriverNameContainer>
                    <DriverName small={small}>{t('NO_DRIVER', 'No Driver')}</DriverName>
                  </DriverNameContainer>
                </OptionContent>
              </>
            ) : (
              t('SELECT_DRIVER', 'Select driver')
            )}
          </Option>
        ),
        color: 'primary',
        disabled: !isFilterView,
        showDisable: true
      }
    ]
    if (!isFilterView) {
      _driversOptionList.push({
        value: 'remove',
        content: (
          <Option isRemove>{t('REMOVE_DRIVER', 'Remove assigned driver')}</Option>
        ),
        disabled: defaultValue === 'default'
      })
    }
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
          showDisable: isFilterView ? true : !(isFilterView || (driver?.enabled && driver?.available && !driver?.busy)),
          content: (
            <Option small={small} isPhoneView={isPhoneView} padding={padding}>
              <WrapperDriverImage small={small}>
                {driver.photo ? (
                  <DriverImage bgimage={driver.photo} small={small} />
                ) : (
                  <FaUserAlt />
                )}
              </WrapperDriverImage>
              <OptionContent>
                <DriverNameContainer>
                  <DriverName small={small}>{driver.name} {driver.lastname}</DriverName>
                  {!small && <DriverText>{t('DRIVER', 'Driver')}</DriverText>}
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
    setDriversOptionList(_driversOptionList)
  }, [driversList, defaultValue, searchValue])

  const changeDriver = (driverId) => {
    if (isFilterView) {
      if (driverId === 'default') {
        handleChangeDriver(null)
      } else {
        handleChangeDriver(driverId)
      }
      return
    }
    if (driverId === 'default') return
    if (driverId === 'remove') {
      driverId = null
    }
    handleAssignDriver({ orderId: order.id, driverId: driverId })
    if (isTourOpen && setCurrentTourStep) {
      handleOpenMessages('chat')
      setTimeout(() => {
        isTourOpen && setCurrentTourStep && setCurrentTourStep(3)
      }, 50)
    }
  }

  useEffect(() => {
    setDefaultOption(defaultValue)
  }, [defaultValue])

  const Placeholder = <PlaceholderTitle>{t('SELECT_DRIVER', 'Select driver')}</PlaceholderTitle>

  const handleSearch = (val) => {
    setSearchValue(val)
  }

  if (isFilterView) {
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
          />
        ) : (
          <MultiSelect
            defaultValue='default'
            options={driversLoading}
            optionInnerMargin='10px'
            optionInnerMaxHeight='150px'
          />
        )}
      </>
    )
  } else {
    return (
      <>
        {!driversList.loading ? (
          <>
            {isFirstSelect ? (
              <FirstSelect
                placeholder={t('SELECT_DRIVER', 'Select driver')}
                defaultValue={defaultOption || 'default'}
                options={driversOptionList}
                optionInnerMaxHeight='200px'
                onChange={(driverId) => changeDriver(driverId)}
                isShowSearchBar
                searchBarPlaceholder={t('SEARCH', 'Search')}
                searchBarIsCustomLayout
                handleChangeSearch={handleSearch}
              />
            ) : (
              <Select
                placeholder={t('SELECT_DRIVER', 'Select driver')}
                defaultValue={defaultOption || 'default'}
                options={driversOptionList}
                optionInnerMaxHeight='200px'
                onChange={(driverId) => changeDriver(driverId)}
              />
            )}
          </>
        ) : (
          <>
            <Select
              placeholder={t('SELECT_DRIVER', 'Select driver')}
              defaultValue='default'
              options={driversLoading}
              optionInnerMargin='10px'
              optionInnerMaxHeight='200px'
            />
          </>
        )}
      </>
    )
  }
}

export const DriverSelector = (props) => {
  const DriversControlProps = {
    ...props,
    UIComponent: DriverSelectorUI,
    propsToFetch: ['id', 'name', 'lastname', 'cellphone', 'photo']
  }
  return (
    <>
      <DriversController {...DriversControlProps} />
    </>
  )
}
