import React, { useEffect, useState } from 'react'
import { useLanguage, DriversList as DriversController } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { Select } from '../../../styles/Select'
import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'

import {
  Option,
  OptionContent,
  DriverNameContainer,
  WrapperDriverImage,
  DriverImage,
  DriverName,
  OptionInnerContainer,
  SelectWrapper
} from './styles'

const DriverSelectorUI = (props) => {
  const {
    driverActionStatus,
    companyActionStatus,
    isFirstSelect,
    order,
    driversList,
    defaultValue,
    isPhoneView,
    small,
    padding,
    handleAssignDriver,
    isTourOpen,
    setCurrentTourStep,
    handleOpenMessages,
    setCommentInfostate
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()
  const [defaultOption, setDefaultOption] = useState(null)
  const [driversOptionList, setDriversOptionList] = useState([])
  const [searchValue, setSearchValue] = useState(null)
  const driversLoading = [{ value: 'default', content: <Option small={small}><span>{t('LOADING', 'loading')}...</span></Option> }]

  const getOption = (driver) => {
    return {
      value: driver.id,
      disabled: !(driver?.enabled && driver?.available && !driver?.busy),
      content: (
        <Option small={small} isPhoneView={isPhoneView} padding={padding}>
          <OptionInnerContainer>
            <WrapperDriverImage small={small} className='driver-photo'>
              <DriverImage bgimage={driver.photo || theme.images.icons?.noDriver} small={small} />
            </WrapperDriverImage>
            <OptionContent>
              <DriverNameContainer className='driver-info'>
                <DriverName small={small}>{driver.name} {driver.lastname} <span className='assigned-orders'>({driver?.assigned_orders_count} {t('ASSIGNED_ORDERS', 'Assigned orders')})</span></DriverName>
              </DriverNameContainer>
            </OptionContent>
          </OptionInnerContainer>
        </Option>
      )
    }
  }

  useEffect(() => {
    const _driversOptionList = [
      {
        value: 'default',
        content: <Option padding='0px'><span>{t('SELECT_DRIVER', 'Select driver')}</span></Option>,
        color: 'primary',
        disabled: true,
        showDisable: true
      }
    ]
    _driversOptionList.push({
      value: 'remove',
      content: (
        <Option isRemove><span>{t('REMOVE_DRIVER', 'Remove assigned driver')}</span></Option>
      ),
      disabled: defaultValue === 'default'
    })

    if (!driversList.loading) {
      let _driverList
      if (searchValue) {
        _driverList = driversList.drivers.filter(driver => (driver.name + driver.lastname).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      } else {
        _driverList = driversList.drivers
      }
      const availableDrivers = _driverList.filter(driver => driver?.enabled && driver?.available && !driver?.busy)
      if (availableDrivers.length) {
        _driversOptionList.push({
          value: 'available',
          content: <Option><span>{t('AVAILABLE', 'Available')}</span></Option>,
          disabled: true
        })
        availableDrivers.forEach(driver => {
          _driversOptionList.push(getOption(driver))
        })
      }

      const busyDrivers = _driverList.filter(driver => driver?.enabled && driver?.available && driver?.busy)
      if (busyDrivers.length) {
        _driversOptionList.push({
          value: 'busy',
          content: <Option><span>{t('BUSY', 'Busy')}</span></Option>,
          disabled: true
        })
        busyDrivers.forEach(driver => {
          _driversOptionList.push(getOption(driver))
        })
      }

      const notAvailableDrivers = _driverList.filter(driver => driver?.enabled && !driver?.available)
      if (notAvailableDrivers.length) {
        _driversOptionList.push({
          value: 'not_available',
          content: <Option><span>{t('NOT_AVAILABLE', 'Not available')}</span></Option>,
          disabled: true
        })
        notAvailableDrivers.forEach(driver => {
          _driversOptionList.push(getOption(driver))
        })
      }
    }
    setDriversOptionList(_driversOptionList)
  }, [driversList, defaultValue, searchValue])

  useEffect(() => {
    if (!companyActionStatus?.error && !driverActionStatus?.error) return
    setAlertState({
      open: true,
      content: companyActionStatus?.error || driverActionStatus?.error
    })
  }, [companyActionStatus?.error, driverActionStatus?.error])

  const changeDriver = (driverId) => {
    if (driverId === 'default') return
    if (driverId === 'remove') {
      driverId = null
    }
    if (driverId && setCommentInfostate) {
      setCommentInfostate({ open: true, driverId: driverId })
    } else {
      setCommentInfostate && setCommentInfostate({ open: false, driverId: null })
      handleAssignDriver({ orderId: order.id, driverId: driverId })
    }
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

  const handleSearch = (val) => {
    setSearchValue(val)
  }

  return (
    <SelectWrapper>
      {!driversList.loading ? (
        <>
          {isFirstSelect ? (
            <FirstSelect
              defaultValue={defaultOption || 'default'}
              options={driversOptionList}
              optionInnerMaxHeight='200px'
              onChange={(driverId) => changeDriver(driverId)}
              isShowSearchBar
              searchBarPlaceholder={t('SEARCH', 'Search')}
              searchBarIsCustomLayout
              searchBarIsNotLazyLoad
              searchValue={searchValue}
              handleChangeSearch={handleSearch}
              className='driver-select'
            />
          ) : (
            <Select
              defaultValue={defaultOption || 'default'}
              options={driversOptionList}
              optionInnerMaxHeight='200px'
              onChange={(driverId) => changeDriver(driverId)}
              isShowSearchBar
              searchBarIsNotLazyLoad
              searchBarPlaceholder={t('SEARCH', 'Search')}
              searchBarIsCustomLayout
              searchValue={searchValue}
              handleChangeSearch={handleSearch}
              className='driver-select'
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
            className='driver-select'
          />
        </>
      )}
    </SelectWrapper>
  )
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
