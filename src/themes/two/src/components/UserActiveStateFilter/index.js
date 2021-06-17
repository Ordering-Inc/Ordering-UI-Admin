import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { AutoScroll } from '../AutoScroll'
import {
  UserActiveStateFilterContainer,
  InnerContainer,
  Tab
} from './styles'

export const UserActiveStateFilter = (props) => {
  const {
    selectedUserActiveState,
    handleChangeUserActiveState
  } = props

  const [, t] = useLanguage()

  return (
    <>
      <UserActiveStateFilterContainer>
        <InnerContainer>
          <AutoScroll innerScroll scrollId='userActiveState'>
            <Tab
              active={selectedUserActiveState}
              onClick={() => handleChangeUserActiveState()}
            >
              {t('ACTIVE', 'Active')}
            </Tab>
            <Tab
              active={!selectedUserActiveState}
              onClick={() => handleChangeUserActiveState()}
            >
              {t('INACTIVE', 'Inactive')}
            </Tab>
          </AutoScroll>
        </InnerContainer>
      </UserActiveStateFilterContainer>
    </>
  )
}
