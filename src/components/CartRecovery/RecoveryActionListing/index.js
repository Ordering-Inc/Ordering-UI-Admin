import React, { useState } from 'react'
import { RecoveryActionHeader } from '../RecoveryActionHeader'
import { RecoveryActionList } from '../RecoveryActionList'
import { SideBar } from '../../Shared'
import { RecoveryActionListing as RecoveryActionListingController } from './naked'

import {
  RecoveryActionsContainer
} from './styles'
import { RecoveryActionDetail } from '../RecoveryActionDetail'

const RecoveryActionListingUI = (props) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedAction, setSelectedAction] = useState(null)

  const handleCloseDetail = () => {
    setIsOpenDetail(false)
    setSelectedAction(null)
  }

  const handleOpenDetail = (action) => {
    setSelectedAction(action)
    setIsOpenDetail(true)
  }

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
        />
      </RecoveryActionsContainer>
      {isOpenDetail && (
        <SideBar
          sidebarId='loyaltyWallet'
          open={isOpenDetail}
          onClose={() => handleCloseDetail()}
          defaultSideBarWidth={550}
        >
          <RecoveryActionDetail
            {...props}
            action={selectedAction}
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
