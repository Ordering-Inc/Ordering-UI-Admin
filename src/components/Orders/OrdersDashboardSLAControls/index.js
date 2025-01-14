import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'
import { OrderDashboardSLASetting } from '../OrderDashboardSLASetting'
import { useFilterValues } from '../../../contexts/FilterValuesContext'

import {
  OrdersDashboardSLAControlsContainer,
  OrderTimeStatusSelectWrapper,
  Option,
  Timestatus
} from './styles'

export const OrdersDashboardSLAControls = (props) => {
  const { setTimeStatus, setSlaSettingTime } = props
  const [filterValues, { handleFilterValues }] = useFilterValues()
  const [defaultOptionValue, setDefaultOptionValue] = useState(filterValues?.timeStatus ?? 'default')
  const [filteredTimeStatus, setFilteredTimeStatus] = useState([])
  const [settingOptionOpen, setSettingOptionOpen] = useState(false)
  const [, t] = useLanguage()

  const timeStatus = [
    {
      value: 'default',
      name: t('SLA_S', 'SLA’s'),
      content: (
        <Option noPadding>
          <Timestatus timeState='' />
          <p>{t('SLA_S', 'SLA’s')}</p>
        </Option>
      )
    },
    {
      value: 'in_time',
      name: t('OK', 'Ok'),
      content: (
        <Option noPadding>
          <Timestatus timeState='in_time' />
          <p>{t('OK', 'Ok')}</p>
        </Option>
      )
    },
    {
      value: 'at_risk',
      name: t('AT_RISK', 'At Risk'),
      content: (
        <Option noPadding>
          <Timestatus timeState='at_risk' />
          <p>{t('AT_RISK', 'At Risk')}</p>
        </Option>
      )
    },
    {
      value: 'delayed',
      name: t('DELAYED', 'Delayed'),
      content: (
        <Option noPadding>
          <Timestatus timeState='delayed' />
          <p>{t('DELAYED', 'Delayed')}</p>
        </Option>
      )
    },
    {
      value: 'sla_settings',
      name: t('SLA_SETTING', 'SLA’s settings'),
      content: (
        <Option noPadding>
          <p>{t('SLA_SETTING', 'SLA’s settings')}</p>
        </Option>
      )
    }
  ]

  const changeOrderTimeStatus = (val) => {
    if (val === 'sla_settings') {
      setSettingOptionOpen(true)
      return
    }
    setDefaultOptionValue(val)
    if (val === 'default') {
      handleFilterValues({ ...filterValues, timeStatus: null })
      setTimeStatus(null)
      return
    }
    handleFilterValues({ ...filterValues, timeStatus: val })
    setTimeStatus(val)
  }

  const handleChangeSearch = (searchValue) => {
    const _filteredTimeStatus = [...timeStatus?.filter(orderStatuse => orderStatuse?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
    setFilteredTimeStatus(_filteredTimeStatus)
  }

  useEffect(() => {
    if (filterValues?.timeStatus) return
    setDefaultOptionValue('default')
  }, [filterValues?.timeStatus])

  useEffect(() => {
    setFilteredTimeStatus(timeStatus)
  }, [])

  return (
    <OrdersDashboardSLAControlsContainer>
      <OrderTimeStatusSelectWrapper>
        <FirstSelect
          searchBarIsCustomLayout
          placeholder={<Option noPadding><p>{t('SLA_S', 'SLA’s')}</p></Option>}
          options={filteredTimeStatus}
          defaultValue={defaultOptionValue}
          onChange={(timeState) => changeOrderTimeStatus(timeState)}
          className='timeStatusSelect'
          isShowSearchBar
          searchBarPlaceholder={t('SEARCH', 'Search')}
          handleChangeSearch={handleChangeSearch}
        />
      </OrderTimeStatusSelectWrapper>
      {settingOptionOpen && (
        <OrderDashboardSLASetting
          setSlaSettingTime={setSlaSettingTime}
          settingOptionOpen={settingOptionOpen}
          setSettingOptionOpen={setSettingOptionOpen}
        />
      )}
    </OrdersDashboardSLAControlsContainer>
  )
}
