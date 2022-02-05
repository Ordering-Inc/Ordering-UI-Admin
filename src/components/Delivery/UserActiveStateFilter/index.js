import React from 'react'
import { useLanguage } from 'ordering-components-admin'
import { DragScroll } from '../../Shared'
import {
  UserActiveStateFilterContainer,
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
        <DragScroll>
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
        </DragScroll>
      </UserActiveStateFilterContainer>
    </>
  )
}
