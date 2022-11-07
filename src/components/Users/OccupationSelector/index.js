import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components-admin'
import { Select } from '../../../styles/Select'
import { SelectWrapper, Option } from './styles'

export const OccupationSelector = (props) => {
  const {
    occupationId,
    occupations,
    handleChangeOccupation
  } = props

  const [, t] = useLanguage()
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (!occupations.length) return
    const _occupationList = occupations.map(occupation => {
      return {
        value: occupation.id,
        content: <Option>{occupation.name}</Option>
      }
    })
    setOptions(_occupationList)
  }, [occupations])

  return (
    <SelectWrapper>
      <Select
        placeholder={<Option>{t('SELECT_OCCUPATION', 'Select occupation')}</Option>}
        defaultValue={occupationId}
        options={options}
        onChange={handleChangeOccupation}
      />
    </SelectWrapper>
  )
}
