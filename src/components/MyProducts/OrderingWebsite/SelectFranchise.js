import React, { useEffect, useState } from 'react'
import { useLanguage, useUtils } from 'ordering-components-admin'
import { useTheme } from 'styled-components'
import { DefaultSelect as Select } from '../../../styles'
import { SelectWrapper, Option } from './styles'

export const SelectFranchise = (props) => {
  const {
    franchisesList,
    defaultValue,
    onChange
  } = props

  const theme = useTheme()
  const [, t] = useLanguage()
  const [{ optimizeImage }] = useUtils()
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (franchisesList?.loading || !franchisesList?.franchises) return
    const _options = []
    franchisesList.franchises.map(franchise => {
      _options.push({
        value: franchise?.id,
        content: (
          <Option>
            <img src={optimizeImage(franchise?.logo || theme.images?.dummies?.businessLogo, 'h_50,c_limit')} alt='' />
            <span>{franchise?.name}</span>
          </Option>
        )
      })
    })
    setOptions(_options)
  }, [franchisesList])

  return (
    <SelectWrapper>
      <Select
        placeholder={<Option>{t('SELECT_FRANCHISE', 'Select a franchise')}</Option>}
        defaultValue={defaultValue}
        options={options}
        onChange={onChange}
        optionInnerMaxHeight='300px'
      />
    </SelectWrapper>
  )
}
