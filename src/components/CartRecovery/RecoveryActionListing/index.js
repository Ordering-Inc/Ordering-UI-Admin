import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RecoveryActionListing as RecoveryActionListingController } from 'ordering-components-admin'
import { RecoveryActionHeader } from '../RecoveryActionHeader'
import { RecoveryActionList } from '../RecoveryActionList'
import { SideBar } from '../../Shared'
import { RecoveryActionDetail } from '../RecoveryActionDetail'
import { RecoveryActionAdd } from '../RecoveryActionAdd'
import { addQueryToUrl, removeQueryToUrl } from '../../../utils'

import {
  RecoveryActionsContainer
} from './styles'

const RecoveryActionListingUI = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedAction, setSelectedAction] = useState(null)
  const [selectedActionId, setSelectedActionId] = useState(null)
  const [isAddMode, setIsAddMode] = useState(false)

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedAction(null)
    setIsAddMode(false)
    removeQueryToUrl(['id', 'tab'])
  }

  const handleOpenDetail = (action, isInitialRender) => {
    setSelectedAction(action)
    setSelectedActionId(action?.id)
    setIsOpenDetail(true)
    if (!Object.keys(action || {}).length) {
      setIsAddMode(true)
      removeQueryToUrl(['id'])
      return
    } else {
      setIsAddMode(false)
    }
    if (action && !isInitialRender) {
      addQueryToUrl({ id: action.id })
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
        {!isAddMode ? (
          <RecoveryActionList
            {...props}
            handleOpenDetail={handleOpenDetail}
            selectedAction={selectedAction}
          />
        ) : (
          <RecoveryActionAdd
            {...props}
            action={selectedAction}
            actionId={selectedActionId}
            onClose={() => handleCloseDetail()}
          />
        )}
      </RecoveryActionsContainer>
      {isOpenDetail && !isAddMode && (
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
  const query = new URLSearchParams(useLocation().search)
  const defaultPage = query.get('page') || 1
  const defaultPageSize = query.get('pageSize') || 10
  const recoveryActionsProps = {
    ...props,
    UIComponent: RecoveryActionListingUI,
    isSearchByName: true,
    isSearchByDescription: true,
    paginationSettings: {
      initialPage: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPage) : 1,
      pageSize: props.isUseQuery && !isNaN(defaultPage) ? Number(defaultPageSize) : 10,
      controlType: 'pages'
    }
  }
  return <RecoveryActionListingController {...recoveryActionsProps} />
}
