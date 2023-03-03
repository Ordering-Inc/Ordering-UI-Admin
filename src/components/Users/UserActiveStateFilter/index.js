import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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

  const history = useHistory()
  const [, t] = useLanguage()
  const query = new URLSearchParams(useLocation().search)
  const defaultEnabled = query.get('enabled')
  const onChangeUserActiveState = (enabled) => {
    history.replace(`${location.pathname}?enabled=${enabled}`)
    handleChangeUserActiveState()
  }

  useEffect(() => {
    if (defaultEnabled) return
    history.replace(`${location.pathname}?enabled=active`)
  }, [])

  return (
    <>
      <UserActiveStateFilterContainer>
        <DragScroll>
          <Tab
            active={selectedUserActiveState}
            onClick={() => onChangeUserActiveState('active')}
          >
            {t('ACTIVE', 'Active')}
          </Tab>
          <Tab
            active={!selectedUserActiveState}
            onClick={() => onChangeUserActiveState('inactive')}
          >
            {t('INACTIVE', 'Inactive')}
          </Tab>
        </DragScroll>
      </UserActiveStateFilterContainer>
    </>
  )
}
