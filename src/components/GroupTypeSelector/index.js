import React from 'react'
import { useLanguage } from 'ordering-components'
import { MultiSelect } from '../../styles/MultiSelect'
import { useTheme } from 'styled-components'

import { PlaceholderTitle, Option, OptionType, OptionValue } from './styles'

export const GroupTypeSelector = (props) => {
  const {
    filterValues,
    handleChangeGroup
  } = props

  const [, t] = useLanguage()
  const theme = useTheme()

  const groupTypes = [
    {
      value: 1,
      content: (
        <Option>
          <OptionType>{t('ALL', 'All')}</OptionType>
          <OptionValue>
            <span>6</span> {t('ORDERS', 'Orders')}
          </OptionValue>
        </Option>
      )
    },
    {
      value: 2,
      content: (
        <Option>
          <OptionType>{t('GROUP_1', 'Group 1')}</OptionType>
          <OptionValue>
            <span>0</span> {t('ORDERS', 'Orders')}
          </OptionValue>
        </Option>
      )
    },
    {
      value: 3,
      content: (
        <Option>
          <OptionType>{t('GROUP_2', 'Group 2')}</OptionType>
          <OptionValue>
            <span>2</span> {t('ORDERS', 'Orders')}
          </OptionValue>
        </Option>
      )
    },
    {
      value: 4,
      content: (
        <Option>
          <OptionType>{t('GROUP_3', 'Group 3')}</OptionType>
          <OptionValue>
            <span>1</span> {t('ORDERS', 'Orders')}
          </OptionValue>
        </Option>
      )
    },
    {
      value: 5,
      content: (
        <Option>
          <OptionType>{t('GROUP_4', 'Group 4')}</OptionType>
          <OptionValue>
            <span>3</span> {t('ORDERS', 'Orders')}
          </OptionValue>
        </Option>
      )
    }
  ]

  const placeholder = (
    <PlaceholderTitle>
      <img src={theme?.images?.icons?.group} alt='group' />
      {t('GROUP', 'Group')}
    </PlaceholderTitle>
  )

  return (
    <MultiSelect
      placeholder={placeholder}
      defaultValue={filterValues.groupTypes}
      options={groupTypes}
      onChange={(groupType) => handleChangeGroup(groupType)}
    />
  )
}
