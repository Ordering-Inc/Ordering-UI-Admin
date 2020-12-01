import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'

import { Option } from './styles'

export const PaymethodTypeSelector = (props) => {
  const {
    paymethodsList,
    filterValues,
    handleChangePaymethodType
  } = props

  const [, t] = useLanguage()
  const [paymethodsTypes, setPaymethodsTypes] = useState([])

  const paymthodsLoading = [{ value: 'default', content: <Option>{t('PAYMETHODS_LOADING', 'Paymethods loading')}...</Option> }]

  useEffect(() => {
    const _paymthodsOptionList = [{ value: 'default', content: <Option>{t('SELECT_A_PAYMETHOD', 'Select a paymethod')}</Option> }]
    if (!paymethodsList.loading) {
      const _paymthodsOption = paymethodsList.paymethods.map((paymethod) => {
        return {
          value: paymethod.id,
          content: (
            <Option>{paymethod.name}</Option>
          )
        }
      })

      for (const option of _paymthodsOption) {
        _paymthodsOptionList.push(option)
      }
    }

    setPaymethodsTypes(_paymthodsOptionList)
  }, [paymethodsList])

  const changePaymethodType = (paymethod) => {
    if (paymethod === 'default') {
      handleChangePaymethodType(null)
    } else {
      handleChangePaymethodType(paymethod)
    }
  }

  return (
    <>
      {!paymethodsList.loading ? (
        <Select
          defaultValue={filterValues.paymethodId || 'default'}
          options={paymethodsTypes}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
          onChange={(paymethod) => changePaymethodType(paymethod)}
        />
      ) : (
        <Select
          defaultValue='default'
          options={paymthodsLoading}
          optionInnerMargin='10px'
          optionInnerMaxHeight='150px'
          optionBottomBorder
        />
      )}
    </>
  )
}
