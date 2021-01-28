import React from 'react'
import { useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import BsInboxFill from '@meronex/icons/bs/BsInboxFill'
import GoCircleSlash from '@meronex/icons/go/GoCircleSlash'

import {
  Option
} from './styles'

export const OpenAndCloseOrderSelector = (props) => {
  const {
    defaultValue,
    setOpenOrclosedOrderView
  } = props

  const [, t] = useLanguage()

  const selectTypes = [
    { value: 'open', content: <Option><BsInboxFill /> {t('OPEN', 'Open')}</Option> },
    { value: 'close', content: <Option><GoCircleSlash /> {t('CLOSED', 'Closed')}</Option> }
  ]

  return (
    <Select
      defaultValue={defaultValue}
      options={selectTypes}
      onChange={(type) => setOpenOrclosedOrderView(type)}
    />
  )
}
