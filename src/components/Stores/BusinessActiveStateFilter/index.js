import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../../Shared'
import { addQueryToUrl } from '../../../utils'

import {
  ActiveStateFilterContainer,
  InnerContainer,
  Tab
} from './styles'

export const BusinessActiveStateFilter = (props) => {
  const {
    selectedBusinessActiveState,
    handleChangeBusinessActiveState,
    isUseQuery
  } = props

  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const defaultActive = query.get('active')

  const handleClickTab = (active) => {
    handleChangeBusinessActiveState(active)
    addQueryToUrl({ active: active })
  }

  useEffect(() => {
    if (!isUseQuery) return
    if (defaultActive) {
      handleChangeBusinessActiveState(defaultActive === 'true')
      return
    }
    addQueryToUrl({ active: 'true' })
  }, [])

  return (
    <>
      <ActiveStateFilterContainer>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='userActiveState'>
            <Tab
              active={selectedBusinessActiveState}
              onClick={() => handleClickTab(true)}
            >
              {t('ACTIVE', 'Active')}
            </Tab>
            <Tab
              active={!selectedBusinessActiveState}
              onClick={() => handleClickTab(false)}
            >
              {t('INACTIVE', 'Inactive')}
            </Tab>
          </AutoScroll>
        </InnerContainer>
      </ActiveStateFilterContainer>
    </>
  )
}
