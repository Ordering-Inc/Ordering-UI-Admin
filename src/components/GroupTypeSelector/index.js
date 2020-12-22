import React, { useState, useEffect } from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../styles/MultiSelect'
import { useTheme } from 'styled-components'

import { PlaceholderTitle, Option } from './styles'

export const GroupTypeSelector = (props) => {
  const {
    driverGroupList,
    filterValues,
    handleChangeGroup
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const placeholder = (
    <PlaceholderTitle>
      <img src={theme?.images?.icons?.group} alt='group' />
      {t('GROUP', 'Group')}
    </PlaceholderTitle>
  )
  const [groupTypes, setGroupTypes] = useState([])
  const groupTypesLoading = [{ value: 'default', content: <Option>{t('GROUP_LOADING', 'Group loading')}...</Option> }]

  useEffect(() => {
    const _groupList = []
    if (!driverGroupList.loading) {
      const _groupsOption = driverGroupList.groups.map((group) => {
        return {
          value: group.id,
          content: (
            <Option>{group.id}. {group.name}</Option>
          )
        }
      })

      for (const option of _groupsOption) {
        _groupList.push(option)
      }
    }
    setGroupTypes(_groupList)
  }, [driverGroupList])

  return (
    <>
      {!driverGroupList.loading ? (
        <MultiSelect
          placeholder={placeholder}
          defaultValue={filterValues.groupTypes}
          options={groupTypes}
          onChange={(groupType) => handleChangeGroup(groupType)}
        />
      ) : (
        <MultiSelect
          defaultValue='default'
          options={groupTypesLoading}
          optionBottomBorder
        />
      )}
    </>
  )
}
