import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { DefaultSelect as Select } from '../../../styles'
import { SelectWrapper, Option } from './styles'

export const SelectBusiness = (props) => {
  const {
    businessesList,
    defaultValue,
    onChange
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [businessOptions, setBusinessOptions] = useState([])

  useEffect(() => {
    if (businessesList.loading) return
    const _businessOptions = []
    businessesList.businesses.map(business => {
      _businessOptions.push({
        value: business?.slug,
        content: (
          <Option>
            <img src={optimizeImage(business?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} alt='' />
            <span>{business?.name}</span>
          </Option>
        )
      })
    })
    setBusinessOptions(_businessOptions)
  }, [businessesList])

  return (
    <SelectWrapper>
      <Select
        placeholder={<Option>{t('SELECT_BUSINESS', 'Select business')}</Option>}
        defaultValue={defaultValue}
        options={businessOptions}
        onChange={onChange}
        optionInnerMaxHeight='300px'
      />
    </SelectWrapper>
  )
}
