import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { RecoveryActionListing as RecoveryActionListingController } from 'ordering-components-admin'
import { RecoveryActionHeader } from '../RecoveryActionHeader'
import { RecoveryActionList } from '../RecoveryActionList'
import { SideBar } from '../../Shared'
import { RecoveryActionDetail } from '../RecoveryActionDetail'

import {
  RecoveryActionsContainer
} from './styles'

const RecoveryActionListingUI = (props) => {
  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedAction, setSelectedAction] = useState(null)
  const [selectedActionId, setSelectedActionId] = useState(null)

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedAction(null)
    history.replace(`${location.pathname}`)
  }

  const handleOpenDetail = (action, isInitialRender) => {
    setSelectedAction(action)
    setSelectedActionId(action?.id)
    setIsOpenDetail(true)
    if (action && !isInitialRender) {
      history.replace(`${location.pathname}?id=${action.id}`)
    }
  }

  useEffect(() => {
    const id = query.get('id')
    if (id) {
      setSelectedAction({})
      setSelectedActionId(Number(id))
      setIsOpenDetail(true)
    }
  }, [])

  return (
    <>
      <RecoveryActionsContainer>
        <RecoveryActionHeader
          {...props}
          handleOpenDetail={handleOpenDetail}
        />
        <RecoveryActionList
          {...props}
          handleOpenDetail={handleOpenDetail}
          selectedAction={selectedAction}
        />
      </RecoveryActionsContainer>
      {isOpenDetail && (
        <SideBar
          open={isOpenDetail}
          onClose={() => handleCloseDetail()}
          defaultSideBarWidth={550}
        >
          <RecoveryActionDetail
            {...props}
            action={selectedAction}
            actionId={selectedActionId}
            onClose={() => handleCloseDetail()}
          />
        </SideBar>
      )}
    </>
  )
}

export const RecoveryActionListing = (props) => {
  const recoveryActionsProps = {
    ...props,
    UIComponent: RecoveryActionListingUI,
    isSearchByName: true,
    isSearchByDescription: true
  }
  return <RecoveryActionListingController {...recoveryActionsProps} />
}
