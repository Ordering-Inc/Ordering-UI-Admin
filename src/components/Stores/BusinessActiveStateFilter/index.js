import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../../Shared'
import {
  ActiveStateFilterContainer,
  InnerContainer,
  Tab
} from './styles'

export const BusinessActiveStateFilter = (props) => {
  const {
    selectedBusinessActiveState,
    handleChangeBusinessActiveState
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <ActiveStateFilterContainer>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='userActiveState'>
            <Tab
              active={selectedBusinessActiveState}
              onClick={() => handleChangeBusinessActiveState()}
            >
              {t('ACTIVE', 'Active')}
            </Tab>
            <Tab
              active={!selectedBusinessActiveState}
              onClick={() => handleChangeBusinessActiveState()}
            >
              {t('INACTIVE', 'Inactive')}
            </Tab>
          </AutoScroll>
        </InnerContainer>
      </ActiveStateFilterContainer>
    </>
  )
}
