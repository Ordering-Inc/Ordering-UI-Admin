import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'

import { Select as FirstSelect } from '../../../styles/Select/FirstSelect'

import {
  OrdersDashboardSLAControlsContainer,
  OrderTimeStatusSelectWrapper,
  Option,
  Timestatus
} from './styles'

export const OrdersDashboardSLAControls = (props) => {
  // const { defaultValue } = props
  const [defaultOptionValue, setDefaultOptionValue] = useState(null)
  const [filteredTimeStatus, setFilteredTimeStatus] = useState([])
  const [, t] = useLanguage()

  const timeStatus = [
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
    }
  ]

  const changeOrderTimeStatus = (val) => {
    console.log(val)
    setDefaultOptionValue(val)
  }

  const handleChangeSearch = (searchValue) => {
    const _filteredTimeStatus = [...timeStatus?.filter(orderStatuse => orderStatuse?.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))]
    setFilteredTimeStatus(_filteredTimeStatus)
  }

  // useEffect(() => {
  //   setDefaultOptionValue(defaultValue)
  // }, [defaultValue])

  return (
    <OrdersDashboardSLAControlsContainer>
      <OrderTimeStatusSelectWrapper>
        <FirstSelect
          // searchBarIsCustomLayout
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
    </OrdersDashboardSLAControlsContainer>
  )
}
